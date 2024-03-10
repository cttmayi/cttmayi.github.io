"use strict";(self.webpackChunkmy_github=self.webpackChunkmy_github||[]).push([[56043],{39530:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(74848),o=n(28453);const i={title:"Python \u5c0f\u6280\u5de7 - \u91cd\u8bd5(retry)",tags:["Python"],authors:"cttmayi"},a=void 0,s={permalink:"/en/blog/2019/05/10/Python\u5c0f\u6280\u5de7\u91cd\u8bd5retry",source:"@site/blog/2019-05-10-Python\u5c0f\u6280\u5de7\u91cd\u8bd5retry/index.md",title:"Python \u5c0f\u6280\u5de7 - \u91cd\u8bd5(retry)",description:"\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b, \u7279\u522b\u662f\u7f51\u7edc\u8bbf\u95ee\u7684\u65f6\u5019, \u4f1a\u6709\u8bbf\u95ee\u5931\u8d25, \u8dd1\u51fa\u5f02\u5e38. \u90a3\u4e00\u822c\u4f1a\u6709\u5982\u4e0b\u5199\u6cd5.",date:"2019-05-10T00:00:00.000Z",formattedDate:"May 10, 2019",tags:[{label:"Python",permalink:"/en/blog/tags/python"}],readingTime:.2866666666666667,hasTruncateMarker:!1,authors:[{name:"Ling Yuan",title:"Engineer",url:"https://github.com/cttmayi",imageURL:"https://github.com/cttmayi.png",key:"cttmayi"}],frontMatter:{title:"Python \u5c0f\u6280\u5de7 - \u91cd\u8bd5(retry)",tags:["Python"],authors:"cttmayi"},unlisted:!1,prevItem:{title:"\u5929\u6c60\u5b9e\u9a8c\u5ba4 - \u65b0\u4eba\u5165\u95e8",permalink:"/en/blog/2019/05/12/\u5929\u6c60\u5b9e\u9a8c\u5ba4\u65b0\u4eba\u5165\u95e8"},nextItem:{title:"Total Commander",permalink:"/en/blog/2019/05/10/TotalCommander"}},c={authorsImageUrls:[void 0]},l=[];function m(t){const e={code:"code",p:"p",pre:"pre",...(0,o.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b, \u7279\u522b\u662f\u7f51\u7edc\u8bbf\u95ee\u7684\u65f6\u5019, \u4f1a\u6709\u8bbf\u95ee\u5931\u8d25, \u8dd1\u51fa\u5f02\u5e38. \u90a3\u4e00\u822c\u4f1a\u6709\u5982\u4e0b\u5199\u6cd5."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"import time\n\ndef do_net():\n    pass\n\nfor i in range(10):\n    try:\n        do_net()\n        break\n    except:\n        time.sleep(1)\n"})}),"\n",(0,r.jsx)(e.p,{children:"Python\u5e93retry\u53ef\u4ee5\u8ba9\u4f60\u6709\u5f88\u7b80\u5355\u7684\u5199\u6cd5, \u76f4\u63a5\u5b9a\u4e49\u51fd\u6570\u7684\u5c5e\u6027\u5373\u53ef"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"from retry import retry\n\n@retry(tries=10, delay=2)\ndef do_net():\n    pass\n\ndo_net()\n"})})]})}function d(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(m,{...t})}):m(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>a,x:()=>s});var r=n(96540);const o={},i=r.createContext(o);function a(t){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:a(t.components),r.createElement(i.Provider,{value:e},t.children)}}}]);