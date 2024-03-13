"use strict";(self.webpackChunkmy_github=self.webpackChunkmy_github||[]).push([[2019],{80739:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var i=e(74848),r=e(28453);const l={title:"printk \u6253\u5370\u7684\u53c2\u6570\u5f02\u5e38\u95ee\u9898",tags:["C\u8bed\u8a00","\u53d8\u53c2\u51fd\u6570","printk"],authors:"cttmayi"},s=void 0,a={permalink:"/blog/2019/11/26/printk\u6253\u5370\u7684\u53c2\u6570\u5f02\u5e38\u95ee\u9898",source:"@site/blog/2019-11-26-printk\u6253\u5370\u7684\u53c2\u6570\u5f02\u5e38\u95ee\u9898/index.md",title:"printk \u6253\u5370\u7684\u53c2\u6570\u5f02\u5e38\u95ee\u9898",description:"\u5982\u4e0b\u4e00\u53e5\u7b80\u5355\u7684\u6253\u5370\u51fd\u6570, \u53d1\u73b0\u6253\u5370b\u7684\u7ed3\u679c\u5f88\u5947\u602a, \u4e0d\u7b26\u5408\u9884\u671f, \u90a3\u53ef\u80fd\u662f\u4ec0\u4e48\u539f\u56e0\u5462?",date:"2019-11-26T00:00:00.000Z",formattedDate:"2019\u5e7411\u670826\u65e5",tags:[{label:"C\u8bed\u8a00",permalink:"/blog/tags/c\u8bed\u8a00"},{label:"\u53d8\u53c2\u51fd\u6570",permalink:"/blog/tags/\u53d8\u53c2\u51fd\u6570"},{label:"printk",permalink:"/blog/tags/printk"}],readingTime:1.75,hasTruncateMarker:!1,authors:[{name:"Ling Yuan",title:"Engineer",url:"https://github.com/cttmayi",imageURL:"https://github.com/cttmayi.png",key:"cttmayi"}],frontMatter:{title:"printk \u6253\u5370\u7684\u53c2\u6570\u5f02\u5e38\u95ee\u9898",tags:["C\u8bed\u8a00","\u53d8\u53c2\u51fd\u6570","printk"],authors:"cttmayi"},unlisted:!1,prevItem:{title:"\u5584\u610f\u89e3\u91ca",permalink:"/blog/2020/03/10/\u5584\u610f\u89e3\u91ca"},nextItem:{title:"\u6b63\u786e\u7684\u51b3\u7b56\u4e0d\u7b49\u4e8e\u4f1a\u6709\u6b63\u786e\u7684\u7ed3\u679c",permalink:"/blog/2019/11/20/\u6b63\u786e\u7684\u51b3\u7b56\u4e0d\u7b49\u4e8e\u4f1a\u6709\u6b63\u786e\u7684\u7ed3\u679c"}},d={authorsImageUrls:[void 0]},c=[{value:"\u53d8\u53c2\u51fd\u6570\u8303\u4f8b",id:"\u53d8\u53c2\u51fd\u6570\u8303\u4f8b",level:2},{value:"printk \u53d8\u53c2\u5b9e\u73b0",id:"printk-\u53d8\u53c2\u5b9e\u73b0",level:2},{value:"\u7ed3\u8bba",id:"\u7ed3\u8bba",level:2},{value:"\u53e6\u6ce8: printk\u53ef\u7528\u7684\u683c\u5f0f\u5b57\u7b26",id:"\u53e6\u6ce8-printk\u53ef\u7528\u7684\u683c\u5f0f\u5b57\u7b26",level:2}];function o(n){const t={code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"\u5982\u4e0b\u4e00\u53e5\u7b80\u5355\u7684\u6253\u5370\u51fd\u6570, \u53d1\u73b0\u6253\u5370b\u7684\u7ed3\u679c\u5f88\u5947\u602a, \u4e0d\u7b26\u5408\u9884\u671f, \u90a3\u53ef\u80fd\u662f\u4ec0\u4e48\u539f\u56e0\u5462?"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-C",children:'printk("A=%d, B=%d", a, b);\n'})}),"\n",(0,i.jsx)(t.p,{children:"printk \u5c5e\u4e8e\u53d8\u53c2\u51fd\u6570, \u90a3\u6211\u4eec\u5c31\u4eceC\u8bed\u8a00\u7684\u53d8\u53c2\u51fd\u6570\u5165\u624b."}),"\n",(0,i.jsx)(t.h2,{id:"\u53d8\u53c2\u51fd\u6570\u8303\u4f8b",children:"\u53d8\u53c2\u51fd\u6570\u8303\u4f8b"}),"\n",(0,i.jsx)(t.p,{children:"\u5982\u4e0b\u4e00\u4e2a\u7b80\u5355\u7684\u4efb\u610f\u591a\u4e2a\u52a0\u6570\u7684\u6c42\u548c\u51fd\u6570\u51fd\u6570"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-C",children:"int sum(int num, ...) // \u8fd9\u91cc\u7684num\u4e0d\u662f\u81ea\u52a8\u7684, \u9700\u8981\u8c03\u7528\u8005\u624b\u52a8\u4f20\u5165.\n{  \n    va_list argptr;  \n\n    va_start(argptr, num); // \u6ce8\u91ca1\n    for(i=1; i<num; i++) // \u6ce8\u91ca2\n    {  \n         arg = va_arg(argptr, int);  //\u6ce8\u91ca3\n         total += arg;  \n    }\n    va_end(argptr); //\u65e0\u5b9e\u9645\u610f\u4e49, \u53ea\u662f\u4ece\u903b\u8f91\u4e0a\u8868\u793a\u540e\u7eed\u4e0d\u5728\u4f7f\u7528argptr\n    return(total);  \n}\n"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"\u6ce8\u91ca1:\n\u51fd\u6570\u53c2\u6570\u5b58\u50a8\u4e8e\u6808\u4e2d, \u901a\u8fc7\u6700\u540e\u4e00\u4e2a\u53c2\u6570num\u5728\u6808\u4e2d\u7684\u504f\u79fb\u91cf, \u662f\u53ef\u4ee5\u627e\u5230\u53ef\u53d8\u53c2\u6570\u4e2d\u7684\u7b2c1\u4e2a\u53c2\u6570\u7684\u4f4d\u7f6e."}),"\n",(0,i.jsx)(t.li,{children:"\u6ce8\u91ca2:\n\u53ef\u53d8\u53c2\u6570\u7684\u4e2a\u6570\u662f\u9700\u8981\u624b\u52a8\u4f20\u5165\u7684, \u65e0\u6cd5\u81ea\u52a8\u83b7\u5f97"}),"\n",(0,i.jsxs)(t.li,{children:["\u6ce8\u91ca3\n\u83b7\u53d6\u53c2\u6570\u7684\u503c\u9700\u8981\u7279\u522b\u6307\u5b9a\u53c2\u6570\u7c7b\u578b, \u67092\u4e2a\u4f5c\u7528","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"\u83b7\u53d6\u6b63\u786e\u7684\u503c"}),"\n",(0,i.jsx)(t.li,{children:"\u83b7\u53d6\u4e0b\u4e00\u4e2a\u53c2\u6570\u7684\u504f\u79fb\u91cf"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"printk-\u53d8\u53c2\u5b9e\u73b0",children:"printk \u53d8\u53c2\u5b9e\u73b0"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-C",children:'printk("A=%d, B=%d", a, b);\n'})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'\u901a\u8fc7\u7b2c1\u4e2a\u53c2\u6570"A=%d, B=%d", printk\u51fd\u6570\u53ef\u4ee5\u8ba1\u7b97\u51fd\u6570\u53c2\u6570\u7684\u4e2a\u6570(2\u4e2a%d, \u8868\u793a2\u4e2a\u53c2\u6570)'}),"\n",(0,i.jsx)(t.li,{children:"\u901a\u8fc7%d\u7684\u5185\u5bb9, \u5c31\u53ef\u4ee5\u77e5\u9053\u53c2\u6570\u7684\u7c7b\u578b"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"\u8fd9\u91cc\u4f60\u5c31\u53ef\u4ee5\u6ce8\u610f\u5230\u4e00\u4e2a\u95ee\u9898, \u5982\u679c%d\u6307\u5b9a\u7684\u7c7b\u578b\u4e0d\u7b26\u5408, \u662f\u5426\u4f1a\u5bfc\u81f4\u9519\u8bef\u5462? \u7b54\u6848\u662f\u4e00\u5b9a\u7684, \u4e0d\u4ec5\u4ec5\u662f\u5f71\u54cd\u672c\u53c2\u6570, \u800c\u4e14\u8fd8\u4f1a\u5f71\u54cd\u4e0b\u4e00\u4e2a\u7684\u53c2\u6570, \u56e0\u4e3a\u53c2\u6570\u7684\u504f\u79fb\u91cf\u4f1a\u8ba1\u7b97\u9519\u8bef."}),"\n",(0,i.jsx)(t.h2,{id:"\u7ed3\u8bba",children:"\u7ed3\u8bba"}),"\n",(0,i.jsx)(t.p,{children:"\u9519\u8bef\u7684\u539f\u56e0\u53ef\u80fd\u6709\u4e8c, \u5177\u4f53\u53c2\u8003\u5982\u4e0b\u56fe"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"a\u7684\u7c7b\u578b\u6307\u5b9a\u9519\u8bef"}),"\n",(0,i.jsx)(t.li,{children:"b\u7684\u7c7b\u578b\u6307\u5b9a\u9519\u8bef"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"image",src:e(70916).A+"",width:"1237",height:"677"})}),"\n",(0,i.jsx)(t.h2,{id:"\u53e6\u6ce8-printk\u53ef\u7528\u7684\u683c\u5f0f\u5b57\u7b26",children:"\u53e6\u6ce8: printk\u53ef\u7528\u7684\u683c\u5f0f\u5b57\u7b26"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-C",children:"If variable is of Type,\t\tuse printk format specifier:\n---------------------------------------------------------\n\t\tint\t\t\t%d or %x\n\t\tunsigned int\t\t%u or %x\n\t\tlong\t\t\t%ld or %lx\n\t\tunsigned long\t\t%lu or %lx\n\t\tlong long\t\t%lld or %llx\n\t\tunsigned long long\t%llu or %llx\n\t\tsize_t\t\t\t%zu or %zx\n\t\tssize_t\t\t\t%zd or %zx\n\t\ts32\t\t\t%d or %x\n\t\tu32\t\t\t%u or %x\n\t\ts64\t\t\t%lld or %llx\n\t\tu64\t\t\t%llu or %llx\n"})})]})}function p(n={}){const{wrapper:t}={...(0,r.R)(),...n.components};return t?(0,i.jsx)(t,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},70916:(n,t,e)=>{e.d(t,{A:()=>i});const i=e.p+"assets/images/image-1988ff69-5381cd26483e4eb491174680db8c5c0d.png"},28453:(n,t,e)=>{e.d(t,{R:()=>s,x:()=>a});var i=e(96540);const r={},l=i.createContext(r);function s(n){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function a(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),i.createElement(l.Provider,{value:t},n.children)}}}]);