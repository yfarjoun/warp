"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[1595],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),u=r,h=p["".concat(s,".").concat(u)]||p[u]||m[u]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},5881:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return N},default:function(){return y},frontMatter:function(){return f},metadata:function(){return w},toc:function(){return T}});var a=n(7462),r=n(3366),o=n(7294),i=n(3905),l=n(9443);var s=function(){var e=(0,o.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=n(6010),d="tabItem_1uMI",m="tabItemActive_2DSg";var p=37,u=39;var h=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,r=e.values,i=e.groupId,l=e.className,h=s(),k=h.tabGroupChoices,g=h.setTabGroupChoices,b=(0,o.useState)(a),v=b[0],f=b[1],N=o.Children.toArray(e.children),w=[];if(null!=i){var T=k[i];null!=T&&T!==v&&r.some((function(e){return e.value===T}))&&f(T)}var _=function(e){var t=e.currentTarget,n=w.indexOf(t),a=r[n].value;f(a),null!=i&&(g(i,a),setTimeout((function(){var e,n,a,r,o,i,l,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,l=i.innerHeight,s=i.innerWidth,n>=0&&o<=s&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(m),setTimeout((function(){return t.classList.remove(m)}),2e3))}),150))},y=function(e){var t,n;switch(e.keyCode){case u:var a=w.indexOf(e.target)+1;n=w[a]||w[0];break;case p:var r=w.indexOf(e.target)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":n},l)},r.map((function(e){var t=e.value,n=e.label;return o.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,c.Z)("tabs__item",d,{"tabs__item--active":v===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:y,onFocus:_,onClick:_},n)}))),t?(0,o.cloneElement)(N.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))};var k=function(e){var t=e.children,n=e.hidden,a=e.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:a},t)},g="tableOfContentsInline_3fWc";function b(e){var t=e.toc,n=e.isChild;return t.length?o.createElement("ul",{className:n?"":"table-of-contents"},t.map((function(e){return o.createElement("li",{key:e.id},o.createElement("a",{href:"#"+e.id,dangerouslySetInnerHTML:{__html:e.value}}),o.createElement(b,{isChild:!0,toc:e.children}))}))):null}var v=function(e){var t=e.toc;return o.createElement("div",{className:(0,c.Z)(g)},o.createElement(b,{toc:t}))},f={sidebar_position:2},N="Documentation Style Guide",w={unversionedId:"contribution/contribute_to_warp_docs/doc_style",id:"contribution/contribute_to_warp_docs/doc_style",isDocsHomePage:!1,title:"Documentation Style Guide",description:"This guide provides some examples about how to add new documentation that can be properly rendered on this website. Please note most of the Github flavored Markdown syntax should work natrually, this guide just tries to elaboratethe extension syntax to it.",source:"@site/docs/contribution/contribute_to_warp_docs/doc_style.md",sourceDirName:"contribution/contribute_to_warp_docs",slug:"/contribution/contribute_to_warp_docs/doc_style",permalink:"/warp/docs/contribution/contribute_to_warp_docs/doc_style",editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/contribution/contribute_to_warp_docs/doc_style.md",tags:[],version:"current",lastUpdatedBy:"Jessica Way",lastUpdatedAt:1650562028,formattedLastUpdatedAt:"4/21/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"WARP Documentation Maintenance Guide",permalink:"/warp/docs/contribution/contribute_to_warp_docs/docsite_maintenance"}},T=[{value:"1. Insert code blocks",id:"1-insert-code-blocks",children:[]},{value:"2. Insert tables",id:"2-insert-tables",children:[]},{value:"3. Cross-reference and anchor",id:"3-cross-reference-and-anchor",children:[]},{value:"4. Centered text block",id:"4-centered-text-block",children:[]},{value:"5. Text with color backgorund",id:"5-text-with-color-backgorund",children:[]},{value:"6. Custom containers",id:"6-custom-containers",children:[]},{value:"7. Code groups",id:"7-code-groups",children:[]},{value:"8. Footnotes",id:"8-footnotes",children:[]},{value:"9. Insert images",id:"9-insert-images",children:[]},{value:"10. Insert Table of Contents (ToC)",id:"10-insert-table-of-contents-toc",children:[]}],_={toc:T};function y(e){var t=e.components,o=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},_,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"documentation-style-guide"},"Documentation Style Guide"),(0,i.kt)("p",null,"This guide provides some examples about how to add new documentation that can be properly rendered on this website. Please note most of the Github flavored ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/"},"Markdown")," syntax should work natrually, this guide just tries to elaboratethe extension syntax to it."),(0,i.kt)("h2",{id:"1-insert-code-blocks"},"1. Insert code blocks"),(0,i.kt)("p",null,"This site supports inserting code blocks with highlighted lines, for examples, the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},'```wdl {3-4,7-11} title="SortBam.wdl"\ntask SortBam {\n    input {\n        File bam_input\n        String sort_order = "coordinate"\n\n        # runtime values\n        String docker = "us.gcr.io/broad-gotc-prod/picard-cloud:2.26.10"\n        Int machine_mem_mb = 8250\n        Int machine_overhead_mb = 500\n        Int cpu = 1\n        Int preemptible = 3\n    }\n\n    Int command_mem_mb = machine_mem_mb - machine_overhead_mb\n    Int disk = ceil(size(bam_input, "Gi") * 6) + 50\n\n    meta {\n        description: "Sorts bam"\n    }\n\n    command {\n        set -e\n\n        java -Xmx${command_mem_mb}m -jar /usr/picard/picard.jar SortSam \\\n              I=${bam_input} \\\n              O=sorted.bam \\\n              SORT_ORDER=${sort_order}\n    }\n\n    runtime {\n        docker: docker\n        memory: "${machine_mem_mb} MiB"\n        disks: "local-disk ${disk} HDD"\n        cpu: cpu\n        preemptible: preemptible\n    }\n\n    output {\n        File bam_output = "sorted.bam"\n    }\n}\n```\n')),(0,i.kt)("p",null,"will result in a rendered code block like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-wdl",metastring:'{3-4,7-11} title="SortBam.wdl"',"{3-4,7-11}":!0,title:'"SortBam.wdl"'},'task SortBam {\n    input {\n        File bam_input\n        String sort_order = "coordinate"\n\n        # runtime values\n        String docker = "us.gcr.io/broad-gotc-prod/picard-cloud:2.26.10"\n        Int machine_mem_mb = 8250\n        Int machine_overhead_mb = 500\n        Int cpu = 1\n        Int preemptible = 3\n    }\n\n    Int command_mem_mb = machine_mem_mb - machine_overhead_mb\n    Int disk = ceil(size(bam_input, "Gi") * 6) + 50\n\n    meta {\n        description: "Sorts bam"\n    }\n\n    command {\n        set -e\n\n        java -Xmx${command_mem_mb}m -jar /usr/picard/picard.jar SortSam \\\n              I=${bam_input} \\\n              O=sorted.bam \\\n              SORT_ORDER=${sort_order}\n    }\n\n    runtime {\n        docker: docker\n        memory: "${machine_mem_mb} MiB"\n        disks: "local-disk ${disk} HDD"\n        cpu: cpu\n        preemptible: preemptible\n    }\n\n    output {\n        File bam_output = "sorted.bam"\n    }\n}\n')),(0,i.kt)("h2",{id:"2-insert-tables"},"2. Insert tables"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},"| Some Table Col 1 | Some Table Col 2 |\n| :--------------: | :--------------: |\n|       Val1       |       Val4       |\n|       Val2       |       Val5       |\n|       Val3       |       Val6       |\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Some Table Col 1"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Some Table Col 2"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Val1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Val4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Val2"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Val5")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Val3"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Val6")))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"TIP")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"It's worth mentioning that ",(0,i.kt)("a",{parentName:"p",href:"https://www.tablesgenerator.com/markdown_tables"},"Tables Generator")," is a great tool for generating and re-formatting markdown tables."))),(0,i.kt)("h2",{id:"3-cross-reference-and-anchor"},"3. Cross-reference and anchor"),(0,i.kt)("p",null,"To link to another section within the same article, you would use ",(0,i.kt)("inlineCode",{parentName:"p"},"[Return to ## 1. Insert code blocks](#_1-insert-code-blocks)"),": ",(0,i.kt)("a",{parentName:"p",href:"#_1-insert-code-blocks"},"Return to ## 1. Insert code blocks"),"."),(0,i.kt)("p",null,"To link to sections in other articles, use the following syntax (note the relative paths):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[Return to Changelog Style Guide](../contribute_to_warp/changelog_style)"),": ",(0,i.kt)("a",{parentName:"li",href:"../contribute_to_warp/changelog_style"},"Return to Changelog Style Guide")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[Return to The Documentation](/warp/docs/About_WARP/BestPractices#Best-Practices-for-Building-Data-Processing Pipelines)"),": ",(0,i.kt)("a",{parentName:"li",href:"/warp/docs/About_WARP/BestPractices#Best-Practices-for-Building-Data-Processing-Pipelines"},"Return to The Documentation"))),(0,i.kt)("h2",{id:"4-centered-text-block"},"4. Centered text block"),(0,i.kt)("p",null,"To make a text block centered, use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},"<center>\nCentered Text Block!\n</center>\n")),(0,i.kt)("center",null,"Centered Text Block!"),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"NOTE")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"For images, you ",(0,i.kt)("strong",{parentName:"p"},"HAVE TO")," insert blank lines to make them work:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-md"},"<center>\n\n![](./some_pic.png)\n\n</center>\n")))),(0,i.kt)("h2",{id:"5-text-with-color-backgorund"},"5. Text with color backgorund"),(0,i.kt)("p",null,"You could use the following to highlight your text:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<span id="inline-blue"> Text with blue background </span>,\n<span id="inline-purple"> Text with purple background </span>,\n<span id="inline-yellow"> Text with yellow background </span>,\n<span id="inline-green"> Text with green background </span>\n')),(0,i.kt)("span",{id:"inline-blue"}," Text with blue background "),",",(0,i.kt)("span",{id:"inline-purple"}," Text with purple background "),",",(0,i.kt)("span",{id:"inline-yellow"}," Text with yellow background "),",",(0,i.kt)("span",{id:"inline-green"}," Text with green background "),(0,i.kt)("h2",{id:"6-custom-containers"},"6. Custom containers"),(0,i.kt)("p",null,"As we already saw in this guide several places, we could add custom containers:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},":::tip\nThis is a tip without title!\n:::\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This is a tip without title!"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},":::tip TITLE\nThis is a tip with a title!\n:::\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"TITLE")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This is a tip with a title!"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},":::caution WARNING\nThis is a warning!\n:::\n")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"WARNING")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This is a warning!"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},":::danger DANGER\nThis is a danger!\n:::\n")),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"DANGER")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This is a danger!"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},":::info INFO\nThis is a info!\n:::\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"INFO")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This is a info!"))),(0,i.kt)("h2",{id:"7-code-groups"},"7. Code groups"),(0,i.kt)("p",null,"You could also insert tab-based code groups:"),(0,i.kt)(h,{defaultValue:"apple",values:[{label:"Apple",value:"apple"},{label:"Orange",value:"orange"},{label:"Banana",value:"banana"}],mdxType:"Tabs"},(0,i.kt)(k,{value:"apple",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'print("This is an apple pipeline!")\n'))),(0,i.kt)(k,{value:"orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,i.kt)(k,{value:"banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import Tabs from '@theme/Tabs';\nimport TabItem from '@theme/TabItem';\n\n<Tabs\n  defaultValue=\"apple\"\n  values={[\n    {label: 'Apple', value: 'apple'},\n    {label: 'Orange', value: 'orange'},\n    {label: 'Banana', value: 'banana'},\n  ]}>\n  <TabItem value=\"apple\">This is an apple \ud83c\udf4e</TabItem>\n  <TabItem value=\"orange\">This is an orange \ud83c\udf4a</TabItem>\n  <TabItem value=\"banana\">This is a banana \ud83c\udf4c</TabItem>\n</Tabs>;\n")),(0,i.kt)("p",null,"For more details, please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features/tabs"},"Docusaurus Docs")),(0,i.kt)("h2",{id:"8-footnotes"},"8. Footnotes"),(0,i.kt)("p",null,"It is important to cite the references, to do so, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"markdown-it"),"'s footnotes syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},"This sentence has a footnote[^1]. (See footnote at the bottom of this guide.)\n\n[^1]: I'm a footnote!\n")),(0,i.kt)("p",null,"which results in:"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"This sentence has a footnote",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". (See footnote at the bottom of this guide.)"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"We could also write in-line footnotes, which is much easier to write without counting back and forth:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},"This sentence has another footnote ^[I'm another footnote] (See footnote at the bottom of this page.)\n")),(0,i.kt)("p",null,"which has the same effect:"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"This sentence has another footnote ^","[I'm another footnote]"," (See footnote at the bottom of this page.)"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"9-insert-images"},"9. Insert images"),(0,i.kt)("p",null,"Insert images is as straight-forward as using the ordinary markdown syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},"![terra](./Terra_warp.png)\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"terra",src:n(8938).Z})),(0,i.kt)("h2",{id:"10-insert-table-of-contents-toc"},"10. Insert Table of Contents (ToC)"),(0,i.kt)("p",null,"You could use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import TOCInline from '@theme/TOCInline';\n\n<TOCInline toc={toc} />;\n")),(0,i.kt)("p",null,"to insert in-line ToC:"),(0,i.kt)(v,{toc:T,mdxType:"TOCInline"}),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"I'm a footnote!",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}y.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})},8938:function(e,t,n){t.Z=n.p+"assets/images/Terra_warp-383d77605a5c6872f88d2b82c2a3108f.png"}}]);