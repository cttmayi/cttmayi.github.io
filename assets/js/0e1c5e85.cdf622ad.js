"use strict";(self.webpackChunkmy_github=self.webpackChunkmy_github||[]).push([[48349],{29914:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var t=i(74848),l=i(28453);const r={title:"Makefile \u5c0f\u6280\u5de7",tags:["Linux","Makefile"],authors:"cttmayi"},a="\u76f8\u5bf9\u8def\u5f84\u8f6c\u6362\u4e3a\u7edd\u5bf9\u8def\u5f84",c={permalink:"/blog/2019/05/05/Makefile\u5c0f\u6280\u5de7",source:"@site/blog/2019-05-05-Makefile\u5c0f\u6280\u5de7/index.md",title:"Makefile \u5c0f\u6280\u5de7",description:"\u5f3a\u70c8\u63a8\u8350\u5b66\u4e60\\, \u5199\u5f97\u975e\u5e38\u8d5e.",date:"2019-05-05T00:00:00.000Z",formattedDate:"2019\u5e745\u67085\u65e5",tags:[{label:"Linux",permalink:"/blog/tags/linux"},{label:"Makefile",permalink:"/blog/tags/makefile"}],readingTime:1.2266666666666666,hasTruncateMarker:!1,authors:[{name:"Ling Yuan",title:"Engineer",url:"https://github.com/cttmayi",imageURL:"https://github.com/cttmayi.png",key:"cttmayi"}],frontMatter:{title:"Makefile \u5c0f\u6280\u5de7",tags:["Linux","Makefile"],authors:"cttmayi"},unlisted:!1,prevItem:{title:"Linux\u5e38\u7528\u547d\u4ee4",permalink:"/blog/2019/05/05/Linux\u5e38\u7528\u547d\u4ee4"},nextItem:{title:"smali2java - \u6d4b\u8bd5\u4ee3\u7801",permalink:"/blog/2019/05/04/smali2java\u6d4b\u8bd5\u4ee3\u7801"}},s={authorsImageUrls:[void 0]},d=[];function o(e){const n={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["\u5f3a\u70c8\u63a8\u8350\u5b66\u4e60",(0,t.jsx)(n.a,{href:"http://scc.qibebt.cas.cn/docs/linux/base/%B8%FA%CE%D2%D2%BB%C6%F0%D0%B4Makefile-%B3%C2%F0%A9.pdf",children:"<\u8ddf\u6211\u4e00\u8d77\u5199 Makefile>"}),", \u5199\u5f97\u975e\u5e38\u8d5e.\n\u5982\u4e0b\u662f\u65e9\u671f\u5b66\u4e60Makefile\u7684\u57fa\u672c\u6280\u5de7\u7b14\u8bb0."]}),"\n",(0,t.jsx)(n.p,{children:"PATH :=../..\nPATH := $(shell cd $(PATH);pwd)"}),"\n",(0,t.jsx)(n.h1,{id:"\u5982printf\u4e00\u6837\u7684debug\u65b9\u5f0f",children:"\u5982printf\u4e00\u6837\u7684debug\u65b9\u5f0f"}),"\n",(0,t.jsxs)(n.p,{children:["$(warning $(PATH))\n$(error $(PATH)) ---- ",(0,t.jsx)(n.a,{href:"http://cttmayi.blog.cd/tag/makefile/",title:"View all posts in makefile",children:"makefile"}),"\u4f1a\u505c\u6b62\u4e0b\u6765"]}),"\n",(0,t.jsx)(n.h1,{id:"-\u548c\u7684\u533a\u522b",children:'"=" ":="\u548c"?="\u7684\u533a\u522b'}),"\n",(0,t.jsx)(n.p,{children:'"=": \u76f4\u5230\u4f7f\u7528\u65f6\u624d\u5c55\u5f00\n":=" \u6b64\u5904\u5b9a\u4e49\u65f6,\u76f4\u63a5\u5c55\u5f00\n"?=" \u5982\u679c\u53d8\u91cf\u4e4b\u524d\u672a\u5b9a\u4e49\u4e86,\u5219\u548c"="\u76f8\u540c,\u5982\u679c\u5b9a\u4e49\u4e86,\u5219\u4ec0\u4e48\u4e5f\u4e0d\u505a.\nA = A\nB = $(A) <----\x3e B := $(A)\nA = AA\n$(error $(B))\xa0 ---\x3e \u5982\u4f7f\u7528"=",\u8fd4\u56de\u503c\u4e3aAA,\u5982\u4f7f\u7528":=",\u8fd4\u56de\u503c\u4e3aA'}),"\n",(0,t.jsx)(n.h1,{id:"-\u548c-",children:"$@ \u548c $<"}),"\n",(0,t.jsx)(n.p,{children:"$@:\u76ee\u6807, $<:\u4f9d\u8d56\u76ee\u5f55"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"all: def\n    echo $@ $<\xa0\xa0\xa0 ----\x3e \u8f93\u51faall def\n"})}),"\n",(0,t.jsx)(n.h1,{id:"filter\u51fd\u6570",children:"filter\u51fd\u6570"}),"\n",(0,t.jsx)(n.h1,{id:"foreach\u51fd\u6570",children:"foreach\u51fd\u6570"}),"\n",(0,t.jsx)(n.h1,{id:"\u6307\u5b9amakefile\u6587\u4ef6",children:"\u6307\u5b9amakefile\u6587\u4ef6"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"make -f mfile"})}),"\n",(0,t.jsx)(n.h1,{id:"export",children:"export"}),"\n",(0,t.jsx)(n.p,{children:"A := 1\nexport A ----\x3e \u4f7f\u540e\u9762\u7684m.mk\u53ef\u4ee5\u5f15\u7528\u53d8\u91cfA,\u5426\u5219\u9700\u8981\u7528-D\u7684\u53c2\u6570\u6765\u4f20\u9012, make -f m.mk -DA=$(A)\nmake -f m.mk"}),"\n",(0,t.jsx)(n.h1,{id:"\u66ff\u6362",children:"\u66ff\u6362"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"FILE=$(subst main.c,.c,.o)"})}),"\n",(0,t.jsx)(n.h1,{id:"include\u548csinclude\u7684\u533a\u522b",children:"include\u548csinclude\u7684\u533a\u522b"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u6587\u4ef6\u5b58\u5728\u7684\u60c5\u51b5\u4e0b,include\u548csinclude\u529f\u80fd\u76f8\u540c,\u552f\u4e00\u4e0d\u540c\u7684\u662f,\u5728\u6587\u4ef6\u4e0d\u5b58\u5728\u7684\u65f6\u5019,include\u4f1a\u62a5\u9519,\u800csinclude\u4e0d\u4f1a."}),"\n",(0,t.jsx)(n.h1,{id:"\u53cc\u5192\u53f7",children:"\u53cc\u5192\u53f7"}),"\n",(0,t.jsx)(n.p,{children:'\u53cc\u5192\u53f7\u89c4\u5219\u5c31\u662f\u4f7f\u7528 "::" \u4ee3\u66ff\u666e\u901a\u89c4\u5219\u4e2d\u7684 ":" \u6240\u5f97\u5230\u7684\u89c4\u5219\u3002\u5f53\u540c\u4e00\u4e2a\u6587\u4ef6\u4f5c\u4e3a\u591a\u4e2a\u89c4\u5219\u7684\u76ee\u6807\u65f6\uff0c\u53cc\u5192\u53f7\u89c4\u5219\u7684\u5904\u7406\u548c\u666e\u901a\u89c4\u5219\u7684\u5904\u7406\u8fc7\u7a0b\u5b8c\u5168\u4e0d\u540c(\u53cc\u5192\u53f7\u89c4\u5219\u5141\u8bb8\u5728\u591a\u4e2a\u89c4\u5219\u4e2d\u4e3a\u540c\u4e00\u4e2a\u76ee\u6807\u6307\u5b9a\u4e0d\u540c\u7684\u91cd\u5efa\u76ee\u6807\u7684\u547d\u4ee4).'})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>c});var t=i(96540);const l={},r=t.createContext(l);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);