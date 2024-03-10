---
title: RaspberryPi B2+搭建hass平台
tags: [hass]
authors: cttmayi
---

## 0.hass简介

hass即homeassistant，是智能硬件的一个连接平台，它可以通过连接HomeKit、小米网关等控制Apple以及Xiaomi的硬件设备，也可以直接连接硬件设备，通过其Web/App进行控制。同时，它还有自动化的功能，通过配置可以实现智能家居的自动化控制，如进门开灯、室内温度高于阈值启动空调等。在[链接](https://www.home-assistant.io/components/)中可以查看它所支持的硬件设备，除此之外，还可以自己DIY一些智能硬件，写好插件后，也同样能够连接到hass

hass可以在多种平台上进行安装，包括win、ubuntu、软路由等，由于上学期间玩过RaspberryPi，有一块吃灰很久的Pi刚好可以用来安装hass

## 1.Raspberry B2+系统安装

树莓派的镜像可以在[官网](https://www.raspberrypi.org/downloads/raspbian/)上下载，推荐使用Raspbian镜像，下载完之后通过`dd`(linux环境)命令将镜像刻录到sd卡，即可完成树莓派的镜像制作。需要注意的是，如果你没有显示器或串口工具，你可以在sd卡的`boot`文件下新建一个名为`ssh`的空白文件，树莓派启动后将会自动开启`ssh`服务，通过路由器查找到它的IP后，便可以`ssh`远程登录

```sh
$ ssh pi@192.168.2.234 #更换为你实际的IP地址，树莓派默认密码为raspberry
```

树莓派启动后，需要更新软件，但由于墙的原因，若使用其默认的源更新将会非常慢，因此需要更换源（[清华源](https://mirror.tuna.tsinghua.edu.cn/help/raspbian/)），换源之后即可更新

```sh
$ sudo apt-get update && sudo apt-get upgrade
```

## 2.Homeassistant安装

hass的安装使用了pip3，整个安装过程巨慢（不同网络环境，可能不一样），你可以先更换一下[pip源](https://blog.csdn.net/sinat_21591675/article/details/82770360)，然后开始安装

```sh
$ sudo apt-get install python3 python3-venv python3-pip #安装python3
$ sudo useradd -rm homeassistant #添加用户
$ cd /srv
$ sudo mkdir homeassistant
$ sudo chown homeassistant:homeassistant homeassistant
$ sudo su -s /bin/bash homeassistant #创建虚拟环境
$ cd /srv/homeassistant
$ python3 -m venv .
$ source bin/activate
$ python3 -m pip install wheel
$ pip3 install homeassistant  --upgrade #安装最新版
```

你也可以安装完python3后直接通过`pip3 install homeassistant  --upgrade`安装hass，但还是建议新建一个python虚拟环境进行安装，避免环境污染。

由于整个安装过程非常缓慢，很有可能安装到一半就因为某些插件下载失败而停止，因此需要关注终端打印的相关log，譬如我在安装时，`home_assistant_frontend`这个插件（hass的web端相关的插件）死活装不上，只能自己手动新进安装，先找到其链接，并使用weget下载，最后使用pip3安装

```sh
$ wget https://www.piwheels.org/simple/home-assistant-frontend/home_assistant_frontend-20190828.0-py3-none-any.whl #使用wget download
$ pip3 install home_assistant_frontend-20190828.0-py3-none-any.whl
```

如果成功安装，执行`hass`命令后（第一次执行时会下载某些插件，也会非常缓慢），即可通过浏览器访问`树莓派IP:8312`访问hass了

若登录不上，尝试在配置文件`configuration.yaml`中添加

```sh
http:
  ssl_profile: intermediate
```



### 添加服务

如果你想更加方便地管理hass，你可以添加相关服务

- 创建文件(若使用vim无法编辑，不知为何)

```sh
$ sudo nano -w /etc/systemd/system/home-assistant@homeassistant.service 
```

- 添加如下内容，将`/srv/homeassistant/bin/hass`替换为你的hass的实际路径

```sh
[Unit]
Description=Home Assistant
After=network-online.target

[Service]
Type=simple
User=%i
ExecStart=/srv/homeassistant/bin/hass -c "/home/homeassistant/.homeassistant"

[Install]
WantedBy=multi-user.target
```

- 配置 systemd

```sh
$ sudo systemctl --system daemon-reload #重载服务配置
$ sudo systemctl enable home-assistant@homeassistant #将服务加入自启动
```

- 其他操作

```sh
$ sudo systemctl disable home-assistant@homeassistant #移除自启动
$ sudo systemctl start home-assistant@homeassistant #手动启动
$ sudo systemctl stop home-assistant@homeassistant #手动停止
$ sudo systemctl restart home-assistant@homeassistant #重启
$ sudo journalctl -f -u home-assistant@homeassistant #查看输出
```

### 启用homekit功能

最新hass已经内置homebridge，只需要配置一下即可支持homekit

- 首先，安装homebridge的依赖

```sh
$ sudo apt-get install libavahi-compat-libdnssd-dev
```

- 其次，编辑配置文件`configuration.yaml`

```sh
$ cd /home/homeassistant/.homeassistant
$ vim configuration.yaml 
#直接另起一行，添加如下内容即可
homekit:
#添加完重启即可
```

- 最后在hass的web端通知栏即可看到homekit的设置代码

## 参考

- [官网](https://www.home-assistant.io/)
- [HAChina](https://www.hachina.io)
- [Home Assitant中文文档](https://home-assistant.cc/component/xiaomi/wifi/)
- [树莓派安装 HomeAssistant](https://www.jianshu.com/p/8f77a3f46f4d)
- [Hassbian BBS](https://bbs.hassbian.com/forum.php)

## 最后

如果你想深入了解hass，hass的官方网站就很有必要去阅览一下；下一篇将介绍hass的几个智能硬件的连接
