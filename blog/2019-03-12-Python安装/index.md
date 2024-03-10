---
title: Python 安装
tags: [Python]
authors: cttmayi
---

Python安装
--------

Python已经被移植在许多平台上（经过改动使它能够工作在不同平台上）。

您需要下载适用于您使用平台的二进制代码，然后安装Python。

如果您平台的二进制代码是不可用的，你需要使用C编译器手动编译源代码。

编译的源代码，功能上有更多的选择性， 为python安装提供了更多的灵活性。

以下为不同平台上安装Python的方法：

#### Unix & Linux 平台安装 Python:

以下为在Unix & Linux 平台上安装 Python 的简单步骤：

*   打开WEB浏览器访问[http://www.python.org/download/](https://www.python.org/download/)
*   选择适用于Unix/Linux的源码压缩包。
*   下载及解压压缩包。
*   如果你需要自定义一些选项修改_Modules/Setup_
*   **执行**./configure 脚本
*   make
*   make install

执行以上操作后，Python会安装在 /usr/local/bin 目录中，Python库安装在/usr/local/lib/pythonXX，XX为你使用的Python的版本号。

#### Window 平台安装 Python:

以下为在 Window 平台上安装 Python 的简单步骤：

*   打开WEB浏览器访问[http://www.python.org/download/](https://www.python.org/download/)
*   在下载列表中选择Window平台安装包，包格式为：_python-XYZ.msi_文件 ， XYZ 为你要安装的版本号。
*   要使用安装程序_python-XYZ.msi_, Windows系统必须支持Microsoft Installer 2.0搭配使用。只要保存安装文件到本地计算机，然后运行它，看看你的机器支持MSI。Windows XP和更高版本已经有MSI，很多老机器也可以安装MSI。
*   下载后，双击下载包，进入Python安装向导，安装非常简单，你只需要使用默认的设置一直点击"下一步"直到安装完成即可。