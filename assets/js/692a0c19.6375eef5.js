"use strict";(self.webpackChunkmy_github=self.webpackChunkmy_github||[]).push([[45142],{33715:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>j,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var d=n(74848),s=n(28453);const r={title:"Linux\u5e38\u7528\u547d\u4ee4",tags:["Linux","Shell"],authors:"cttmayi"},i="grep",l={permalink:"/blog/2019/05/05/Linux\u5e38\u7528\u547d\u4ee4",source:"@site/blog/2019-05-05-Linux\u5e38\u7528\u547d\u4ee4/index.md",title:"Linux\u5e38\u7528\u547d\u4ee4",description:"\u65e9\u671f\u6574\u7406\u7684Linux\u5b9e\u7528\u547d\u4ee4, linux\u4e0b\u5de5\u4f5c\u8fd8\u662f\u5fc5\u987b\u8981\u4f1a\u7684.",date:"2019-05-05T00:00:00.000Z",formattedDate:"2019\u5e745\u67085\u65e5",tags:[{label:"Linux",permalink:"/blog/tags/linux"},{label:"Shell",permalink:"/blog/tags/shell"}],readingTime:1.08,hasTruncateMarker:!1,authors:[{name:"Ling Yuan",title:"Engineer",url:"https://github.com/cttmayi",imageURL:"https://github.com/cttmayi.png",key:"cttmayi"}],frontMatter:{title:"Linux\u5e38\u7528\u547d\u4ee4",tags:["Linux","Shell"],authors:"cttmayi"},unlisted:!1,prevItem:{title:"ARM \u5de5\u4f5c\u6a21\u5f0f\u53ca\u5bc4\u5b58\u5668",permalink:"/blog/2019/05/05/ARM\u5de5\u4f5c\u6a21\u5f0f\u53ca\u5bc4\u5b58\u5668"},nextItem:{title:"Makefile \u5c0f\u6280\u5de7",permalink:"/blog/2019/05/05/Makefile\u5c0f\u6280\u5de7"}},c={authorsImageUrls:[void 0]},h=[];function x(e){const t={code:"code",h1:"h1",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.p,{children:"\u65e9\u671f\u6574\u7406\u7684Linux\u5b9e\u7528\u547d\u4ee4, linux\u4e0b\u5de5\u4f5c\u8fd8\u662f\u5fc5\u987b\u8981\u4f1a\u7684."}),"\n",(0,d.jsx)(t.p,{children:"\u5f3a\u5927\u7684\u6587\u672c\u641c\u7d22\u5de5\u5177, \u80fd\u4f7f\u7528\u6b63\u5219\u8868\u8fbe\u5f0f\u641c\u7d22\u6587\u672c.\n\u8303\u4f8b: grep -r text pathname"}),"\n",(0,d.jsx)(t.p,{children:"\u5b9e\u7528\u53c2\u6570:"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"\u53c2\u6570"}),(0,d.jsx)(t.th,{children:"\u53c2\u6570"}),(0,d.jsx)(t.th,{children:"\u8bf4\u660e"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"-m"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"\u5339\u914d\u7684\u6700\u5927\u884c\u6570"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"-i"}),(0,d.jsx)(t.td,{children:"--ignore-case"}),(0,d.jsx)(t.td,{children:"\u5ffd\u7565\u5927\u5c0f\u5199\u5dee\u522b"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"-I"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"\u5ffd\u7565\u4e8c\u8fdb\u5236\u6587\u4ef6"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"-n"}),(0,d.jsx)(t.td,{children:"--line-number"}),(0,d.jsx)(t.td,{children:"\u663e\u793a\u5339\u914d\u884c\u53ca\u884c\u53f7"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"-r"}),(0,d.jsx)(t.td,{children:"--recursive"}),(0,d.jsx)(t.td,{})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"-s"}),(0,d.jsx)(t.td,{children:"--silent"}),(0,d.jsx)(t.td,{children:"\xa0\u4e0d\u663e\u793a\u5173\u4e8e\u4e0d\u5b58\u5728\u6216\u8005\u65e0\u6cd5\u8bfb\u53d6\u6587\u4ef6\u7684\u9519\u8bef\u4fe1\u606f"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"-w"}),(0,d.jsx)(t.td,{children:"--word-regexp"}),(0,d.jsx)(t.td,{children:"\u5168\u8bcd\u5339\u914d"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"-c"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"\u7edf\u8ba1\u51fa\u73b0\u6b21\u6570"})]})]})]}),"\n",(0,d.jsx)(t.h1,{id:"find",children:"find"}),"\n",(0,d.jsx)(t.p,{children:"\u6587\u4ef6\u641c\u7d22\u5de5\u5177"}),"\n",(0,d.jsx)(t.p,{children:"\u8303\u4f8b: find pathname -name text\n\u5b9e\u7528\u53c2\u6570:"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"\u53c2\u6570"}),(0,d.jsx)(t.th,{children:"\u53c2\u6570"}),(0,d.jsx)(t.th,{children:"\u8bf4\u660e"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"-name"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"\u641c\u7d22\u7684\u6587\u4ef6\u540d"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"-size"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"\u67e5\u627e\u6587\u4ef6\u957f\u5ea6\u4e3an\u5757\u7684\u6587\u4ef6, \u5e26\u6709c\u65f6\u8868\u793a\u6587\u4ef6\u957f\u5ea6\u4ee5\u5b57\u8282\u8ba1"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"-type"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"b - \u5757\u8bbe\u5907\u6587\u4ef6; d - \u76ee\u5f55; c - \u5b57\u7b26\u8bbe\u5907\u6587\u4ef6; p - \u7ba1\u9053\u6587\u4ef6; l - \u7b26\u53f7\u94fe\u63a5\u6587\u4ef6; f - \u666e\u901a\u6587\u4ef6;"})]})]})]}),"\n",(0,d.jsx)(t.h1,{id:"xargs",children:"xargs"}),"\n",(0,d.jsx)(t.h1,{id:"sed",children:"sed"}),"\n",(0,d.jsx)(t.p,{children:"\u5b9e\u4f8b: sed -e 's/AAA/BBB/' --\u66ff\u6362AAA\u4e3aBBB"}),"\n",(0,d.jsx)(t.p,{children:"\u5b9e\u7528\u53c2\u6570\uff1a"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"\u53c2\u6570"}),(0,d.jsx)(t.th,{children:"\u53c2\u6570"}),(0,d.jsx)(t.th,{children:"\u8bf4\u660e"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"-e"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"\u6307\u5b9a\u547d\u4ee4"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"-i"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"\u4fdd\u5b58\u6587\u4ef6"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"-f"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"\u6307\u5b9a\u547d\u4ee4\u6587\u4ef6"})]})]})]}),"\n",(0,d.jsx)(t.h1,{id:"awk",children:"awk"}),"\n",(0,d.jsx)(t.h1,{id:"wc",children:"wc"}),"\n",(0,d.jsx)(t.h1,{id:"tar",children:"tar"}),"\n",(0,d.jsxs)(t.p,{children:["\u6253\u5305\u5e76\u538b\u7f29\n",(0,d.jsx)(t.code,{children:"tar -zcvf p.tar.gz file.txt"}),"\n\u89e3\u538b\u7f29\n",(0,d.jsx)(t.code,{children:"tar -zxvf p.tar.gz -C folder"})]})]})}function j(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(x,{...e})}):x(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var d=n(96540);const s={},r=d.createContext(s);function i(e){const t=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),d.createElement(r.Provider,{value:t},e.children)}}}]);