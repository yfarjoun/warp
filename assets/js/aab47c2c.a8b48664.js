(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[8872],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(n),c=r,g=d["".concat(p,".").concat(c)]||d[c]||m[c]||l;return n?a.createElement(g,i(i({ref:t},s),{},{components:n})):a.createElement(g,i({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1940:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p},default:function(){return s}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),i={},o={unversionedId:"Pipelines/Smart-seq2_Single_Nucleus_Multi_Sample_Pipeline/README",id:"Pipelines/Smart-seq2_Single_Nucleus_Multi_Sample_Pipeline/README",isDocsHomePage:!1,title:"Smart-seq2 Single Nucleus Multi-Sample Overview",description:"| Pipeline Version | Date Updated | Documentation Author | Questions or Feedback |",source:"@site/docs/Pipelines/Smart-seq2_Single_Nucleus_Multi_Sample_Pipeline/README.md",sourceDirName:"Pipelines/Smart-seq2_Single_Nucleus_Multi_Sample_Pipeline",slug:"/Pipelines/Smart-seq2_Single_Nucleus_Multi_Sample_Pipeline/README",permalink:"/warp/docs/Pipelines/Smart-seq2_Single_Nucleus_Multi_Sample_Pipeline/README",editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/Pipelines/Smart-seq2_Single_Nucleus_Multi_Sample_Pipeline/README.md",version:"current",lastUpdatedBy:"ekiernan",lastUpdatedAt:1623853160,formattedLastUpdatedAt:"6/16/2021",frontMatter:{},sidebar:"docsSidebar",previous:{title:"What's in the Smart-seq2 Multi Sample Pipeline Loom File?",permalink:"/warp/docs/Pipelines/Smart-seq2_Multi_Sample_Pipeline/Loom_schema"},next:{title:"Smart-seq2 Single Nucleus Overview",permalink:"/warp/docs/Pipelines/Smart-seq2_Single_Nucleus_Pipeline/README"}},p=[{value:"Introduction",id:"introduction",children:[]},{value:"Inputs",id:"inputs",children:[{value:"Sample and Reference Inputs",id:"sample-and-reference-inputs",children:[]},{value:"Smart-seq2 Multi-Sample Task Summary",id:"smart-seq2-multi-sample-task-summary",children:[]},{value:"Outputs",id:"outputs",children:[]}]},{value:"Validation",id:"validation",children:[]},{value:"Versioning",id:"versioning",children:[]},{value:"Have Suggestions?",id:"have-suggestions",children:[]}],u={toc:p};function s(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Pipeline Version"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Date Updated"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Documentation Author"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Questions or Feedback"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/releases"},"MultiSampleSmartSeq2SingleNuclei_v1.0.0.")),(0,l.kt)("td",{parentName:"tr",align:"center"},"May, 2021"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"mailto:ekiernan@broadinstitute.org"},"Elizabeth Kiernan")),(0,l.kt)("td",{parentName:"tr",align:"center"},"Please file GitHub issues in WARP or contact ",(0,l.kt)("a",{parentName:"td",href:"mailto:kdegatano@broadinstitute.org"},"Kylee Degatano"))))),(0,l.kt)("h2",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"The Smart-seq2 Single Nucleus Multi-Sample (Multi-snSS2) Pipeline is a wrapper around the ",(0,l.kt)("a",{parentName:"p",href:"../Smart-seq2_Single_Nucleus_Pipeline/"},"Smart-seq2 Single Nucleus")," pipeline. It is developed in collaboration with the ",(0,l.kt)("a",{parentName:"p",href:"https://biccn.org/"},"BRAIN Initiative Cell Census Network")," to process single-nucleus RNAseq (snRNAseq) data generated by ",(0,l.kt)("a",{parentName:"p",href:"https://www.nature.com/articles/nmeth.2639"},"Smart-seq2 assays"),". The pipeline's workflow is written in WDL, is freely available in the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/develop/pipelines/skylab/smartseq2_single_nucleus_multisample/MultiSampleSmartSeq2SingleNucleus.wdl"},"WARP repository")," on GitHub, and can be run by any compliant WDL runner (e.g. ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/cromwell"},"Crowmell"),").  "),(0,l.kt)("p",null,"The workflow processes multiple cells by importing and running the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/develop/pipelines/skylab/smartseq2_single_nucleus/SmartSeq2SingleNucleus.wdl"},"Smart-seq2 Single Nucleus workflow")," for each cell and then merging the resulting count matrices (Loom format) into a single matrix that includes exonic and intronic counts, as well as quality metrics."),(0,l.kt)("p",null,"Full details about the Smart-seq2 pipeline can be read in the ",(0,l.kt)("a",{parentName:"p",href:"../Smart-seq2_Single_Nucleus_Pipeline/"},"Smart-seq2 Single Sample Overivew")," in WARP documentation."),(0,l.kt)("h2",{id:"inputs"},"Inputs"),(0,l.kt)("p",null,"An ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/master/pipelines/skylab/smartseq2_single_nucleus_multisample/human_single_example.json"},"example configuration file (JSON)")," is available to test the pipeline."),(0,l.kt)("h3",{id:"sample-and-reference-inputs"},"Sample and Reference Inputs"),(0,l.kt)("p",null,"The workflow sample and reference inputs are identical to those specified in the ",(0,l.kt)("a",{parentName:"p",href:"../Smart-seq2_Single_Nucleus_Pipeline/"},"Smart-seq2 Single Nucleus Overview")," with the exception of the additional inputs specified in the table below. "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Input name"),(0,l.kt)("th",{parentName:"tr",align:null},"Input Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Input Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fastq1_input_files"),(0,l.kt)("td",{parentName:"tr",align:null},"Cloud locations for each read1 file"),(0,l.kt)("td",{parentName:"tr",align:null},"Array of strings")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fastq2_input_files"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional cloud locations for each read2 file"),(0,l.kt)("td",{parentName:"tr",align:null},"Array of strings")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"input_ids"),(0,l.kt)("td",{parentName:"tr",align:null},"Unique identifiers or names for each cell; can be a UUID or human-readable name"),(0,l.kt)("td",{parentName:"tr",align:null},"Array of strings")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"input_names"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional unique identifiers/names to further describe each cell. If ",(0,l.kt)("inlineCode",{parentName:"td"},"input_id")," is a UUID, the ",(0,l.kt)("inlineCode",{parentName:"td"},"input_name")," could be used as a human-readable identifier"),(0,l.kt)("td",{parentName:"tr",align:null},"String")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batch_id"),(0,l.kt)("td",{parentName:"tr",align:null},"Identifier for the batch of multiple samples"),(0,l.kt)("td",{parentName:"tr",align:null},"String")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batch_name"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional string to describe the batch or biological sample"),(0,l.kt)("td",{parentName:"tr",align:null},"String")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"input_name_metadata_field"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional input describing, when applicable, the metadata field containing the ",(0,l.kt)("inlineCode",{parentName:"td"},"input_names")),(0,l.kt)("td",{parentName:"tr",align:null},"String")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"input_id_metadata_field"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional string describing, when applicable, the metadata field containing the ",(0,l.kt)("inlineCode",{parentName:"td"},"input_ids")),(0,l.kt)("td",{parentName:"tr",align:null},"String")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"project_id")),(0,l.kt)("td",{parentName:"tr",align:null},"Optional project identifier; usually a number"),(0,l.kt)("td",{parentName:"tr",align:null},"String")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"project_name")),(0,l.kt)("td",{parentName:"tr",align:null},"Optional project identifier; usually a human-readable name"),(0,l.kt)("td",{parentName:"tr",align:null},"String")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"library")),(0,l.kt)("td",{parentName:"tr",align:null},"Optional description of the sequencing method or approach"),(0,l.kt)("td",{parentName:"tr",align:null},"String")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"organ")),(0,l.kt)("td",{parentName:"tr",align:null},"Optional description of the organ from which the cells were derived"),(0,l.kt)("td",{parentName:"tr",align:null},"String")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"species")),(0,l.kt)("td",{parentName:"tr",align:null},"Optional description of the species from which the cells were derived"),(0,l.kt)("td",{parentName:"tr",align:null},"String")))),(0,l.kt)("h3",{id:"smart-seq2-multi-sample-task-summary"},"Smart-seq2 Multi-Sample Task Summary"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Task name and link to WDL"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Software"),(0,l.kt)("th",{parentName:"tr",align:null},"Tools"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/blob/develop/tasks/skylab/CheckInputs.wdl"},"CheckInputs.checkInputArrays")),(0,l.kt)("td",{parentName:"tr",align:null},"Checks the inputs and initiates the per cell processing"),(0,l.kt)("td",{parentName:"tr",align:null},"Bash"),(0,l.kt)("td",{parentName:"tr",align:null},"NA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/blob/develop/pipelines/skylab/smartseq2_single_nucleus/SmartSeq2SingleNucleus.wdl"},"single_nucleus_run.SmartSeq2SingleNucleus")),(0,l.kt)("td",{parentName:"tr",align:null},"Calls the Smart-seq2 Single Nucleus workflow to perform alignment, deduplication, quality metric calculating, and exon and intron counting. Produces a final matrix (Loom format) with counts and metrics"),(0,l.kt)("td",{parentName:"tr",align:null},"See the ",(0,l.kt)("a",{parentName:"td",href:"../Smart-seq2_Single_Nucleus_Pipeline/"},"Smart-seq2 Single Nucleus Overview")," for details about task software"),(0,l.kt)("td",{parentName:"tr",align:null},"See the ",(0,l.kt)("a",{parentName:"td",href:"../Smart-seq2_Single_Nucleus_Pipeline/"},"Smart-seq2 Single Nucleus Overview")," for details about task tools")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/blob/develop/tasks/skylab/LoomUtils.wdl"},"LoomUtils.AggregateSmartSeq2Loom")),(0,l.kt)("td",{parentName:"tr",align:null},"Aggregates the matrix files (Loom format) for each sample to produce one final Loom output"),(0,l.kt)("td",{parentName:"tr",align:null},"Python 3"),(0,l.kt)("td",{parentName:"tr",align:null},"Custom script: ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/blob/develop/dockers/skylab/loom-output/ss2_loom_merge.py"},"ss2_loom_merge.py"))))),(0,l.kt)("h3",{id:"outputs"},"Outputs"),(0,l.kt)("p",null,"The following table lists the outputs of the Multi-snSS2 workflow."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Output file name"),(0,l.kt)("th",{parentName:"tr",align:null},"Output Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Output Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bam_files"),(0,l.kt)("td",{parentName:"tr",align:null},"Array of genome-aligned BAM files (one for each cell) generated with Star"),(0,l.kt)("td",{parentName:"tr",align:null},"Array ","[BAM]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"loom_output"),(0,l.kt)("td",{parentName:"tr",align:null},"Cell-by-gene matrix in Loom format containing intronic and exonic counts for every cell"),(0,l.kt)("td",{parentName:"tr",align:null},"File")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"exon_intron_count_files"),(0,l.kt)("td",{parentName:"tr",align:null},"Array of TXT files (one per cell) that contain intronic and exonic counts"),(0,l.kt)("td",{parentName:"tr",align:null},"Array ","[TXT]")))),(0,l.kt)("p",null,"The final count matrix (Loom) is an aggregate of all the individual matrix files generated using the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/master/pipelines/skylab/smartseq2_single_nucleus/SmartSeq2SingleNucleus.wdl"},"Smart-seq2 Single Nucleus workflow"),". "),(0,l.kt)("p",null,"The aggregated matrix filename contains the ",(0,l.kt)("inlineCode",{parentName:"p"},"batch_id")," prefix, which is the string specified in the input configuration. The ",(0,l.kt)("inlineCode",{parentName:"p"},"batch_id")," is also set as a global attribute in the Loom."),(0,l.kt)("p",null,"The individual sample Loom files are described in the ",(0,l.kt)("a",{parentName:"p",href:"../Smart-seq2_Single_Nucleus_Pipeline/"},"Smart-seq2 Single Nucleus Overview"),"."),(0,l.kt)("h2",{id:"validation"},"Validation"),(0,l.kt)("p",null,"The Multi-snSS2 pipeline was scientifically validated by the BRAIN Initiatives Cell Census Network (BICCN) 2.0 Whole Mouse Brain Working Group. "),(0,l.kt)("h2",{id:"versioning"},"Versioning"),(0,l.kt)("p",null,"Release information for the Smart-seq2 Single Nucleus Multi-Sample Pipeline can be found in the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/develop/pipelines/skylab/smartseq2_single_nucleus_multisample/MultiSampleSmartSeq2SingleNucleus.changelog.md"},"changelog"),". Please note that any major changes to the Smart-seq2 Single Nucleus workflow will be documented in the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/develop/pipelines/skylab/smartseq2_single_nucleus/SmartSeq2SingleNucleus.changelog.md"},"Smart-seq2 Single Nucleus changelog"),"."),(0,l.kt)("h2",{id:"have-suggestions"},"Have Suggestions?"),(0,l.kt)("p",null,"Help us make our tools better by contacting ",(0,l.kt)("a",{parentName:"p",href:"mailto:kdegatano@broadinstitute.org"},"Kylee Degatano")," for pipeline-related suggestions or questions."))}s.isMDXComponent=!0}}]);