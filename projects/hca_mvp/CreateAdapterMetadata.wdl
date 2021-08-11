version 1.0

import "../../projects/tasks/CreateOptimusAdapterObjects.wdl" as CreateOptimusObjects
import "../../projects/tasks/MergeOptimusLooms.wdl" as MergeLooms
import "../../projects/tasks/AdapterTasks.wdl" as Tasks
import "../../projects/tasks/CreateReferenceMetadata.wdl" as CreateReferenceMetadata


workflow CreateAdapterMetadata {
  meta {
    description: "Creates json objects for indexing HCA analysis data"
    allowNestedInputs: true
  }

  input {
    Array[File] output_bams
    Array[File] output_looms
    Array[File]? output_bais
    Array[String] input_ids #sequencing_process_provenance_document_id
    Array[String] fastq_1_uuids
    Array[String] fastq_2_uuids
    Array[String]? fastq_i1_uuids

    # These values come in as arrays from Terra, but should be populated with a single value (which may be repeated)
    Array[String] all_libraries
    Array[String] all_species
    Array[String] all_organs
    Array[String] all_project_ids
    Array[String] all_project_names

    String output_basename
    String cromwell_url = "https://api.firecloud.org/"
    String staging_area = "gs://broad-dsp-monster-hca-prod-lantern/"
    String version_timestamp = "2021-05-24T12:00:00.000000Z" # TODO should we hard code this?
  }

  ########################## Set up Inputs ##########################
  # version of this pipeline
  String pipeline_version = "1.0.0"

  Boolean is_SS2 = false # TODO: check an input value to determine if this is SS2
  Boolean is_Optimus = true # TODO: check an input value to determine if this is Optimus (leaving this flexible for additional data types if needed

  # TODO: clean this up
  call Tasks.CheckStratumMetadata {
    input:
      library = all_libraries,
      species = all_species,
      organ = all_organs,
      project_id = all_project_ids,
      project_name = all_project_names
  }

  String library = all_libraries[0]
  String species = all_species[0]
  String organ = all_organs[0]
  String project_id = all_project_ids[0]
  String project_name = all_project_names[0]

  # Build staging bucket
  String staging_bucket = staging_area + project_id + "/staging/"
  String project_stratum_string = "project=" + project_id + ";library=" + library + ";species=" + species + ";organ=" + organ

  if (false) {
     String none = "None"
  }
  ########################## Get Optimus Metadata Files ##########################
  if (is_Optimus) {
    scatter (idx in range(length(output_looms))) {
      String fastq_i1_uuid = if defined(fastq_i1_uuids) then fastq_i1_uuids[idx] else none
      call CreateOptimusObjects.CreateOptimusAdapterObjects as CreateIntermediateOptimusAdapters {
        input:
          bam = output_bams[idx],
          loom = output_looms[idx],
          input_id = input_ids[idx],
          process_input_ids = [fastq_1_uuids[idx],fastq_2_uuids[idx], fastq_i1_uuid],
          library = library,
          species = species,
          organ = organ,
          project_id = project_id,
          project_name = project_name,
          version_timestamp = version_timestamp,
          cromwell_url = cromwell_url,
          is_project_level = false

      }
    }
    call CreateReferenceMetadata.CreateReferenceMetadata as CreateReferenceMetadata {
      input:
        reference_fastas = CreateIntermediateOptimusAdapters.reference_fastas,
        species = species,
        pipeline_type = 'Optimus',
        version_timestamp = version_timestamp
    }
    call MergeLooms.MergeOptimusLooms as MergeLooms {
      input:
        output_looms = output_looms,
        library = library,
        species = species,
        organ = organ,
        project_id = project_id,
        project_name = project_name,
        output_basename = output_basename
    }


    call Tasks.GetProjectLevelInputIds {
      input:
        intermediate_analysis_files = flatten([CreateIntermediateOptimusAdapters.analysis_file_outputs])
    }

    # TODO: change the way the links file uses the project level input ids (need to accept strings instead of jsons)

    call CreateOptimusObjects.CreateOptimusAdapterObjects as CreateProjectOpitmusAdapters {
      input:
        loom = MergeLooms.project_loom,
        process_input_ids = GetProjectLevelInputIds.process_input_uuids,
        input_id = project_stratum_string,
        library = library,
        species = species,
        organ = organ,
        project_id = project_id,
        project_name = project_name,
        project_stratum_string = project_stratum_string,
        version_timestamp = version_timestamp,
        cromwell_url = cromwell_url,
        is_project_level = true
      }
    }
  }

  ########################## Get SS2 Metadata Files ###########################
  if (is_SS2) {
    call CreateSS2Objects as GetAdapterObjects{
      input:
        # Fill in input for subworkflow
    }
  }

  # TODO: copy to staging bucket

  ########################## Copy Files to Staging Bucket ##########################
  call CopyToStagingBucket {
    input:
      String staging_bucket = staging_bucket,
      Array[File] links_objects = ,
      Array[File] analysis_file_descriptor_objects = ,
      Array[File] analysis_file_metadata_objects = ,
      Array[File] analysis_process_objects = ,
      Array[File] analysis_protocol_objects = ,
      Array[File] reference_metadata_objects = ,
      Array[File] reference_file_descriptor_objects = ,
      Array[File] data = ,
      String? cache_invalidate
  }


  # TODO: update ouputs
  output {
    Array[File] json_adapters = GetAdapterObjects.json_adapters
  }
}
