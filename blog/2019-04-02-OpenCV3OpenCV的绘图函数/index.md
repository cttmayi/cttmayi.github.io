---
title: OpenCV3 - OpenCV的绘图函数
tags: [OpenCV, 翻译]
authors: cttmayi
---

### 代码

**[cv.line()](https://docs.opencv.org/3.4.0/d6/d6e/group__imgproc__draw.html##ga7078a9fae8c7e7d13d24dac2520ae4a2)**, **[cv.circle()](https://docs.opencv.org/3.4.0/d6/d6e/group__imgproc__draw.html##gaf10604b069374903dbd0f0488cb43670)** , **[cv.rectangle()](https://docs.opencv.org/3.4.0/d6/d6e/group__imgproc__draw.html##ga07d2f74cadcf8e305e810ce8eed13bc9)**, **[cv.ellipse()](https://docs.opencv.org/3.4.0/d6/d6e/group__imgproc__draw.html##ga28b2267d35786f5f890ca167236cbc69)**, **[cv.putText()](https://docs.opencv.org/3.4.0/d6/d6e/group__imgproc__draw.html##ga5126f47f883d730f633d74f07456c576)**

如上所有的函数, 都使用如下相似的参数

-   img: 你想绘制图形的图片
-   color: 图形的颜色, 如果是RGB, 使用tuple, 例如蓝色(255,0,0), 如果是灰度, 直接使用灰度值
-   thickness: 线条的粗细
-   lineType: 线条的类型(8连接线, 锯齿线, ... ), 默认是8连接线, [cv.LINE_AA](https://docs.opencv.org/3.4.0/d0/de1/group__core.html##ggaf076ef45de481ac96e0ab3dc2c29a777a85fdabe5335c9e6656563dfd7c94fb4f)是锯齿线条

### 绘制直线

```python
import numpy as np
import cv2 as cv
# Create a black image
img = np.zeros((512,512,3), np.uint8)
# Draw a diagonal blue line with thickness of 5 px
cv.line(img,(0,0),(511,511),(255,0,0),5)

```

### 绘制方形

```python
cv.rectangle(img,(384,0),(510,128),(0,255,0),3)

```

### 绘制圆形

```python
cv.circle(img,(447,63), 63, (0,0,255), -1)

```

### 绘制椭圆

```python
cv.ellipse(img,(256,256),(100,50),0,0,180,255,-1)

```

### 绘制多边形

```python
pts = np.array([[10,5],[20,30],[70,20],[50,10]], np.int32)
pts = pts.reshape((-1,1,2))
cv.polylines(img,[pts],True,(0,255,255))

```

### 添加文字

```python
font = cv.FONT_HERSHEY_SIMPLEX
cv.putText(img,'OpenCV',(10,500), font, 4,(255,255,255),2,cv.LINE_AA)

```

### 参考文件

[Drawing Functions in OpenCV](https://docs.opencv.org/3.4.0/dc/da5/tutorial_py_drawing_functions.html)
