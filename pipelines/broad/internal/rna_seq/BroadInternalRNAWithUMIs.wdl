version 1.0

import "../../../../pipelines/broad/rna_seq/RNAWithUMIsPipeline.wdl" as RNAWithUMIs
import "../../../../pipelines/broad/qc/CheckFingerprint.wdl" as FP
import "../../../../tasks/broad/RNAWithUMIsTasks.wdl" as tasks
import "../../../../tasks/broad/Utilities.wdl" as utils

workflow BroadInternalRNAWithUMIs {

  String pipeline_version = "1.0.0"

  input {
    # input needs to be either "hg19" or "hg38"
    String reference_build

    String sample_lsid

    # RNAWithUMIs inputs
    File r1_fastq
    File r2_fastq
    String read1Structure
    String read2Structure
    String output_basename

    String platform
    String library_name
    String platform_unit
    String read_group_name
    String sequencing_center = "BI"

    String environment
    File vault_token_path

    # Terra Data Repo dataset information
    String? tdr_dataset_uuid
    String? tdr_sample_id
    String? tdr_staging_bucket
    String? tdr_gcp_project_for_query
  }

  File starIndex = if (reference_build == "hg19") then "gs://broad-gotc-test-storage/rna_seq/hg19/STAR_genome_hg19_v19.tar.gz" else "gs://broad-gotc-test-storage/rna_seq/hg38/STAR_genome_GRCh38_noALT_noHLA_noDecoy_v26_oh149.tar.gz"
  File gtf = if (reference_build == "hg19") then "gs://broad-gotc-test-storage/rna_seq/hg19/gencode.v19.genes.v7.collapsed_only.patched_contigs.gtf" else "gs://broad-gotc-test-storage/rna_seq/hg38/gencode.v26.GRCh38.genes.collapsed_only.gtf"
  File ref = if (reference_build == "hg19") then "gs://gcp-public-data--broad-references/hg19/v0/Homo_sapiens_assembly19.fasta" else "gs://broad-gotc-test-storage/rna_seq/hg38/Homo_sapiens_assembly38_noALT_noHLA_noDecoy.fasta"
  File refIndex = if (reference_build == "hg19") then "gs://gcp-public-data--broad-references/hg19/v0/Homo_sapiens_assembly19.fasta.fai" else "gs://broad-gotc-test-storage/rna_seq/hg38/Homo_sapiens_assembly38_noALT_noHLA_noDecoy.fasta.fai"
  File refDict = if (reference_build == "hg19") then "gs://gcp-public-data--broad-references/hg19/v0/Homo_sapiens_assembly19.dict" else "gs://broad-gotc-test-storage/rna_seq/hg38/Homo_sapiens_assembly38_noALT_noHLA_noDecoy.dict"
  File refFlat = if (reference_build == "hg19") then "gs://broad-gotc-test-storage/rna_seq/hg19/Homo_sapiens_assembly19.refFlat.txt" else "gs://broad-gotc-test-storage/rna_seq/hg38/GRCh38_gencode.v27.refFlat.txt"
  File haplotype_database_file = if (reference_build == "hg19") then "gs://gcp-public-data--broad-references/hg19/v0/Homo_sapiens_assembly19.haplotype_database.txt" else "gs://broad-gotc-test-storage/rna_seq/hg38/Homo_sapiens_assembly38_noALT_noHLA_noDecoy.haplotype_database.txt"
  File ribosomalIntervals = if (reference_build == "hg19") then "gs://broad-gotc-test-storage/rna_seq/hg19/Homo_sapiens_assembly19.rRNA.interval_list" else "gs://broad-gotc-test-storage/rna_seq/hg38/gencode.v26.rRNA.withMT.interval_list"
  File exonBedFile = if (reference_build == "hg19") then "gs://broad-gotc-test-storage/rna_seq/hg19/gencode.v19.hg19.insert_size_intervals_geq1000bp.bed" else "gs://broad-gotc-test-storage/rna_seq/hg38/gencode.v26.GRCh38.insert_size_intervals_geq1000bp.bed"

  parameter_meta {
    reference_build: "String used to define the reference genome build; should be set to 'hg19' or 'hg38'"
    sample_lsid: "The sample lsid (an identifier used to retrieve fingerrints from Mercury)"
    r1_fastq: "Read 1 FASTQ file"
    r2_fastq: "Read 2 FASTQ file"
    read1Structure: "String describing how the bases in a sequencing run should be allocated into logical reads for read 1"
    read2Structure: "String describing how the bases in a sequencing run should be allocated into logical reads for read 2"
    output_basename: "String used as a prefix in workflow output files"
    platform: "String used to describe the sequencing platform"
    library_name: "String used to describe the library"
    platform_unit: "String used to describe the platform unit"
    read_group_name: "String used to describe the read group name"
    sequencing_center: "String used to describe the sequencing center; default is set to 'BI'"
    environment: "The environment (dev or prod) used for determining which service to use to retrieve Mercury fingerprints"
    vault_token_path: "The path to the vault token used for accessing the Mercury Fingerprint Store"
    tdr_dataset_uuid: "Optional String used to define the Terra Data Repo dataset to which outputs will be ingested, if populated"
    tdr_sample_id: "Optional String used to identify the sample being processed; this is the primary key in the TDR dataset"
    tdr_staging_bucket: "Optional String defining the GCS bucket to use to stage files for loading to TDR. Workspace bucket is recommended"
    tdr_gcp_project_for_query: "Optional String defining the GCP project to use to query the TDR dataset in BigQuery"
  }

  # make sure either hg19 or hg38 is supplied as reference_build input
  if ((reference_build != "hg19") && (reference_build != "hg38")) {
    call utils.ErrorWithMessage as ErrorMessageIncorrectInput {
      input:
        message = "reference_build must be supplied with either 'hg19' or 'hg38'."
    }
  }

  call RNAWithUMIs.RNAWithUMIsPipeline as RNAWithUMIs {
    input:
      r1_fastq = r1_fastq,
      r2_fastq = r2_fastq,
      read1Structure = read1Structure,
      read2Structure = read2Structure,
      starIndex = starIndex,
      output_basename = output_basename,
      gtf = gtf,
      platform = platform,
      library_name = library_name,
      platform_unit = platform_unit,
      read_group_name = read_group_name,
      sequencing_center = sequencing_center,
      ref = ref,
      refIndex = refIndex,
      refDict = refDict,
      refFlat = refFlat,
      ribosomalIntervals = ribosomalIntervals,
      exonBedFile = exonBedFile
  }

  # call FP.CheckFingerprint as CheckFingerprint {
  #   input:
  #     input_bam = RNAWithUMIs.output_bam,
  #     input_bam_index = RNAWithUMIs.output_bam_index,
  #     sample_alias = RNAWithUMIs.sample_name,
  #     sample_lsid = sample_lsid,
  #     output_basename = output_basename,
  #     ref_fasta = ref,
  #     ref_fasta_index = refIndex,
  #     ref_dict = refDict,
  #     read_fingerprint_from_mercury = true,
  #     haplotype_database_file = haplotype_database_file,
  #     environment = environment,
  #     vault_token_path = vault_token_path
  # }

  call tasks.MergeMetrics {
    input:
      alignment_summary_metrics = RNAWithUMIs.picard_alignment_summary_metrics,
      insert_size_metrics = RNAWithUMIs.picard_insert_size_metrics,
      picard_rna_metrics = RNAWithUMIs.picard_rna_metrics,
      duplicate_metrics = RNAWithUMIs.duplicate_metrics,
      rnaseqc2_metrics = RNAWithUMIs.rnaseqc2_metrics,
      # fingerprint_summary_metrics = CheckFingerprint.fingerprint_summary_metrics_file,
      output_basename = RNAWithUMIs.sample_name
  }

  if (defined(tdr_dataset_uuid) && defined(tdr_sample_id) && defined(tdr_staging_bucket) && defined(tdr_gcp_project_for_query)) {
    call formatPipelineOutputs {
      input:
        output_basename = output_basename,
        transcriptome_bam = RNAWithUMIs.transcriptome_bam,
        transcriptome_bam_index = RNAWithUMIs.transcriptome_bam_index,
        transcriptome_duplicate_metrics = RNAWithUMIs.transcriptome_duplicate_metrics,
        output_bam = RNAWithUMIs.output_bam,
        output_bam_index = RNAWithUMIs.output_bam_index,
        duplicate_metrics = RNAWithUMIs.duplicate_metrics,
        rnaseqc2_gene_tpm = RNAWithUMIs.rnaseqc2_gene_tpm,
        rnaseqc2_gene_counts = RNAWithUMIs.rnaseqc2_gene_counts,
        rnaseqc2_exon_counts = RNAWithUMIs.rnaseqc2_exon_counts,
        rnaseqc2_fragment_size_histogram = RNAWithUMIs.rnaseqc2_fragment_size_histogram,
        rnaseqc2_metrics = RNAWithUMIs.rnaseqc2_metrics,
        picard_rna_metrics = RNAWithUMIs.picard_rna_metrics,
        picard_alignment_summary_metrics = RNAWithUMIs.picard_alignment_summary_metrics,
        picard_insert_size_metrics = RNAWithUMIs.picard_insert_size_metrics,
        picard_insert_size_histogram = RNAWithUMIs.picard_insert_size_histogram,
        picard_base_distribution_by_cycle_metrics = RNAWithUMIs.picard_base_distribution_by_cycle_metrics,
        picard_base_distribution_by_cycle_pdf = RNAWithUMIs.picard_base_distribution_by_cycle_pdf,
        picard_quality_by_cycle_metrics = RNAWithUMIs.picard_quality_by_cycle_metrics,
        picard_quality_by_cycle_pdf = RNAWithUMIs.picard_quality_by_cycle_pdf,
        picard_quality_distribution_metrics = RNAWithUMIs.picard_quality_distribution_metrics,
        picard_quality_distribution_pdf = RNAWithUMIs.picard_quality_distribution_pdf,
        unified_metrics = MergeMetrics.unified_metrics
    }

    call updateOutputsInTDR {
      input:
        tdr_dataset_uuid = select_first([tdr_dataset_uuid, ""]),
        tdr_gcp_project_for_query = select_first([tdr_gcp_project_for_query, ""]),
        outputs_json = formatPipelineOutputs.pipeline_outputs_json,
        sample_id = select_first([tdr_sample_id, ""]),
        staging_bucket = select_first([tdr_staging_bucket, ""])
    }
  }


  output {
    File transcriptome_bam = RNAWithUMIs.transcriptome_bam
    File transcriptome_bam_index = RNAWithUMIs.transcriptome_bam_index
    File transcriptome_duplicate_metrics = RNAWithUMIs.transcriptome_duplicate_metrics
    File output_bam = RNAWithUMIs.output_bam
    File output_bam_index = RNAWithUMIs.output_bam_index
    File duplicate_metrics = RNAWithUMIs.duplicate_metrics
    File rnaseqc2_gene_tpm = RNAWithUMIs.rnaseqc2_gene_tpm
    File rnaseqc2_gene_counts = RNAWithUMIs.rnaseqc2_gene_counts
    File rnaseqc2_exon_counts = RNAWithUMIs.rnaseqc2_exon_counts
    File rnaseqc2_fragment_size_histogram = RNAWithUMIs.rnaseqc2_fragment_size_histogram
    File rnaseqc2_metrics = RNAWithUMIs.rnaseqc2_metrics
    File picard_rna_metrics = RNAWithUMIs.picard_rna_metrics
    File picard_alignment_summary_metrics = RNAWithUMIs.picard_alignment_summary_metrics
    File picard_insert_size_metrics = RNAWithUMIs.picard_insert_size_metrics
    File picard_insert_size_histogram = RNAWithUMIs.picard_insert_size_histogram
    File picard_base_distribution_by_cycle_metrics = RNAWithUMIs.picard_base_distribution_by_cycle_metrics
    File picard_base_distribution_by_cycle_pdf = RNAWithUMIs.picard_base_distribution_by_cycle_pdf
    File picard_quality_by_cycle_metrics = RNAWithUMIs.picard_quality_by_cycle_metrics
    File picard_quality_by_cycle_pdf = RNAWithUMIs.picard_quality_by_cycle_pdf
    File picard_quality_distribution_metrics = RNAWithUMIs.picard_quality_distribution_metrics
    File picard_quality_distribution_pdf = RNAWithUMIs.picard_quality_distribution_pdf
    File unified_metrics = MergeMetrics.unified_metrics
  }
}

