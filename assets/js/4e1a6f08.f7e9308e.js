"use strict";(self.webpackChunkmy_github=self.webpackChunkmy_github||[]).push([[69604],{43896:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var d=a(74848),t=a(28453);const l={title:"Pandas\u5feb\u901f\u5165\u95e8",tags:["Pandas","Python"],authors:"cttmayi"},s=void 0,i={permalink:"/blog/2019/05/09/Pandas\u5feb\u901f\u5165\u95e8",source:"@site/blog/2019-05-09-Pandas\u5feb\u901f\u5165\u95e8/index.md",title:"Pandas\u5feb\u901f\u5165\u95e8",description:"\u53c2\u8003//pandas.pydata.org/pandas-docs/stable/gettingstarted/10min.html",date:"2019-05-09T00:00:00.000Z",formattedDate:"2019\u5e745\u67089\u65e5",tags:[{label:"Pandas",permalink:"/blog/tags/pandas"},{label:"Python",permalink:"/blog/tags/python"}],readingTime:3.433333333333333,hasTruncateMarker:!1,authors:[{name:"Ling Yuan",title:"Engineer",url:"https://github.com/cttmayi",imageURL:"https://github.com/cttmayi.png",key:"cttmayi"}],frontMatter:{title:"Pandas\u5feb\u901f\u5165\u95e8",tags:["Pandas","Python"],authors:"cttmayi"},unlisted:!1,prevItem:{title:"Python\u5c0f\u6280\u5de7 - \u8fdb\u5ea6\u6761(tqdm)",permalink:"/blog/2019/05/09/Python\u5c0f\u6280\u5de7\u8fdb\u5ea6\u6761tqdm"},nextItem:{title:"\u513f\u5b50\u7684\u519c\u8015\u6e38\u5b66\u5706\u6ee1\u7ed3\u675f",permalink:"/blog/2019/05/08/\u513f\u5b50\u7684\u519c\u8015\u6e38\u5b66\u5706\u6ee1\u7ed3\u675f"}},r={authorsImageUrls:[void 0]},c=[{value:"\u5bf9\u8c61\u521b\u5efa",id:"\u5bf9\u8c61\u521b\u5efa",level:3},{value:"\u901a\u8fc7\u4e00\u4e2a\u6570\u7ec4\u521b\u5efa\u4e00\u4e2aSeries",id:"\u901a\u8fc7\u4e00\u4e2a\u6570\u7ec4\u521b\u5efa\u4e00\u4e2aseries",level:4},{value:"\u901a\u8fc7NumPy \u6570\u7ec4, \u521b\u5efaDataFrame",id:"\u901a\u8fc7numpy-\u6570\u7ec4-\u521b\u5efadataframe",level:4},{value:"\u901a\u8fc7\u5b57\u5178\u521b\u5efaDataFrame",id:"\u901a\u8fc7\u5b57\u5178\u521b\u5efadataframe",level:4},{value:"\u83b7\u5f97\u5404\u5217\u6570\u636e\u7c7b\u578b",id:"\u83b7\u5f97\u5404\u5217\u6570\u636e\u7c7b\u578b",level:4},{value:"\u89c2\u5bdf\u6570\u636e",id:"\u89c2\u5bdf\u6570\u636e",level:3},{value:"\u67e5\u770b\u6570\u636e\u7684\u5f00\u5934\u548c\u7ed3\u5c3e",id:"\u67e5\u770b\u6570\u636e\u7684\u5f00\u5934\u548c\u7ed3\u5c3e",level:4},{value:"\u663e\u793aindex, cloumns \u548c\u6570\u636e",id:"\u663e\u793aindex-cloumns-\u548c\u6570\u636e",level:4},{value:"describe()\xa0 \u51fd\u6570",id:"describe-\u51fd\u6570",level:4},{value:"\u8f6c\u7f6e\u4f60\u7684\u6570\u636e",id:"\u8f6c\u7f6e\u4f60\u7684\u6570\u636e",level:4},{value:"\u6392\u5e8f(index)",id:"\u6392\u5e8findex",level:4},{value:"\u6392\u5e8f(\u5217)",id:"\u6392\u5e8f\u5217",level:4},{value:"\u9009\u62e9",id:"\u9009\u62e9",level:3},{value:"\u9009\u62e9\u4e00\u5217",id:"\u9009\u62e9\u4e00\u5217",level:4},{value:"\u901a\u8fc7[]\u9009\u62e9",id:"\u901a\u8fc7\u9009\u62e9",level:4},{value:"\u901a\u8fc7\u6807\u7b7e(label)\u9009\u62e9",id:"\u901a\u8fc7\u6807\u7b7elabel\u9009\u62e9",level:4},{value:"\u901a\u8fc7\u6807\u7b7e\u9009\u62e9\u591a\u5217",id:"\u901a\u8fc7\u6807\u7b7e\u9009\u62e9\u591a\u5217",level:4},{value:"\u9009\u62e9\u591a\u884c\u591a\u5217",id:"\u9009\u62e9\u591a\u884c\u591a\u5217",level:4},{value:"\u83b7\u53d6\u6807\u91cf\u503c",id:"\u83b7\u53d6\u6807\u91cf\u503c",level:4},{value:"\u66f4\u9ad8\u6548\u7684\u65b9\u5f0f\u83b7\u53d6\u6807\u91cf\u503c",id:"\u66f4\u9ad8\u6548\u7684\u65b9\u5f0f\u83b7\u53d6\u6807\u91cf\u503c",level:4},{value:"\u901a\u8fc7\u6574\u6570\u7684\u4f4d\u7f6e\u4fe1\u606f\u8bbf\u95ee",id:"\u901a\u8fc7\u6574\u6570\u7684\u4f4d\u7f6e\u4fe1\u606f\u8bbf\u95ee",level:4},{value:"\u66f4\u9ad8\u6548\u7684\u65b9\u5f0f\u8bbf\u95ee\u6807\u91cf",id:"\u66f4\u9ad8\u6548\u7684\u65b9\u5f0f\u8bbf\u95ee\u6807\u91cf",level:4},{value:"\u901a\u8fc7\u6761\u4ef6\u5224\u65ad\u9009\u62e9\u6570\u636e",id:"\u901a\u8fc7\u6761\u4ef6\u5224\u65ad\u9009\u62e9\u6570\u636e",level:4}];function o(n){const e={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.p,{children:["\u53c2\u8003:\xa0",(0,d.jsx)(e.a,{href:"http://pandas.pydata.org/pandas-docs/stable/getting_started/10min.html",children:"http://pandas.pydata.org/pandas-docs/stable/getting_started/10min.html"})]}),"\n",(0,d.jsx)(e.p,{children:"\u9996\u5148, \u6211\u4eec\u5bfc\u5165\u5305"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-python",children:"import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\n"})}),"\n",(0,d.jsx)(e.h3,{id:"\u5bf9\u8c61\u521b\u5efa",children:"\u5bf9\u8c61\u521b\u5efa"}),"\n",(0,d.jsx)(e.h4,{id:"\u901a\u8fc7\u4e00\u4e2a\u6570\u7ec4\u521b\u5efa\u4e00\u4e2aseries",children:"\u901a\u8fc7\u4e00\u4e2a\u6570\u7ec4\u521b\u5efa\u4e00\u4e2aSeries"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-python",children:"In [4]: s = pd.Series([1,3,5,np.nan,6,8])\n\nIn [5]: s\nOut[5]: \n0    1.0\n1    3.0\n2    5.0\n3    NaN\n4    6.0\n5    8.0\ndtype: float64\n"})}),"\n",(0,d.jsx)(e.h4,{id:"\u901a\u8fc7numpy-\u6570\u7ec4-\u521b\u5efadataframe",children:"\u901a\u8fc7NumPy \u6570\u7ec4, \u521b\u5efaDataFrame"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-python",children:"In [6]: dates = pd.date_range('20130101', periods=6)\n\nIn [7]: dates\nOut[7]: \nDatetimeIndex(['2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04',\n               '2013-01-05', '2013-01-06'],\n              dtype='datetime64[ns]', freq='D')\n\nIn [8]: df = pd.DataFrame(np.random.randn(6,4), index=dates, columns=list('ABCD'))\n\nIn [9]: df\nOut[9]: \n                   A         B         C         D\n2013-01-01  0.469112 -0.282863 -1.509059 -1.135632\n2013-01-02  1.212112 -0.173215  0.119209 -1.044236\n2013-01-03 -0.861849 -2.104569 -0.494929  1.071804\n2013-01-04  0.721555 -0.706771 -1.039575  0.271860\n2013-01-05 -0.424972  0.567020  0.276232 -1.087401\n2013-01-06 -0.673690  0.113648 -1.478427  0.524988\n"})}),"\n",(0,d.jsx)(e.h4,{id:"\u901a\u8fc7\u5b57\u5178\u521b\u5efadataframe",children:"\u901a\u8fc7\u5b57\u5178\u521b\u5efaDataFrame"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-python",children:"In [10]: df2 = pd.DataFrame({ 'A' : 1.,\n   ....:                      'B' : pd.Timestamp('20130102'),\n   ....:                      'C' : pd.Series(1,index=list(range(4)),dtype='float32'),\n   ....:                      'D' : np.array([3] * 4,dtype='int32'),\n   ....:                      'E' : pd.Categorical([\"test\",\"train\",\"test\",\"train\"]),\n   ....:                      'F' : 'foo' })\n   ....: \n\nIn [11]: df2\nOut[11]: \n     A          B    C  D      E    F\n0  1.0 2013-01-02  1.0  3   test  foo\n1  1.0 2013-01-02  1.0  3  train  foo\n2  1.0 2013-01-02  1.0  3   test  foo\n3  1.0 2013-01-02  1.0  3  train  foo\n"})}),"\n",(0,d.jsx)(e.h4,{id:"\u83b7\u5f97\u5404\u5217\u6570\u636e\u7c7b\u578b",children:"\u83b7\u5f97\u5404\u5217\u6570\u636e\u7c7b\u578b"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-python",children:"In [12]: df2.dtypes\nOut[12]: \nA           float64\nB    datetime64[ns]\nC           float32\nD             int32\nE          category\nF            object\ndtype: object\n"})}),"\n",(0,d.jsx)(e.h3,{id:"\u89c2\u5bdf\u6570\u636e",children:"\u89c2\u5bdf\u6570\u636e"}),"\n",(0,d.jsx)(e.h4,{id:"\u67e5\u770b\u6570\u636e\u7684\u5f00\u5934\u548c\u7ed3\u5c3e",children:"\u67e5\u770b\u6570\u636e\u7684\u5f00\u5934\u548c\u7ed3\u5c3e"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-python",children:"In [14]: df.head()\nOut[14]: \n                   A         B         C         D\n2013-01-01  0.469112 -0.282863 -1.509059 -1.135632\n2013-01-02  1.212112 -0.173215  0.119209 -1.044236\n2013-01-03 -0.861849 -2.104569 -0.494929  1.071804\n2013-01-04  0.721555 -0.706771 -1.039575  0.271860\n2013-01-05 -0.424972  0.567020  0.276232 -1.087401\n\nIn [15]: df.tail(3)\nOut[15]: \n                   A         B         C         D\n2013-01-04  0.721555 -0.706771 -1.039575  0.271860\n2013-01-05 -0.424972  0.567020  0.276232 -1.087401\n2013-01-06 -0.673690  0.113648 -1.478427  0.524988\n"})}),"\n",(0,d.jsx)(e.h4,{id:"\u663e\u793aindex-cloumns-\u548c\u6570\u636e",children:"\u663e\u793aindex, cloumns \u548c\u6570\u636e"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-python",children:"In [16]: df.index\nOut[16]: \nDatetimeIndex(['2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04',\n               '2013-01-05', '2013-01-06'],\n              dtype='datetime64[ns]', freq='D')\n\nIn [17]: df.columns\nOut[17]: Index(['A', 'B', 'C', 'D'], dtype='object')\n\nIn [18]: df.values\nOut[18]: \narray([[ 0.4691, -0.2829, -1.5091, -1.1356],\n       [ 1.2121, -0.1732,  0.1192, -1.0442],\n       [-0.8618, -2.1046, -0.4949,  1.0718],\n       [ 0.7216, -0.7068, -1.0396,  0.2719],\n       [-0.425 ,  0.567 ,  0.2762, -1.0874],\n       [-0.6737,  0.1136, -1.4784,  0.525 ]])\n"})}),"\n",(0,d.jsx)(e.h4,{id:"describe-\u51fd\u6570",children:"describe()\xa0 \u51fd\u6570"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-python",children:"In [19]: df.describe()\nOut[19]: \n              A         B         C         D\ncount  6.000000  6.000000  6.000000  6.000000\nmean   0.073711 -0.431125 -0.687758 -0.233103\nstd    0.843157  0.922818  0.779887  0.973118\nmin   -0.861849 -2.104569 -1.509059 -1.135632\n25%   -0.611510 -0.600794 -1.368714 -1.076610\n50%    0.022070 -0.228039 -0.767252 -0.386188\n75%    0.658444  0.041933 -0.034326  0.461706\nmax    1.212112  0.567020  0.276232  1.071804\n"})}),"\n",(0,d.jsx)(e.h4,{id:"\u8f6c\u7f6e\u4f60\u7684\u6570\u636e",children:"\u8f6c\u7f6e\u4f60\u7684\u6570\u636e"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-python",children:"In [20]: df.T\nOut[20]: \n   2013-01-01  2013-01-02  2013-01-03  2013-01-04  2013-01-05  2013-01-06\nA    0.469112    1.212112   -0.861849    0.721555   -0.424972   -0.673690\nB   -0.282863   -0.173215   -2.104569   -0.706771    0.567020    0.113648\nC   -1.509059    0.119209   -0.494929   -1.039575    0.276232   -1.478427\nD   -1.135632   -1.044236    1.071804    0.271860   -1.087401    0.524988\n"})}),"\n",(0,d.jsx)(e.h4,{id:"\u6392\u5e8findex",children:"\u6392\u5e8f(index)"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-python",children:"In [14]: df.head()\nOut[14]: \n                   A         B         C         D\n2013-01-01  0.469112 -0.282863 -1.509059 -1.135632\n2013-01-02  1.212112 -0.173215  0.119209 -1.044236\n2013-01-03 -0.861849 -2.104569 -0.494929  1.071804\n2013-01-04  0.721555 -0.706771 -1.039575  0.271860\n2013-01-05 -0.424972  0.567020  0.276232 -1.087401\n\nIn [21]: df.sort_index(axis=1, ascending=False)\nOut[21]: \n                   D         C         B         A\n2013-01-01 -1.135632 -1.509059 -0.282863  0.469112\n2013-01-02 -1.044236  0.119209 -0.173215  1.212112\n2013-01-03  1.071804 -0.494929 -2.104569 -0.861849\n2013-01-04  0.271860 -1.039575 -0.706771  0.721555\n2013-01-05 -1.087401  0.276232  0.567020 -0.424972\n2013-01-06  0.524988 -1.478427  0.113648 -0.673690\n"})}),"\n",(0,d.jsx)(e.h4,{id:"\u6392\u5e8f\u5217",children:"\u6392\u5e8f(\u5217)"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-python",children:"In [22]: df.sort_values(by='B')\nOut[22]: \n                   A         B         C         D\n2013-01-03 -0.861849 -2.104569 -0.494929  1.071804\n2013-01-04  0.721555 -0.706771 -1.039575  0.271860\n2013-01-01  0.469112 -0.282863 -1.509059 -1.135632\n2013-01-02  1.212112 -0.173215  0.119209 -1.044236\n2013-01-06 -0.673690  0.113648 -1.478427  0.524988\n2013-01-05 -0.424972  0.567020  0.276232 -1.087401\n"})}),"\n",(0,d.jsx)(e.h3,{id:"\u9009\u62e9",children:"\u9009\u62e9"}),"\n",(0,d.jsx)(e.h4,{id:"\u9009\u62e9\u4e00\u5217",children:"\u9009\u62e9\u4e00\u5217"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-python",children:"In [23]: df['A']\nOut[23]: \n2013-01-01    0.469112\n2013-01-02    1.212112\n2013-01-03   -0.861849\n2013-01-04    0.721555\n2013-01-05   -0.424972\n2013-01-06   -0.673690\nFreq: D, Name: A, dtype: float64\n"})}),"\n",(0,d.jsx)(e.h4,{id:"\u901a\u8fc7\u9009\u62e9",children:"\u901a\u8fc7[]\u9009\u62e9"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-python",children:"In [24]: df[0:3]\nOut[24]: \n                   A         B         C         D\n2013-01-01  0.469112 -0.282863 -1.509059 -1.135632\n2013-01-02  1.212112 -0.173215  0.119209 -1.044236\n2013-01-03 -0.861849 -2.104569 -0.494929  1.071804\n\nIn [25]: df['20130102':'20130104']\nOut[25]: \n                   A         B         C         D\n2013-01-02  1.212112 -0.173215  0.119209 -1.044236\n2013-01-03 -0.861849 -2.104569 -0.494929  1.071804\n2013-01-04  0.721555 -0.706771 -1.039575  0.271860\n"})}),"\n",(0,d.jsx)(e.h4,{id:"\u901a\u8fc7\u6807\u7b7elabel\u9009\u62e9",children:"\u901a\u8fc7\u6807\u7b7e(label)\u9009\u62e9"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-python",children:"In [6]: dates = pd.date_range('20130101', periods=6)\n\nIn [7]: dates\nOut[7]: \nDatetimeIndex(['2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04',\n               '2013-01-05', '2013-01-06'],\n              dtype='datetime64[ns]', freq='D')\n\nIn [26]: df.loc[dates[0]]\nOut[26]: \nA    0.469112\nB   -0.282863\nC   -1.509059\nD   -1.135632\nName: 2013-01-01 00:00:00, dtype: float64\n"})}),"\n",(0,d.jsx)(e.h4,{id:"\u901a\u8fc7\u6807\u7b7e\u9009\u62e9\u591a\u5217",children:"\u901a\u8fc7\u6807\u7b7e\u9009\u62e9\u591a\u5217"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-python",children:"In [27]: df.loc[:,['A','B']]\nOut[27]: \n                   A         B\n2013-01-01  0.469112 -0.282863\n2013-01-02  1.212112 -0.173215\n2013-01-03 -0.861849 -2.104569\n2013-01-04  0.721555 -0.706771\n2013-01-05 -0.424972  0.567020\n2013-01-06 -0.673690  0.113648\n"})}),"\n",(0,d.jsx)(e.h4,{id:"\u9009\u62e9\u591a\u884c\u591a\u5217",children:"\u9009\u62e9\u591a\u884c\u591a\u5217"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-python",children:"In [28]: df.loc['20130102':'20130104',['A','B']]\nOut[28]: \n                   A         B\n2013-01-02  1.212112 -0.173215\n2013-01-03 -0.861849 -2.104569\n2013-01-04  0.721555 -0.706771\n"})}),"\n",(0,d.jsx)(e.h4,{id:"\u83b7\u53d6\u6807\u91cf\u503c",children:"\u83b7\u53d6\u6807\u91cf\u503c"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-python",children:"In [30]: df.loc[dates[0],'A']\nOut[30]: 0.46911229990718628\n"})}),"\n",(0,d.jsx)(e.h4,{id:"\u66f4\u9ad8\u6548\u7684\u65b9\u5f0f\u83b7\u53d6\u6807\u91cf\u503c",children:"\u66f4\u9ad8\u6548\u7684\u65b9\u5f0f\u83b7\u53d6\u6807\u91cf\u503c"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-python",children:"In [31]: df.at[dates[0],'A']\nOut[31]: 0.46911229990718628\n"})}),"\n",(0,d.jsx)(e.h4,{id:"\u901a\u8fc7\u6574\u6570\u7684\u4f4d\u7f6e\u4fe1\u606f\u8bbf\u95ee",children:"\u901a\u8fc7\u6574\u6570\u7684\u4f4d\u7f6e\u4fe1\u606f\u8bbf\u95ee"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-python",children:"In [32]: df.iloc[3]\nOut[32]: \nA    0.721555\nB   -0.706771\nC   -1.039575\nD    0.271860\nName: 2013-01-04 00:00:00, dtype: float64\n\n\nIn [33]: df.iloc[3:5,0:2]\nOut[33]: \n                   A         B\n2013-01-04  0.721555 -0.706771\n2013-01-05 -0.424972  0.567020\n\n\nIn [34]: df.iloc[[1,2,4],[0,2]]\nOut[34]: \n                   A         C\n2013-01-02  1.212112  0.119209\n2013-01-03 -0.861849 -0.494929\n2013-01-05 -0.424972  0.276232\n\n\nIn [35]: df.iloc[1:3,:]\nOut[35]: \n                   A         B         C         D\n2013-01-02  1.212112 -0.173215  0.119209 -1.044236\n2013-01-03 -0.861849 -2.104569 -0.494929  1.071804\n\n\nIn [36]: df.iloc[:,1:3]\nOut[36]: \n                   B         C\n2013-01-01 -0.282863 -1.509059\n2013-01-02 -0.173215  0.119209\n2013-01-03 -2.104569 -0.494929\n2013-01-04 -0.706771 -1.039575\n2013-01-05  0.567020  0.276232\n2013-01-06  0.113648 -1.478427\n\n\nIn [37]: df.iloc[1,1]\nOut[37]: -0.17321464905330858\n"})}),"\n",(0,d.jsx)(e.h4,{id:"\u66f4\u9ad8\u6548\u7684\u65b9\u5f0f\u8bbf\u95ee\u6807\u91cf",children:"\u66f4\u9ad8\u6548\u7684\u65b9\u5f0f\u8bbf\u95ee\u6807\u91cf"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-python",children:"In [38]: df.iat[1,1]\nOut[38]: -0.17321464905330858\n"})}),"\n",(0,d.jsx)(e.h4,{id:"\u901a\u8fc7\u6761\u4ef6\u5224\u65ad\u9009\u62e9\u6570\u636e",children:"\u901a\u8fc7\u6761\u4ef6\u5224\u65ad\u9009\u62e9\u6570\u636e"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-python",children:"In [39]: df[df.A > 0]\nOut[39]: \n                   A         B         C         D\n2013-01-01  0.469112 -0.282863 -1.509059 -1.135632\n2013-01-02  1.212112 -0.173215  0.119209 -1.044236\n2013-01-04  0.721555 -0.706771 -1.039575  0.271860\n\n\nIn [40]: df[df > 0]\nOut[40]: \n                   A         B         C         D\n2013-01-01  0.469112       NaN       NaN       NaN\n2013-01-02  1.212112       NaN  0.119209       NaN\n2013-01-03       NaN       NaN       NaN  1.071804\n2013-01-04  0.721555       NaN       NaN  0.271860\n2013-01-05       NaN  0.567020  0.276232       NaN\n2013-01-06       NaN  0.113648       NaN  0.524988\n"})})]})}function h(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(o,{...n})}):o(n)}},28453:(n,e,a)=>{a.d(e,{R:()=>s,x:()=>i});var d=a(96540);const t={},l=d.createContext(t);function s(n){const e=d.useContext(l);return d.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:s(n.components),d.createElement(l.Provider,{value:e},n.children)}}}]);