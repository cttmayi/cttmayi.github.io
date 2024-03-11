"use strict";(self.webpackChunkmy_github=self.webpackChunkmy_github||[]).push([[63143],{93487:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var i=t(74848),l=t(28453);const s={title:"OpenCV3 - Canny \u8fb9\u754c\u68c0\u6d4b",tags:["OpenCV","\u7ffb\u8bd1"],authors:"cttmayi"},a=void 0,c={permalink:"/blog/2019/04/02/OpenCV3Canny\u8fb9\u754c\u68c0\u6d4b",source:"@site/blog/2019-04-02-OpenCV3Canny\u8fb9\u754c\u68c0\u6d4b/index.md",title:"OpenCV3 - Canny \u8fb9\u754c\u68c0\u6d4b",description:"cv.Canny()",date:"2019-04-02T00:00:00.000Z",formattedDate:"2019\u5e744\u67082\u65e5",tags:[{label:"OpenCV",permalink:"/blog/tags/open-cv"},{label:"\u7ffb\u8bd1",permalink:"/blog/tags/\u7ffb\u8bd1"}],readingTime:.7866666666666666,hasTruncateMarker:!1,authors:[{name:"Ling Yuan",title:"Engineer",url:"https://github.com/cttmayi",imageURL:"https://github.com/cttmayi.png",key:"cttmayi"}],frontMatter:{title:"OpenCV3 - Canny \u8fb9\u754c\u68c0\u6d4b",tags:["OpenCV","\u7ffb\u8bd1"],authors:"cttmayi"},unlisted:!1,prevItem:{title:"Kodu - \u8fd0\u7b97",permalink:"/blog/2019/04/03/Kodu\u8fd0\u7b97"},nextItem:{title:"OpenCV3 - OpenCV\u7684\u7ed8\u56fe\u51fd\u6570",permalink:"/blog/2019/04/02/OpenCV3OpenCV\u7684\u7ed8\u56fe\u51fd\u6570"}},r={authorsImageUrls:[void 0]},o=[{value:"\u7406\u8bba",id:"\u7406\u8bba",level:3},{value:"Canny Edge Detection in OpenCV",id:"canny-edge-detection-in-opencv",level:3},{value:"\u53c2\u8003\u6587\u4ef6",id:"\u53c2\u8003\u6587\u4ef6",level:3}];function p(n){const e={a:"a",code:"code",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.a,{href:"https://docs.opencv.org/3.4.0/dd/d1a/group__imgproc__feature.html##ga04723e007ed888ddf11d9ba04e2232de",children:"cv.Canny()"})})}),"\n",(0,i.jsx)(e.h3,{id:"\u7406\u8bba",children:"\u7406\u8bba"}),"\n",(0,i.jsx)(e.p,{children:"Canny Edge Detection \u662f\u4e00\u4e2a\u6d41\u884c\u7684\u8fb9\u754c\u68c0\u6d4b\u7b97\u6cd5. \u5b83\u662f\u4e00\u4e2a\u591a\u6b65\u9aa4\u7684\u7b97\u6cd5"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u964d\u566a"}),"\n",(0,i.jsxs)(e.li,{children:["\u5bfb\u627e\u56fe\u50cf\u7684\u7070\u5ea6\u68af\u5ea6","\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.img,{src:"https://static.oschina.net/uploads/space/2017/1231/053759_F7Jk_1169303.png",alt:""})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.li,{children:"\u975e\u6700\u5927\u503c\u6291\u5236"}),"\n",(0,i.jsx)(e.li,{children:"\u8fdf\u6ede\u9608\u503c"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"canny-edge-detection-in-opencv",children:"Canny Edge Detection in OpenCV"}),"\n",(0,i.jsxs)(e.p,{children:["OpenCV\u628a\u5982\u4e0a\u6240\u6709\u6b65\u9aa4\u96c6\u6210\u5230\u540c\u4e00\u4e2a\u51fd\u6570(",(0,i.jsx)(e.strong,{children:(0,i.jsx)(e.a,{href:"https://docs.opencv.org/3.4.0/dd/d1a/group__imgproc__feature.html##ga04723e007ed888ddf11d9ba04e2232de",children:"cv.Canny()"})}),")\u4e2d."]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u6211\u4eec\u8f93\u5165\u7684\u56fe\u7247"}),"\n",(0,i.jsx)(e.li,{children:"\u7b2c\u4e8c\u548c\u7b2c\u4e09\u4e2a\u53c2\u6570\u5206\u522b\u662f\u6700\u5c0f\u503c\u548c\u6700\u5927\u503c"}),"\n",(0,i.jsx)(e.li,{children:"\u7b2c\u56db\u4e2a\u53c2\u6570\u662f\u5b54\u5f84\u5c3a\u5bf8, \u5b83\u88ab\u7528\u4e8e\u5bfb\u627e\u56fe\u50cf\u68af\u5ea6, \u662fSobel kernel\u7684\u5c3a\u5bf8, \u9ed8\u8ba4\u503c\u662f3."}),"\n",(0,i.jsx)(e.li,{children:"\u6700\u540e\u4e00\u4e2a\u53c2\u6570\u662fL2gradient(\u6307\u5b9a\u67e5\u627e\u6e10\u53d8\u5e45\u5ea6\u7684\u516c\u5f0f), \u5982\u679c\u4e3aTrue, \u5b83\u4f7f\u7528\u5982\u4e0a\u66f4\u7cbe\u5bc6\u7684\u516c\u5f0f, \u5426\u5219\u4f7f\u7528Edge_Gradient(G)=|Gx|+|Gy|, \u9ed8\u8ba4\u503c\u4e3aFalse"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"import numpy as np\nimport cv2 as cv\nfrom matplotlib import pyplot as plt\nimg = cv.imread('messi5.jpg',0)\nedges = cv.Canny(img,100,200)\nplt.subplot(121),plt.imshow(img,cmap = 'gray')\nplt.title('Original Image'), plt.xticks([]), plt.yticks([])\nplt.subplot(122),plt.imshow(edges,cmap = 'gray')\nplt.title('Edge Image'), plt.xticks([]), plt.yticks([])\nplt.show()\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u8fd0\u884c\u7ed3\u679c:"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://static.oschina.net/uploads/img/201712/31054027_wy0k.jpg",alt:"canny1.jpg"})}),"\n",(0,i.jsx)(e.h3,{id:"\u53c2\u8003\u6587\u4ef6",children:"\u53c2\u8003\u6587\u4ef6"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://docs.opencv.org/3.4.0/da/d22/tutorial_py_canny.html",children:"Canny Edge Detection"})})]})}function d(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(p,{...n})}):p(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>a,x:()=>c});var i=t(96540);const l={},s=i.createContext(l);function a(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:a(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);