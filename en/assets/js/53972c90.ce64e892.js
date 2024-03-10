"use strict";(self.webpackChunkmy_github=self.webpackChunkmy_github||[]).push([[44441],{8851:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var s=n(74848),i=n(28453);const a={title:"smali2java - \u6d4b\u8bd5\u4ee3\u7801",tags:["smali2java"],authors:"cttmayi"},l=void 0,r={permalink:"/en/blog/2019/05/04/smali2java\u6d4b\u8bd5\u4ee3\u7801",source:"@site/blog/2019-05-04-smali2java\u6d4b\u8bd5\u4ee3\u7801/index.md",title:"smali2java - \u6d4b\u8bd5\u4ee3\u7801",description:"\u6d4b\u8bd5\u4ee3\u7801\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u975e\u5e38\u91cd\u8981, Python\u4e5f\u63d0\u4f9b\u4e86\u975e\u5e38\u597d\u7684\u6846\u67b6\u7ed9\u5927\u5bb6\u4f7f\u7528.",date:"2019-05-04T00:00:00.000Z",formattedDate:"May 4, 2019",tags:[{label:"smali2java",permalink:"/en/blog/tags/smali-2-java"}],readingTime:.74,hasTruncateMarker:!1,authors:[{name:"Ling Yuan",title:"Engineer",url:"https://github.com/cttmayi",imageURL:"https://github.com/cttmayi.png",key:"cttmayi"}],frontMatter:{title:"smali2java - \u6d4b\u8bd5\u4ee3\u7801",tags:["smali2java"],authors:"cttmayi"},unlisted:!1,prevItem:{title:"Linux\u5e38\u7528\u547d\u4ee4",permalink:"/en/blog/2019/05/05/Linux\u5e38\u7528\u547d\u4ee4"},nextItem:{title:"smali2java -  \u6b63\u5219\u8868\u8fbe\u5f0f\u5316",permalink:"/en/blog/2019/04/30/smali2java\u6b63\u5219\u8868\u8fbe\u5f0f\u5316"}},o={authorsImageUrls:[void 0]},c=[];function m(e){const t={a:"a",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["\u6d4b\u8bd5\u4ee3\u7801\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u975e\u5e38\u91cd\u8981, Python\u4e5f\u63d0\u4f9b\u4e86\u975e\u5e38\u597d\u7684\u6846\u67b6\u7ed9\u5927\u5bb6\u4f7f\u7528.\n\u7279\u522b\u91cd\u8981, ",(0,s.jsx)(t.strong,{children:"\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u5199\u6d4b\u8bd5, \u800c\u4e0d\u662f\u5f00\u53d1\u5b8c\u6210\u540e\u5199\u6d4b\u8bd5, \u8bf7\u521d\u5b66\u8005\u52a1\u5fc5\u6267\u884c."}),"\n\u7f51\u4e0a\u6559\u7a0b\u5f88\u591a, \u8fd9\u91cc\u53ea\u5199\u4e00\u4e2a\u57fa\u672c\u6d41\u7a0b\u7ed9\u5927\u5bb6\u53c2\u8003."]}),"\n",(0,s.jsx)(t.p,{children:"\u57fa\u672c\u6b65\u9aa4:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\u5bfc\u5165\u5e93,",(0,s.jsx)(t.code,{children:"import unittest "}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["\u5b9a\u4e49\u7c7b, \u7ee7\u627f",(0,s.jsx)(t.code,{children:"unittest.TestCase"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["\u5b9a\u4e49\u7c7b\u51fd\u6570, \u9700\u8981\u4ee5",(0,s.jsx)(t.code,{children:"test"}),"\u5f00\u5934, \u5176\u4e2d\u5229\u7528",(0,s.jsx)(t.code,{children:"assertEqual"}),"\u7b49\u51fd\u6570\u786e\u5b9a\u7b54\u6848\u7684\u6b63\u786e\u6027."]}),"\n",(0,s.jsxs)(t.li,{children:["\u52a0\u5165",(0,s.jsx)(t.code,{children:"if __name__ == '__main__':  unittest.main()"})]}),"\n",(0,s.jsx)(t.li,{children:"\u76f4\u63a5\u54a8\u8be2python\u6587\u4ef6\u5373\u53ef."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["\u4ee3\u7801\u8def\u5f84: ",(0,s.jsx)(t.a,{href:"https://github.com/cttmayi/smaii2java/blob/master/test.py",children:"https://github.com/cttmayi/smaii2java/blob/master/test.py"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"# coding = utf-8\nimport unittest\nimport re_gra\n\nclass ReGraTest(unittest.TestCase):\n    def test_to_dot(self):\n        lines = [['.line 84', {'NUM': '84'}]]\n\n        for one_line in lines:\n            line_smali = one_line[0]\n            expected = one_line[1]\n            result = re_gra.to_op(line_smali)\n            self.assertIsNotNone(result, line_smali + '(Not Match)')\n            if expected is not None:\n                result2 = {}\n                for a_key in expected.keys():\n                    if a_key in result.keys():\n                        result2[a_key] = result[a_key]\n                    else:\n                        result2[a_key] = None\n                self.assertEqual(expected, result2, line_smali + '(Error)')\n\nif __name__ == '__main__':\n    unittest.main()\n"})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>r});var s=n(96540);const i={},a=s.createContext(i);function l(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);