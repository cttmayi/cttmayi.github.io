---
title: OpenCV3 - 我们从Images开始
tags: [OpenCV, 翻译]
authors: cttmayi
---

### 读取图片

使用**[cv.imread(](https://docs.opencv.org/3.4.0/d4/da8/group__imgcodecs.html##ga288b8b3da0892bd651fce07b3bbd3a56)**path, flag**[)](https://docs.opencv.org/3.4.0/d4/da8/group__imgcodecs.html##ga288b8b3da0892bd651fce07b3bbd3a56)**函数读取图片

第一个参数是文件路劲

第二个参数指定读取文件的标志位

-   [cv.IMREAD_COLOR](https://docs.opencv.org/3.4.0/d4/da8/group__imgcodecs.html##gga61d9b0126a3e57d9277ac48327799c80af660544735200cbe942eea09232eb822) : 读取彩色图片, 此为函数默认值
-   [cv.IMREAD_GRAYSCALE](https://docs.opencv.org/3.4.0/d4/da8/group__imgcodecs.html##gga61d9b0126a3e57d9277ac48327799c80ae29981cfc153d3b0cef5c0daeedd2125) : 使用灰度模式读取图片
-   [cv.IMREAD_UNCHANGED](https://docs.opencv.org/3.4.0/d4/da8/group__imgcodecs.html##gga61d9b0126a3e57d9277ac48327799c80aeddd67043ed0df14f9d9a4e66d2b0708) : 读取图片(带alpha通道)

参考代码

```python
import numpy as np
import cv2 as cv
# Load an color image in grayscale
img = cv.imread('messi5.jpg',0)
```

**注意**: 如果路径错误, 会返回None

### 显示图片

使用函数**[cv.imshow(](https://docs.opencv.org/3.4.0/d7/dfc/group__highgui.html##ga453d42fe4cb60e5723281a89973ee563)**name, img**[)](https://docs.opencv.org/3.4.0/d7/dfc/group__highgui.html##ga453d42fe4cb60e5723281a89973ee563)**在窗口中显示图片, 窗口将自动匹配图片大小

第一个参数是窗口名(字符串),

第二个参数是我们的图片对象.

你可以创建很多窗口, 但需要使用不同的窗口名

```python
cv.imshow('image',img)
cv.waitKey(0)
cv.destroyAllWindows()
```

函数**[cv.waitKey(](https://docs.opencv.org/3.4.0/d7/dfc/group__highgui.html##ga5628525ad33f52eab17feebcfba38bd7)**time**[)](https://docs.opencv.org/3.4.0/d7/dfc/group__highgui.html##ga5628525ad33f52eab17feebcfba38bd7)**是键盘输入函数. 参数是一个时间(单位: 毫秒), 函数将接收任意键盘输入(指定的时间内)

函数**[cv.destroyAllWindows(](https://docs.opencv.org/3.4.0/d7/dfc/group__highgui.html##ga6b7fc1c1a8960438156912027b38f481)****[)](https://docs.opencv.org/3.4.0/d7/dfc/group__highgui.html##ga6b7fc1c1a8960438156912027b38f481)**将删除所有创建的窗口

### 保存图片

使用**[cv.imwrite()](https://docs.opencv.org/3.4.0/d4/da8/group__imgcodecs.html##gabbc7ef1aa2edfaa87772f1202d67e0ce)**可以保存图片

第一个参数为文件名

第二个参数是你想保存的Image

```python
cv.imwrite('messigray.png',img)
```

### 合起来

灰度模式读取图片, 显示图片. 如果按's'则保存图片; 如果按ESC则退出.

```python
import numpy as np
import cv2 as cv
img = cv.imread('messi5.jpg',0)
cv.imshow('image',img)
k = cv.waitKey(0)
if k == 27:         # wait for ESC key to exit
    cv.destroyAllWindows()
elif k == ord('s'): # wait for 's' key to save and exit
    cv.imwrite('messigray.png',img)
    cv.destroyAllWindows()
```

**注意**: 如果你使用64-bit机器 你需要修改"k = cv.waitKey(0)" 为 "k = cv.waitKey(0) & 0xFF".

### 参考文件

[Getting Started with Images](https://docs.opencv.org/3.4.0/dc/d2e/tutorial_py_image_display.html)
