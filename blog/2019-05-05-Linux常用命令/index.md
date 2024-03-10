---
title: Linux常用命令
tags: [Linux, Shell]
authors: cttmayi
---

早期整理的Linux实用命令, linux下工作还是必须要会的.

grep
====

强大的文本搜索工具, 能使用正则表达式搜索文本.
范例: grep -r text pathname

实用参数:

| 参数| 参数 | 说明 |
| --- | --- | --- |
| -m |  |  匹配的最大行数 |
| -i | --ignore-case | 忽略大小写差别 |
| -I | | 忽略二进制文件 |
| -n | --line-number | 显示匹配行及行号 |
|-r | --recursive | |
|-s |--silent | 不显示关于不存在或者无法读取文件的错误信息 |
|-w | --word-regexp | 全词匹配 |
| -c | | 统计出现次数 |

find
====
文件搜索工具

范例: find pathname -name text
实用参数:

| 参数| 参数 | 说明 |
| --- | --- | --- |
| -name | | 搜索的文件名 |
| -size |  |查找文件长度为n块的文件, 带有c时表示文件长度以字节计 |
| -type | | b - 块设备文件; d - 目录; c - 字符设备文件; p - 管道文件; l - 符号链接文件; f - 普通文件; |

xargs
=====

sed
===
实例: sed -e 's/AAA/BBB/' --替换AAA为BBB

实用参数：
| 参数| 参数 | 说明 |
| --- | --- | --- |
| -e | | 指定命令 |
| -i | | 保存文件 |
| -f | | 指定命令文件 |

awk
===

wc
===

tar
===
打包并压缩
`tar -zcvf p.tar.gz file.txt`
解压缩 
`tar -zxvf p.tar.gz -C folder`