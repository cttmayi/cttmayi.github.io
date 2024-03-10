"use strict";(self.webpackChunkmy_github=self.webpackChunkmy_github||[]).push([[21988],{16621:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var s=n(74848),r=n(28453);const i={title:"\u673a\u5668\u5b66\u4e60 -  \u8499\u7279\u5361\u7f57\u6811\u641c\u7d22",tags:["AI","\u673a\u5668\u5b66\u4e60"],authors:"cttmayi"},l=void 0,a={permalink:"/blog/2019/04/20/\u673a\u5668\u5b66\u4e60\u8499\u7279\u5361\u7f57\u6811\u641c\u7d22",source:"@site/blog/2019-04-20-\u673a\u5668\u5b66\u4e60\u8499\u7279\u5361\u7f57\u6811\u641c\u7d22/index.md",title:"\u673a\u5668\u5b66\u4e60 -  \u8499\u7279\u5361\u7f57\u6811\u641c\u7d22",description:"\u8499\u7279\u5361\u7f57\u65b9\u6cd5",date:"2019-04-20T00:00:00.000Z",formattedDate:"2019\u5e744\u670820\u65e5",tags:[{label:"AI",permalink:"/blog/tags/ai"},{label:"\u673a\u5668\u5b66\u4e60",permalink:"/blog/tags/\u673a\u5668\u5b66\u4e60"}],readingTime:1.6133333333333333,hasTruncateMarker:!1,authors:[{name:"Ling Yuan",title:"Engineer",url:"https://github.com/cttmayi",imageURL:"https://github.com/cttmayi.png",key:"cttmayi"}],frontMatter:{title:"\u673a\u5668\u5b66\u4e60 -  \u8499\u7279\u5361\u7f57\u6811\u641c\u7d22",tags:["AI","\u673a\u5668\u5b66\u4e60"],authors:"cttmayi"},unlisted:!1,prevItem:{title:"Python - \u6311\u6218(Python Challenge)",permalink:"/blog/2019/04/20/Python\u6311\u6218PythonChallenge"},nextItem:{title:"Python - \u547d\u540d\u89c4\u8303",permalink:"/blog/2019/04/20/Python\u547d\u540d\u89c4\u8303"}},c={authorsImageUrls:[void 0]},o=[{value:"\u8499\u7279\u5361\u7f57\u65b9\u6cd5",id:"\u8499\u7279\u5361\u7f57\u65b9\u6cd5",level:3},{value:"\u8499\u7279\u5361\u7f57\u6811\u641c\u7d22(MCTS)",id:"\u8499\u7279\u5361\u7f57\u6811\u641c\u7d22mcts",level:3},{value:"\u4e0a\u7f6e\u4fe1\u7b97\u6cd5(UCB)",id:"\u4e0a\u7f6e\u4fe1\u7b97\u6cd5ucb",level:3},{value:"UCT",id:"uct",level:3},{value:"Python \u4ee3\u7801\u5b66\u4e60",id:"python-\u4ee3\u7801\u5b66\u4e60",level:3}];function h(e){const t={a:"a",code:"code",h3:"h3",img:"img",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h3,{id:"\u8499\u7279\u5361\u7f57\u65b9\u6cd5",children:"\u8499\u7279\u5361\u7f57\u65b9\u6cd5"}),"\n",(0,s.jsx)(t.p,{children:"\u5b83\u662f\u5bf9\u4e00\u7c7b\u6709\u968f\u673a\u7b97\u6cd5\u7279\u6027\u7684\u6982\u62ec.\xa0\u662f\u4e00\u79cd\u4f7f\u7528\u968f\u673a\u65b9\u6cd5\u7684\u7edf\u8ba1."}),"\n",(0,s.jsx)(t.p,{children:"\u7c7b\u4f3c\u4e8e\u62bd\u6837\u8c03\u67e5, \u867d\u65e0\u6cd5\u4fdd\u8bc1\u6700\u4f18\u89e3, \u4f46\u4e5f\u662f\u8fd1\u4f3c\u89e3."}),"\n",(0,s.jsxs)(t.p,{children:["<",(0,s.jsx)(t.a,{href:"http://www.ruanyifeng.com/blog/2015/07/monte-carlo-method.html",children:"\u8499\u7279\u5361\u7f57\u65b9\u6cd5\u5165\u95e8"}),">,\xa0\u8fd9\u7bc7\u6587\u7ae0\u4e0d\u9519, \u901a\u8fc7\u51e0\u4e2a\u4f8b\u5b50\u8ba9\u4f60\u66f4\u52a0\u4e86\u89e3\u6b64\u65b9\u6cd5\u7684\u539f\u7406."]}),"\n",(0,s.jsx)(t.h3,{id:"\u8499\u7279\u5361\u7f57\u6811\u641c\u7d22mcts",children:"\u8499\u7279\u5361\u7f57\u6811\u641c\u7d22(MCTS)"}),"\n",(0,s.jsx)(t.p,{children:"\u5168\u79f0 Monte Carlo Tree Search"}),"\n",(0,s.jsx)(t.p,{children:"\u4f7f\u7528\u8499\u7279\u5361\u7f57\u65b9\u6cd5\u5bf9\u6811\u8fdb\u884c\u641c\u7d22, \u662f\u4e00\u79cd\u4eba\u5de5\u667a\u80fd\u95ee\u9898\u4e2d\u505a\u51fa\u6700\u4f18\u51b3\u7b56\u7684\u65b9\u6cd5.\u4e00\u822c\u7528\u4e8e\u7ec4\u5408\u535a\u5f08\u4e2d\u7684\u884c\u52a8\u89c4\u5212."}),"\n",(0,s.jsx)(t.h3,{id:"\u4e0a\u7f6e\u4fe1\u7b97\u6cd5ucb",children:"\u4e0a\u7f6e\u4fe1\u7b97\u6cd5(UCB)"}),"\n",(0,s.jsx)(t.p,{children:"\u5168\u79f0\xa0The Upper Confidence BoundAlgorithm"}),"\n",(0,s.jsx)(t.p,{children:"UCB1\u7b97\u6cd5\u5982\u4e0b, \xa0"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://static.oschina.net/uploads/img/201701/14040853_rJ1C.jpg",alt:""})}),"\n",(0,s.jsx)(t.p,{children:"\u5176\u4e2d\xa0v\xa0\u662f\u8282\u70b9\u4f30\u8ba1\u7684\u503c\uff0cn\xa0\u662f\u8282\u70b9\u88ab\u8bbf\u95ee\u7684\u6b21\u6570\uff0c\u800c N \u5219\u662f\u5176\u7236\u8282\u70b9\u5df2\u7ecf\u88ab\u8bbf\u95ee\u7684\u603b\u6b21\u6570\u3002C \u662f\u53ef\u8c03\u6574\u53c2\u6570\u3002"}),"\n",(0,s.jsxs)(t.p,{children:["\u66f4\u591a\u7ec6\u8282\u53ef\u53c2\u8003 <",(0,s.jsx)(t.a,{href:"http://blog.csdn.net/yw8355507/article/details/48579635",children:"UCB\u7b97\u6cd5"}),"> , \u6587\u7ae0\u5199\u5f97\u4e0d\u9519"]}),"\n",(0,s.jsx)(t.h3,{id:"uct",children:"UCT"}),"\n",(0,s.jsx)(t.p,{children:"\u5168\u79f0 \xa0Upper Confidence Bounds for Trees"}),"\n",(0,s.jsx)(t.p,{children:"\u662f\u901a\u8fc7UCB\u7b97\u6cd5\u8fdb\u884c\u7684\u6811\u641c\u7d22"}),"\n",(0,s.jsx)(t.p,{children:"UCT \u53ef\u4ee5\u88ab\u63cf\u8ff0\u4e3a MCTS \u7684\u4e00\u4e2a\u7279\u4f8b, \xa0\u5373\xa0UCT = MCTS + UCB, \u540e\u9762\u4ecb\u7ecdMCTS\u5373\u6307UCT\u7b97\u6cd5."}),"\n",(0,s.jsx)(t.h3,{id:"python-\u4ee3\u7801\u5b66\u4e60",children:"Python \u4ee3\u7801\u5b66\u4e60"}),"\n",(0,s.jsxs)(t.p,{children:["\u5728GitHub\u4e0b\u8f7d\xa0",(0,s.jsx)(t.a,{href:"https://github.com/dbravender/mittmcts",children:"mittmcts"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"\u4ecb\u7ecd\u4e00\u4e0b, \u4f7f\u7528\u65b9\u6cd5,\xa0"}),"\n",(0,s.jsx)(t.p,{children:"\u9996\u5148\u5b9a\u4e49Game\u7c7b, \u5b9e\u73b0\u7279\u5b9a\u51fd\u6570"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"class Game(object):\n    @classmethod\n    def initial_state(cls):\n        return state # \u8fd4\u56de\u521d\u59cb\u72b6\u6001\n\n    @classmethod\n    # \u53c2\u6570: \u4f20\u5165\u6b64\u7c7b\u540d, \u5f53\u524d\u7684\u72b6\u6001, \u4e0b\u4e00\u6b65\n    # \u8fd4\u56de\u503c: \u8d70\u4e86step\u8fd9\u6b65\u540e\u7684\u72b6\u6001\n    def apply_move(cls, state, step):\n        return state\n\n    @staticmethod\n    # \u53c2\u6570: \u4f20\u5165\u72b6\u6001\u4fe1\u606f\n    # \u8fd4\u56de\u503c: (\u662f\u5426\u4e0d\u968f\u673a\u9009\u62e9, \u6240\u6709\u53ef\u80fd\u7684\u4e0b\u4e00\u6b65\u68cb)\n    def get_moves(state):\n        return False, choices\n\n    @staticmethod\n    # \u8fd4\u56de\u503c: \u6b64\u72b6\u51b5\u4e0b\u7684\u83b7\u80dc\u8005, \u5982\u679c\u5e73\u5c40, \u5219\u8fd4\u56demittmcts.Draw, \u5982\u679c\u6ca1\u6709\u7ed3\u5c40, \u5219\u8fd4\u56deNone\n    def get_winner(state):\n        return state.winner\n\n    @staticmethod\n    # \u8fd4\u56de\u503c: \u5f53\u524d\u6267\u884c\u8005\n    def current_player(state):\n        return state.current_player\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u7136\u540e, \u901a\u8fc7MCTS\u5f97\u5230\u8ba1\u7b97\u7ed3\u679c"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"from mittmcts import MCTS\n\ndef main():\n    result = (MCTS(Game)\n              .get_simulation_result(1000)) # \u6d4b\u8bd51000\u6b21, \u5f97\u5230\u7ed3\u679c\n    move = result.move # \u4e0b\u4e00\u6b65\n"})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>a});var s=n(96540);const r={},i=s.createContext(r);function l(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);