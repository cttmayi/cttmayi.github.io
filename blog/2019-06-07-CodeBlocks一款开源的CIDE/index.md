---
title: Code::Blocks (一款开源的C++ IDE)
tags: [C++, Tool]
authors: cttmayi
---

最近准备尝试一下Code::Blocks, 发现有很多不完善的地方, 很多需要自己去解决.
比如wxwidget, 完全不能依靠它自动寻找路径,  需要大量的手动设定.

## 安装
从官方网站([http://www.codeblocks.org/downloads](http://www.codeblocks.org/downloads))下载安装. 最好安装带变压器(mingw)的版本.

## 设定
### debugger
调试过程中, 发现一直提示"Starting debugger: xxx failed", 最后发现, 默认Code::Blocks没有安装gdb, 需要重新到MinGW网站去下载安装. 安装后, 进行如下设定:
Settings-\>debugger...-\>Default-\>Executable path
另外注意一下, 是否有打开调试编译
Project-\>Build options-\>Debug-\>在Complier Flags中勾选produce debugging symbols[-g]

### 编译路径
1. Project-\>Build options-\>Search directories-\>Compiler
设定include搜索路径
2. Project-\>Build options-\>Search directories-\>Linker
设定库文件搜索路径
3. Project-\>Build options-\>Search directories-\>Resource compiler
设定Resource搜索路径
4. Project-\>Build options-\>Liner settings
设定哪些库需要被编译进来