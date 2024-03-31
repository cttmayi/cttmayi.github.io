"use strict";(self.webpackChunkmy_github=self.webpackChunkmy_github||[]).push([[5706],{7122:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var i=t(4848),r=t(8453);const s={},c="\u5fae\u8c03\uff08Fine-tune\uff09",l={id:"\u5927\u6a21\u578b/GPT/FineTune",title:"\u5fae\u8c03\uff08Fine-tune\uff09",description:"\u540e\u671f\u5bf9\u6a21\u578b\u53c2\u6570\u8fdb\u884c\u8c03\u6574\uff0c\u5fae\u8c03\u53ef\u8ba9\u60a8\u4ece API \u63d0\u4f9b\u7684\u6a21\u578b\u4e2d\u83b7\u5f97\u66f4\u591a\u6536\u76ca\uff1a",source:"@site/docs/\u5927\u6a21\u578b/GPT/FineTune.md",sourceDirName:"\u5927\u6a21\u578b/GPT",slug:"/\u5927\u6a21\u578b/GPT/FineTune",permalink:"/\u5927\u6a21\u578b/GPT/FineTune",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GPT",permalink:"/\u5927\u6a21\u578b/GPT/"},next:{title:"\u67b6\u6784\u6982\u8ff0",permalink:"/\u5927\u6a21\u578b/GPT/\u67b6\u6784\u6982\u8ff0"}},o={},u=[];function d(n){const e={h1:"h1",li:"li",p:"p",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"\u5fae\u8c03fine-tune",children:"\u5fae\u8c03\uff08Fine-tune\uff09"}),"\n",(0,i.jsx)(e.p,{children:"\u540e\u671f\u5bf9\u6a21\u578b\u53c2\u6570\u8fdb\u884c\u8c03\u6574\uff0c\u5fae\u8c03\u53ef\u8ba9\u60a8\u4ece API \u63d0\u4f9b\u7684\u6a21\u578b\u4e2d\u83b7\u5f97\u66f4\u591a\u6536\u76ca\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u6bd4\u5373\u65f6\u8bbe\u8ba1\u66f4\u9ad8\u8d28\u91cf\u7684\u7ed3\u679c"}),"\n",(0,i.jsx)(e.li,{children:"\u80fd\u591f\u8bad\u7ec3\u6bd4\u63d0\u793a\u4e2d\u66f4\u591a\u7684\u4f8b\u5b50"}),"\n",(0,i.jsx)(e.li,{children:"\u7531\u4e8e\u66f4\u77ed\u7684\u63d0\u793a\u800c\u8282\u7701\u4e86\u4ee3\u5e01"}),"\n",(0,i.jsx)(e.li,{children:"\u66f4\u4f4e\u7684\u5ef6\u8fdf\u8bf7\u6c42"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"GPT-3 \u5df2\u7ecf\u5728\u6765\u81ea\u5f00\u653e\u4e92\u8054\u7f51\u7684\u5927\u91cf\u6587\u672c\u4e0a\u8fdb\u884c\u4e86\u9884\u8bad\u7ec3\u3002\u5f53\u7ed9\u51fa\u4ec5\u5305\u542b\u51e0\u4e2a\u793a\u4f8b\u7684\u63d0\u793a\u65f6\uff0c\u5b83\u901a\u5e38\u53ef\u4ee5\u51ed\u76f4\u89c9\u5224\u65ad\u51fa\u60a8\u8981\u6267\u884c\u7684\u4efb\u52a1\u5e76\u751f\u6210\u5408\u7406\u7684\u5b8c\u6210\u3002\u8fd9\u901a\u5e38\u79f0\u4e3a\u201c\u5c0f\u6837\u672c\u5b66\u4e60\u201d\u3002\n\u5fae\u8c03\u901a\u8fc7\u8bad\u7ec3\u6bd4\u63d0\u793a\u4e2d\u66f4\u591a\u7684\u793a\u4f8b\u6765\u6539\u8fdb\u5c0f\u6837\u672c\u5b66\u4e60\uff0c\u8ba9\u60a8\u5728\u5927\u91cf\u4efb\u52a1\u4e0a\u53d6\u5f97\u66f4\u597d\u7684\u7ed3\u679c\u3002\u5bf9\u6a21\u578b\u8fdb\u884c\u5fae\u8c03\u540e\uff0c\u60a8\u5c06\u4e0d\u518d\u9700\u8981\u5728\u63d0\u793a\u4e2d\u63d0\u4f9b\u793a\u4f8b\u3002\u8fd9\u6837\u53ef\u4ee5\u8282\u7701\u6210\u672c\u5e76\u5b9e\u73b0\u66f4\u4f4e\u5ef6\u8fdf\u7684\u8bf7\u6c42\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5fae\u8c03\u6d89\u53ca\u4ee5\u4e0b\u6b65\u9aa4\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u51c6\u5907\u548c\u4e0a\u4f20\u8bad\u7ec3\u6570\u636e"}),"\n",(0,i.jsx)(e.li,{children:"\u8bad\u7ec3\u65b0\u7684\u5fae\u8c03\u6a21\u578b"}),"\n",(0,i.jsx)(e.li,{children:"\u4f7f\u7528\u60a8\u7684\u5fae\u8c03\u6a21\u578b"}),"\n"]})]})}function a(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>l});var i=t(6540);const r={},s=i.createContext(r);function c(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);