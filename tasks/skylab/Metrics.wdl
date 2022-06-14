version 1.0

task CalculateCellMetrics {
  input {
    File bam_input
    File original_gtf

    # runtime values
    String docker = "quay.io/humancellatlas/secondary-analysis-sctools:v0.4.0"
    Int machine_mem_mb = 8000
    Int cpu = 4
    Int disk = ceil(size(bam_input, "Gi") * 4) + ceil((size(original_gtf, "Gi") * 3)) 
    Int preemptible = 3
  }

  meta {
    description: "Sort bam_input by cell, then molecule, then gene."
  }

  parameter_meta {
    bam_input: "Input bam file containing reads marked with tags for cell barcodes (CB), molecule barcodes (UB) and gene ids (GX)"
    docker: "(optional) the docker image containing the runtime environment for this task"
    machine_mem_mb: "(optional) the amount of memory (MiB) to provision for this task"
    cpu: "(optional) the number of cpus to provision for this task"
    disk: "(optional) the amount of disk space (GiB) to provision for this task"
    preemptible: "(optional) if non-zero, request a pre-emptible instance and allow for this number of preemptions before running the task on a non preemptible machine"
  }
  
  command {
    set -e
    
    # create the tmp folder for disk sorting
    mkdir temp

    # if GTF file in compressed then uncompress
    if [[ ~{original_gtf} =~ \.gz$ ]]
    then
        gunzip -c ~{original_gtf} > annotation.gtf
    else
        mv  ~{original_gtf}  annotation.gtf
    fi

    TagSort --bam-input ~{bam_input} \
    --gtf-file annotation.gtf \
    --metric-output cell-metrics.csv \
    --compute-metric \
    --metric-type cell \
    --barcode-tag CB \
    --umi-tag UB \
    --gene-tag GX \
    --temp-folder temp \
    --alignments-per-thread 1000000 \
    --nthreads ${cpu}

    gzip cell-metrics.csv
  }


  runtime {
    docker: docker
    memory: "${machine_mem_mb} MiB"
    disks: "local-disk ${disk} HDD"
    cpu: cpu
    preemptible: preemptible
  }
  
  output {
    File cell_metrics = "cell-metrics.csv.gz"
  }
}

task CalculateGeneMetrics {
  input {
    File bam_input

    # runtime values
    String docker = "quay.io/humancellatlas/secondary-analysis-sctools:v0.4.0"
    Int machine_mem_mb = 8000
    Int cpu = 4
    Int disk = ceil(size(bam_input, "Gi") * 4) 
    Int preemptible = 3
  }
  

  meta {
    description: "Sort bam_input by gene, then cell, then molecule."
  }

  parameter_meta {
    bam_input: "Input bam file containing reads marked with tags for cell barcodes (CB), molecule barcodes (UB) and gene ids (GE)"
    docker: "(optional) the docker image containing the runtime environment for this task"
    machine_mem_mb: "(optional) the amount of memory (MiB) to provision for this task"
    cpu: "(optional) the number of cpus to provision for this task"
    disk: "(optional) the amount of disk space (GiB) to provision for this task"
    preemptible: "(optional) if non-zero, request a pre-emptible instance and allow for this number of preemptions before running the task on a non preemptible machine"
  }

  command {
    set -e
    mkdir temp

    TagSort --bam-input ~{bam_input} \
    --metric-output gene-metrics.csv \
    --compute-metric \
    --metric-type gene \
    --gene-tag GX \
    --barcode-tag CB \
    --umi-tag UB \
    --temp-folder temp \
    --alignments-per-thread 1000000 \
    --nthreads ${cpu}

    gzip gene-metrics.csv

  }

  runtime {
    docker: docker
    memory: "${machine_mem_mb} MiB"
    disks: "local-disk ${disk} HDD" 
    cpu: cpu
    preemptible: preemptible
  }

  output {
    File gene_metrics = "gene-metrics.csv.gz"
  }
}

task FastqMetricsSlidSeq {

  input {
    Array[File] r1_fastq
    String read_structure
    String sample_id
    String whitelist


    # Runtime attributes
    String docker =  "quay.io/humancellatlas/secondary-analysis-sctools:v0.3.14-rc1"
    Int cpu = 16
    Int machine_mb = 40000
    Int disk = ceil(size(r1_fastq, "GiB")*3)  + 50
    Int preemptible = 3
  }

  meta {
    description: "Converts a set of fastq files to unaligned bam file, also corrects barcodes and partitions the alignments by barcodes. Allows for variable barcode and umi lengths as input"
  }

  parameter_meta {
    r1_fastq: "Array of Read 1 FASTQ files - forward read, contains cell barcodes and molecule barcodes"
    r2_fastq: "Array of Read 2 FASTQ files - reverse read, contains cDNA fragment generated from captured mRNA"
    i1_fastq: "(optional) Array of i1 FASTQ files - index read, for demultiplexing of multiple samples on one flow cell."
    sample_id: "Name of sample matching this file, inserted into read group header"
    read_structure: "A string that specifies UMI (M) and Barcode (C) positions in the Read 1 fastq"

  }

  command {

    command {
    set -e

    FASTQS=$(python3 <<CODE
    def rename_file(filename):
    import shutil
    import gzip
    import re

    iscompressed = True
    with gzip.open(filename, 'rt') as fin:
    try:
    _ = fin.readline()
    except:
    iscompressed = False

    basename = re.sub(r'.gz$', '', filename)
    basename = re.sub(r'.fastq$', '', basename)

    if iscompressed:
    # if it is already compressed then add an extension .fastq.gz
    newname = basename + ".fastq.gz"
    else:
    # otherwis, add just the .fastq extension
    newname = basename + ".fastq"

    if filename != newname:
    # safe to rename since the old and the new names are different
    shutil.move(filename, newname)

    return newname
    optstring = ""

    r1_fastqs = [ "${sep='", "' r1_fastq}" ]
    for fastq in r1_fastqs:
    if fastq.strip():
    optstring += " --R1 " + rename_file(fastq)
    print(optstring)
    CODE)


    fastq_metrics \
    --white-list ~{whitelist} \
    --read-structure "~{read_structure}" \
    --sample-id "~{sample_id}" \
    $FASTQS
  }

  runtime {
    docker: docker
    cpu: cpu
    memory: "${machine_mb} MiB"
    disks: "local-disk ${disk} HDD"
    preemptible: preemptible
  }

  output {
    File barcode_distribution = "~{sample_id}.barcode_distribution_XC.txt"
    File umi_distribution = "~{sample_id}.barcode_distribution_XM.txt"
    File numReads_perCell = "~{sample_id}.numReads_perCell_XC.txt"
    File numReads_perUMI = "~{sample_id}.mumReads_perCell_XM.txt"
  }
}