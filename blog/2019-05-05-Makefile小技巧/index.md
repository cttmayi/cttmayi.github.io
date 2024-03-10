---
title: Makefile 小技巧
tags: [Linux, Makefile]
authors: cttmayi
---

强烈推荐学习[\<跟我一起写 Makefile\>](http://scc.qibebt.cas.cn/docs/linux/base/%B8%FA%CE%D2%D2%BB%C6%F0%D0%B4Makefile-%B3%C2%F0%A9.pdf), 写得非常赞.
如下是早期学习Makefile的基本技巧笔记.

相对路径转换为绝对路径
===

PATH :=../..
PATH := $(shell cd $(PATH);pwd)

如printf一样的debug方式
===

$(warning $(PATH))
$(error $(PATH)) ---- [makefile](http://cttmayi.blog.cd/tag/makefile/ "View all posts in makefile")会停止下来

"=" ":="和"?="的区别
===

"=": 直到使用时才展开
":=" 此处定义时,直接展开
"?=" 如果变量之前未定义了,则和"="相同,如果定义了,则什么也不做.
A = A
B = $(A) \<----\> B := $(A)
A = AA
$(error $(B))  ---\> 如使用"=",返回值为AA,如使用":=",返回值为A

  

$@ 和 $\<
===
$@:目标, $\<:依赖目录
```
all: def
    echo $@ $<    ----> 输出all def
```

filter函数
===
  

 foreach函数
===
  

指定makefile文件
===

`make -f mfile`

export
===

A := 1
export A ----\> 使后面的m.mk可以引用变量A,否则需要用-D的参数来传递, make -f m.mk -DA=$(A)
make -f m.mk


替换
===

`FILE=$(subst main.c,.c,.o)`

include和sinclude的区别
===
在文件存在的情况下,include和sinclude功能相同,唯一不同的是,在文件不存在的时候,include会报错,而sinclude不会.

双冒号
===
双冒号规则就是使用 "::" 代替普通规则中的 ":" 所得到的规则。当同一个文件作为多个规则的目标时，双冒号规则的处理和普通规则的处理过程完全不同(双冒号规则允许在多个规则中为同一个目标指定不同的重建目标的命令).