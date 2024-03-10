---
title: Android GPU分析利器(GAPID)
tags: [Android, GPU]
authors: cttmayi
---

## GAPID
它是一款 Google 的开源软件. 它可以录制播放GPU命令, 非常适合学习和分析Android中的显示问题.
它可以分析任意一个可debug的应用, 或者使用一款有root的手机.


### 源代码
[https://github.com/google/gapid](https://github.com/google/gapid)

### Build 版本
[https://github.com/google/gapid/releases](https://github.com/google/gapid/releases)

### 注意事项
即使只是分析录制好的LOG, 也需要连接手机.(它是通过手机动态计算获得中间结果)

### 使用截图
![Screenshot 1](https://camo.githubusercontent.com/51cc2ea031bb0412127ffe099bda0dca5b2a5a50/68747470733a2f2f67617069642e6465762f696d616765732f73637265656e73686f74732f6672616d656275666665725f7468756d622e6a7067)

![Screenshot 2](https://camo.githubusercontent.com/c0b328085769f5b5405260f690c189bfd8b761be/68747470733a2f2f67617069642e6465762f696d616765732f73637265656e73686f74732f67656f6d657472795f7468756d622e6a7067)