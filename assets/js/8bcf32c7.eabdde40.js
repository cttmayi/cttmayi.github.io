"use strict";(self.webpackChunkmy_github=self.webpackChunkmy_github||[]).push([[39123],{90022:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var s=c(74848),t=c(28453);const i={title:"OpenCV3 - \u6211\u4eec\u4eceImages\u5f00\u59cb",tags:["OpenCV","\u7ffb\u8bd1"],authors:"cttmayi"},d=void 0,a={permalink:"/blog/2019/04/02/OpenCV3\u6211\u4eec\u4eceImages\u5f00\u59cb",source:"@site/blog/2019-04-02-OpenCV3\u6211\u4eec\u4eceImages\u5f00\u59cb/index.md",title:"OpenCV3 - \u6211\u4eec\u4eceImages\u5f00\u59cb",description:"\u8bfb\u53d6\u56fe\u7247",date:"2019-04-02T00:00:00.000Z",formattedDate:"2019\u5e744\u67082\u65e5",tags:[{label:"OpenCV",permalink:"/blog/tags/open-cv"},{label:"\u7ffb\u8bd1",permalink:"/blog/tags/\u7ffb\u8bd1"}],readingTime:1.3066666666666666,hasTruncateMarker:!1,authors:[{name:"Ling Yuan",title:"Engineer",url:"https://github.com/cttmayi",imageURL:"https://github.com/cttmayi.png",key:"cttmayi"}],frontMatter:{title:"OpenCV3 - \u6211\u4eec\u4eceImages\u5f00\u59cb",tags:["OpenCV","\u7ffb\u8bd1"],authors:"cttmayi"},unlisted:!1,prevItem:{title:"OpenCV3 - \u5f62\u6001\u8f6c\u6362",permalink:"/blog/2019/04/02/OpenCV3\u5f62\u6001\u8f6c\u6362"},nextItem:{title:"OpenCV3 - \u8f6e\u5ed3\u5165\u95e8",permalink:"/blog/2019/04/02/OpenCV3\u8f6e\u5ed3\u5165\u95e8"}},r={authorsImageUrls:[void 0]},o=[{value:"\u8bfb\u53d6\u56fe\u7247",id:"\u8bfb\u53d6\u56fe\u7247",level:3},{value:"\u663e\u793a\u56fe\u7247",id:"\u663e\u793a\u56fe\u7247",level:3},{value:"\u4fdd\u5b58\u56fe\u7247",id:"\u4fdd\u5b58\u56fe\u7247",level:3},{value:"\u5408\u8d77\u6765",id:"\u5408\u8d77\u6765",level:3},{value:"\u53c2\u8003\u6587\u4ef6",id:"\u53c2\u8003\u6587\u4ef6",level:3}];function l(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"\u8bfb\u53d6\u56fe\u7247",children:"\u8bfb\u53d6\u56fe\u7247"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528**",(0,s.jsx)(n.a,{href:"https://docs.opencv.org/3.4.0/d4/da8/group__imgcodecs.html##ga288b8b3da0892bd651fce07b3bbd3a56",children:"cv.imread("}),(0,s.jsx)(n.strong,{children:"path, flag"}),(0,s.jsx)(n.a,{href:"https://docs.opencv.org/3.4.0/d4/da8/group__imgcodecs.html##ga288b8b3da0892bd651fce07b3bbd3a56",children:")"}),"**\u51fd\u6570\u8bfb\u53d6\u56fe\u7247"]}),"\n",(0,s.jsx)(n.p,{children:"\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u6587\u4ef6\u8def\u52b2"}),"\n",(0,s.jsx)(n.p,{children:"\u7b2c\u4e8c\u4e2a\u53c2\u6570\u6307\u5b9a\u8bfb\u53d6\u6587\u4ef6\u7684\u6807\u5fd7\u4f4d"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.opencv.org/3.4.0/d4/da8/group__imgcodecs.html##gga61d9b0126a3e57d9277ac48327799c80af660544735200cbe942eea09232eb822",children:"cv.IMREAD_COLOR"})," : \u8bfb\u53d6\u5f69\u8272\u56fe\u7247, \u6b64\u4e3a\u51fd\u6570\u9ed8\u8ba4\u503c"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.opencv.org/3.4.0/d4/da8/group__imgcodecs.html##gga61d9b0126a3e57d9277ac48327799c80ae29981cfc153d3b0cef5c0daeedd2125",children:"cv.IMREAD_GRAYSCALE"})," : \u4f7f\u7528\u7070\u5ea6\u6a21\u5f0f\u8bfb\u53d6\u56fe\u7247"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.opencv.org/3.4.0/d4/da8/group__imgcodecs.html##gga61d9b0126a3e57d9277ac48327799c80aeddd67043ed0df14f9d9a4e66d2b0708",children:"cv.IMREAD_UNCHANGED"})," : \u8bfb\u53d6\u56fe\u7247(\u5e26alpha\u901a\u9053)"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u53c2\u8003\u4ee3\u7801"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import numpy as np\nimport cv2 as cv\n# Load an color image in grayscale\nimg = cv.imread('messi5.jpg',0)\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u6ce8\u610f"}),": \u5982\u679c\u8def\u5f84\u9519\u8bef, \u4f1a\u8fd4\u56deNone"]}),"\n",(0,s.jsx)(n.h3,{id:"\u663e\u793a\u56fe\u7247",children:"\u663e\u793a\u56fe\u7247"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528\u51fd\u6570**",(0,s.jsx)(n.a,{href:"https://docs.opencv.org/3.4.0/d7/dfc/group__highgui.html##ga453d42fe4cb60e5723281a89973ee563",children:"cv.imshow("}),(0,s.jsx)(n.strong,{children:"name, img"}),(0,s.jsx)(n.a,{href:"https://docs.opencv.org/3.4.0/d7/dfc/group__highgui.html##ga453d42fe4cb60e5723281a89973ee563",children:")"}),"**\u5728\u7a97\u53e3\u4e2d\u663e\u793a\u56fe\u7247, \u7a97\u53e3\u5c06\u81ea\u52a8\u5339\u914d\u56fe\u7247\u5927\u5c0f"]}),"\n",(0,s.jsx)(n.p,{children:"\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u7a97\u53e3\u540d(\u5b57\u7b26\u4e32),"}),"\n",(0,s.jsx)(n.p,{children:"\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u6211\u4eec\u7684\u56fe\u7247\u5bf9\u8c61."}),"\n",(0,s.jsx)(n.p,{children:"\u4f60\u53ef\u4ee5\u521b\u5efa\u5f88\u591a\u7a97\u53e3, \u4f46\u9700\u8981\u4f7f\u7528\u4e0d\u540c\u7684\u7a97\u53e3\u540d"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"cv.imshow('image',img)\ncv.waitKey(0)\ncv.destroyAllWindows()\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u51fd\u6570**",(0,s.jsx)(n.a,{href:"https://docs.opencv.org/3.4.0/d7/dfc/group__highgui.html##ga5628525ad33f52eab17feebcfba38bd7",children:"cv.waitKey("}),(0,s.jsx)(n.strong,{children:"time"}),(0,s.jsx)(n.a,{href:"https://docs.opencv.org/3.4.0/d7/dfc/group__highgui.html##ga5628525ad33f52eab17feebcfba38bd7",children:")"}),"**\u662f\u952e\u76d8\u8f93\u5165\u51fd\u6570. \u53c2\u6570\u662f\u4e00\u4e2a\u65f6\u95f4(\u5355\u4f4d: \u6beb\u79d2), \u51fd\u6570\u5c06\u63a5\u6536\u4efb\u610f\u952e\u76d8\u8f93\u5165(\u6307\u5b9a\u7684\u65f6\u95f4\u5185)"]}),"\n",(0,s.jsxs)(n.p,{children:["\u51fd\u6570**",(0,s.jsx)(n.a,{href:"https://docs.opencv.org/3.4.0/d7/dfc/group__highgui.html##ga6b7fc1c1a8960438156912027b38f481",children:"cv.destroyAllWindows("}),"****",(0,s.jsx)(n.a,{href:"https://docs.opencv.org/3.4.0/d7/dfc/group__highgui.html##ga6b7fc1c1a8960438156912027b38f481",children:")"}),"**\u5c06\u5220\u9664\u6240\u6709\u521b\u5efa\u7684\u7a97\u53e3"]}),"\n",(0,s.jsx)(n.h3,{id:"\u4fdd\u5b58\u56fe\u7247",children:"\u4fdd\u5b58\u56fe\u7247"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528**",(0,s.jsx)(n.a,{href:"https://docs.opencv.org/3.4.0/d4/da8/group__imgcodecs.html##gabbc7ef1aa2edfaa87772f1202d67e0ce",children:"cv.imwrite()"}),"**\u53ef\u4ee5\u4fdd\u5b58\u56fe\u7247"]}),"\n",(0,s.jsx)(n.p,{children:"\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a\u6587\u4ef6\u540d"}),"\n",(0,s.jsx)(n.p,{children:"\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u4f60\u60f3\u4fdd\u5b58\u7684Image"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"cv.imwrite('messigray.png',img)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u5408\u8d77\u6765",children:"\u5408\u8d77\u6765"}),"\n",(0,s.jsx)(n.p,{children:"\u7070\u5ea6\u6a21\u5f0f\u8bfb\u53d6\u56fe\u7247, \u663e\u793a\u56fe\u7247. \u5982\u679c\u6309's'\u5219\u4fdd\u5b58\u56fe\u7247; \u5982\u679c\u6309ESC\u5219\u9000\u51fa."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"import numpy as np\nimport cv2 as cv\nimg = cv.imread('messi5.jpg',0)\ncv.imshow('image',img)\nk = cv.waitKey(0)\nif k == 27:         # wait for ESC key to exit\n    cv.destroyAllWindows()\nelif k == ord('s'): # wait for 's' key to save and exit\n    cv.imwrite('messigray.png',img)\n    cv.destroyAllWindows()\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u6ce8\u610f"}),': \u5982\u679c\u4f60\u4f7f\u752864-bit\u673a\u5668 \u4f60\u9700\u8981\u4fee\u6539"k = cv.waitKey(0)" \u4e3a "k = cv.waitKey(0) & 0xFF".']}),"\n",(0,s.jsx)(n.h3,{id:"\u53c2\u8003\u6587\u4ef6",children:"\u53c2\u8003\u6587\u4ef6"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://docs.opencv.org/3.4.0/dc/d2e/tutorial_py_image_display.html",children:"Getting Started with Images"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,c)=>{c.d(n,{R:()=>d,x:()=>a});var s=c(96540);const t={},i=s.createContext(t);function d(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);