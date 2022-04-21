"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[5330],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),s=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,b=m["".concat(u,".").concat(d)]||m[d]||c[d]||a;return n?i.createElement(b,o(o({ref:t},p),{},{components:n})):i.createElement(b,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4971:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return c}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o={sidebar_position:2},l="WDL Task Runtime Style Guide Overview",u={unversionedId:"contribution/contribute_to_warp/wdl_task_runtime_style",id:"contribution/contribute_to_warp/wdl_task_runtime_style",isDocsHomePage:!1,title:"WDL Task Runtime Style Guide Overview",description:"This style guide provides formatting guidelines and best practices for the runtime block of a WDL workflow task. For more information about scripting in WDL, see the WDL 1.0 Specification.",source:"@site/docs/contribution/contribute_to_warp/wdl_task_runtime_style.md",sourceDirName:"contribution/contribute_to_warp",slug:"/contribution/contribute_to_warp/wdl_task_runtime_style",permalink:"/warp/docs/contribution/contribute_to_warp/wdl_task_runtime_style",editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/contribution/contribute_to_warp/wdl_task_runtime_style.md",tags:[],version:"current",lastUpdatedBy:"Jessica Way",lastUpdatedAt:1650562028,formattedLastUpdatedAt:"4/21/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Changelog Style Guide Overview",permalink:"/warp/docs/contribution/contribute_to_warp/changelog_style"},next:{title:"Contributing to Existing Pipelines",permalink:"/warp/docs/contribution/contribute_to_warp/contribution-guidelines"}},s=[{value:"Variables and suggested configurations",id:"variables-and-suggested-configurations",children:[]},{value:"Example task input",id:"example-task-input",children:[]},{value:"Example task runtime",id:"example-task-runtime",children:[]}],p={toc:s};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"wdl-task-runtime-style-guide-overview"},"WDL Task Runtime Style Guide Overview"),(0,a.kt)("p",null,"This style guide provides formatting guidelines and best practices for the runtime block of a WDL workflow task. For more information about scripting in WDL, see the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openwdl/wdl/blob/main/SPEC.md"},"WDL 1.0 Specification"),"."),(0,a.kt)("h2",{id:"variables-and-suggested-configurations"},"Variables and suggested configurations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Disk",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Set in GiB"),(0,a.kt)("li",{parentName:"ul"},"Variable type is Int"),(0,a.kt)("li",{parentName:"ul"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"local-disk")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"HDD")),(0,a.kt)("li",{parentName:"ul"},"Default should be dynamically set based on task inputs"),(0,a.kt)("li",{parentName:"ul"},"Variable name should be ",(0,a.kt)("inlineCode",{parentName:"li"},"disk_size_gb")))),(0,a.kt)("li",{parentName:"ul"},"Memory",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Set in MiB"),(0,a.kt)("li",{parentName:"ul"},"Variable type is Int"),(0,a.kt)("li",{parentName:"ul"},"Default should be dynamically set based on task inputs"),(0,a.kt)("li",{parentName:"ul"},"Variable name should be ",(0,a.kt)("inlineCode",{parentName:"li"},"memory_mb")))),(0,a.kt)("li",{parentName:"ul"},"CPU",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Default set to 1"),(0,a.kt)("li",{parentName:"ul"},"Variable name should be ",(0,a.kt)("inlineCode",{parentName:"li"},"cpu")))),(0,a.kt)("li",{parentName:"ul"},"Docker",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Variable name should be ",(0,a.kt)("inlineCode",{parentName:"li"},"docker"))))),(0,a.kt)("h2",{id:"example-task-input"},"Example task input"),(0,a.kt)("p",null,"Include runtime variables in the task inputs. Always provide a default value. Separate runtime variables from task inputs with one blank line."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    input {\n        File example_file\n\n        String docker = "us.gcr.io/path/to/docker"\n        Int cpu = 1\n        Int memory_mb = ceil(size(example_file, "MiB"))\n        Int disk_size_db = ceil(size(example_file, "GiB"))\n    }\n')),(0,a.kt)("h2",{id:"example-task-runtime"},"Example task runtime"),(0,a.kt)("p",null,"Runtime block should be positioned between the command and output blocks of the task."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    runtime {\n        docker: docker\n        cpu: cpu\n        memory: "${memory_mb} MiB"\n        disks: "local-disk ${disk_size_gb} HDD"\n    }\n')))}c.isMDXComponent=!0}}]);