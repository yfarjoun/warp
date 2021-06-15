(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[2024],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1770:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o={sidebar_position:2},l={unversionedId:"Pipelines/Smart-seq2_Multi_Sample_Pipeline/smart-seq2.methods",id:"Pipelines/Smart-seq2_Multi_Sample_Pipeline/smart-seq2.methods",isDocsHomePage:!1,title:"Smart-seq2 Multi-Sample v2.2.1 Publication Methods",description:"Below we provide a sample methods sections for a publication. For the complete pipeline documentation, see the Smart-seq2 Multi-Sample Overview.",source:"@site/docs/Pipelines/Smart-seq2_Multi_Sample_Pipeline/smart-seq2.methods.md",sourceDirName:"Pipelines/Smart-seq2_Multi_Sample_Pipeline",slug:"/Pipelines/Smart-seq2_Multi_Sample_Pipeline/smart-seq2.methods",permalink:"/warp/docs/Pipelines/Smart-seq2_Multi_Sample_Pipeline/smart-seq2.methods",editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/Pipelines/Smart-seq2_Multi_Sample_Pipeline/smart-seq2.methods.md",version:"current",lastUpdatedBy:"Chengchen(Rex) Wang",lastUpdatedAt:1623770417,formattedLastUpdatedAt:"6/15/2021",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Smart-seq2 Multi-Sample Overview",permalink:"/warp/docs/Pipelines/Smart-seq2_Multi_Sample_Pipeline/README"},next:{title:"What's in the Smart-seq2 Multi Sample Pipeline Loom File?",permalink:"/warp/docs/Pipelines/Smart-seq2_Multi_Sample_Pipeline/Loom_schema"}},s=[{value:"Methods",id:"methods",children:[]}],p={toc:s};function c(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Below we provide a sample methods sections for a publication. For the complete pipeline documentation, see the ",(0,a.kt)("a",{parentName:"p",href:"/warp/docs/Pipelines/Smart-seq2_Multi_Sample_Pipeline/README"},"Smart-seq2 Multi-Sample Overview"),"."),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("p",null,"Data preprocessing and count matrix construction for a sample batch (or plate) were performed using the Smart-seq2 Multi-Sample v2.2.0 Pipeline (RRID:SCR_018920). For each cell in the batch, paired- or single-end FASTQ files were first processed with the Smart-seq2 Single Sample v5.1.1 Pipeline (RRID:SCR_021228). Reads were aligned to the GENCODE mouse (M21) or human (V27) reference genome using HISAT2 v2.1.0 with default parameters in addition to ",(0,a.kt)("inlineCode",{parentName:"p"},"--k 10")," options. Metrics were collected and duplicate reads marked using the Picard v.2.10.10 ",(0,a.kt)("inlineCode",{parentName:"p"},"CollectMultipleMetrics")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"CollectRnaSeqMetrics"),", and MarkDuplicates functions with validation_stringency=silent. For transcriptome quantification, reads were aligned to the GENCODE transcriptome using HISAT2 v2.1.0 with ",(0,a.kt)("inlineCode",{parentName:"p"},"--k 10 --no-mixed  --no-softclip  --no-discordant --rdg 99999999,99999999 --rfg 99999999,99999999 --no-spliced-alignment")," options. Gene expression was calculated using RSEM v1.3.0\u2019s ",(0,a.kt)("inlineCode",{parentName:"p"},"rsem-calculate-expression --calc-pme --single-cell-prior"),". QC metrics, RSEM TPMs and RSEM estimated counts were exported to a single Loom file for each cell. All individual Loom files for the entire batch were aggregated into a single Loom file for downstream processing. The final output included the unfiltered Loom and the tagged, unfiltered individual BAM files."),(0,a.kt)("p",null,"An example of the pipeline and outputs can be found in ",(0,a.kt)("a",{parentName:"p",href:"https://app.terra.bio/#workspaces/featured-workspaces-hca/HCA%20Smart-seq2%20Multi%20Sample%20Pipeline"},"Terra")," and additional documentation can be found in the ",(0,a.kt)("a",{parentName:"p",href:"/warp/docs/Pipelines/Smart-seq2_Multi_Sample_Pipeline/README"},"Smart-seq2 Multi-Sample Overview"),". Examples of genomic references, whitelists, and other inputs are available in the Skylab repository (see the *_example.json files at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/master/pipelines/skylab/smartseq2_multisample/human_single_example.json"},"human_single_example"),"."))}c.isMDXComponent=!0}}]);