---
title: Python - 正则表达式(函数)
tags: [Python, 正则表达式]
authors: cttmayi
---

最近要使用正则表达式, 特别记录一下常用的函数, 以备查询.
## 基本函数
### re.match 
尝试从字符串的起始位置匹配一个模式, 如果不是起始位置匹配成功的话，match()就返回none.
`re.match(pattern,  string, flags=0)`

- pattern: 匹配的正则表达式
- string: 要匹配的字符串

匹配成功re.match方法返回一个匹配的对象，否则返回None.
可以使用group(num) 或 groups() 匹配对象函数来获取匹配表达式.

### re.search
re.search 扫描整个字符串并返回第一个成功的匹配。
`re.search(pattern,  string, flags=0)`
匹配成功re.search方法返回一个匹配的对象，否则返回None。
我们可以使用group(num) 或 groups() 匹配对象函数来获取匹配表达式.

### re.compile
compile 函数用于编译正则表达式，生成一个正则表达式(RegexObject)对象，供 match() 和 search() 这两个函数使用.
`re.compile(pattern[, flags])`

### re.split
split 方法按照能够匹配的子串将字符串分割后返回列表，它的使用形式如下：
`re.split(pattern,  string[, maxsplit=0, flags=0])`

- maxsplit: 分隔次数，maxsplit=1 分隔一次，默认为 0，不限制次数。

## 使用范例
### 范例一
基本的使用案例
```
import  re
line = "Cats are smarter than dogs"
match_obj = re.match(  r'(.*) are (.*?) .*', line, re.M|re.I)
if  match_obj:
    print("group() : ", match_obj.group())
    print("group(1) : ", match_obj.group(1))
    print("group(2) : ", match_obj.group(2))
else: 
    print  "No match!!"
```

### 范例二
如需重复使用, 利用compile可提供效率.
```
import  re
pattern = re.compile(r'([a-z]+) ([a-z]+)', re.I)  # re.I 表示忽略大小写
m = pattern.match('Hello World Wide Web')
m.group(0)  # 返回匹配成功的整个子串  'Hello World'
m.span(0)  # 返回匹配成功的整个子串的索引  (0, 11)
m.group(1)  # 返回第一个分组匹配成功的子串  'Hello' 
m.span(1)  # 返回第一个分组匹配成功的子串的索引  (0, 5)
m.group(2)  # 返回第二个分组匹配成功的子串  'World'
m.span(2)  # 返回第二个分组匹配成功的子串  (6, 11)
m.groups()  # 等价于 (m.group(1), m.group(2), ...)  ('Hello', 'World')
```