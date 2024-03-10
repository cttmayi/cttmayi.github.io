---
title: LaTex 入门
tags: [LaTex]
authors: cttmayi
---

学习"机器学习"过程中, 本想博客做些记录, 发现很过公式无法表现, 于是决定先学习学习LaTex. 网络上搜索了很多, 找到几个PDF, 可供研读 .

[大家来学LaTex](http://vdisk.weibo.com/s/uHJ9-OCEyxyHb)

[LaTeX 排版学习笔记](https://pan.baidu.com/s/1hr7yHhi##list/path=%2F)

[LATEX Note 雷太赫排版系统简介](http://www.dralpha.com/zh/tech/lnotes2.pdf)

#### 首先, 安装 CTex

下载 [CTex](http://www.ctex.org/CTeXDownload), 它是一个工具合集, 包括 MiKTex, WinEdt等.

#### 开始行动, 写第一个LaTex "Hello World"

运行WinEdt, 新建文件.

```
\documentclass{article}
\begin{document}
Hello , World!
\end{document}
```

#### 数学公式入门

为了使用AMS-LATEX 提供的数学功能，我们需要在文档的序言部分加  
载amsmath 宏包

```
\documentclass{article}
\usepackage{amsmath}
\begin{document}
\[ x^2=x+1 \]
\end{document}
```

在这个模式下,建议: 行间公式用$...$，无编号独立公式用\\\[...\\\], 有编号独立公式 \\begin\{equation\} ... \\end\{equation\}

希腊字母

![](https://static.oschina.net/uploads/space/2016/1225/230525_kLUE_1169303.png)


| 数学函数 | | |
|---|---|---|
| 分数(x/y) | \\frac\{x\}\{y\} | ![](https://static.oschina.net/uploads/space/2016/1225/234450_AyH5_1169303.png) |
| 开方 | \\sqrt\{x\}, \\sqrt\[x\]\{y\} | ![](https://static.oschina.net/uploads/space/2016/1225/234734_isXE_1169303.png) |
| 极限 | \\lim_\{x\\to\\infty\}\\frac\{1\}\{x\} | ![](https://static.oschina.net/uploads/space/2016/1225/235310_gS1X_1169303.png) |
| 对数 | \\ln x |   |
| 次方 | x^y | ![](https://static.oschina.net/uploads/space/2016/1225/235202_yuCG_1169303.png) |
| 下标 | x_\{i\} | ![](https://static.oschina.net/uploads/space/2016/1225/235633_dtpo_1169303.png) |
| 运算符 | \\pm \\times \\div \\cdot \\cap \\cup \\geq \\leq \\neq \\approx \\equiv | ![](https://static.oschina.net/uploads/space/2016/1226/000034_302u_1169303.png) |
| 求和 | \\sum_\{x=1\}^n x | ![](https://static.oschina.net/uploads/space/2016/1226/002046_7xLY_1169303.png) |
| 求积 | \\prod_\{x=1\}^n x | ![](https://static.oschina.net/uploads/space/2016/1226/002742_BL3F_1169303.png) |



| 其他 | | |
|---|---|---|
| 加大符号 | \\Big |   |
| 省略号 | \\dots |   |
| 对齐 (按&对齐) | \\begin\{align*\} \\end\{align*\} |   |
| 空白 | \\quad |   |