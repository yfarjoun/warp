package org.broadinstitute.dsp.pipelines.commandline

import enumeratum.{Enum, EnumEntry}

import scala.collection.immutable

sealed abstract class PipelineTestType(val workflowName: String,
                                       val pipelineName: String,
                                       val workflowDir: String)
    extends EnumEntry

object PipelineTestType extends Enum[PipelineTestType] {
  override val values: immutable.IndexedSeq[PipelineTestType] = findValues

  //case object AnnotationFiltration
  //    extends PipelineTestType(
  //      "TestAnnotationFiltration",
  //      "/broad/annotation_filtration/"
  //    )
  case object Arrays
      extends PipelineTestType(
        "TestArrays",
        "Arrays",
        "/broad/arrays/single_sample/"
      )
  //case object CEMBA
  //    extends PipelineTestType(
  //      "TestCEMBA",
  //      "/cemba/cemba_methylcseq/"
  //    )
  case object CramToUnmappedBams
      extends PipelineTestType(
        "TestCramToUnmappedBams",
        "CramToUnmappedBams",
        "/broad/reprocessing/cram_to_unmapped_bams/"
      )
  case object BroadInternalRNAWithUMIs
      extends PipelineTestType(
        "TestBroadInternalRNAWithUMIs",
        "BroadInternalRNAWithUMIs",
        "/broad/internal/rna_seq/"
      )
  case object ExomeGermlineSingleSample
      extends PipelineTestType(
        "TestExomeGermlineSingleSample",
        "ExomeGermlineSingleSample",
        "/broad/dna_seq/germline/single_sample/exome/"
      )
  case object ExomeReprocessing
      extends PipelineTestType(
        "TestExomeReprocessing",
        "ExomeReprocessing",
        "/broad/reprocessing/exome/"
      )
  case object ExternalExomeReprocessing
      extends PipelineTestType(
        "TestExternalExomeReprocessing",
        "ExternalExomeReprocessing",
        "/broad/reprocessing/external/exome/"
      )
  case object ExternalWholeGenomeReprocessing
      extends PipelineTestType(
        "TestExternalWholeGenomeReprocessing",
        "ExternalWholeGenomeReprocessing",
        "/broad/reprocessing/external/wgs/"
      )
  //case object GDCWholeGenomeSomaticSingleSample
  //    extends PipelineTestType(
  //      "TestGDCWholeGenomeSomaticSingleSample",
  //      "/broad/dna_seq/somatic/single_sample/wgs/gdc_genome/"
  //    )
  case object IlluminaGenotypingArray
      extends PipelineTestType(
        "TestIlluminaGenotypingArray",
        "IlluminaGenotypingArray",
        "/broad/genotyping/illumina/"
      )
  //case object JointGenotyping
  //    extends PipelineTestType(
  //      "TestJointGenotyping",
  //      "/broad/dna_seq/germline/joint_genotyping/"
  //    )
  case object MultiSampleArrays
      extends PipelineTestType(
        "TestMultiSampleArrays",
        "MultiSampleArrays",
        "/broad/arrays/multi_sample/"
      )
  //case object MultiSampleSmartSeq2
  //    extends PipelineTestType(
  //      "TestMultiSampleSmartSeq2",
  //      "/skylab/smartseq2_multisample/"
  //    )
  //case object MultiSampleSmartSeq2SingleNucleus
  //    extends PipelineTestType(
  //      "TestMultiSampleSmartSeq2SingleNucleus",
  //      "/skylab/smartseq2_single_nucleus_multisample/"
  //    )
  case object Optimus
      extends PipelineTestType(
        "TestOptimus",
        "Optimus",
        "/skylab/optimus/"
      )
  //case object ReblockGVCF
  //    extends PipelineTestType(
  //      "TestReblockGVCF",
  //      "/broad/dna_seq/germline/joint_genotyping/reblocking/"
  //    )
  case object RNAWithUMIsPipeline
      extends PipelineTestType(
        "TestRNAWithUMIsPipeline",
        "RNAWithUMIsPipeline",
        "/broad/rna_seq/"
      )
  case object scATAC
      extends PipelineTestType(
        "TestscATAC",
        "scATAC",
        "/skylab/scATAC/"
      )
  //case object SmartSeq2SingleNucleus
  //    extends PipelineTestType(
  //      "TestSmartSeq2SingleNucleus",
  //      "/skylab/smartseq2_single_nucleus/"
  //    )
  //case object SmartSeq2SingleSample
  //    extends PipelineTestType(
  //      "TestSmartSeq2SingleSample",
  //      "/skylab/smartseq2_single_sample/"
  //    )
  case object ValidateChip
      extends PipelineTestType(
        "TestValidateChip",
        "ValidateChip",
        "/broad/arrays/validate_chip/"
      )
  case object CheckFingerprint
      extends PipelineTestType(
        "TestCheckFingerprint",
        "CheckFingerprint",
        "/broad/qc"
      )
  //case object VariantCalling
  //    extends PipelineTestType(
  //      "TestVariantCalling",
  //      "/broad/dna_seq/germline/variant_calling/"
  //    )
  case object WholeGenomeGermlineSingleSample
      extends PipelineTestType(
        "TestWholeGenomeGermlineSingleSample",
        "WholeGenomeGermlineSingleSample",
        "/broad/dna_seq/germline/single_sample/WGS/"
      )
  case object SmartSeq2SingleSample
      extends PipelineTestType(
        "TestSmartSeq2SingleSample",
        "SmartSeq2SingleSample",
        "/skylab/smartseq2_single_sample"
      )
  case object WholeGenomeReprocessing
      extends PipelineTestType(
        "TestWholeGenomeReprocessing",
        "WholeGenomeReprocessing",
        "/broad/reprocessing/wgs"
      )
  //case object WholeGenomeReprocessing
  //    extends PipelineTestType(
  //      "TestWholeGenomeReprocessing",
  //      "/broad/reprocessing/wgs/"
  //    )
  case object UltimaGenomicsWholeGenomeGermline
      extends PipelineTestType(
        "TestUltimaGenomicsWholeGenomeGermline",
        "UltimaGenomicsWholeGenomeGermline",
        "/broad/dna_seq/germline/single_sample/UGWGS/"
      )
  case object UltimaGenomicsJointGenotyping
      extends PipelineTestType(
        "TestUltimaGenomicsJointGenotyping",
        "UltimaGenomicsJointGenotyping",
        "/broad/dna_seq/germline/joint_genotyping/UltimaGenomics/"
      )
  case object BroadInternalUltimaGenomics
      extends PipelineTestType(
        "TestBroadInternalUltimaGenomics",
        "BroadInternalUltimaGenomics",
        "/broad/internal/dna_seq/germline/single_sample/UltimaGenomics"
      )
}
