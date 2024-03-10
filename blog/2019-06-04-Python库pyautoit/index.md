---
title: Python库 - pyautoit
tags: [Python库, python]
authors: cttmayi
---

## 简介
AutoIt设计用于Windows GUI中进行自动化操作。 Python可通过pyautoit可以轻松调用AutoIt的函数, 实现桌面自动化功能.

## 安装
### pip安装 
`pip install -U pyautoit`
网上推荐的方案, 我本地测试, 安装失败, 暂未找到原因, 只能下载安装了.
### 下载安装 
下载安装包[https://github.com/jacexh/pyautoit/](https://github.com/jacexh/pyautoit/)
`python setup.py install`

### 测试代码
安装包中有notepad操作的范例(example/notepad.py)
```
import autoit
autoit.run("notepad.exe")
autoit.win_wait_active("[CLASS:Notepad]", 3)
autoit.control_send("[CLASS:Notepad]", "Edit1", "hello world{!}")
autoit.win_close("[CLASS:Notepad]")
autoit.control_click("[Class:#32770]", "Button2")
```