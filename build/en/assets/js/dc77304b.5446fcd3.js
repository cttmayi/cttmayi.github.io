"use strict";(self.webpackChunkmy_github=self.webpackChunkmy_github||[]).push([[19233],{36575:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=n(74848),a=n(28453);const r={title:"Tornado\u5b9e\u73b0Ajax\u8bf7\u6c42",tags:["Tornado"],authors:"cttmayi"},s=void 0,i={permalink:"/en/blog/2019/05/31/Tornado\u5b9e\u73b0Ajax\u8bf7\u6c42",source:"@site/blog/2019-05-31-Tornado\u5b9e\u73b0Ajax\u8bf7\u6c42/index.md",title:"Tornado\u5b9e\u73b0Ajax\u8bf7\u6c42",description:"\u6700\u8fd1\u5728\u4f7f\u7528Ajax\u63d0\u4ea4POST\u8bf7\u6c42\u65f6, \u53d1\u73b0\u65e0\u6cd5\u4f7f\u7528get_argument\u51fd\u6570\u83b7\u5f97\u5bf9\u5e94\u7684\u53c2\u6570, \u5728\u7f51\u7edc\u4e0a\u67e5\u8be2\u4e86\u5f88\u4e45\u90fd\u6ca1\u6709\u5230\u7b54\u6848. \u82b1\u4e86\u4e00\u756a\u65f6\u95f4, \u7ec8\u4e8e\u89e3\u51b3.",date:"2019-05-31T00:00:00.000Z",formattedDate:"May 31, 2019",tags:[{label:"Tornado",permalink:"/en/blog/tags/tornado"}],readingTime:.43666666666666665,hasTruncateMarker:!1,authors:[{name:"Ling Yuan",title:"Engineer",url:"https://github.com/cttmayi",imageURL:"https://github.com/cttmayi.png",key:"cttmayi"}],frontMatter:{title:"Tornado\u5b9e\u73b0Ajax\u8bf7\u6c42",tags:["Tornado"],authors:"cttmayi"},unlisted:!1,prevItem:{title:"Python\u5e93 - pyautoit",permalink:"/en/blog/2019/06/04/Python\u5e93pyautoit"},nextItem:{title:"\u6001\u5ea6 - \u597d\u4e60\u60ef\u6210\u5c31\u4e00\u751f",permalink:"/en/blog/2019/05/30/\u6001\u5ea6\u597d\u4e60\u60ef\u6210\u5c31\u4e00\u751f"}},d={authorsImageUrls:[void 0]},c=[];function l(t){const e={code:"code",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:"\u6700\u8fd1\u5728\u4f7f\u7528Ajax\u63d0\u4ea4POST\u8bf7\u6c42\u65f6, \u53d1\u73b0\u65e0\u6cd5\u4f7f\u7528get_argument\u51fd\u6570\u83b7\u5f97\u5bf9\u5e94\u7684\u53c2\u6570, \u5728\u7f51\u7edc\u4e0a\u67e5\u8be2\u4e86\u5f88\u4e45\u90fd\u6ca1\u6709\u5230\u7b54\u6848. \u82b1\u4e86\u4e00\u756a\u65f6\u95f4, \u7ec8\u4e8e\u89e3\u51b3."}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"JavaScript"}),"\n\u901a\u8fc7JSON.stringify\u51fd\u6570\u5c06data\u8f6c\u6362\u4e3aJSON\u5b57\u7b26\u4e32"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:'$("#submit").on(\'click\', function () {\n$.ajax({\n    method:  "POST",\n    url:  "/article_submit_post",\n    contentType :  "application/json",\n    dataType :  "json",\n    data:  JSON.stringify({\n        title:  $("#title").val(),\n        brief:  $("#brief").val(),\n        keywords:  $("#keywords").val(),\n        content:  simplemde.value()}),\n})\n'})}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"Tornado"}),"\n\u901a\u8fc7json_decode\u51fd\u6570\u5bf9request.body\u8fdb\u884c\u89e3\u6790"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"from tornado.escape import json_decode\nclass ArticleSubmitPostHandler(tornado.web.RequestHandler):\n    def post(self):\n        data = json_decode(self.request.body)\n        title = data['title']\n        brief = data['brief']\n        content = data['content']\n        keywords = data['keywords']\n"})})]})}function u(t={}){const{wrapper:e}={...(0,a.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(l,{...t})}):l(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>s,x:()=>i});var o=n(96540);const a={},r=o.createContext(a);function s(t){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:s(t.components),o.createElement(r.Provider,{value:e},t.children)}}}]);