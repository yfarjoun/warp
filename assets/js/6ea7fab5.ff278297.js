(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[2726],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),o=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=o(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),d=o(n),c=r,g=d["".concat(s,".").concat(c)]||d[c]||u[c]||l;return n?a.createElement(g,i(i({ref:e},m),{},{components:n})):a.createElement(g,i({ref:e},m))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=d;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5646:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),i={sidebar_position:3},p={unversionedId:"Pipelines/Optimus_Pipeline/Bam_tags",id:"Pipelines/Optimus_Pipeline/Bam_tags",isDocsHomePage:!1,title:"What tags are included in an Optimus BAM file?",description:"The Optimus Pipeline outputs a barcoded BAM file of aligned reads. There are multiple tags within the BAM file, including standard tags from 10X genomics and Sequence Alignment Map (SAM) files. The table below details the tags used by the Optimus Pipeline and the relevant sources/tools from which the pipeline obtains the tags.",source:"@site/docs/Pipelines/Optimus_Pipeline/Bam_tags.md",sourceDirName:"Pipelines/Optimus_Pipeline",slug:"/Pipelines/Optimus_Pipeline/Bam_tags",permalink:"/warp/docs/Pipelines/Optimus_Pipeline/Bam_tags",editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/Pipelines/Optimus_Pipeline/Bam_tags.md",version:"current",lastUpdatedBy:"Chengchen(Rex) Wang",lastUpdatedAt:1623770417,formattedLastUpdatedAt:"6/15/2021",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Optimus v4.2.4 Methods",permalink:"/warp/docs/Pipelines/Optimus_Pipeline/optimus.methods"},next:{title:"Optimus Count Matrix Overview",permalink:"/warp/docs/Pipelines/Optimus_Pipeline/Loom_schema"}},s=[],o={toc:s};function m(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The Optimus Pipeline outputs a barcoded BAM file of aligned reads. There are multiple tags within the BAM file, including standard tags from ",(0,l.kt)("a",{parentName:"p",href:"https://support.10xgenomics.com/single-cell-gene-expression/software/pipelines/latest/output/bam"},"10X genomics")," and ",(0,l.kt)("a",{parentName:"p",href:"https://samtools.github.io/hts-specs/SAMtags.pdf"},"Sequence Alignment Map (SAM) files"),". The table below details the tags used by the Optimus Pipeline and the relevant sources/tools from which the pipeline obtains the tags."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Optimus Pipeline BAM Tag"),(0,l.kt)("th",{parentName:"tr",align:null},"Details"),(0,l.kt)("th",{parentName:"tr",align:null},"Source"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AS"),(0,l.kt)("td",{parentName:"tr",align:null},"Alignment score generated by aligner"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://samtools.github.io/hts-specs/SAMtags.pdf"},"SAM"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CB"),(0,l.kt)("td",{parentName:"tr",align:null},"Chromium cellular barcode sequence that is error-corrected and confirmed against a list of known-good barcode sequences"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://support.10xgenomics.com/single-cell-gene-expression/software/pipelines/latest/output/bam"},"10X Genomics"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CR"),(0,l.kt)("td",{parentName:"tr",align:null},"Chromium cellular barcode sequence as reported by the sequencer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://support.10xgenomics.com/single-cell-gene-expression/software/pipelines/latest/output/bam"},"10X Genomics"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CY"),(0,l.kt)("td",{parentName:"tr",align:null},"Chromium cellular barcode read quality. Phred scores as reported by sequencer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://support.10xgenomics.com/single-cell-gene-expression/software/pipelines/latest/output/bam"},"10X Genomics"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GE"),(0,l.kt)("td",{parentName:"tr",align:null},"Gene exon"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/Drop-seq"},"Drop-seq Tools"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GS"),(0,l.kt)("td",{parentName:"tr",align:null},"Reserved for backwards compatibility reasons"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://samtools.github.io/hts-specs/SAMtags.pdf"},"SAM"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HI"),(0,l.kt)("td",{parentName:"tr",align:null},"Query hit index"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://samtools.github.io/hts-specs/SAMtags.pdf"},"SAM"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MD"),(0,l.kt)("td",{parentName:"tr",align:null},"String for mismatching indexes"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://samtools.github.io/hts-specs/SAMtags.pdf"},"SAM"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NH"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of reported alignments that contain the query in the current record"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://samtools.github.io/hts-specs/SAMtags.pdf"},"SAM"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NM"),(0,l.kt)("td",{parentName:"tr",align:null},"Edit difference to the reference"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://samtools.github.io/hts-specs/SAMtags.pdf"},"SAM"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RG"),(0,l.kt)("td",{parentName:"tr",align:null},"Read group"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://samtools.github.io/hts-specs/SAMtags.pdf"},"SAM"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UB"),(0,l.kt)("td",{parentName:"tr",align:null},"Chromium molecular barcode sequence that is error-corrected among other molecular barcodes with the same cellular barcode and gene alignment"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://support.10xgenomics.com/single-cell-gene-expression/software/pipelines/latest/output/bam"},"10X Genomics"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UG"),(0,l.kt)("td",{parentName:"tr",align:null},"Read group ID"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/CGATOxford/UMI-tools"},"Umi-tools"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UR"),(0,l.kt)("td",{parentName:"tr",align:null},"Chromium molecular barcode sequence as reported by the sequencer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://support.10xgenomics.com/single-cell-gene-expression/software/pipelines/latest/output/bam"},"10X Genomics"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UY"),(0,l.kt)("td",{parentName:"tr",align:null},"Chromium molecular barcode read quality. Phred scores as reported by sequencer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://support.10xgenomics.com/single-cell-gene-expression/software/pipelines/latest/output/bam"},"10X Genomics"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"XF"),(0,l.kt)("td",{parentName:"tr",align:null},"Extra alignment flags"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://support.10xgenomics.com/single-cell-gene-expression/software/pipelines/latest/output/bam"},"10X Genomics"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"jI"),(0,l.kt)("td",{parentName:"tr",align:null},"[jI:B:I,Start1,End1,Start2,End2,...]"," Start and End of introns for all junctions (1-based)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/alexdobin/STAR"},"STAR"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"jM"),(0,l.kt)("td",{parentName:"tr",align:null},"[jM:B:c,M1,M2,...]"," Intron motifs for all junctions (i.e. N in CIGAR)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/alexdobin/STAR"},"STAR"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nM"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of mismatches per (paired) alignment"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/alexdobin/STAR"},"STAR"))))))}m.isMDXComponent=!0}}]);