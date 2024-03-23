"use strict";(self.webpackChunkmy_github=self.webpackChunkmy_github||[]).push([[14644],{20476:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var c=t(74848),r=t(28453);const l={title:"OpenCV3 - OpenCV\u7684\u7ed8\u56fe\u51fd\u6570",tags:["OpenCV","\u7ffb\u8bd1"],authors:"cttmayi"},i=void 0,s={permalink:"/blog/2019/04/02/OpenCV3OpenCV\u7684\u7ed8\u56fe\u51fd\u6570",source:"@site/blog/2019-04-02-OpenCV3OpenCV\u7684\u7ed8\u56fe\u51fd\u6570/index.md",title:"OpenCV3 - OpenCV\u7684\u7ed8\u56fe\u51fd\u6570",description:"\u4ee3\u7801",date:"2019-04-02T00:00:00.000Z",formattedDate:"2019\u5e744\u67082\u65e5",tags:[{label:"OpenCV",permalink:"/blog/tags/open-cv"},{label:"\u7ffb\u8bd1",permalink:"/blog/tags/\u7ffb\u8bd1"}],readingTime:.66,hasTruncateMarker:!1,authors:[{name:"Ling Yuan",title:"Engineer",url:"https://github.com/cttmayi",imageURL:"https://github.com/cttmayi.png",key:"cttmayi"}],frontMatter:{title:"OpenCV3 - OpenCV\u7684\u7ed8\u56fe\u51fd\u6570",tags:["OpenCV","\u7ffb\u8bd1"],authors:"cttmayi"},unlisted:!1,prevItem:{title:"OpenCV3 - Canny \u8fb9\u754c\u68c0\u6d4b",permalink:"/blog/2019/04/02/OpenCV3Canny\u8fb9\u754c\u68c0\u6d4b"},nextItem:{title:"OpenCV3 - \u6211\u4eec\u4eceImages\u5f00\u59cb",permalink:"/blog/2019/04/02/OpenCV3\u6211\u4eec\u4eceImages\u5f00\u59cb"}},a={authorsImageUrls:[void 0]},d=[{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u7ed8\u5236\u76f4\u7ebf",id:"\u7ed8\u5236\u76f4\u7ebf",level:3},{value:"\u7ed8\u5236\u65b9\u5f62",id:"\u7ed8\u5236\u65b9\u5f62",level:3},{value:"\u7ed8\u5236\u5706\u5f62",id:"\u7ed8\u5236\u5706\u5f62",level:3},{value:"\u7ed8\u5236\u692d\u5706",id:"\u7ed8\u5236\u692d\u5706",level:3},{value:"\u7ed8\u5236\u591a\u8fb9\u5f62",id:"\u7ed8\u5236\u591a\u8fb9\u5f62",level:3},{value:"\u6dfb\u52a0\u6587\u5b57",id:"\u6dfb\u52a0\u6587\u5b57",level:3},{value:"\u53c2\u8003\u6587\u4ef6",id:"\u53c2\u8003\u6587\u4ef6",level:3}];function o(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h3,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.a,{href:"https://docs.opencv.org/3.4.0/d6/d6e/group__imgproc__draw.html##ga7078a9fae8c7e7d13d24dac2520ae4a2",children:"cv.line()"})}),", ",(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.a,{href:"https://docs.opencv.org/3.4.0/d6/d6e/group__imgproc__draw.html##gaf10604b069374903dbd0f0488cb43670",children:"cv.circle()"})})," , ",(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.a,{href:"https://docs.opencv.org/3.4.0/d6/d6e/group__imgproc__draw.html##ga07d2f74cadcf8e305e810ce8eed13bc9",children:"cv.rectangle()"})}),", ",(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.a,{href:"https://docs.opencv.org/3.4.0/d6/d6e/group__imgproc__draw.html##ga28b2267d35786f5f890ca167236cbc69",children:"cv.ellipse()"})}),", ",(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.a,{href:"https://docs.opencv.org/3.4.0/d6/d6e/group__imgproc__draw.html##ga5126f47f883d730f633d74f07456c576",children:"cv.putText()"})})]}),"\n",(0,c.jsx)(n.p,{children:"\u5982\u4e0a\u6240\u6709\u7684\u51fd\u6570, \u90fd\u4f7f\u7528\u5982\u4e0b\u76f8\u4f3c\u7684\u53c2\u6570"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"img: \u4f60\u60f3\u7ed8\u5236\u56fe\u5f62\u7684\u56fe\u7247"}),"\n",(0,c.jsx)(n.li,{children:"color: \u56fe\u5f62\u7684\u989c\u8272, \u5982\u679c\u662fRGB, \u4f7f\u7528tuple, \u4f8b\u5982\u84dd\u8272(255,0,0), \u5982\u679c\u662f\u7070\u5ea6, \u76f4\u63a5\u4f7f\u7528\u7070\u5ea6\u503c"}),"\n",(0,c.jsx)(n.li,{children:"thickness: \u7ebf\u6761\u7684\u7c97\u7ec6"}),"\n",(0,c.jsxs)(n.li,{children:["lineType: \u7ebf\u6761\u7684\u7c7b\u578b(8\u8fde\u63a5\u7ebf, \u952f\u9f7f\u7ebf, ... ), \u9ed8\u8ba4\u662f8\u8fde\u63a5\u7ebf, ",(0,c.jsx)(n.a,{href:"https://docs.opencv.org/3.4.0/d0/de1/group__core.html##ggaf076ef45de481ac96e0ab3dc2c29a777a85fdabe5335c9e6656563dfd7c94fb4f",children:"cv.LINE_AA"}),"\u662f\u952f\u9f7f\u7ebf\u6761"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"\u7ed8\u5236\u76f4\u7ebf",children:"\u7ed8\u5236\u76f4\u7ebf"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"import numpy as np\nimport cv2 as cv\n# Create a black image\nimg = np.zeros((512,512,3), np.uint8)\n# Draw a diagonal blue line with thickness of 5 px\ncv.line(img,(0,0),(511,511),(255,0,0),5)\n\n"})}),"\n",(0,c.jsx)(n.h3,{id:"\u7ed8\u5236\u65b9\u5f62",children:"\u7ed8\u5236\u65b9\u5f62"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"cv.rectangle(img,(384,0),(510,128),(0,255,0),3)\n\n"})}),"\n",(0,c.jsx)(n.h3,{id:"\u7ed8\u5236\u5706\u5f62",children:"\u7ed8\u5236\u5706\u5f62"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"cv.circle(img,(447,63), 63, (0,0,255), -1)\n\n"})}),"\n",(0,c.jsx)(n.h3,{id:"\u7ed8\u5236\u692d\u5706",children:"\u7ed8\u5236\u692d\u5706"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"cv.ellipse(img,(256,256),(100,50),0,0,180,255,-1)\n\n"})}),"\n",(0,c.jsx)(n.h3,{id:"\u7ed8\u5236\u591a\u8fb9\u5f62",children:"\u7ed8\u5236\u591a\u8fb9\u5f62"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"pts = np.array([[10,5],[20,30],[70,20],[50,10]], np.int32)\npts = pts.reshape((-1,1,2))\ncv.polylines(img,[pts],True,(0,255,255))\n\n"})}),"\n",(0,c.jsx)(n.h3,{id:"\u6dfb\u52a0\u6587\u5b57",children:"\u6dfb\u52a0\u6587\u5b57"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-python",children:"font = cv.FONT_HERSHEY_SIMPLEX\ncv.putText(img,'OpenCV',(10,500), font, 4,(255,255,255),2,cv.LINE_AA)\n\n"})}),"\n",(0,c.jsx)(n.h3,{id:"\u53c2\u8003\u6587\u4ef6",children:"\u53c2\u8003\u6587\u4ef6"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.a,{href:"https://docs.opencv.org/3.4.0/dc/da5/tutorial_py_drawing_functions.html",children:"Drawing Functions in OpenCV"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var c=t(96540);const r={},l=c.createContext(r);function i(e){const n=c.useContext(l);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),c.createElement(l.Provider,{value:n},e.children)}}}]);