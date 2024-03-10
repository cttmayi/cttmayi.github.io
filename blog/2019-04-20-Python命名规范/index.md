---
title: Python - 命名规范
tags: [Python]
authors: cttmayi
---

Python之父Guido推荐的命名规范包括如下几点：

1.  模块名和包名采用小写字母并且以下划线分隔单词的形式；
2.  类名采用以大写字母开头，并且以大写字母分隔单词的形式命名；
3.  全局或者类常量，全部使用大写字母，并且以下划线分隔单词；其余变量命名则是采用全部小写字母，并且以下划线分隔单词的形式命名。
4.  以上的内容如果是内部的，则使用下划线开头命名。

| Type | Public | Internal |
| --- | --- | --- |
| Modules | lower\_with\_under | \_lower\_with_under |
| Packages | lower\_with\_under |   |
| Classes | CapWords | _CapWords |
| Exceptions | CapWords |   |
| Functions | lower\_with\_under() | \_lower\_with_under() |
| Global/Class Constants | CAPS\_WITH\_UNDER | \_CAPS\_WITH_UNDER |
| Global/Class Variables | lower\_with\_under | \_lower\_with_under |
| Instance Variables | lower\_with\_under | \_lower\_with\_under (protected) or \_\_lower\_with\_under (private) |
| Method Names | lower\_with\_under() | \_lower\_with\_under() (protected) or \_\_lower\_with\_under() (private) |
| Function/Method Parameters | lower\_with\_under |   |
| Local Variables | lower\_with\_under |   |