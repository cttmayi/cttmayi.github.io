---
title: Python 动态导入类
tags: [Python]
authors: cttmayi
---

很多时候, 类需要被动态加载,  可以使用内置函数__import__()

## 作用
主要用于反射或者延迟加载模块

## 语法
`__import__(name[, globals[, locals[, fromlist[, level]]]])`

## 实例
### 实例1
`c = __import__('c1')`
导入c1, 返回c1
### 实例2
`c = __import__('c1.c2')`
导入c2, 返回c1
### 实例3
`c = __import__('c1.c2',fromlist = ('c2'))`
导入c2, 返回c2