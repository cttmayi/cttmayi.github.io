"use strict";(self.webpackChunkmy_github=self.webpackChunkmy_github||[]).push([[81736],{91473:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=t(74848),o=t(28453);const r={title:"OpenCV3 - \u5f62\u6001\u8f6c\u6362",tags:["OpenCV","\u7ffb\u8bd1"],authors:"cttmayi"},s=void 0,l={permalink:"/en/blog/2019/04/02/OpenCV3\u5f62\u6001\u8f6c\u6362",source:"@site/blog/2019-04-02-OpenCV3\u5f62\u6001\u8f6c\u6362/index.md",title:"OpenCV3 - \u5f62\u6001\u8f6c\u6362",description:"cv.erode(), cv.dilate(), cv.morphologyEx()",date:"2019-04-02T00:00:00.000Z",formattedDate:"April 2, 2019",tags:[{label:"OpenCV",permalink:"/en/blog/tags/open-cv"},{label:"\u7ffb\u8bd1",permalink:"/en/blog/tags/\u7ffb\u8bd1"}],readingTime:.46,hasTruncateMarker:!1,authors:[{name:"Ling Yuan",title:"Engineer",url:"https://github.com/cttmayi",imageURL:"https://github.com/cttmayi.png",key:"cttmayi"}],frontMatter:{title:"OpenCV3 - \u5f62\u6001\u8f6c\u6362",tags:["OpenCV","\u7ffb\u8bd1"],authors:"cttmayi"},unlisted:!1,prevItem:{title:"Kodu - \u8fd0\u7b97",permalink:"/en/blog/2019/04/03/Kodu\u8fd0\u7b97"},nextItem:{title:"OpenCV3 - OpenCV\u7684\u7ed8\u56fe\u51fd\u6570",permalink:"/en/blog/2019/04/02/OpenCV3OpenCV\u7684\u7ed8\u56fe\u51fd\u6570"}},a={authorsImageUrls:[void 0]},c=[{value:"\u7406\u8bba",id:"\u7406\u8bba",level:2},{value:"\u4fb5\u8680(Erosion)",id:"\u4fb5\u8680erosion",level:2},{value:"\u6269\u5f20(Dilation)",id:"\u6269\u5f20dilation",level:2},{value:"\u53c2\u8003\u6587\u4ef6",id:"\u53c2\u8003\u6587\u4ef6",level:3}];function p(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://docs.opencv.org/3.4.0/d4/d86/group__imgproc__filter.html##gaeb1e0c1033e3f6b891a25d0511362aeb",children:"cv.erode()"})}),", ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://docs.opencv.org/3.4.0/d4/d86/group__imgproc__filter.html##ga4ff0f3318642c4f469d0e11f242f3b6c",children:"cv.dilate()"})}),", ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"https://docs.opencv.org/3.4.0/d4/d86/group__imgproc__filter.html##ga67493776e3ad1a3df63883829375201f",children:"cv.morphologyEx()"})})]}),"\n",(0,i.jsx)(n.h2,{id:"\u7406\u8bba",children:"\u7406\u8bba"}),"\n",(0,i.jsx)(n.p,{children:"\u5f62\u6001\u8f6c\u6362\u662f\u4e00\u4e9b\u57fa\u4e8e\u56fe\u5f62\u7684\u7b80\u5355\u64cd\u4f5c. \u5b83\u6709\u4e24\u4e2a\u8f93\u5165, \u7b2c\u4e00\u4e2a\u662f\u539f\u59cb\u56fe\u50cf, \u7b2c\u4e8c\u4e2a\u53eb\u505a\u7ed3\u6784\u5143\u7d20(structuring element)\u6216\u8005\u5185\u6838(kernel). \u4e24\u4e2a\u57fa\u672c\u7684\u5f62\u6001\u8f6c\u6362\u662f\u4fb5\u8680\u548c\u6269\u5f20"}),"\n",(0,i.jsx)(n.h2,{id:"\u4fb5\u8680erosion",children:"\u4fb5\u8680(Erosion)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import cv2 as cv\nimport numpy as np\nimg = cv.imread('j.png',0)\nkernel = np.ones((5,5),np.uint8) # use a 5x5 kernel with full of ones\nerosion = cv.erode(img,kernel,iterations = 1)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u56fe\u50cf",(0,i.jsx)(n.img,{src:"https://static.oschina.net/uploads/img/201712/31071414_3tHA.png",alt:"j.png"}),(0,i.jsx)(n.strong,{children:"\u4fb5\u8680"}),"\u540e\u7684\u7ed3\u679c: ",(0,i.jsx)(n.img,{src:"https://static.oschina.net/uploads/img/201712/31071414_8dAn.png",alt:"erosion.png"})]}),"\n",(0,i.jsx)(n.h2,{id:"\u6269\u5f20dilation",children:"\u6269\u5f20(Dilation)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"dilation = cv.dilate(img,kernel,iterations = 1)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u56fe\u50cf",(0,i.jsx)(n.img,{src:"https://static.oschina.net/uploads/img/201712/31071414_3tHA.png",alt:"j.png"}),(0,i.jsx)(n.strong,{children:"\u6269\u5f20"}),"\u540e\u7684\u7ed3\u679c: ",(0,i.jsx)(n.img,{src:"https://static.oschina.net/uploads/img/201712/31071414_dZZ0.png",alt:"dilation.png"})]}),"\n",(0,i.jsx)(n.h3,{id:"\u53c2\u8003\u6587\u4ef6",children:"\u53c2\u8003\u6587\u4ef6"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://docs.opencv.org/3.4.0/d9/d61/tutorial_py_morphological_ops.html",children:"Morphological Transformations"})})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var i=t(96540);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);