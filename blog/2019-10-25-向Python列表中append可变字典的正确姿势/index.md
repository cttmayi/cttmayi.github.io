---
title: 向Python列表中append可变字典的正确姿势
tags: [python3]
authors: cttmayi
---

## 0.问题由来

在最近一些工具开发中，遇到这样一个bug，在debug中才发现问题所在，先上代码

```python
d = {'id': None}
l = []
for i in range(1, 4):
    d['id'] = i
    l.append(d)
```

按照常理l最终值为：

```python
[{'id': 1}, {'id': 2}, {'id': 3}]
```

然而实际值为：

```python
[{'id': 3}, {'id': 3}, {'id': 3}]
```

问题分析：

在循环中，d相当于一个全局变量，d一旦更新，列表l中原有的d也会得到更新，所以导致了这样的情况出现；

## 1.正确姿势

```python
l = []
for i in range(1, 4):
    d = {'id': i}
    l.append(d)
    print(l)
```
