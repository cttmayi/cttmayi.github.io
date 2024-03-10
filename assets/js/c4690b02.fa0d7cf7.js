"use strict";(self.webpackChunkmy_github=self.webpackChunkmy_github||[]).push([[67869],{19010:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>a,frontMatter:()=>s,metadata:()=>i,toc:()=>h});var c=t(74848),o=t(28453);const s={},r="CoT(Chain-of-Thought)",i={id:"chatGPT/prompt.cot",title:"CoT(Chain-of-Thought)",description:"cot",source:"@site/docs/chatGPT/prompt.cot.md",sourceDirName:"chatGPT",slug:"/chatGPT/prompt.cot",permalink:"/docs/chatGPT/prompt.cot",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CAMEL (Communicative Agents for \u201cMind\u201d Exploration of Large Scale Language Model Society)",permalink:"/docs/chatGPT/prompt.CAMEL"},next:{title:"Few-shot",permalink:"/docs/chatGPT/prompt.few-shot"}},d={},h=[];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"cotchain-of-thought",children:"CoT(Chain-of-Thought)"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{alt:"cot",src:t(72209).A+"",width:"940",height:"473"})}),"\n",(0,c.jsxs)(n.p,{children:["\u5f15\u5165\u7684\u94fe\u5f0f\u601d\u8003\uff08CoT\uff09",(0,c.jsx)(n.strong,{children:"\u63d0\u793a\u901a\u8fc7\u4e2d\u95f4\u63a8\u7406\u6b65\u9aa4\u5b9e\u73b0\u4e86\u590d\u6742\u7684\u63a8\u7406\u80fd\u529b"}),"\u3002\u60a8\u53ef\u4ee5\u5c06\u5176\u4e0e\u5c11\u6837\u672c\u63d0\u793a\u76f8\u7ed3\u5408\uff0c\u4ee5\u83b7\u5f97\u66f4\u597d\u7684\u7ed3\u679c\uff0c\u4ee5\u4fbf\u5728\u56de\u7b54\u4e4b\u524d\u8fdb\u884c\u63a8\u7406\u7684\u66f4\u590d\u6742\u7684\u4efb\u52a1\u3002"]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.em,{children:"\u63d0\u793a\uff1a"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"\u8fd9\u7ec4\u6570\u4e2d\u7684\u5947\u6570\u52a0\u8d77\u6765\u662f\u5076\u6570\uff1a4\u30018\u30019\u300115\u300112\u30012\u30011\u3002A\uff1a\u5c06\u6240\u6709\u5947\u6570\u76f8\u52a0\uff089\u300115\u30011\uff09\u5f97\u523025\u3002\u7b54\u6848\u4e3aFalse\u3002"}),"\n",(0,c.jsx)(n.code,{children:"\u8fd9\u7ec4\u6570\u4e2d\u7684\u5947\u6570\u52a0\u8d77\u6765\u662f\u5076\u6570\uff1a17\u300110\u300119\u30014\u30018\u300112\u300124\u3002A\uff1a\u5c06\u6240\u6709\u5947\u6570\u76f8\u52a0\uff0817\u300119\uff09\u5f97\u523036\u3002\u7b54\u6848\u4e3aTrue\u3002"}),"\n",(0,c.jsx)(n.code,{children:"\u8fd9\u7ec4\u6570\u4e2d\u7684\u5947\u6570\u52a0\u8d77\u6765\u662f\u5076\u6570\uff1a16\u300111\u300114\u30014\u30018\u300113\u300124\u3002A\uff1a\u5c06\u6240\u6709\u5947\u6570\u76f8\u52a0\uff0811\u300113\uff09\u5f97\u523024\u3002\u7b54\u6848\u4e3aTrue\u3002"}),"\n",(0,c.jsx)(n.code,{children:"\u8fd9\u7ec4\u6570\u4e2d\u7684\u5947\u6570\u52a0\u8d77\u6765\u662f\u5076\u6570\uff1a17\u30019\u300110\u300112\u300113\u30014\u30012\u3002A\uff1a\u5c06\u6240\u6709\u5947\u6570\u76f8\u52a0\uff0817\u30019\u300113\uff09\u5f97\u523039\u3002\u7b54\u6848\u4e3aFalse\u3002"}),"\n",(0,c.jsx)(n.code,{children:"\u8fd9\u7ec4\u6570\u4e2d\u7684\u5947\u6570\u52a0\u8d77\u6765\u662f\u5076\u6570\uff1a15\u300132\u30015\u300113\u300182\u30017\u30011\u3002A\uff1a"})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.em,{children:"\u8f93\u51fa\uff1a"})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"\u5c06\u6240\u6709\u5947\u6570\u76f8\u52a0\uff0815\u30015\u300113\u30017\u30011\uff09\u5f97\u523041\u3002\u7b54\u6848\u4e3aFalse\u3002"})}),"\n",(0,c.jsx)(n.p,{children:"\u54c7\uff01\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u5728\u63d0\u4f9b\u63a8\u7406\u6b65\u9aa4\u65f6\u5f97\u5230\u4e86\u5b8c\u7f8e\u7684\u7ed3\u679c\u3002\u5b9e\u9645\u4e0a\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u63d0\u4f9b\u66f4\u5c11\u7684\u793a\u4f8b\u6765\u89e3\u51b3\u6b64\u4efb\u52a1\uff0c\u5373\u4ec5\u4e00\u4e2a\u793a\u4f8b\u4f3c\u4e4e\u5c31\u8db3\u591f\u4e86\uff1a"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.em,{children:"\u63d0\u793a\uff1a"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"\u8fd9\u7ec4\u6570\u4e2d\u7684\u5947\u6570\u52a0\u8d77\u6765\u662f\u5076\u6570\uff1a4\u30018\u30019\u300115\u300112\u30012\u30011\u3002A\uff1a\u5c06\u6240\u6709\u5947\u6570\u76f8\u52a0\uff089\u300115\u30011\uff09\u5f97\u523025\u3002\u7b54\u6848\u4e3aFalse\u3002"}),"\n",(0,c.jsx)(n.code,{children:"\u8fd9\u7ec4\u6570\u4e2d\u7684\u5947\u6570\u52a0\u8d77\u6765\u662f\u5076\u6570\uff1a15\u300132\u30015\u300113\u300182\u30017\u30011\u3002A\uff1a"})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.em,{children:"\u8f93\u51fa\uff1a"})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"\u5c06\u6240\u6709\u5947\u6570\u76f8\u52a0\uff0815\u30015\u300113\u30017\u30011\uff09\u5f97\u523041\u3002\u7b54\u6848\u4e3aFalse\u3002"})}),"\n",(0,c.jsx)(n.p,{children:"\u8bf7\u8bb0\u4f4f\uff0c\u4f5c\u8005\u58f0\u79f0\u8fd9\u662f\u8db3\u591f\u5927\u7684\u8bed\u8a00\u6a21\u578b\u624d\u4f1a\u51fa\u73b0\u7684\u65b0\u5174\u80fd\u529b\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u53c2\u8003\u6587\u732e\uff1a"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://arxiv.org/pdf/2201.11903.pdf",children:"Chain-of-Thought Prompting Elicits Reasoning in Large Language Models"})}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},72209:(e,n,t)=>{t.d(n,{A:()=>c});const c=t.p+"assets/images/cot-ef14d0bacf0e5745dce4220ec5b0e7d8.jpg"},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var c=t(96540);const o={},s=c.createContext(o);function r(e){const n=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),c.createElement(s.Provider,{value:n},e.children)}}}]);