---
title: Python 作用域(LEGB)
tags: [Python]
authors: cttmayi
---

## LEGB
LEGB就是用来规定命名空间查找顺序的规则, 顺序是 L\> E \> G \> B

1. **L**ocal
函数内的名字空间  
2. **E**nclosing function locals, 
外部嵌套函数的名字空间
3. **G**lobal, 
函数定义所在模块（文件）的名字空间  
4. **B**uiltin, 
内置模块的名字空间