task formatPipelineOutputs {
  input {
    String output_basename
    String transcriptome_bam
    String transcriptome_bam_index
    String transcriptome_duplicate_metrics
    String output_bam
    String output_bam_index
    String duplicate_metrics
    String rnaseqc2_gene_tpm
    String rnaseqc2_gene_counts
    String rnaseqc2_exon_counts
    String rnaseqc2_fragment_size_histogram
    String rnaseqc2_metrics
    String picard_rna_metrics
    String picard_alignment_summary_metrics
    String picard_insert_size_metrics
    String picard_insert_size_histogram
    String picard_base_distribution_by_cycle_metrics
    String picard_base_distribution_by_cycle_pdf
    String picard_quality_by_cycle_metrics
    String picard_quality_by_cycle_pdf
    String picard_quality_distribution_metrics
    String picard_quality_distribution_pdf
    File unified_metrics
  }

  String outputs_json_file_name = "outputs_to_TDR_~{output_basename}.json"

  command <<<
        python3 << CODE
        import json

        outputs_dict = {}

        # write normal outputs, adjusting field names as needed for TDR schema
        outputs_dict["transcriptome_bam"]="~{transcriptome_bam}"
        outputs_dict["transcriptome_bam_index"]="~{transcriptome_bam_index}"
        outputs_dict["transcriptome_duplicate_metrics_file"]="~{transcriptome_duplicate_metrics}"
        outputs_dict["genome_bam"]="~{output_bam}"
        outputs_dict["genome_bam_index"]="~{output_bam_index}"
        outputs_dict["picard_duplicate_metrics_file"]="~{duplicate_metrics}"
        outputs_dict["rnaseqc2_gene_tpm_file"]="~{rnaseqc2_gene_tpm}"
        outputs_dict["rnaseqc2_gene_counts_file"]="~{rnaseqc2_gene_counts}"
        outputs_dict["rnaseqc2_exon_counts_file"]="~{rnaseqc2_exon_counts}"
        outputs_dict["rnaseqc2_fragment_size_histogram_file"]="~{rnaseqc2_fragment_size_histogram}"
        outputs_dict["rnaseqc2_metrics_file"]="~{rnaseqc2_metrics}"
        outputs_dict["picard_rna_metrics_file"]="~{picard_rna_metrics}"
        outputs_dict["picard_alignment_summary_metrics_file"]="~{picard_alignment_summary_metrics}"
        outputs_dict["picard_insert_size_metrics_file"]="~{picard_insert_size_metrics}"
        outputs_dict["picard_insert_size_histogram_file"]="~{picard_insert_size_histogram}"
        outputs_dict["picard_base_distribution_by_cycle_metrics_file"]="~{picard_base_distribution_by_cycle_metrics}"
        outputs_dict["picard_base_distribution_by_cycle_pdf_file"]="~{picard_base_distribution_by_cycle_pdf}"
        outputs_dict["picard_quality_by_cycle_metrics_file"]="~{picard_quality_by_cycle_metrics}"
        outputs_dict["picard_quality_by_cycle_pdf_file"]="~{picard_quality_by_cycle_pdf}"
        outputs_dict["picard_quality_distribution_metrics_file"]="~{picard_quality_distribution_metrics}"
        outputs_dict["picard_quality_distribution_pdf_file"]="~{picard_quality_distribution_pdf}"
        # TODO add back 2 fp metrics files

        # explode unified metrics file
        with open("~{unified_metrics}", "r") as infile:
            for row in infile:
                key, value = row.rstrip("\n").split("\t")
                outputs_dict[key] = value

        # write full outputs to file
        with open("~{outputs_json_file_name}", 'w') as outputs_file:
            for key, value in outputs_dict.items():
                if value == "None":
                    outputs_dict[key] = None
            outputs_file.write(json.dumps(outputs_dict))
            outputs_file.write("\n")
        CODE
    >>>

  runtime {
      docker: "broadinstitute/horsefish:emerge_scripts"
  }

  output {
      File pipeline_outputs_json = outputs_json_file_name
  }
}

