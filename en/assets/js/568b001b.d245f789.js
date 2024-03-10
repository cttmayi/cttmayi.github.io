"use strict";(self.webpackChunkmy_github=self.webpackChunkmy_github||[]).push([[9909],{59722:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>m});var t=n(74848),s=n(28453);const a={},o="Transformer\u4e0e\u6ce8\u610f\u529b\u673a\u5236",i={id:"chatGPT/gpt.transformer",title:"Transformer\u4e0e\u6ce8\u610f\u529b\u673a\u5236",description:'"Attention is All You Need"\uff08Vaswani, et al., 2017\uff09\u662f2017\u5e74\u6700\u6709\u5f71\u54cd\u529b\u7684NLP\u8bba\u6587\u4e4b\u4e00\u3002\u8fd9\u7bc7\u8bba\u6587\u63d0\u51fa\u4e86\u5f88\u591a\u5bf9\u6ce8\u610f\u529b\u6280\u672f\u7684\u6539\u8fdb\uff0c\u5728\u5faa\u73af\u7f51\u7edc\u5355\u5143\u7684\u60c5\u51b5\u4e0b\u5b9e\u73b0seq2seq\u5efa\u6a21\uff0c\u5e76\u4e14\u63d0\u51fa\u65b0\u7684Transformer\u67b6\u6784\u3002',source:"@site/docs/chatGPT/gpt.transformer.md",sourceDirName:"chatGPT",slug:"/chatGPT/gpt.transformer",permalink:"/en/docs/chatGPT/gpt.transformer",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5fae\u8c03\uff08Fine-tune\uff09",permalink:"/en/docs/chatGPT/finetune"},next:{title:"\u67b6\u6784\u77e5\u8bc6",permalink:"/en/docs/chatGPT/gpt.\u67b6\u6784\u77e5\u8bc6"}},c={},m=[];function d(e){const r={h1:"h1",img:"img",p:"p",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"transformer\u4e0e\u6ce8\u610f\u529b\u673a\u5236",children:"Transformer\u4e0e\u6ce8\u610f\u529b\u673a\u5236"}),"\n",(0,t.jsx)(r.p,{children:'"Attention is All You Need"\uff08Vaswani, et al., 2017\uff09\u662f2017\u5e74\u6700\u6709\u5f71\u54cd\u529b\u7684NLP\u8bba\u6587\u4e4b\u4e00\u3002\u8fd9\u7bc7\u8bba\u6587\u63d0\u51fa\u4e86\u5f88\u591a\u5bf9\u6ce8\u610f\u529b\u6280\u672f\u7684\u6539\u8fdb\uff0c\u5728\u5faa\u73af\u7f51\u7edc\u5355\u5143\u7684\u60c5\u51b5\u4e0b\u5b9e\u73b0seq2seq\u5efa\u6a21\uff0c\u5e76\u4e14\u63d0\u51fa\u65b0\u7684Transformer\u67b6\u6784\u3002'}),"\n",(0,t.jsx)(r.p,{children:"Transformer\u5728\u6570\u5b66\u4e0a\u662f\u5927\u77e9\u9635\u7684\u8ba1\u7b97\uff0c\u901a\u8fc7\u8ba1\u7b97\u4e0d\u540c\u8bed\u4e49\u4e4b\u95f4\u7684\u5173\u8054\u5ea6\uff08\u6982\u7387\uff09\u6765\u751f\u6210\u5177\u6709\u6700\u9ad8\u6982\u7387\u7684\u8bed\u4e49\u53cd\u9988\u3002RNN\u3001LSTM\u6216\u8005GRU\u4e3b\u8981\u662f\u8fdb\u884c\u6a21\u5f0f\u8bc6\u522b\uff0c\u800cTransformer\u4e0d\u4ec5\u4ec5\u662f\u4e00\u4e2a\u77e9\u9635\u8ba1\u7b97\u3002Transformer\u4e8b\u5b9e\u4e0a\u8fd8\u627f\u8f7d\u7740\u8bed\u4e49\u5173\u8054\u7684\u91cd\u8981\u529f\u80fd\u3002"}),"\n",(0,t.jsx)(r.p,{children:"Transformer\u4e2d\u7684\u6838\u5fc3\u7ec4\u4ef6\u662f\u591a\u5934\u81ea\u6ce8\u610f\u673a\u5236\u6a21\u5757\u3002Transformer\u5c06\u8f93\u5165\u7684\u7f16\u7801\u8868\u793a\u89c6\u4e3a\u4e00\u7ec4\u952e\u503c\u5bf9\uff08K\uff0cV\uff09\uff0c\u4e24\u8005\u7684\u7ef4\u5ea6\u90fd\u7b49\u4e8e\u8f93\u5165\u5e8f\u5217\u957f\u5ea6\u3002"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"\u591a\u5934\u81ea\u6ce8\u610f\u673a\u5236\u6a21\u5757",src:n(70781).A+"",width:"720",height:"402"})}),"\n",(0,t.jsx)(r.p,{children:"\u591a\u5934\u6ce8\u610f\u529b\u673a\u5236\u7684\u6a21\u5757\u5185\u91c7\u7528\u7f29\u653e\u70b9\u79ef\u6ce8\u610f\u529b\u673a\u5236\uff1a\u8f93\u51fa\u662f\u503c\u7684\u52a0\u6743\u548c\uff0c\u5176\u4e2d\u5206\u914d\u7ed9\u6bcf\u4e2a\u503c\u7684\u6743\u91cd\u7531\u67e5\u8be2\uff08Q\uff09\u4e0e\u6240\u6709\u952e\uff08K\uff09\u7684\u70b9\u79ef\u51b3\u5b9a\uff1a"}),"\n",(0,t.jsx)(r.p,{children:"\u591a\u5934\u673a\u5236\u4e0d\u662f\u53ea\u8ba1\u7b97\u4e00\u6b21\u6ce8\u610f\u529b\uff0c\u800c\u662f\u5e76\u884c\u8fd0\u884c\u7f29\u653e\u70b9\u79ef\u6ce8\u610f\u529b\u7b97\u6cd5\u3002\u72ec\u7acb\u7684\u6ce8\u610f\u529b\u8f93\u51fa\u88abConcat\u8fde\u63a5\uff08\u77e9\u9635\u8fde\u63a5\uff0c\u975e\u8ba1\u7b97\uff09\u5e76\u7ebf\u6027\u8f6c\u6362\u4e3a\u9884\u671f\u7684\u7ef4\u5ea6\u3002"}),"\n",(0,t.jsx)(r.p,{children:"\u539f\u59cb\u7684Transoformer\u5305\u62ec\u7f16\u7801\u5668-\u89e3\u7801\u5668\u67b6\u6784\uff08GPT\u53ea\u6709\u89e3\u7801\u5668\u7ed3\u6784\uff09\u3002\u7f16\u7801\u5668\u548c\u89e3\u7801\u5668\u90fd\u662fN\u4e2a\u76f8\u540c\u5c42\u7684\u5806\u53e0\uff0c\u6e90\u5e8f\u5217\u548c\u76ee\u6807\u5e8f\u5217\uff08\u539f\u59cb\u6570\u636e\u53ef\u4ee5\u662f\u56fe\u50cf\u6216\u6587\u672c\uff09\u90fd\u7ecf\u8fc7\u5d4c\u5165\u5c42\u4ee5\u4ea7\u751f\u76f8\u540c\u7ef4\u5ea6\u7684\u6570\u636e\u3002"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"Transformer\u6574\u4f53\u67b6\u6784",src:n(37015).A+"",width:"720",height:"474"})}),"\n",(0,t.jsx)(r.p,{children:"\u5355\u4e2a\u7f16\u7801\u5668\u5c42\u7531\u591a\u5934\u6ce8\u610f\u529b\u5757\uff08\u542b\u6709Q\u3001K\u3001V\u8f93\u5165\uff09\u548c\u4e00\u4e2a\u524d\u9988\u6a21\u5757\u7ec4\u6210\u3002\u89e3\u7801\u5668\u5c42\u7531\u591a\u5934\u6ce8\u610f\u529b\u5757\u5f00\u59cb\uff0c\u540e\u9762\u662f\u4e00\u4e2a\u8fde\u63a5\u7f16\u7801\u5668\u5806\u6808\u8f93\u51fa\u7684\u591a\u5934\u6ce8\u610f\u5757\uff08\u5373\u67e5\u8be2Q\u6765\u81ea\u89e3\u7801\u5668\uff0c\u800c\u503cV\u548c\u952eK\u6765\u81ea\u7f16\u7801\u5668\uff09\uff0c\u7136\u540e\u662f\u4e00\u4e2a\u524d\u9988\u6a21\u5757\uff0c\u6700\u7ec8\u5728 Softmax\uff08\u9009\u62e9\u6982\u7387\u6700\u9ad8\u7684\u5206\u7c7b\u6216\u8bcd\u6c47\uff09\u6a21\u5757\u8fdb\u884c\u5206\u7c7b\u5668\u8f93\u51fa\u3002"}),"\n",(0,t.jsx)(r.p,{children:"\u968f\u7740Transformer\u6280\u672f\u7684\u53d1\u5c55\uff0cTransformer\u4e5f\u4f7f\u7528\u5728\u4e86CV\u9886\u57df\uff0c\u5e76\u5f62\u6210\u4e86Vision Transformer\u6280\u672f\u3002"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"transformer_v_l",src:n(35916).A+"",width:"720",height:"274"})})]})}function f(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},70781:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/attention-a986806ec5ea458943b8ca3d4f558a50.jpg"},37015:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/transformer-2a8aa2d6a4ab8e42e0d723e29651a216.webp"},35916:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/transformer_v_l-fb1e0bb0e0cb8b37e35ff062a832fdb5.jpg"},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>i});var t=n(96540);const s={},a=t.createContext(s);function o(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);