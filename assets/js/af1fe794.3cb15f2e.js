"use strict";(self.webpackChunkmy_github=self.webpackChunkmy_github||[]).push([[7532],{31867:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var t=a(74848),i=a(28453);const s={},c="LangChain",r={id:"\u5f00\u6e90\u5e93/LangChain/LangChain",title:"LangChain",description:"LangChain\u662f\u4e00\u4e2a\u7528\u4e8e\u5f00\u53d1\u7531\u8bed\u8a00\u6a21\u578b\u9a71\u52a8\u7684\u5e94\u7528\u7a0b\u5e8f\u7684\u6846\u67b6\u3002\u6700\u5f3a\u5927\u4e14\u6709\u5dee\u5f02\u5316\u7684\u5e94\u7528\u7a0b\u5e8f\u4e0d\u4ec5\u4f1a\u901a\u8fc7API\u8c03\u7528\u8bed\u8a00\u6a21\u578b\uff0c\u8fd8\u4f1a\uff1a",source:"@site/docs/\u5f00\u6e90\u5e93/LangChain/LangChain.md",sourceDirName:"\u5f00\u6e90\u5e93/LangChain",slug:"/\u5f00\u6e90\u5e93/LangChain/",permalink:"/docs/\u5f00\u6e90\u5e93/LangChain/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5f00\u6e90\u5e93",permalink:"/docs/category/\u5f00\u6e90\u5e93"},next:{title:"LlamaIndex",permalink:"/docs/\u5f00\u6e90\u5e93/LlamaIndex/"}},o={},l=[];function h(n){const e={a:"a",h1:"h1",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"langchain",children:"LangChain"}),"\n",(0,t.jsx)(e.p,{children:"LangChain\u662f\u4e00\u4e2a\u7528\u4e8e\u5f00\u53d1\u7531\u8bed\u8a00\u6a21\u578b\u9a71\u52a8\u7684\u5e94\u7528\u7a0b\u5e8f\u7684\u6846\u67b6\u3002\u6700\u5f3a\u5927\u4e14\u6709\u5dee\u5f02\u5316\u7684\u5e94\u7528\u7a0b\u5e8f\u4e0d\u4ec5\u4f1a\u901a\u8fc7API\u8c03\u7528\u8bed\u8a00\u6a21\u578b\uff0c\u8fd8\u4f1a\uff1a"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u5177\u6709\u6570\u636e\u610f\u8bc6\uff1a\u5c06\u8bed\u8a00\u6a21\u578b\u8fde\u63a5\u5230\u5176\u4ed6\u6570\u636e\u6e90\uff1b"}),"\n",(0,t.jsx)(e.li,{children:"\u5177\u6709\u4e3b\u52a8\u6027\uff1a\u5141\u8bb8\u8bed\u8a00\u6a21\u578b\u4e0e\u5176\u73af\u5883\u4e92\u52a8\u3002"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"\u56e0\u6b64\uff0cLangChain\u6846\u67b6\u7684\u8bbe\u8ba1\u76ee\u6807\u662f\u4f7f\u8fd9\u4e9b\u7c7b\u578b\u7684\u5e94\u7528\u7a0b\u5e8f\u6210\u4e3a\u53ef\u80fd\u3002"}),"\n",(0,t.jsx)(e.p,{children:"LangChain\u6846\u67b6\u63d0\u4f9b\u4e86\u4e24\u4e2a\u4e3b\u8981\u7684\u4ef7\u503c\u4e3b\u5f20\uff1a"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"\u7ec4\u4ef6\uff1aLangChain\u4e3a\u4e0e\u8bed\u8a00\u6a21\u578b\u4e00\u8d77\u5de5\u4f5c\u6240\u9700\u7684\u7ec4\u4ef6\u63d0\u4f9b\u6a21\u5757\u5316\u62bd\u8c61\u3002LangChain\u8fd8\u4e3a\u6240\u6709\u8fd9\u4e9b\u62bd\u8c61\u63d0\u4f9b\u4e86\u5b9e\u73b0\u96c6\u5408\u3002\u8fd9\u4e9b\u7ec4\u4ef6\u65e8\u5728\u6613\u4e8e\u4f7f\u7528\uff0c\u65e0\u8bba\u60a8\u662f\u5426\u4f7f\u7528LangChain\u6846\u67b6\u7684\u5176\u4ed6\u90e8\u5206\u3002"}),"\n",(0,t.jsx)(e.li,{children:"\u9488\u5bf9\u7279\u5b9a\u7528\u4f8b\u7684\u94fe\uff1a\u94fe\u53ef\u4ee5\u88ab\u8ba4\u4e3a\u662f\u4ee5\u7279\u5b9a\u65b9\u5f0f\u7ec4\u88c5\u8fd9\u4e9b\u7ec4\u4ef6\uff0c\u4ee5\u4fbf\u6700\u597d\u5730\u5b8c\u6210\u7279\u5b9a\u7528\u4f8b\u3002\u8fd9\u4e9b\u65e8\u5728\u6210\u4e3a\u4e00\u4e2a\u66f4\u9ad8\u7ea7\u522b\u7684\u63a5\u53e3\uff0c\u901a\u8fc7\u8be5\u63a5\u53e3\uff0c\u4eba\u4eec\u53ef\u4ee5\u8f7b\u677e\u5f00\u59cb\u4f7f\u7528\u7279\u5b9a\u7528\u4f8b\u3002\u8fd9\u4e9b\u94fe\u8fd8\u88ab\u8bbe\u8ba1\u4e3a\u53ef\u5b9a\u5236\u7684\u3002"}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:["LangChain \u6587\u6863\u94fe\u63a5\uff1a",(0,t.jsx)(e.a,{href:"https://docs.langchain.com/docs/",children:"https://docs.langchain.com/docs/"})]})]})}function d(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}},28453:(n,e,a)=>{a.d(e,{R:()=>c,x:()=>r});var t=a(96540);const i={},s=t.createContext(i);function c(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);