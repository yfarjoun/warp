(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[9209],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(a),c=r,g=m["".concat(o,".").concat(c)]||m[c]||d[c]||i;return a?n.createElement(g,l(l({ref:t},p),{},{components:a})):n.createElement(g,l({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1418:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return o},toc:function(){return u},default:function(){return d}});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),l={},s="Smart-seq2 Single Nucleus Overview",o={unversionedId:"Pipelines/Smart-seq2_Single_Nucleus_Pipeline/README",id:"Pipelines/Smart-seq2_Single_Nucleus_Pipeline/README",isDocsHomePage:!1,title:"Smart-seq2 Single Nucleus Overview",description:"| Pipeline Version | Date Updated | Documentation Author | Questions or Feedback |",source:"@site/docs/Pipelines/Smart-seq2_Single_Nucleus_Pipeline/README.md",sourceDirName:"Pipelines/Smart-seq2_Single_Nucleus_Pipeline",slug:"/Pipelines/Smart-seq2_Single_Nucleus_Pipeline/README",permalink:"/warp/docs/Pipelines/Smart-seq2_Single_Nucleus_Pipeline/README",editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/Pipelines/Smart-seq2_Single_Nucleus_Pipeline/README.md",version:"current",lastUpdatedBy:"George Grant",lastUpdatedAt:1629134770,formattedLastUpdatedAt:"8/16/2021",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Smart-seq2 Single Nucleus Multi-Sample v1.0.0 Publication Methods",permalink:"/warp/docs/Pipelines/Smart-seq2_Single_Nucleus_Multi_Sample_Pipeline/multi_snss2.methods"},next:{title:"Smart-seq2 Single Sample Overview",permalink:"/warp/docs/Pipelines/Smart-seq2_Single_Sample_Pipeline/README"}},u=[{value:"Introduction to the Smart-seq2 Single Nucleus Pipeline",id:"introduction-to-the-smart-seq2-single-nucleus-pipeline",children:[]},{value:"Quick Start Table",id:"quick-start-table",children:[]},{value:"Set-Up",id:"set-up",children:[{value:"Smart-seq2 Single Nucleus Installation and Requirements",id:"smart-seq2-single-nucleus-installation-and-requirements",children:[]},{value:"Inputs",id:"inputs",children:[]}]},{value:"Running Smart-seq2",id:"running-smart-seq2",children:[{value:"Smart-seq2 Single Nucleus Workflow Summary",id:"smart-seq2-single-nucleus-workflow-summary",children:[]},{value:"Trimming Adapters",id:"trimming-adapters",children:[]},{value:"Aligning Reads",id:"aligning-reads",children:[]},{value:"Removing Duplicate Reads",id:"removing-duplicate-reads",children:[]},{value:"Collecting Metrics",id:"collecting-metrics",children:[]},{value:"Counting Genes",id:"counting-genes",children:[]},{value:"Creating the Cell-by-Gene Matrix (Loom)",id:"creating-the-cell-by-gene-matrix-loom",children:[]},{value:"Outputs",id:"outputs",children:[]}]},{value:"Validation",id:"validation",children:[]},{value:"Versioning",id:"versioning",children:[]},{value:"Consortia Support",id:"consortia-support",children:[]},{value:"Have Suggestions?",id:"have-suggestions",children:[]}],p={toc:u};function d(e){var t=e.components,l=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"smart-seq2-single-nucleus-overview"},"Smart-seq2 Single Nucleus Overview"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Pipeline Version"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Date Updated"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Documentation Author"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Questions or Feedback"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/releases"},"SmartSeq2SingleNucleus_v1.0.0")),(0,i.kt)("td",{parentName:"tr",align:"center"},"July, 2021"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"mailto:ekiernan@broadinstitute.org"},"Elizabeth Kiernan")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Please file GitHub issues in WARP or contact ",(0,i.kt)("a",{parentName:"td",href:"mailto:kdegatano@broadinstitute.org"},"Kylee Degatano"))))),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(6899).Z})),(0,i.kt)("h2",{id:"introduction-to-the-smart-seq2-single-nucleus-pipeline"},"Introduction to the Smart-seq2 Single Nucleus Pipeline"),(0,i.kt)("p",null,"The Smart-seq2 Single Nucleus (snSS2) pipeline was developed in collaboration with the ",(0,i.kt)("a",{parentName:"p",href:"https://biccn.org/"},"BRAIN Initiative Cell Census Network")," (BICCN) to process single-nucleus RNAseq (snRNAseq) data generated by ",(0,i.kt)("a",{parentName:"p",href:"https://www.nature.com/articles/nmeth.2639"},"Smart-seq2 assays"),". The pipeline's workflow is written in WDL, is freely available in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/tree/develop/pipelines/skylab/smartseq2_single_nucleus/SmartSeq2SingleNucleus.wdl"},"WARP repository")," on GitHub, and can be run by any compliant WDL runner (e.g. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/cromwell"},"Crowmell"),"). "),(0,i.kt)("p",null,"The pipeline is designed to process snRNA-seq data from an individual cell (to process multiple cells, see the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/master/pipelines/skylab/smartseq2_single_nucleus_multisample/MultiSampleSmartSeq2SingleNucleus.wdl"},"Smart-seq2 Single Nucleus Multi-Sample")," Pipeline)."),(0,i.kt)("p",null,"Overall, the snSS2 workflow trims paired-end FASTQ files, aligns reads to the genome using a modified GTF, counts intronic and exonic reads, and calculates quality control metrics."),(0,i.kt)("p",null,"The pipeline has been scientifically validated by the BRAIN Institute. Read more in the ",(0,i.kt)("a",{parentName:"p",href:"#validation"},"validation section"),"."),(0,i.kt)("h2",{id:"quick-start-table"},"Quick Start Table"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Pipeline Features"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Source"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Assay Type"),(0,i.kt)("td",{parentName:"tr",align:null},"Smart-seq2 Single Nucleus"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.nature.com/articles/nprot.2014.006"},"Smart-seq2"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Overall Workflow"),(0,i.kt)("td",{parentName:"tr",align:null},"Quality control and transcriptome quantification"),(0,i.kt)("td",{parentName:"tr",align:null},"Code available from the ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/tree/develop/pipelines/skylab/smartseq2_single_nucleus/SmartSeq2SingleNucleus.wdl"},"WARP repository")," in GitHub")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Workflow Language"),(0,i.kt)("td",{parentName:"tr",align:null},"WDL"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/openwdl/wdl"},"openWDL"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Genomic Reference Sequence (for validation)"),(0,i.kt)("td",{parentName:"tr",align:null},"GRCm38 mouse genome primary sequence"),(0,i.kt)("td",{parentName:"tr",align:null},"GENCODE GRCm38 ",(0,i.kt)("a",{parentName:"td",href:"http://ftp.ebi.ac.uk/pub/databases/gencode/Gencode_mouse/release_M23/GRCm38.primary_assembly.genome.fa.gz"},"Mouse"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Transcriptomic Reference Annotation (for validation)"),(0,i.kt)("td",{parentName:"tr",align:null},"Modified ",(0,i.kt)("a",{parentName:"td",href:"https://www.gencodegenes.org/mouse/release_M23.html"},"M23")," GTF built with the  ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/tree/master/pipelines/skylab/build_indices/BuildIndices.wdl"},"BuildIndices workflow")),(0,i.kt)("td",{parentName:"tr",align:null},"GENCODE")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Aligner"),(0,i.kt)("td",{parentName:"tr",align:null},"STAR (v.2.7.9a)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/alexdobin/STAR"},"STAR"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"QC Metrics"),(0,i.kt)("td",{parentName:"tr",align:null},"Picard (v.2.20.4)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://broadinstitute.github.io/picard/"},"Broad Institute"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Transcript Quantification"),(0,i.kt)("td",{parentName:"tr",align:null},"featureCounts (utilities for counting reads to genomic features)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"http://subread.sourceforge.net/"},"featureCounts(v2.0.2)"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Data Input File Format"),(0,i.kt)("td",{parentName:"tr",align:null},"File format in which sequencing data is provided"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://academic.oup.com/nar/article/38/6/1767/3112533"},"FASTQ"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Data Output File Formats"),(0,i.kt)("td",{parentName:"tr",align:null},"File formats in which Smart-seq2 output is provided"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"http://samtools.github.io/hts-specs/"},"BAM"),", Loom (counts and metrics; generated with ",(0,i.kt)("a",{parentName:"td",href:"http://loompy.org/"},"Loompy v.3.0.6)"),", TSV (counts)")))),(0,i.kt)("h2",{id:"set-up"},"Set-Up"),(0,i.kt)("h3",{id:"smart-seq2-single-nucleus-installation-and-requirements"},"Smart-seq2 Single Nucleus Installation and Requirements"),(0,i.kt)("p",null,"The snSS2 workflow code can be downloaded by cloning the GitHub ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp"},"WARP repository"),". For the latest release of snSS2, please see release tags prefixed with SmartSeq2SingleNucleus on the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/releases"},"WARP release page"),"."),(0,i.kt)("p",null,"The workflow is deployed using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/cromwell"},"Cromwell"),", a GA4GH compliant, flexible workflow management system that supports multiple computing platforms."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Try the snSS2 workflow in Terra")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can run the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/master/pipelines/skylab/smartseq2_single_nucleus_multisample/MultiSampleSmartSeq2SingleNucleus.wdl"},"Smart-seq2 Single Nucleus Multi-Sample workflow")," (a wrapper for the snSS2 workflow described in this document) in ",(0,i.kt)("a",{parentName:"p",href:"https://app.terra.bio"},"Terra"),", a cloud-based analysis platform. The Terra ",(0,i.kt)("a",{parentName:"p",href:"https://app.terra.bio/#workspaces/warp-pipelines/Smart-seq2_Single_Nucleus_Muti-Sample"},"Smart-seq2 Single Nucleus Multi-Sample public workspace")," is preloaded with the Multi-snSS2 workflow, example testing data, and all the required reference data."))),(0,i.kt)("h3",{id:"inputs"},"Inputs"),(0,i.kt)("p",null,"There is an ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/tree/develop/pipelines/skylab/smartseq2_single_nucleus/mouse_paired_example.json"},"example configuration (JSON) file")," available that you can to test the snSS2 workflow. It points to publicly available reference files and sample paired-end FASTQs."),(0,i.kt)("h4",{id:"sample-data-input"},"Sample Data Input"),(0,i.kt)("p",null,"The pipeline is designed for paired-end reads in the form of two FASTQ files. It processes one sample (cell) at a time."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fastq1"),": forward reads for a sample with paired-end sequencing "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fastq2"),": reverse reads for a sample with paired-end sequencing ")),(0,i.kt)("h4",{id:"reference-and-additional-inputs"},"Reference and Additional Inputs"),(0,i.kt)("p",null,"The snSS2 workflow requires multiple references detailed in the table below. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Reference inputs are created using the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/broadinstitute/warp/tree/master/pipelines/skylab/build_indices"},"BuildIndices Pipeline"),"."),(0,i.kt)("li",{parentName:"ul"},"The workflow uses a modified version of the 10x Genomic's code for building mouse (",(0,i.kt)("a",{parentName:"li",href:"https://support.10xgenomics.com/single-cell-gene-expression/software/release-notes/build#mm10_2020A"},"GRCm38-2020-A"),") and human (",(0,i.kt)("a",{parentName:"li",href:"https://support.10xgenomics.com/single-cell-gene-expression/software/release-notes/build#GRCh38_2020A"},"GRCh38-2020-A"),") reference packages. "),(0,i.kt)("li",{parentName:"ul"},"To enable intron counting, the workflow calls a ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/broadinstitute/warp/blob/develop/dockers/skylab/snss2-build-indices/add-introns-to-gtf.py"},"shell script")," to create a custom GTF with intron annotations. Introns are considered any part of a contig that is not exonic nor intergenic. ")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Reference Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Reference Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Format"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tar_star_reference"),(0,i.kt)("td",{parentName:"tr",align:null},"Genome references for STAR alignment"),(0,i.kt)("td",{parentName:"tr",align:null},"TAR")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"annotations_gtf"),(0,i.kt)("td",{parentName:"tr",align:null},"Custom GTF file containing annotations for exon and intron tagging; must match the STAR reference"),(0,i.kt)("td",{parentName:"tr",align:null},"GTF")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"genome_ref_fasta"),(0,i.kt)("td",{parentName:"tr",align:null},"FASTA file used for STAR alignment"),(0,i.kt)("td",{parentName:"tr",align:null},"FASTA")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"input_id"),(0,i.kt)("td",{parentName:"tr",align:null},"Unique identifier string for the cell; can be a UUID or human-readable ID"),(0,i.kt)("td",{parentName:"tr",align:null},"String")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"input_id_metadata_field"),(0,i.kt)("td",{parentName:"tr",align:null},"Optional value that can be used to identify any metadata fields specific to consortia (BRAIN Initiative, HCA, etc. ) that were used for the input_id"),(0,i.kt)("td",{parentName:"tr",align:null},"String")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"input_name"),(0,i.kt)("td",{parentName:"tr",align:null},"Optional unique identifier string for the cell; can be a human-readable alternative if a UUID is used for the input_id"),(0,i.kt)("td",{parentName:"tr",align:null},"String")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"input_name_metadata_field"),(0,i.kt)("td",{parentName:"tr",align:null},"Optional value that can be used to identify any metadata fields particular to consortia (e.g. Brain Initiative, HCA, etc. ) that were used for the input_name"),(0,i.kt)("td",{parentName:"tr",align:null},"String")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"output_name"),(0,i.kt)("td",{parentName:"tr",align:null},"Unique name used for output files; can also be a cloud path"),(0,i.kt)("td",{parentName:"tr",align:null},"String")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"adapter_list"),(0,i.kt)("td",{parentName:"tr",align:null},"File listing adapter sequences used in the library preparation (i.e. Illumina adapters for Illumina sequencing)"),(0,i.kt)("td",{parentName:"tr",align:null},"FASTA")))),(0,i.kt)("h2",{id:"running-smart-seq2"},"Running Smart-seq2"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/tree/develop/pipelines/skylab/smartseq2_single_nucleus/SmartSeq2SingleNucleus.wdl"},"snSS2 workflow ")," is in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/tree/snSS2_first_wdls/pipelines/skylab/smartseq2_single_nucleus"},"pipelines/smartseq2_single_nucleus folder")," of the WARP repository and implements the workflow by importing individual tasks (written in WDL script) from the WARP ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/tree/master/tasks/skylab/"},"tasks folder"),"."),(0,i.kt)("h3",{id:"smart-seq2-single-nucleus-workflow-summary"},"Smart-seq2 Single Nucleus Workflow Summary"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Task Name and Task\u2019s WDL Link"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Software"),(0,i.kt)("th",{parentName:"tr",align:null},"Tool"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/tree/develop/tasks/skylab/TrimAdapters.wdl"},"TrimAdapters.TrimAdapters")),(0,i.kt)("td",{parentName:"tr",align:null},"Trims adapter sequences from the FASTQ inputs"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/ExpressionAnalysis/ea-utils"},"ea-utils")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/ExpressionAnalysis/ea-utils/tree/master/clipper"},"fastq-mcf"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/tree/develop/tasks/skylab/StarAlign.wdl"},"StarAlignFastq.StarAlignFastqPairedEnd")),(0,i.kt)("td",{parentName:"tr",align:null},"Aligns reads to the genome"),(0,i.kt)("td",{parentName:"tr",align:null},"STAR"),(0,i.kt)("td",{parentName:"tr",align:null},"STAR")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/tree/develop/tasks/skylab/Picard.wdl"},"Picard.RemoveDuplicatesFromBam")),(0,i.kt)("td",{parentName:"tr",align:null},"Removes duplicate reads, producing a new BAM output; adds regroups to deduplicated BAM"),(0,i.kt)("td",{parentName:"tr",align:null},"Picard"),(0,i.kt)("td",{parentName:"tr",align:null},"MarkDuplicates, AddOrReplaceReadGroups")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/tree/develop/tasks/skylab/Picard.wdl"},"Picard.CollectMultipleMetrics")),(0,i.kt)("td",{parentName:"tr",align:null},"Collects QC metrics on the deduplicated BAM file"),(0,i.kt)("td",{parentName:"tr",align:null},"Picard"),(0,i.kt)("td",{parentName:"tr",align:null},"CollectMultipleMetrics")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/tree/develop/tasks/skylab/FeatureCounts.wdl"},"CountAlignments.CountAlignments")),(0,i.kt)("td",{parentName:"tr",align:null},"Uses a custom GTF with featureCounts and Python to mark introns, create a BAM that has alignments spanning intron-exon junctions removed, and counts exons using the custom BAM and by excluding intron tags"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"http://subread.sourceforge.net/"},"Subread")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"http://bioinf.wehi.edu.au/featureCounts/"},"FeatureCounts"),", Python 3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/tree/develop/tasks/skylab/LoomUtils.wdl"},"LoomUtils.SingleNucleiSmartSeq2LoomOutput")),(0,i.kt)("td",{parentName:"tr",align:null},"Combines featureCounts and Picard metric outputs into a Loom formatted cell-by-gene matrix"),(0,i.kt)("td",{parentName:"tr",align:null},"Python 3"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/tree/develop/dockers/skylab/loom-output/create_loom_snss2.py"},"Custom script"))))),(0,i.kt)("h3",{id:"trimming-adapters"},"Trimming Adapters"),(0,i.kt)("p",null,"The TrimAdapters task uses the adapter list reference file to run the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ExpressionAnalysis/ea-utils/tree/master/clipper"},"fastq-mcf")," tool. This tool identifies the adapters in the input FASTQ files and performs clipping by using a subsampling parameter of 200,000 reads. The task outputs the trimmed FASTQ files which are then used for alignment. "),(0,i.kt)("h3",{id:"aligning-reads"},"Aligning Reads"),(0,i.kt)("p",null,"The StarAlignFastq task runs the STAR aligner on the trimmed FASTQ files. The STAR quantMode parameter is set to GeneCounts, which counts the number of reads per gene while mapping. The task outputs a coordinate-sorted aligned BAM file. "),(0,i.kt)("h3",{id:"removing-duplicate-reads"},"Removing Duplicate Reads"),(0,i.kt)("p",null,"The RemoveDuplicatesFromBam task removes multi-mapped reads, optical duplicates, and PCR duplicates from the aligned BAM. It then adds readgroup information and creates a new, coordinate-sorted aligned BAM output."),(0,i.kt)("h3",{id:"collecting-metrics"},"Collecting Metrics"),(0,i.kt)("p",null,"The CollectMultipleMetrics task uses the Picard tool CollectMultipleMetrics to perform QC on the deduplicated BAM file. These metrics are copied to the final cell-by-gene matrix output (Loom file)."),(0,i.kt)("h3",{id:"counting-genes"},"Counting Genes"),(0,i.kt)("p",null,"The CountAlignments task uses the featureCounts package to count introns and exons. First, the featureCounts tool counts intronic alignments in the deduplicated BAM using a custom GTF with annotated introns. The tool flags intronic alignments if they overlap an annotated intron by a minimum of 3 bp. "),(0,i.kt)("p",null,"Next, following pipeline processes established by the BICCN Whole Mouse Brain Working Group, a custom Python script (\u201c",(0,i.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/tree/develop/dockers/skylab/featureCounts/remove-reads-on-junctions.py"},"remove-reads-on-junctions.py"),"\u201d) removes all alignments in the deduplicated BAM that cross only one intron-exon junction and produces an intermediate BAM file for exon counting. This removes a negligible amount of putative intronic alignments that did not meet the 3 bp intron overlap criteria. "),(0,i.kt)("p",null,"Lastly, featureCounts uses the intermediate BAM with junctions removed to count exons. The final outputs of this step include a cell-by-gene matrix of intronic counts, a cell-by-gene matrix of exonic counts, and summary metrics for the different count types."),(0,i.kt)("h3",{id:"creating-the-cell-by-gene-matrix-loom"},"Creating the Cell-by-Gene Matrix (Loom)"),(0,i.kt)("p",null,"The LoomUtils task combines the Picard metrics (alignment_summary_metrics, deduplication metrics, and the G/C bias summary metrics) with the featureCount exon and intron counts to create a Loom formatted cell-by-gene count matrix. "),(0,i.kt)("p",null,"Exonic counts are in the Loom matrix and intronic counts are added as a Loom layer. Read more about Loom file format in the ",(0,i.kt)("a",{parentName:"p",href:"https://linnarssonlab.org/loompy/index.html"},"Loompy documentation"),"."),(0,i.kt)("h3",{id:"outputs"},"Outputs"),(0,i.kt)("p",null,"The table below details the final outputs of the snSS2 workflow.  "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Output Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Output Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Output Format"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"pipeline_version_out"),(0,i.kt)("td",{parentName:"tr",align:null},"Version of the processing pipeline run on this data"),(0,i.kt)("td",{parentName:"tr",align:null},"String")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"aligned_bam"),(0,i.kt)("td",{parentName:"tr",align:null},"Aligned BAM"),(0,i.kt)("td",{parentName:"tr",align:null},"BAM")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"exon_intron_counts"),(0,i.kt)("td",{parentName:"tr",align:null},"Text file containing intron counts, intron FPKMs, exon counts, and exon FPKMs"),(0,i.kt)("td",{parentName:"tr",align:null},"TXT")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"loom_output_files"),(0,i.kt)("td",{parentName:"tr",align:null},"Cell-by-gene count matrix that includes the raw exon counts (in matrix), intron counts (in matrix layer), cell metrics (column attributes) and gene IDs (row attributes)"),(0,i.kt)("td",{parentName:"tr",align:null},"Loom")))),(0,i.kt)("h2",{id:"validation"},"Validation"),(0,i.kt)("p",null,"The snSS2 pipeline was scientifically validated by the BRAIN Initiatives Cell Census Network (BICCN) 2.0 Whole Mouse Brain Working Group. "),(0,i.kt)("h2",{id:"versioning"},"Versioning"),(0,i.kt)("p",null,"All Smart-seq2 Single Nucleus release notes are documented in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/tree/develop/pipelines/skylab/smartseq2_single_nucleus/SmartSeq2SingleNucleus.changelog.md"},"Smartseq2 Single Nucleus changelog"),"."),(0,i.kt)("h2",{id:"consortia-support"},"Consortia Support"),(0,i.kt)("p",null,"This pipeline is supported and used by the ",(0,i.kt)("a",{parentName:"p",href:"https://biccn.org/"},"BRAIN Initiative Cell Census Network")," (BICCN). "),(0,i.kt)("p",null,"If your organization also uses this pipeline, we would love to list you! Please reach out to us by contacting ",(0,i.kt)("a",{parentName:"p",href:"mailto:kdegatano@broadinstitute.org"},"Kylee Degatano"),"."),(0,i.kt)("h2",{id:"have-suggestions"},"Have Suggestions?"),(0,i.kt)("p",null,"Help us make our tools better by contacting ",(0,i.kt)("a",{parentName:"p",href:"mailto:kdegatano@broadinstitute.org"},"Kylee Degatano")," for pipeline-related suggestions or questions."))}d.isMDXComponent=!0},6899:function(e,t,a){"use strict";t.Z=a.p+"assets/images/snSS2-2ed3badac7ac6bcd5ac8328893174814.png"}}]);