---
title: Hubot - 入门指南
tags: [Chatops, Hubot]
authors: cttmayi
---

## 安装
首先, 需要安装[node.js and npm](https://docs.npmjs.com/getting-started/installing-node).

然后, 执行如下命令, 安装hubot安装器
`%  npm install -g yo generator-hubot`

接下来, 创建一个新目录, 生成一个hubot实例.
```
% mkdir myhubot
% cd myhubot
% yo hubot 
```
过程中, 你会被询问一些问题(比如谁创建bot, 使用哪个[adapter](https://hubot.github.com/docs/adapters/)等).

## 运行
安装完毕后, 执行如下命令及可运行起来
```
% bin/hubot
 - n bot
Hubot>
```

执行我们的第一个命令help
```
bot> bot help

bot echo <text> - Reply back with <text>
bot help - Displays all of the help commands that this bot knows about.
bot help <query> - Displays all help commands that match <query>.
bot image me <query> - The Original. Queries Google Images for <query> and returns a random top result.
bot ping - Reply with pong
bot time - Reply with current time
```

## 脚本
Hubot社区上有上百个脚本, 可以通过搜索[NPM registry](https://www.npmjs.com/browse/keyword/hubot-scripts)找到. 例如,
```
$ npm search hubot-scripts github

NAME                  DESCRIPTION
hubot-deployer        Giving Hubot the ability to deploy GitHub repos to PaaS providers hubot hubot-scripts hubot-gith
hubot-gh-release-pr   A hubot script to create GitHub's PR for release
hubot-github          Giving Hubot the ability to be a vital member of your github organization
…
```
如需要使用, 可以通过下面几步完成添加
1. 执行`npm install --save \<package-name\>`
2. 添加包到`external-scripts.json`中
3. 执行`npm home \<package-name\>`打开脚本的Homepage, 那里你可以找到更多的配置和安装信息
当然, 你也可以添加自己的脚本到`scripts/`中. 具体可以参考 [writing your own scripts](https://hubot.github.com/docs/scripting/).

## 适配器(Adapters)
Hubot 有很多现成的Chat终端适配器, 可以让我们很容易完成和Chat终端的对接.
这里有一个列表 [list of available adapters](https://hubot.github.com/docs/adapters/).
经过一段时间的调研, 认为 [Rocket.Chat](https://rocket.chat/) 比较适合企业内部部署. 开源, 很容易部署在企业内部, 相对安全. 具体安装可参考[https://www.moerats.com/archives/530/](https://www.moerats.com/archives/530/)

**参考文档**: [https://hubot.github.com/docs/](https://hubot.github.com/docs/)