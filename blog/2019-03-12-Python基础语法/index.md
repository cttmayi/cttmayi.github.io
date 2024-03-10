---
title: Python 基础语法
tags: [Python]
authors: cttmayi
---

行和缩进
----
学习Python与其他语言最大的区别就是，Python的代码块不使用大括号（\{\}）来控制类，函数以及其他逻辑判断。python最具特色的就是用缩进来写模块。
缩进的空白数量是可变的，但是所有代码块语句必须包含相同的缩进空白数量，这个必须严格执行。如下所示：
```
if True:
    print "True"
else:
  print "False"
```

注释
--------
python中单行注释采用 ## 开头。
```
# 第一个注释  
print  "Hello, Python!";  
# 第二个注释`
```

输出
--------
print 默认输出是换行的，如果要实现不换行需要在变量末尾加上逗号 ,

```
x="a"
y="b"
# 换行输出
print x
print y
```