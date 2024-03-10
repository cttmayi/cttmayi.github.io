---
title: smali2java -  SMALI翻译为Java的工具
tags: [smali2java, 项目]
authors: cttmayi
---

6年前, 写了第一版本的smali转java的工具, 一直没有再进一步维护, 已经和新版本的apktool有些不兼容了. 

**项目地址**: [https://github.com/cttmayi/smaii2java](https://github.com/cttmayi/smaii2java)

## 改进
决定在如下几个方面重新做些更改.
1. 支持 Python 3
Python 3 时隔多年, 也算流行起来了
2. 改用正则表达式
以前喜欢用split函数, 发现代码确实很丑, 改用正则表达式, 效率和可读性应该会有很大的提高
3. 支持 apktool V2.4
发现有引入新的语法, 比如.enum, 这部分需要重新支持.
4. 代码翻译逻辑
可能需要更改为2次扫描的形式, 应该可以翻译得更好.

## 效果
```
	void onBackPressed(){
//line 283
		if (this.mOnBackPressedDispatcher.onBackPressed() == 0) goto cond_0;
		return;
cond_0:
//line 288
		super.onBackPressed();
		return;
	}
```