"use strict";(self.webpackChunkmy_github=self.webpackChunkmy_github||[]).push([[5753],{7128:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>x,frontMatter:()=>t,metadata:()=>d,toc:()=>h});var r=s(4848),i=s(8453);const t={},l="\u67b6\u6784\u6982\u8ff0",d={id:"\u5927\u6a21\u578b/GPT/\u67b6\u6784\u6982\u8ff0",title:"\u67b6\u6784\u6982\u8ff0",description:"RNN/LSTM/GRU\u65f6\u4ee3",source:"@site/docs/\u5927\u6a21\u578b/GPT/\u67b6\u6784\u6982\u8ff0.md",sourceDirName:"\u5927\u6a21\u578b/GPT",slug:"/\u5927\u6a21\u578b/GPT/\u67b6\u6784\u6982\u8ff0",permalink:"/\u5927\u6a21\u578b/GPT/\u67b6\u6784\u6982\u8ff0",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5fae\u8c03\uff08Fine-tune\uff09",permalink:"/\u5927\u6a21\u578b/GPT/FineTune"},next:{title:"LLaMA",permalink:"/\u5927\u6a21\u578b/LLaMA"}},c={},h=[{value:"RNN/LSTM/GRU\u65f6\u4ee3",id:"rnnlstmgru\u65f6\u4ee3",level:2},{value:"GPT-1\u4e0e\u65e0\u76d1\u7763\u8bad\u7ec3",id:"gpt-1\u4e0e\u65e0\u76d1\u7763\u8bad\u7ec3",level:2},{value:"GPT-2\u4e0eZero-shot Learning",id:"gpt-2\u4e0ezero-shot-learning",level:2},{value:"GPT-3\u4e0e\u4e0a\u4e0b\u6587\u5b66\u4e60",id:"gpt-3\u4e0e\u4e0a\u4e0b\u6587\u5b66\u4e60",level:2},{value:"GPT-3.5/ChatGPT\u4e0e\u6307\u4ee4\u5fae\u8c03",id:"gpt-35chatgpt\u4e0e\u6307\u4ee4\u5fae\u8c03",level:2}];function o(n){const e={h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"\u67b6\u6784\u6982\u8ff0",children:"\u67b6\u6784\u6982\u8ff0"}),"\n",(0,r.jsx)(e.h2,{id:"rnnlstmgru\u65f6\u4ee3",children:"RNN/LSTM/GRU\u65f6\u4ee3"}),"\n",(0,r.jsxs)(e.p,{children:["\u81ea\u7136\u8bed\u8a00\u5904\u7406\uff08",(0,r.jsx)(e.strong,{children:"NLP"}),"\uff09\u7684\u7814\u7a76\u53ef\u4ee5\u8ffd\u6eaf\u5230 20 \u4e16\u7eaa 40 \u5e74\u4ee3\u3002\u65e9\u671fNLP\u6280\u672f\u662f\u57fa\u4e8e\u89c4\u5219\u7684\uff0c\u5373\u57fa\u4e8e\u7279\u5b9a\u7684\u89c4\u5219\u4f7f\u7528\u7a0b\u5e8f/\u4ee3\u7801\u548c\u77e5\u8bc6\u56fe\u8c31\u8fdb\u884c\u56fa\u5b9a\u6a21\u5f0f\u7684\u5bf9\u8bdd\uff0c\u6240\u6709\u7684\u5e94\u7b54\u90fd\u662f\u56fa\u5b9a\u6a21\u5f0f\u548c\u5df2\u6709\u77e5\u8bc6\u5e93\u7684\u3002\u57fa\u4e8e\u89c4\u5219\u7684NLP\u4e0d\u5bb9\u6613\u51fa\u73b0\u5e7b\u89c9\uff0c\u4f46\u662f\u5e94\u7b54\u80fd\u529b\u4ec5\u9650\u4e8e\u4e0e\u7279\u5b9a\u9886\u57df\u76f8\u5173\u7684\u5185\u5bb9\uff0c\u4e14\u4e0d\u5bb9\u6613\u5f62\u6210\u903b\u8f91\u63a8\u7406\u3002\u5728\u673a\u5668\u5b66\u4e60\u548c\u6df1\u5ea6\u5b66\u4e60\u8bde\u751f\u540e\uff0cNLP\u6280\u672f\u9010\u6e10\u8fdb\u5165\u57fa\u4e8e\u6a21\u578b\u7684\u65f6\u4ee3\u3002"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"\u57fa\u4e8e\u89c4\u5219\u7684NLP V.S. \u57fa\u4e8e\u673a\u5668\u5b66\u4e60\u7684NLP V.S. \u57fa\u4e8e\u6df1\u5ea6\u5b66\u4e60\u7684NLP",src:s(778).A+"",width:"1270",height:"556"})}),"\n",(0,r.jsxs)(e.p,{children:["\u5728\u8fdb\u5165\u6df1\u5ea6\u5b66\u4e60\u6a21\u578b\u9636\u6bb5\u540e\uff0c\u65e9\u671f\u7684NLP\u6587\u672c\u751f\u6210\u662f\u901a\u8fc7\u4f20\u7edf\u5faa\u73af\u795e\u7ecf\u7f51\u7edc (",(0,r.jsx)(e.strong,{children:"RNN"}),")\u3001\u957f\u77ed\u65f6\u8bb0\u5fc6\u795e\u7ecf\u7f51\u7edc (",(0,r.jsx)(e.strong,{children:"LSTM"}),")\u6216\u95e8\u63a7\u5faa\u73af\u5355\u5143 (",(0,r.jsx)(e.strong,{children:"GRU"}),")\u5b9e\u73b0\u7684\u3002\u8fd9\u4e09\u7c7b\u7ecf\u5178\u6a21\u578b\u90fd\u662f\u57fa\u4e8e\u5faa\u73af\u7ed3\u6784\u5b9e\u73b0\u7684\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u4f20\u7edf\u5faa\u73af\u795e\u7ecf\u7f51\u7edc (",(0,r.jsx)(e.strong,{children:"RNN"}),")\u5305\u542b\u4e32\u884c\u6570\u636e\u70b9\u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb\uff08\u524d\u540e\u6216\u65f6\u95f4\u5173\u7cfb\uff09\uff0c\u5e76\u5c06\u8bb0\u5fc6\u7684\u6982\u5ff5\u5f15\u5165\u795e\u7ecf\u7f51\u7edc\u3002\u901a\u8fc7\u8bad\u7ec3\u957f\u7a0b RNN\u5355\u5143 \u8bb0\u4f4f\u57fa\u4e8e\u4e0a\u4e0b\u6587\u7684\u6982\u5ff5\uff0c\u4ece\u800c\u5b66\u4e60\u5230\u8fd9\u4e9b\u53ef\u91cd\u590d\u7684\u6a21\u5f0f\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u4f46\u5faa\u73af\u795e\u7ecf\u7f51\u7edc\u5b58\u5728\u77ed\u65f6\u8bb0\u5fc6\u95ee\u9898\u3002\u5bf9\u4e8e\u5f88\u957f\u7684\u8bed\u8a00/\u6587\u672c\u5e8f\u5217\uff0c\u5c06\u4fe1\u606f\u4ece\u8f83\u65e9\u7684\u5355\u5143\u4f20\u9012\u5230\u8f83\u665a\u7684\u5355\u5143\u5bb9\u6613\u51fa\u73b0\u5931\u771f\u3002\u7279\u522b\u662f\u5728\u5904\u7406\u5927\u6bb5\u957f\u6587\u672c\u65f6\uff0cRNN\u751a\u81f3\u6709\u53ef\u80fd\u5728\u4e00\u5f00\u59cb\u7684\u4f20\u8f93\u4e2d\u5c31\u9057\u6f0f\u6216\u4e22\u5931\u91cd\u8981\u4fe1\u606f\u3002\u53e6\u5916\uff0c\u5728\u53cd\u5411\u4f20\u64ad\u8bad\u7ec3\u8fc7\u7a0b\u4e2d\uff0cRNN\u5bb9\u6613\u9047\u5230\u68af\u5ea6\u6d88\u5931\u8fd9\u7c7b\u8bad\u7ec3\u96be\u9898\u3002"}),"\n",(0,r.jsxs)(e.p,{children:["\u4e4b\u540e\u63d0\u51fa\u7684LSTM \u548c GRU \u662f\u89e3\u51b3RNN\u77ed\u65f6\u8bb0\u5fc6\u95ee\u9898\u7684\u4f18\u5316\u6a21\u578b\u3002",(0,r.jsx)(e.strong,{children:"LSTM"})," \u548c ",(0,r.jsx)(e.strong,{children:"GRU"}),"\u5185\u90e8\u901a\u8fc7\u95e8\u63a7\u7684\u673a\u5236\uff0c\u8fdb\u884c\u4fe1\u606f\u8981\u7d20\u7684\u8c03\u8282\u3002\u95e8\u63a7\u53ef\u4ee5\u8c03\u8282\u5e76\u4fdd\u7559\u5e8f\u5217\u4e2d\u7684\u91cd\u8981\u4fe1\u606f\uff0c\u4e22\u5f03\u975e\u5173\u952e\u4fe1\u606f\uff0c\u5c06\u6709\u4ef7\u503c\u7684\u6570\u636e\u4fe1\u606f\u4f20\u9012\u5230\u957f\u5e8f\u5217\u94fe\u4e2d\u7684\u540e\u7ea7\u8fdb\u884c\u8ba1\u7b97\u3002",(0,r.jsx)(e.strong,{children:"LSTM"})," \u548c ",(0,r.jsx)(e.strong,{children:"GRU"})," \u5df2\u7ecf\u5e7f\u6cdb\u7528\u4e8e\u5404\u7c7b\u4e91\u8fb9\u7aef\u7684\u8bed\u97f3\u8bc6\u522b\u3001\u8bed\u97f3\u5408\u6210\u548c\u6587\u672c\u751f\u6210\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u8fd9\u4e09\u7c7b\u6a21\u578b\u80fd\u591f\u8f83\u597d\u7684\u8fdb\u884c",(0,r.jsx)(e.strong,{children:"\u6a21\u5f0f\u8bc6\u522b"}),"\uff0c\u5728\u8f93\u51fa\u5355\u4e2a\u5355\u8bcd\u6216\u77ed\u8bed\u65b9\u9762\u8868\u73b0\u826f\u597d\uff0c\u4f46\u65e0\u6cd5\u751f\u6210\u9ad8\u7cbe\u5ea6\u7684\u591a\u8f6e\u5bf9\u8bdd\uff0c\u66f4\u65e0\u6cd5\u5b9e\u73b0\u903b\u8f91\u63a8\u7406\u80fd\u529b\u3002"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"RNN-LSTM-GRU",src:s(3437).A+"",width:"875",height:"254"})}),"\n",(0,r.jsx)(e.h2,{id:"gpt-1\u4e0e\u65e0\u76d1\u7763\u8bad\u7ec3",children:"GPT-1\u4e0e\u65e0\u76d1\u7763\u8bad\u7ec3"}),"\n",(0,r.jsx)(e.p,{children:"2018\u5e746\u6708\uff0cOpenAI \u53d1\u8868\u4e86GPT-1\uff0c\u4ee5\u9884\u8bad\u7ec3\u751f\u6210\u5f0f\u53d8\u6362\u5668\u4e3a\u540d\u7684GPT\u5bb6\u65cf\u9996\u6b21\u767b\u4e0a\u5386\u53f2\u821e\u53f0\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u5728GPT-1\u8fd9\u9879\u5de5\u4f5c\u4e4b\u524d\uff0c\u7edd\u5927\u591a\u6570\u6700\u5148\u8fdb\u7684 NLP \u6a21\u578b\u90fd\u662f\u4f7f\u7528\u76d1\u7763\u5b66\u4e60\uff0c\u4e13\u95e8\u9488\u5bf9\u7279\u5b9a\u5782\u76f4\u9886\u57df\u4efb\u52a1\uff08\u5982\u60c5\u611f\u5206\u7c7b\u7b49\uff09\u8fdb\u884c\u8bad\u7ec3\u3002\u4f46\u5df2\u6709\u7684\u76d1\u7763\u6a21\u578b\u6709\u4e24\u4e2a\u4e3b\u8981\u9650\u5236\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u4e00\u65b9\u9762\u9700\u8981\u5927\u91cf\u5e26\u6709\u6807\u6ce8\u7684\u8bad\u7ec3\u6570\u636e\u6765\u5b66\u4e60\u4e0d\u5bb9\u6613\u83b7\u5f97\u7684\u7279\u5b9a\u4efb\u52a1\uff0c"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u53e6\u4e00\u65b9\u9762\u65e0\u6cd5\u5c06\u73b0\u6709\u6a21\u578b\u6cdb\u5316\u5230\u8bad\u7ec3\u6570\u636e\u96c6\u4ee5\u5916\u7684\u4efb\u52a1\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u4e5f\u5c31\u662f\u8bf4\uff0c\u5982\u679c\u5728\u771f\u5b9e\u751f\u6d3b\u573a\u666f\u4f7f\u7528\u6709\u76d1\u7763\u6a21\u578b\uff0c\u8bad\u7ec3\u6570\u636e\u96c6\u7684\u6784\u5efa\u4efb\u52a1\u5c06\u5f02\u5e38\u5e9e\u5927\u548c\u7410\u788e\uff0c\u6570\u636e\u96c6\u7684\u6807\u6ce8\u6210\u672c\u4f1a\u5f02\u5e38\u7684\u9ad8\u3002\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e9b\u95ee\u9898\uff0cOpenAI\u63d0\u51fa\u4e86GPT-1\u3002"}),"\n",(0,r.jsx)(e.p,{children:"GPT-1\u7684\u6838\u5fc3\u662fTransformer\uff0c\u901a\u8fc7\u4e24\u4e2a\u9014\u5f84\u9488\u5bf9\u6027\u7684\u89e3\u51b3\u4e0a\u8ff0\u7684\u4e24\u4e2a\u95ee\u9898\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u901a\u8fc7\u65e0\u76d1\u7763\u8bad\u7ec3\uff0c\u89e3\u51b3\u9700\u8981\u5927\u91cf\u9ad8\u8d28\u91cf\u6807\u6ce8\u6570\u636e\u7684\u95ee\u9898\uff0c\u964d\u4f4e\u6570\u636e\u6210\u672c\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u901a\u8fc7\u5927\u91cf\u4e0d\u540c\u7c7b\u578b\u6df7\u6742\u8bed\u6599\u8fdb\u884c\u9884\u8bad\u7ec3\uff0c\u89e3\u51b3\u8bad\u7ec3\u4efb\u52a1\u7684\u6cdb\u5316\u95ee\u9898\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u5728GPT-1\u8bde\u751f\u7684\u65f6\u4ee3\uff0cAR\uff08Auto-regressive\uff0c\u81ea\u56de\u5f52\uff09\u4e0eAE\uff08Auto-encoding\uff0c\u81ea\u7f16\u7801\uff09\u662f\u65e0\u76d1\u7763\u5b66\u4e60\u4e2d\u7684\u4e24\u5927\u8def\u5f84\u3002AR\u7c7b\u8bed\u8a00\u6a21\u578b\u57fa\u4e8e\u5927\u91cf\u8bed\u6599\u7edf\u8ba1\uff0c\u57fa\u4e8e\u5355\u5411\u6216\u53cc\u5411\u4e0a\u4e0b\u6587\u8fdb\u884c\u6587\u672c\u751f\u6210\uff0c\u5bf9\u6570\u636e\u7684\u524d\u540e\u76f8\u5bf9\u5173\u7cfb\u654f\u611f\uff0c\u9002\u5408\u6587\u672c\u751f\u6210\u7c7b\u4efb\u52a1\u3002AE\u5219\u901a\u8fc7\u88ab\u63a9\u76d6\u7684\u8f93\u5165\u91cd\u5efa\u539f\u59cb\u6570\u636e\uff08\u4f8b\u5982BERT\uff09\uff0c\u5f25\u8865\u4e86\u5355\u5411\u6216\u53cc\u5411\u4fe1\u606f\u7684\u635f\u5931\uff0c\u4f46\u5374\u7531\u4e8e\u4fe1\u606f\u7684\u63a9\u76d6\u53ef\u80fd\u5bfc\u81f4\u8bad\u7ec3\u4e0e\u5b9e\u9645\u63a8\u7406\u7684\u504f\u5dee\u3002\u6362\u53e5\u8bdd\u8bf4\uff0cBERT\u8fd9\u7c7b\u57fa\u4e8e\u7f16\u7801\u5668\u7684\u6a21\u578b\u8bad\u7ec3\u96be\u5ea6\u53ef\u80fd\u662f\u9ad8\u4e8e\u540c\u5c3a\u5bf8GPT\u7c7b\u7684\u3002"}),"\n",(0,r.jsx)(e.p,{children:"GPT-1 \u662f\u4e00\u4e2a\u5178\u578b\u7684\u81ea\u56de\u5f52\u8bed\u8a00\u6a21\u578b\uff0c\u53ea\u5177\u6709\u89e3\u7801\u5668\u6a21\u5757\u3002GPT-1\u6a21\u578b\u4f7f\u7528 768\u5927\u5c0f\u8bcd\u5d4c\u5165\u3002\u4f7f\u7528 12 \u5c42\u6a21\u578b\uff0c\u6bcf\u4e2a\u81ea\u6ce8\u610f\u529b\u5c42\u6709 12 \u4e2a\u6ce8\u610f\u529b\u5934\uff0c\u5e76\u4f7f\u7528GELU \u4f5c\u4e3a\u6fc0\u6d3b\u51fd\u6570\u3002"}),"\n",(0,r.jsx)(e.p,{children:"GPT-1\u6a21\u578b\u8bad\u7ec3\u4f7f\u7528\u4e86BooksCorpus\u6570\u636e\u96c6\u3002\u8bad\u7ec3\u4e3b\u8981\u5305\u542b\u4e24\u4e2a\u9636\u6bb5\uff1a\u7b2c\u4e00\u4e2a\u9636\u6bb5\uff0c\u5148\u5229\u7528\u5927\u91cf\u65e0\u6807\u6ce8\u7684\u8bed\u6599\uff08\u8282\u7ea6\u6807\u6ce8\u6210\u672c\uff09\u9884\u8bad\u7ec3\u4e00\u4e2a\u8bed\u8a00\u6a21\u578b\u3002\u5728BooksCorpus \u6570\u636e\u96c6\u4e0a\u8bad\u7ec3\u540e\uff0cGPT-1\u80fd\u591f\u5b66\u4e60\u5230\u5927\u8303\u56f4\u7684\u6587\u672c/\u8bcd\u6c47\u7684\u9690\u542b\u5173\u7cfb\uff0c\u5e76\u5728\u5305\u542b\u8fde\u7eed\u6587\u672c\u548c\u957f\u6587\u7684\u591a\u6837\u5316\u8bed\u6599\u5e93\u4e2d\u83b7\u53d6\u5927\u91cf\u77e5\u8bc6\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u63a5\u7740\uff0c\u5728\u7b2c\u4e8c\u4e2a\u9636\u6bb5\u5bf9\u9884\u8bad\u7ec3\u597d\u7684\u8bed\u8a00\u6a21\u578b\u8fdb\u884c\u7cbe\u8c03\uff0c\u5c06\u5176\u8fc1\u79fb\u5230\u5404\u79cd\u6709\u76d1\u7763\u7684NLP\u4efb\u52a1\u3002\u4e5f\u5c31\u662f\u540e\u6587\u63d0\u5230\u7684\u201c\u9884\u8bad\u7ec3+\u7cbe\u8c03\u201d\u6a21\u5f0f\u3002"}),"\n",(0,r.jsx)(e.p,{children:"OpenAI\u56e2\u961f\u4e5f\u5728GPT-1\u7684\u7814\u7a76\u4e2d\u8bc4\u4f30\u4e86\u6a21\u578b\u5c42\u6570\u5bf9\u65e0\u76d1\u7763\u9884\u8bad\u7ec3\u548c\u6709\u76d1\u7763\u7cbe\u8c03\u7684\u5f71\u54cd\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u5c42\u6570\u7684\u5f71\u54cd\uff0c\u4ece\u65e0\u76d1\u7763\u7684\u9884\u8bad\u7ec3\u5230\u6709\u76d1\u7763\u7684\u76ee\u6807\u4efb\u52a1\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"gpt-2\u4e0ezero-shot-learning",children:"GPT-2\u4e0eZero-shot Learning"}),"\n",(0,r.jsxs)(e.p,{children:["2019\u5e74\uff0cOpenAI \u53d1\u8868\u4e86\u53e6\u4e00\u7bc7\u5173\u4e8e\u4ed6\u4eec\u6700\u65b0\u6a21\u578b GPT-2 \u7684\u8bba\u6587\uff08 Language Models are Unsupervised Multitask Learners \uff09\u3002\u8be5\u6a21\u578b\u5f00\u6e90\u5e76\u5728\u5f88\u591aNLP\u4efb\u52a1\u4e2d\u4f7f\u7528\u3002\u76f8\u5bf9GPT-1\uff0cGPT-2\u662f\u6cdb\u5316\u80fd\u529b\u66f4\u5f3a\u7684\u8bcd\u5411\u91cf\u6a21\u578b\uff0c\u5c3d\u7ba1\u5e76\u6ca1\u6709\u8fc7\u591a\u7684\u7ed3\u6784\u521b\u65b0\uff0c\u4f46\u662f\u8bad\u7ec3\u6570\u636e\u96c6\uff08WebText\uff0c\u6765\u81ea\u4e8eReddit\u4e0a\u9ad8\u8d5e\u7684\u6587\u7ae0\uff09\u548c",(0,r.jsx)(e.strong,{children:"\u6a21\u578b\u53c2\u6570\u91cf\u66f4\u5927"}),"\u3002\u76ee\u524d\u5f88\u591a\u5f00\u6e90\u7684GPT\u7c7b\u6a21\u578b\u662f\u57fa\u4e8eGPT-2\u8fdb\u884c\u7684\u7ed3\u6784\u4fee\u6539\u6216\u4f18\u5316\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"GPT-2 \u6709 15 \u4ebf\u4e2a\uff081.5B\uff09\u53c2\u6570\u3002\u662f GPT-1\uff08117M \u53c2\u6570\uff09\u7684 10 \u500d\u4ee5\u4e0a\u3002GPT-2\u4e0e GPT-1 \u7684\u4e3b\u8981\u533a\u522b\u5305\u62ec\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"GPT-2 \u6709 48 \u5c42\uff0c\u4f7f\u7528 1600 \u7ef4\u5411\u91cf\u8fdb\u884c\u8bcd\u5d4c\u5165\uff0c\u4f7f\u7528\u4e86 50,257 \u7ef4\u6807\u8bb0\u7684\u66f4\u5927\u8bcd\u6c47\u91cf\u3002\u4f7f\u75281024\u5927\u5c0f\u7684\u4e0a\u4e0b\u6587\u7a97\u53e3\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"GPT-2\u7684\u5c42\u5f52\u4e00\u5316\u88ab\u79fb\u52a8\u5230\u6bcf\u4e2a\u5b50\u5757\u7684\u8f93\u5165\uff0c\u5e76\u5728\u6700\u7ec8\u7684\u81ea\u6ce8\u610f\u529b\u5757\u4e4b\u540e\u6dfb\u52a0\u4e86\u4e00\u4e2a\u989d\u5916\u7684\u5c42\u8fdb\u884c\u5f52\u4e00\u5316\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"GPT-2\u5728\u521d\u59cb\u5316\u65f6\uff0c\u6b8b\u5dee\u5c42\u7684\u6743\u91cd\u6309 1/\u221aN \u7f29\u653e\uff0c\u5176\u4e2d N \u662f\u6b8b\u5dee\u5c42\u7684\u6570\u91cf\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"GPT-2\u7684\u7814\u53d1\u56e2\u961f\u8bad\u7ec3\u4e86 117M\uff08\u4e0e GPT-1 \u76f8\u540c\uff09\u3001345M\u3001762M \u548c 1.5B\u53c2\u6570\u7684\u56db\u79cd\u8bed\u8a00\u6a21\u578b\uff0c\u5e76\u6bd4\u8f83\u4e86\u4e0d\u540c\u5927\u5c0f\u7684\u6a21\u578b\u7cbe\u5ea6\u3002\u5728\u540c\u4e00\u6570\u636e\u96c6\u4e0a\uff0c\u6a21\u578b\u7684\u6027\u80fd\u968f\u7740\u53c2\u6570\u6570\u91cf\u7684\u589e\u52a0\u800c\u63d0\u5347\u3002\u8fd9\u4e00\u73b0\u8c61\u4e8b\u5b9e\u4e0a\u5bfc\u81f4\u4e86\u540e\u6765\u7684\u8bed\u8a00\u6a21\u578b\u7684\u5c3a\u5bf8\u7684\u8fc5\u901f\u589e\u52a0\u3002"}),"\n",(0,r.jsxs)(e.p,{children:["GPT 2 \u7684\u4e00\u4e2a\u5173\u952e\u80fd\u529b\u662f\u96f6\u6837\u672c\u5b66\u4e60\uff08",(0,r.jsx)(e.strong,{children:"Zero-shot Learning"}),"\uff09\u3002Zero-shot\u662f\u96f6\u6837\u672c\u4efb\u52a1\u8fc1\u79fb\u7684\u4e00\u79cd\u7279\u6b8a\u60c5\u51b5\uff0c\u5373\u5728\u6ca1\u6709\u63d0\u4f9b\u793a\u4f8b\u60c5\u51b5\u4e0b\uff0c\u6a21\u578b\u6839\u636e\u7ed9\u5b9a\u7684\u6307\u4ee4\u7406\u89e3\u7279\u5b9a\u4efb\u52a1\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"GPT-2\u4f7f\u7528\u7684 WebText \u7684\u6570\u636e\u96c6\u5305\u542b\u6765\u81ea\u8d85\u8fc7 800 \u4e07\u4efd\u6587\u6863\u7684 40GB \u6587\u672c\u6570\u636e\u3002\u6bd4 GPT-1 \u6a21\u578b\u7684 BookCorpus \u6570\u636e\u96c6\u66f4\u52a0\u5e9e\u5927\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"gpt-3\u4e0e\u4e0a\u4e0b\u6587\u5b66\u4e60",children:"GPT-3\u4e0e\u4e0a\u4e0b\u6587\u5b66\u4e60"}),"\n",(0,r.jsx)(e.p,{children:"2020\u5e746\u6708\uff0cOpenAI \u53d1\u8868\u4e86\u53e6\u4e00\u7bc7\u5173\u4e8eGPT-3 \u6a21\u578b\u7684\u8bba\u6587\uff08Language Models are Few-Shot Learners\uff09\u3002\u8be5\u6a21\u578b\u7684\u53c2\u6570\u662f GPT-2 \u7684100 \u500d\u4ee5\u4e0a\uff08175B\uff09\uff0c\u5e76\u4e14\u5728\u66f4\u5927\u7684\u6587\u672c\u6570\u636e\u96c6\uff08\u4f4e\u8d28\u91cf\u7684Common Crawl\uff0c\u9ad8\u8d28\u91cf\u7684WebText2\uff0cBooks1\uff0cBooks2\u548cWikipedia\uff09\u4e0a\u8fdb\u884c\u8bad\u7ec3\uff0c\u4ece\u800c\u83b7\u5f97\u66f4\u597d\u7684\u6a21\u578b\u6027\u80fd\u3002"}),"\n",(0,r.jsxs)(e.p,{children:["GPT-3\u5b9e\u9645\u4e0a\u662f\u7531\u591a\u4e2a\u7248\u672c\u7ec4\u6210\u7684",(0,r.jsx)(e.strong,{children:"\u7b2c3\u4ee3\u5bb6\u65cf"}),"\uff0c\u5177\u6709\u4e0d\u540c\u6570\u91cf\u7684\u53c2\u6570\u548c\u6240\u9700\u7684\u8ba1\u7b97\u8d44\u6e90\u3002\u5305\u62ec\u4e13\u95e8\u7528\u4e8e\u4ee3\u7801\u7f16\u7a0b\u7684Code\u7cfb\u5217\u3002GPT-3\u7684\u540e\u7ee7\u77e5\u540d\u7248\u672c\u5305\u62ecInstructGPT\u548cChatGPT\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u7531\u4e8e\u4f7f\u7528\u4e86\u5927\u91cf\u53c2\u6570\u548c\u5e7f\u6cdb\u7684\u6570\u636e\u96c6\uff0c GPT-3\u5728\u96f6\u6837\u672c\u548c\u5c11\u6837\u672c\u8bbe\u7f6e\u4e2d\u7684\u4e0b\u6e38 NLP \u4efb\u52a1\u4e0a\u8868\u73b0\u826f\u597d\uff0c\u5176\u7f16\u5199\u7684\u6587\u7ae0\u4e0e\u4eba\u7c7b\u64b0\u5199\u7684\u5728\u5f88\u591a\u65f6\u5019\u96be\u4ee5\u533a\u5206\uff0c\u7ee7\u7eed\u5ef6\u7eed\u4e86GPT-2\u8d8a\u5927\u8d8a\u597d\u7684\u7406\u5ff5\u3002GPT-3\u8fd8\u53ef\u4ee5\u6267\u884c\u4ece\u672a\u660e\u786e\u8bad\u7ec3\u8fc7\u7684\u5373\u65f6\u4efb\u52a1\uff0c\u4f8b\u5982\u6c42\u548c\u6570\u5b57\u3001\u7f16\u5199 SQL \u67e5\u8be2\u548c\u4ee3\u7801\u3001\u89e3\u8bfb\u53e5\u5b50\u4e2d\u7684\u5355\u8bcd\u3002"}),"\n",(0,r.jsx)(e.p,{children:"GPT-3 \u6709 96 \u5c42Transformer\u5c42\uff0c\u6bcf\u5c42\u6709 96 \u4e2a\u6ce8\u610f\u529b\u5934\u3002GPT-3 \u7684\u8bcd\u5d4c\u5165\u5927\u5c0f\u4ece GPT-2 \u7684 1600 \u589e\u52a0\u5230 12888\u3002\u4e0a\u4e0b\u6587\u7a97\u53e3\u5927\u5c0f\u4e5f\u4ece GPT-2 \u7684 1024 \u4e2a\u589e\u52a0\u5230 GPT-3 \u7684 2048\u4e2a\u3002\u5e76\u4e14\u4f7f\u7528\u4e86\u5c40\u90e8\u5e26\u72b6\u7a00\u758f\u6ce8\u610f\u529b\u6a21\u5f0f\u3002"}),"\n",(0,r.jsx)(e.p,{children:"GPT-3\u4e00\u4e2a\u7a81\u51fa\u7684\u7279\u70b9\u662f\u4e0a\u4e0b\u6587\u5b66\u4e60\uff08In-Context Learning\uff09\u3002\u5728\u5b66\u4e60\u9884\u6d4b\u7ed9\u5b9a\u4e0a\u4e0b\u6587\u8bcd\u6c47\u7684\u4e0b\u4e00\u4e2a\u8bcd\u6c47\u7684\u540c\u65f6\uff0cGPT-3\u4e5f\u5b66\u4e60\u6216\u6a21\u4eff\u6570\u636e\u4e2d\u7684\u6a21\u5f0f\uff0c\u901a\u8fc7\u5bf9\u5e94\u7684\u5173\u952e\u4fe1\u606f\u5339\u914d\u548c\u6a21\u5f0f\u6a21\u4eff\u6765\u8f93\u51fa\u5bf9\u5e94\u60c5\u5883\u4e0b\u7684\u56de\u7b54\u3002\u5728\u95ee\u7b54\u4e2d\u51fa\u73b0\u5c11\u91cf\u63d0\u793a\u4fe1\u606f\u65f6\uff0c\u8bed\u8a00\u6a21\u578b\u4f1a\u5c06\u793a\u4f8b\u7684\u6a21\u5f0f\u4e0e\u5176\u8bad\u7ec3\u65f6\u4ece\u7c7b\u4f3c\u6570\u636e\u4e2d\u5b66\u5230\u7684\u77e5\u8bc6\u6216\u6a21\u5f0f\u8fdb\u884c\u5339\u914d\uff0c\u5e76\u4f7f\u7528\u77e5\u8bc6\u6216\u6a21\u5f0f\u6765\u5e94\u7b54\u3002\u4e0a\u4e0b\u6587\u5b66\u4e60\u80fd\u529b\uff0c\u968f\u7740\u6a21\u578b\u53c2\u6570\u6570\u91cf\u7684\u589e\u52a0\u800c\u589e\u5f3a\u3002\u8fd9\u4e00\u663e\u8457\u80fd\u529b\u540c\u6837\u4f53\u73b0\u5728\u4e86ChatGPT\u548cGPT-4\u4e2d\u3002"}),"\n",(0,r.jsx)(e.p,{children:"GPT-3 \u5728\u4e94\u4e2a\u4e0d\u540c\u8bed\u6599\u5e93\uff08Common Crawl\u3001WebText2\u3001Books1\u3001Books2 \u548c Wikipedia\u3002\uff09\u7684\u6df7\u5408\u8bad\u7ec3\u6570\u636e\u96c6\u4e0a\u8fdb\u884c\u8bad\u7ec3\uff0c\u6bcf\u4e2a\u8bed\u6599\u5e93\u90fd\u5206\u914d\u4e0d\u540c\u7684\u6743\u91cd\u3002\u76f8\u5bf9\u9ad8\u8d28\u91cf\u7684\u6570\u636e\u96c6\u6743\u91cd\u66f4\u9ad8\uff0c\u4e14\u4f7f\u7528\u9891\u6b21\u8d85\u8fc71\u6b21\u3002 \u4ece\u8fd9\u65f6\u6211\u4eec\u53ef\u4ee5\u6ce8\u610f\u5230\uff0c\u5bf9\u4e8e\u5927\u8bed\u8a00\u6a21\u578b\uff0c\u8bad\u7ec3\u7684\u6548\u679c\u5f88\u5927\u7a0b\u5ea6\u8981\u8981\u4f9d\u9760\u4e8e\u9ad8\u8d28\u91cf\u7684\u8bed\u6599\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"gpt-35chatgpt\u4e0e\u6307\u4ee4\u5fae\u8c03",children:"GPT-3.5/ChatGPT\u4e0e\u6307\u4ee4\u5fae\u8c03"}),"\n",(0,r.jsx)(e.p,{children:"2022 \u5e74 3 \u6708 15 \u65e5\uff0cOpenAI \u53d1\u5e03\u4e86\u540d\u4e3a\u201ctext-davinci-003\u201d\u7684\u65b0\u7248\u6a21\u578b\uff0c\u8be5\u6a21\u578b\u88ab\u63cf\u8ff0\u4e3a\u6bd4\u4ee5\u524d\u7248\u672c\u7684 GPT \u66f4\u5f3a\u5927\u66f4\u5177\u6709\u903b\u8f91\u80fd\u529b\u3002\u76ee\u524d\u6709\u82e5\u5e72\u4e2a\u5c5e\u4e8eGPT-3.5 \u7cfb\u5217\u7684\u6a21\u578b\u5206\u652f\uff0c\u5176\u4e2dcode-davinci\u9488\u5bf9\u4ee3\u7801\u5b8c\u6210\u4efb\u52a1\u8fdb\u884c\u4e86\u4f18\u5316\u3002"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"ChatGPT"})," \u662f\u57fa\u4e8eGPT-3.5\uff08Generative Pre-trained Transformer 3.5\uff09\u67b6\u6784\u5f00\u53d1\u7684\u5bf9\u8bddAI\u6a21\u578b\uff0c\u662fInstructGPT \u7684\u5144\u5f1f\u6a21\u578b\uff0c\u4e5f\u662fGPT-3.5\u7cfb\u5217\u7684\u6700\u9ad8\u89c4\u683c\u3002ChatGPT\u5f88\u53ef\u80fd\u662fOpenAI \u5728GPT-4 \u6b63\u5f0f\u63a8\u51fa\u4e4b\u524d\u7684\u6f14\u7ec3\uff0c\u6216\u7528\u4e8e",(0,r.jsx)(e.strong,{children:"\u6536\u96c6\u5927\u91cf\u5bf9\u8bdd\u6570\u636e"}),"\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["OpenAI\u4f7f\u7528 ",(0,r.jsx)(e.strong,{children:"RLHF"}),"\uff08Reinforcement Learning from Human Feedbac\uff0c\u4eba\u7c7b\u53cd\u9988\u5f3a\u5316\u5b66\u4e60\uff09 \u6280\u672f\u5bf9 ChatGPT \u8fdb\u884c\u4e86\u8bad\u7ec3\uff0c\u4e14\u52a0\u5165\u4e86\u66f4\u591a",(0,r.jsx)(e.strong,{children:"\u4eba\u5de5\u76d1\u7763"}),"\u8fdb\u884c\u5fae\u8c03\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"ChatGPT \u5177\u6709\u4ee5\u4e0b\u7279\u5f81\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u53ef\u4ee5\u4e3b\u52a8\u627f\u8ba4\u81ea\u8eab\u9519\u8bef\u3002\u82e5\u7528\u6237\u6307\u51fa\u5176\u9519\u8bef\uff0c\u6a21\u578b\u4f1a\u542c\u53d6\u610f\u89c1\u5e76\u4f18\u5316\u7b54\u6848\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"ChatGPT \u53ef\u4ee5\u8d28\u7591\u4e0d\u6b63\u786e\u7684\u95ee\u9898\u3002\u4f8b\u5982\u88ab\u8be2\u95ee \u201c\u54e5\u4f26\u5e03 2015 \u5e74\u6765\u5230\u7f8e\u56fd\u7684\u60c5\u666f\u201d \u7684\u95ee\u9898\u65f6\uff0c\u673a\u5668\u4eba\u4f1a\u8bf4\u660e\u54e5\u4f26\u5e03\u4e0d\u5c5e\u4e8e\u8fd9\u4e00\u65f6\u4ee3\u5e76\u8c03\u6574\u8f93\u51fa\u7ed3\u679c\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"ChatGPT \u53ef\u4ee5\u627f\u8ba4\u81ea\u8eab\u7684\u65e0\u77e5\uff0c\u627f\u8ba4\u5bf9\u4e13\u4e1a\u6280\u672f\u7684\u4e0d\u4e86\u89e3\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u652f\u6301\u8fde\u7eed\u591a\u8f6e\u5bf9\u8bdd\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["\u4e0e\u5927\u5bb6\u5728\u751f\u6d3b\u4e2d\u7528\u5230\u7684\u5404\u7c7b\u667a\u80fd\u97f3\u7bb1\u548c\u201c",(0,r.jsx)(e.strong,{children:"\u4eba\u5de5\u667a\u969c"}),"\u201c\u4e0d\u540c\uff0cChatGPT\u5728\u5bf9\u8bdd\u8fc7\u7a0b\u4e2d\u4f1a\u8bb0\u5fc6\u5148\u524d\u4f7f\u7528\u8005\u7684\u5bf9\u8bdd\u8baf\u606f\uff0c\u5373\u4e0a\u4e0b\u6587\u7406\u89e3\uff0c\u4ee5\u56de\u7b54\u67d0\u4e9b\u5047\u8bbe\u6027\u7684\u95ee\u9898\u3002ChatGPT\u53ef\u5b9e\u73b0",(0,r.jsx)(e.strong,{children:"\u8fde\u7eed\u5bf9\u8bdd"}),"\uff0c\u6781\u5927\u7684\u63d0\u5347\u4e86",(0,r.jsx)(e.strong,{children:"\u5bf9\u8bdd\u4ea4\u4e92\u6a21\u5f0f"}),"\u4e0b\u7684\u7528\u6237\u4f53\u9a8c\u3002"]})]})}function x(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}},778:(n,e,s)=>{s.d(e,{A:()=>r});const r=s.p+"assets/images/NLP-dae4d9466949fae7a768e89e409395f8.jpeg"},3437:(n,e,s)=>{s.d(e,{A:()=>r});const r=s.p+"assets/images/RNN-LSTM-GRU-5f32d31fde87c34401fdf385d02e5b4f.png"},8453:(n,e,s)=>{s.d(e,{R:()=>l,x:()=>d});var r=s(6540);const i={},t=r.createContext(i);function l(n){const e=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);