task updateOutputsInTDR {
  input {
    String staging_bucket
    String tdr_dataset_uuid
    String tdr_gcp_project_for_query
    File outputs_json
    String sample_id
  }

  String tdr_target_table = "sample"

  command <<<
        python3 << CODE
        import datetime
        import json
        import requests
        import pandas as pd
        from google.cloud import bigquery
        from google.cloud import storage as gcs
        from oauth2client.client import GoogleCredentials
        from pprint import pprint
        from time import sleep

        # populate variables from inputs
        bucket = "~{staging_bucket}".replace("gs://","")
        dataset_id = "~{tdr_dataset_uuid}"
        target_table = "~{tdr_target_table}"
        outputs_json = "~{outputs_json}"
        sample_id = "~{sample_id}"
        gcp_project_for_query = "~{tdr_gcp_project_for_query}"

        # define some utils functions
        def get_access_token():
            """Get access token."""
            scopes = ["https://www.googleapis.com/auth/userinfo.profile", "https://www.googleapis.com/auth/userinfo.email"]
            credentials = GoogleCredentials.get_application_default()
            credentials = credentials.create_scoped(scopes)
            return credentials.get_access_token().access_token

        def get_headers(request_type='get'):
            headers = {"Authorization": "Bearer " + get_access_token(),
                      "accept": "application/json"}
            if request_type == 'post':
                headers["Content-Type"] = "application/json"
            return headers

        def write_file_to_bucket(filename, bucket):
            dir = "tdr"
            control_file_destination = f"{bucket}/{dir}"
            storage_client = gcs.Client()
            dest_bucket = storage_client.get_bucket(bucket)
            blob = dest_bucket.blob(f"control_files/{filename}")
            blob.upload_from_filename(filename)
            control_file_full_path = f"gs://{bucket}/{dir}/{filename}"
            print(f"Successfully copied {loading_json_filename} to {control_file_full_path}.")
            return control_file_full_path

        def wait_for_job_status_and_result(job_id, wait_sec=10):
            # first check job status
            uri = f"https://data.terra.bio/api/repository/v1/jobs/{job_id}"

            headers = get_headers()
            response = requests.get(uri, headers=headers)
            status_code = response.status_code

            while status_code == 202:
                print(f"job running. checking again in {wait_sec} seconds")
                sleep(wait_sec)
                response = requests.get(uri, headers=headers)
                status_code = response.status_code

            if status_code != 200:
                print(f"error retrieving status for job_id {job_id}")
                return response.text

            job_status = response.json()['job_status']
            print(f'job_id {job_id} has status {job_status}')
            # if job status = done, check job result
            if job_status in ['succeeded', 'failed']:
                print('retrieving job result')
                response = requests.get(uri + "/result", headers=headers)

            return job_status, response.json()


        # read workflow outputs from file
        print(f"reading data from outputs_json file {outputs_json}")
        with open(outputs_json, "r") as infile:
            outputs_to_load = json.load(infile)

        # recode any paths (files) for TDR ingest
        print("recoding paths for TDR ingest")
        for k in outputs_to_load.keys():
            v = outputs_to_load[k]
            if v is not None and "gs://" in v:
                outputs_to_load[k] = {
                    "sourcePath": v,
                    "targetPath": v.replace("gs://", "/")
                }

        # get BQ access info for TDR dataset
        print("retrieving BQ access info for TDR dataset")
        uri = f"https://data.terra.bio/api/repository/v1/datasets/{dataset_id}?include=ACCESS_INFORMATION"
        response = requests.get(uri, headers=get_headers())
        tables = response.json()['accessInformation']['bigQuery']['tables']
        dataset_table_fq = None  # fq = fully qualified name, i.e. project.dataset.table
        for table_info in tables:
            if table_info['name'] == target_table:
                dataset_table_fq = table_info['qualifiedName']

        # retrieve data for this sample
        print(f"retrieving data for sample_id {sample_id} from {dataset_table_fq}")
        bq = bigquery.Client(gcp_project_for_query)
        query = f"SELECT * FROM \`{dataset_table_fq}\` WHERE sample_id = '{sample_id}'"
        print("using query:" + query)

        executed_query = bq.query(query)
        results = executed_query.result()

        # this avoids the pyarrow error that arises if we use `df_result = result.to_dataframe()`
        df = results.to_dataframe_iterable()
        reader = next(df)
        df_result = pd.DataFrame(reader)

        # break if there's more than one row in TDR for this sample
        print(f"retrieved {len(df_result)} samples matching sample_id {sample_id}")
        assert(len(df_result) == 1)

        # format to a dictionary
        print("formatting results to dictionary")
        input_data_list = []
        for row_id in df_result.index:
            row_dict = {}
            for col in df_result.columns:
                if isinstance(df_result[col][row_id], pd._libs.tslibs.nattype.NaTType):
                    value = None
                elif isinstance(df_result[col][row_id], pd._libs.tslibs.timestamps.Timestamp):
                    print('processing timestamp. value pre-formatting: {df_result[col][row_id]}')
                    formatted_timestamp = df_result[col][row_id].strftime('%Y-%m-%dT%H:%M:%S')
                    print('value post-formatting: {formatted_timestamp}')
                    value = formatted_timestamp
                else:
                    value = df_result[col][row_id]
                if value is not None:  # don't include empty values
                    row_dict[col] = value
            input_data_list.append(row_dict)

        sample_data_dict = input_data_list[0]

        # update original sample data with workflow outputs
        sample_data_dict.update(outputs_to_load)
        # remove and store datarepo_row_id
        old_datarepo_row_id = sample_data_dict.pop('datarepo_row_id')
        # update version_timestamp field
        new_version_timestamp = datetime.datetime.now(datetime.timezone.utc).strftime('%Y-%m-%dT%H:%M:%S')
        sample_data_dict['version_timestamp'] = new_version_timestamp

        # write update json to disk and upload to staging bucket
        loading_json_filename = f"{new_version_timestamp}_recoded_ingestDataset.json"
        with open(loading_json_filename, 'w') as outfile:
            pprint(sample_data_dict)
            outfile.write(json.dumps(sample_data_dict))
            outfile.write("\n")
        load_file_full_path = write_file_to_bucket(loading_json_filename, bucket)

        # ingest data to TDR
        load_json = json.dumps({"format": "json",
                            "path": load_file_full_path,
                            "table": target_table,
                            "resolve_existing_files": True,
                            })
        uri = f"https://data.terra.bio/api/repository/v1/datasets/{dataset_id}/ingest"
        response = requests.post(uri, headers=get_headers('post'), data=load_json)
        load_job_id = response.json()['id']
        job_status, _ = wait_for_job_status_and_result(load_job_id)
        assert job_status == "succeeded"

        # soft delete old row
        soft_delete_data = json.dumps({
              "deleteType": "soft", 
              "specType": "jsonArray",
              "tables": [
                {"jsonArraySpec": {"rowIds": old_datarepo_row_id},
                 "tableName": table_name}
              ]})
        uri = f"https://data.terra.bio/api/repository/v1/datasets/{dataset_id}/deletes"
        response = requests.post(uri, headers=get_headers('post'), data=soft_delete_data)
        sd_job_id = response.json()['id']

        job_status, _ = wait_for_job_status_and_result(sd_job_id)
        assert job_status == "succeeded"

        CODE
    >>>

    runtime {
        docker: "broadinstitute/horsefish:emerge_scripts"
    }

    output {
        File ingest_logs = stdout()
    }
}