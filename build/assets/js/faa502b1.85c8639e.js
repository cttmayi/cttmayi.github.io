"use strict";(self.webpackChunkmy_github=self.webpackChunkmy_github||[]).push([[76203],{85730:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var r=t(74848),i=t(28453);const s={title:"OpenCV3 - \u8f6e\u5ed3\u5165\u95e8",tags:["OpenCV","\u7ffb\u8bd1"],authors:"cttmayi"},c=void 0,o={permalink:"/blog/2019/04/02/OpenCV3\u8f6e\u5ed3\u5165\u95e8",source:"@site/blog/2019-04-02-OpenCV3\u8f6e\u5ed3\u5165\u95e8/index.md",title:"OpenCV3 - \u8f6e\u5ed3\u5165\u95e8",description:"\u4ec0\u4e48\u662f\u8f6e\u5ed3",date:"2019-04-02T00:00:00.000Z",formattedDate:"2019\u5e744\u67082\u65e5",tags:[{label:"OpenCV",permalink:"/blog/tags/open-cv"},{label:"\u7ffb\u8bd1",permalink:"/blog/tags/\u7ffb\u8bd1"}],readingTime:1.8966666666666667,hasTruncateMarker:!1,authors:[{name:"Ling Yuan",title:"Engineer",url:"https://github.com/cttmayi",imageURL:"https://github.com/cttmayi.png",key:"cttmayi"}],frontMatter:{title:"OpenCV3 - \u8f6e\u5ed3\u5165\u95e8",tags:["OpenCV","\u7ffb\u8bd1"],authors:"cttmayi"},unlisted:!1,prevItem:{title:"OpenCV3 - \u5f62\u6001\u8f6c\u6362",permalink:"/blog/2019/04/02/OpenCV3\u5f62\u6001\u8f6c\u6362"},nextItem:{title:"OpenCV3 - \u8f6e\u5ed3\u7279\u5f81",permalink:"/blog/2019/04/02/OpenCV3\u8f6e\u5ed3\u7279\u5f81"}},l={authorsImageUrls:[void 0]},a=[{value:"\u4ec0\u4e48\u662f\u8f6e\u5ed3",id:"\u4ec0\u4e48\u662f\u8f6e\u5ed3",level:2},{value:"\u5982\u4f55\u7ed8\u5236\u8f6e\u5ed3",id:"\u5982\u4f55\u7ed8\u5236\u8f6e\u5ed3",level:2},{value:"\u53c2\u8003\u6587\u4ef6",id:"\u53c2\u8003\u6587\u4ef6",level:2}];function d(n){const e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"\u4ec0\u4e48\u662f\u8f6e\u5ed3",children:"\u4ec0\u4e48\u662f\u8f6e\u5ed3"}),"\n",(0,r.jsx)(e.p,{children:"\u8f6e\u5ed3\u53ef\u4ee5\u7b80\u5355\u7684\u88ab\u89e3\u91ca\u4e3a\u4e00\u4e2a\u66f2\u7ebf(\u6cbf\u8fb9\u754c)\u7684\u8fde\u7eed\u70b9, \u6709\u76f8\u540c\u7684\u989c\u8272\u6216\u8005\u6df1\u5ea6. \u5bfb\u627e\u8f6e\u5ed3\u662f\u4e00\u4e2a\u5bf9\u4e8e\u56fe\u5f62\u5206\u6790\u548c\u5bf9\u8c61\u68c0\u6d4b\u8bc6\u522b\u975e\u5e38\u6709\u7528\u7684\u5de5\u5177."}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u4e3a\u66f4\u597d\u7684\u7cbe\u5ea6, \u4f7f\u7528\u7070\u5ea6\u56fe\u50cf(Binary Image). \u6240\u6709\u5728\u5bfb\u627e\u8f6e\u5ed3\u524d, \u4f7f\u7528\u65b9\u6cd5 threshold \u6216\u8005 canny edge detection"}),"\n",(0,r.jsxs)(e.li,{children:["\u4eceOpenCV 3.2\u5f00\u59cb, ",(0,r.jsx)(e.a,{href:"https://docs.opencv.org/3.4.0/d3/dc0/group__imgproc__shape.html##ga17ed9f5d79ae97bd4c7cf18403e1689a",children:"findContours()"})," \u4e0d\u518d\u4fee\u6539\u539f\u56fe\u7247, \u4f46\u4f1a\u8fd4\u56de\u4fee\u6539\u8fc7\u7684\u56fe\u7247(\u5b83\u662f\u4e09\u4e2a\u8fd4\u56de\u503c\u7684\u7b2c\u4e00\u4e2a)"]}),"\n",(0,r.jsx)(e.li,{children:"\u5728OpenCV\u4e2d, \u5bfb\u627e\u8f6e\u5ed3\u662f\u5728\u9ed1\u8272\u80cc\u666f\u4e0b\u5bfb\u627e\u767d\u8272\u5bf9\u8c61. \u6240\u6709\u8bf7\u8bb0\u8005, \u88ab\u5bfb\u627e\u7684\u5bf9\u8c61\u9700\u8981\u662f\u767d\u8272,  \u80cc\u666f\u9700\u8981\u662f\u9ed1\u8272."}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u5bfb\u627e\u8f6e\u5ed3\u8303\u4f8b"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"import numpy as np\nimport cv2 as cv\nim = cv.imread('test.jpg')\nimgray = cv.cvtColor(im, cv.COLOR_BGR2GRAY)\nret, thresh = cv.threshold(imgray, 127, 255, 0)\nim2, contours, hierarchy = cv.findContours(thresh, cv.RETR_TREE, cv.CHAIN_APPROX_SIMPLE)\n"})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"https://docs.opencv.org/3.4.0/d3/dc0/group__imgproc__shape.html##ga17ed9f5d79ae97bd4c7cf18403e1689a",children:"cv.findContours()"})," \u6709\u4e09\u4e2a\u53c2\u6570"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u539f\u59cb\u56fe\u50cf"}),"\n",(0,r.jsxs)(e.li,{children:["\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u8f6e\u5ed3\u7684\u68c0\u7d22\u6a21\u5f0f","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"RETR_EXTERNAL\u8868\u793a\u53ea\u68c0\u6d4b\u5916\u8f6e\u5ed3"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"RETR_LIST\u68c0\u6d4b\u7684\u8f6e\u5ed3\u4e0d\u5efa\u7acb\u7b49\u7ea7\u5173\u7cfb"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"RETR_CCOMP\u5efa\u7acb\u4e24\u4e2a\u7b49\u7ea7\u7684\u8f6e\u5ed3, \u4e0a\u9762\u7684\u4e00\u5c42\u4e3a\u5916\u8fb9\u754c, \u91cc\u9762\u7684\u4e00\u5c42\u4e3a\u5185\u5b54\u7684\u8fb9\u754c\u4fe1\u606f\u3002\u5982\u679c\u5185\u5b54\u5185\u8fd8\u6709\u4e00\u4e2a\u8fde\u901a\u7269\u4f53, \u8fd9\u4e2a\u7269\u4f53\u7684\u8fb9\u754c\u4e5f\u5728\u9876\u5c42."}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"RETR_TREE\u5efa\u7acb\u4e00\u4e2a\u7b49\u7ea7\u6811\u7ed3\u6784\u7684\u8f6e\u5ed3."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\u7b2c\u4e09\u4e2a\u53c2\u6570\u662f\u8f6e\u5ed3\u903c\u8fd1\u65b9\u6cd5","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"CHAIN_APPROX_NONE\u5b58\u50a8\u6240\u6709\u7684\u8f6e\u5ed3\u70b9\uff0c\u76f8\u90bb\u7684\u4e24\u4e2a\u70b9\u7684\u50cf\u7d20\u4f4d\u7f6e\u5dee\u4e0d\u8d85\u8fc71\uff0c\u5373max\uff08abs\uff08x1-x2\uff09\uff0cabs\uff08y2-y1\uff09\uff09==1"}),"\n",(0,r.jsx)(e.li,{children:"CHAIN_APPROX_SIMPLE\u538b\u7f29\u6c34\u5e73\u65b9\u5411\uff0c\u5782\u76f4\u65b9\u5411\uff0c\u5bf9\u89d2\u7ebf\u65b9\u5411\u7684\u5143\u7d20\uff0c\u53ea\u4fdd\u7559\u8be5\u65b9\u5411\u7684\u7ec8\u70b9\u5750\u6807\uff0c\u4f8b\u5982\u4e00\u4e2a\u77e9\u5f62\u8f6e\u5ed3\u53ea\u97004\u4e2a\u70b9\u6765\u4fdd\u5b58\u8f6e\u5ed3\u4fe1\u606f"}),"\n",(0,r.jsx)(e.li,{children:"CHAIN_APPROX_TC89_L1\uff0cCV_CHAIN_APPROX_TC89_KCOS\u4f7f\u7528teh-Chinl chain \u8fd1\u4f3c\u7b97\u6cd5"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u8fd4\u56de\u503c: \u7b2c\u4e00\u4e2a\u662f\u88ab\u4fee\u6539\u540e\u7684\u56fe\u50cf, \u7b2c\u4e8c\u4e2a\u662f\u8f6e\u5ed3(contours), \u7b2c\u4e09\u4e2a\u662f\u5c42\u6b21(hierarchy). contours \u662f\u4e00\u4e2a\u5305\u542b\u6240\u6709\u8f6e\u5ed3\u7684\u6570\u7ec4. \u6bcf\u4e2a\u5355\u72ec\u7684\u8f6e\u5ed3\u662f\u4e00\u4e2a Numpy \u6570\u7ec4 (x, y) \u5750\u6807\u7684\u8fb9\u754c\u70b9\u7684\u5bf9\u8c61."}),"\n",(0,r.jsx)(e.h2,{id:"\u5982\u4f55\u7ed8\u5236\u8f6e\u5ed3",children:"\u5982\u4f55\u7ed8\u5236\u8f6e\u5ed3"}),"\n",(0,r.jsxs)(e.p,{children:["\u7ed8\u5236\u8f6e\u5ed3, \u4f7f\u7528",(0,r.jsx)(e.a,{href:"https://docs.opencv.org/3.4.0/d6/d6e/group__imgproc__draw.html##ga746c0625f1781f1ffc9056259103edbc",children:"cv.drawContours"}),"\u51fd\u6570."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"# To draw all the contours in an image\ncv.drawContours(img, contours, -1, (0,255,0), 3)\n\n# To draw an individual contour, say 4th contour\ncv.drawContours(img, contours, 3, (0,255,0), 3)\n\n# But most of the time, below method will be useful\ncnt = contours[4]\ncv.drawContours(img, [cnt], 0, (0,255,0), 3)\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u53c2\u8003\u6587\u4ef6",children:"\u53c2\u8003\u6587\u4ef6"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://docs.opencv.org/3.4.0/d4/d73/tutorial_py_contours_begin.html",children:"Contours : Getting Started"})})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>o});var r=t(96540);const i={},s=r.createContext(i);function c(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);