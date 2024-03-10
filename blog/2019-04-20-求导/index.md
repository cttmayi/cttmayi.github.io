---
title: 求导
tags: [AI, 数学, 机器学习]
authors: cttmayi
---

为了学习"梯度上升/下降算法", 不得不大补高中数学, 重新学习求导.

## 基本公式

```
\begin{align*}
(c)' &= 0 \\
(cx)' &= c \\
(x^a)' &= ax^{a-1} \\
(\frac{c}{v})' &= - \frac{cv'}{v^2} \Longrightarrow (\frac{1}{x})' = - \frac{1}{x^2} \\
(\log_a x)' &= \frac{1}{x\ln a} \Longrightarrow (\ln x)' = \frac{1}{x} \\
(a^x)' &= a^x\ln a \Longrightarrow (e^x)' = e^x \\
\end{align*}
```

![](https://static.oschina.net/uploads/space/2016/1227/005011_OjV7_1169303.png)

## 导数的四则运算法则

```
$$ (u \pm v)' = u' \pm v' $$
$$ (uv)' = u'v + uv' $$
$$ (\frac{u}{v})' = \frac{u'v - uv'}{v^2} $$
```

![](https://static.oschina.net/uploads/space/2016/1227/000700_28Yk_1169303.png)

## 复合函数运算法则

```
$$ y = f(u), u = g(x) $$
$$ (f[g(x)])' = f'(u)g'(x) $$
```

设![](https://static.oschina.net/uploads/space/2016/1227/003224_fYFZ_1169303.png), 那么![](https://static.oschina.net/uploads/space/2016/1227/003325_CXAT_1169303.png)

## 推导"梯度上升算法"

```
\begin{align*}
& \Big[\ln \Big(\frac{1}{1+e^{-x}})^y (1-\frac{1}{1+e^{-x}})^{(1-y}\Big)\Big]' \\
= &\Big[y\ln (\frac{1}{1+e^{-x}}) + (1-y)\ln (\frac{e^{-x}}{1+e^{-x}}) \Big]' \\
= &y(1+e^{-x})(\frac{1}{1+e^{-x}})' + (1-y)\frac{(1+e^{-x})}{e^{-x}} (\frac{e^{-x}}{1+e^{-x}})' \\
= &y(1+e^{-x})\frac{e^{-x}}{(1+e^{-x})^2}x' + (1-y)\frac{(1+e^{-x})}{e^{-x}}\frac{-e^{-x}}{(1+e^{-x})^2}x' \\
= &y\frac{e^{-x}}{1+e^{-x}}x' + (y-1)\frac{1}{1+e^{-x}}x' \\
= &(y-\frac{1}{1+e^{-x}})x'
\end{align*}
```

![](https://static.oschina.net/uploads/space/2016/1228/023729_NwYk_1169303.png)

其中![](https://static.oschina.net/uploads/space/2016/1229/010043_nwwL_1169303.png), 对![](https://static.oschina.net/uploads/space/2016/1229/010146_txBO_1169303.png)进行求导

```
\begin{align*}
& (y-\frac{1}{1+e^{-x}})x' \\
= & (y-\frac{1}{1+e^{-x}})(w_0 + w_1x_1 + \dots + w_jx_j + \dots + w_nx_n)' \\
= & (y-\frac{1}{1+e^{-x}})x_j
\end{align*}
```

![](https://static.oschina.net/uploads/space/2016/1229/005857_NrbV_1169303.png)

最终结果

```
\begin{align*}
&\Big[\ln \Big( \prod_{i} (\frac{1}{1+e^x_i})^yi (1-\frac{1}{1+e^{x_i}})^{(1-{y_i})}\Big)\Big]' \\
= &\sum_i(y-\frac{1}{1+e^{-x_i}})x_j
\end{align*}
```

![](https://static.oschina.net/uploads/space/2016/1229/010009_dYQz_1169303.png)