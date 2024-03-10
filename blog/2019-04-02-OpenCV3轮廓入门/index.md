---
title: OpenCV3 - 轮廓入门
tags: [OpenCV, 翻译]
authors: cttmayi
---

## 什么是轮廓

轮廓可以简单的被解释为一个曲线(沿边界)的连续点, 有相同的颜色或者深度. 寻找轮廓是一个对于图形分析和对象检测识别非常有用的工具.

- 为更好的精度, 使用灰度图像(Binary Image). 所有在寻找轮廓前, 使用方法 threshold 或者 canny edge detection
- 从OpenCV 3.2开始, [findContours()](https://docs.opencv.org/3.4.0/d3/dc0/group__imgproc__shape.html##ga17ed9f5d79ae97bd4c7cf18403e1689a) 不再修改原图片, 但会返回修改过的图片(它是三个返回值的第一个)
- 在OpenCV中, 寻找轮廓是在黑色背景下寻找白色对象. 所有请记者, 被寻找的对象需要是白色,  背景需要是黑色.

寻找轮廓范例

```python
import numpy as np
import cv2 as cv
im = cv.imread('test.jpg')
imgray = cv.cvtColor(im, cv.COLOR_BGR2GRAY)
ret, thresh = cv.threshold(imgray, 127, 255, 0)
im2, contours, hierarchy = cv.findContours(thresh, cv.RETR_TREE, cv.CHAIN_APPROX_SIMPLE)
```

[cv.findContours()](https://docs.opencv.org/3.4.0/d3/dc0/group__imgproc__shape.html##ga17ed9f5d79ae97bd4c7cf18403e1689a) 有三个参数

- 第一个参数是原始图像
- 第二个参数是轮廓的检索模式
    - RETR_EXTERNAL表示只检测外轮廓
        
    - RETR_LIST检测的轮廓不建立等级关系
        
    - RETR_CCOMP建立两个等级的轮廓, 上面的一层为外边界, 里面的一层为内孔的边界信息。如果内孔内还有一个连通物体, 这个物体的边界也在顶层.
        
    - RETR_TREE建立一个等级树结构的轮廓.
        
- 第三个参数是轮廓逼近方法
    - CHAIN\_APPROX\_NONE存储所有的轮廓点，相邻的两个点的像素位置差不超过1，即max（abs（x1-x2），abs（y2-y1））==1
    - CHAIN\_APPROX\_SIMPLE压缩水平方向，垂直方向，对角线方向的元素，只保留该方向的终点坐标，例如一个矩形轮廓只需4个点来保存轮廓信息
    - CHAIN\_APPROX\_TC89\_L1，CV\_CHAIN\_APPROX\_TC89_KCOS使用teh-Chinl chain 近似算法

返回值: 第一个是被修改后的图像, 第二个是轮廓(contours), 第三个是层次(hierarchy). contours 是一个包含所有轮廓的数组. 每个单独的轮廓是一个 Numpy 数组 (x, y) 坐标的边界点的对象.

## 如何绘制轮廓

绘制轮廓, 使用[cv.drawContours](https://docs.opencv.org/3.4.0/d6/d6e/group__imgproc__draw.html##ga746c0625f1781f1ffc9056259103edbc)函数.

```python
# To draw all the contours in an image
cv.drawContours(img, contours, -1, (0,255,0), 3)

# To draw an individual contour, say 4th contour
cv.drawContours(img, contours, 3, (0,255,0), 3)

# But most of the time, below method will be useful
cnt = contours[4]
cv.drawContours(img, [cnt], 0, (0,255,0), 3)
```

## 参考文件

[Contours : Getting Started](https://docs.opencv.org/3.4.0/d4/d73/tutorial_py_contours_begin.html)
