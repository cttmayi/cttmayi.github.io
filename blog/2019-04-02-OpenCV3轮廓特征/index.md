---
title: OpenCV3 - 轮廓特征
tags: [OpenCV, 翻译]
authors: cttmayi
---

## 矩(Moments)

图像矩可以帮助你计算一些特征, 例如对象的质心, 对象的面积等等. 具体可参考[Image Moments](http://en.wikipedia.org/wiki/Image_moment)

函数**[cv.moments()](https://docs.opencv.org/3.4.0/d3/dc0/group__imgproc__shape.html##ga556a180f43cab22649c23ada36a8a139)** 返回一个所有矩值的字典

```python
import numpy as np
import cv2 as cv
img = cv.imread('star.jpg',0)
ret,thresh = cv.threshold(img,127,255,0)
im2,contours,hierarchy = cv.findContours(thresh, 1, 2)
cnt = contours[0]
M = cv.moments(cnt)
print( M )
```

通过这些矩值, 你可以计算出有用的数据, 例如面积, 质心等等. 质心可以通过关系(Cx=M10/M00 and Cy=M01/M00)来获得.  通过如下计算获得

```python
cx = int(M['m10']/M['m00'])
cy = int(M['m01']/M['m00'])
```

## 轮廓面积

轮廓面积可以通过函数**[cv.contourArea()](https://docs.opencv.org/3.4.0/d3/dc0/group__imgproc__shape.html##ga2c759ed9f497d4a618048a2f56dc97f1)**获得, 或者通过M\['m00'\]

```python
area = cv.contourArea(cnt)
```

## 轮廓周长

轮廓周长可以使用**[cv.arcLength()](https://docs.opencv.org/3.4.0/d3/dc0/group__imgproc__shape.html##ga8d26483c636be6b35c3ec6335798a47c)** 获得. 第二个参数指定图形是否闭环(如果是则为True), 否则只是一条曲线.

```python
perimeter = cv.arcLength(cnt,True)
```

## 轮廓逼近

它逼近一个轮廓形状到另一个顶点数目较少的形状, 这取决于我们指定的精度. 它是[Douglas-Peucker algorithm](http://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm)算法的一种实现.

函数[cv.approxPolyDP](https://docs.opencv.org/3.4.0/d3/dc0/group__imgproc__shape.html##ga0012a5fdaea70b8a9970165d98722b4c) 

第一个参数是轮廓

第二个参数称为ε, 它是从轮廓到近似轮廓的最大距离. 这是一个准确的参数。为了得到正确的输出, 需要明智地选择ε。

```python
epsilon = 0.1*cv.arcLength(cnt,True)
approx = cv.approxPolyDP(cnt,epsilon,True)
```

如下的第二张图是ε设定为10%的结果, 第三张图是ε设定为1%的结果.

![approx.jpg](https://static.oschina.net/uploads/img/201712/31072834_aPAe.jpg)

## 边框

### 直边界矩形

```python
x,y,w,h = cv.boundingRect(cnt)
cv.rectangle(img,(x,y),(x+w,y+h),(0,255,0),2)
```

### 旋转矩形

```python
rect = cv.minAreaRect(cnt)
box = cv.boxPoints(rect)
box = np.int0(box)
cv.drawContours(img,[box],0,(0,0,255),2)
```

绿框是直边界矩形, 红框是旋转矩形

![boundingrect.png](https://static.oschina.net/uploads/img/201712/31072836_Hewu.png)

## 参考文件

[Contour Features](https://docs.opencv.org/3.4.0/dd/d49/tutorial_py_contour_features.html)
