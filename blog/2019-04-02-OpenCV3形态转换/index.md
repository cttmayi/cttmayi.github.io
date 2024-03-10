---
title: OpenCV3 - 形态转换
tags: [OpenCV, 翻译]
authors: cttmayi
---

**[cv.erode()](https://docs.opencv.org/3.4.0/d4/d86/group__imgproc__filter.html##gaeb1e0c1033e3f6b891a25d0511362aeb)**, **[cv.dilate()](https://docs.opencv.org/3.4.0/d4/d86/group__imgproc__filter.html##ga4ff0f3318642c4f469d0e11f242f3b6c)**, **[cv.morphologyEx()](https://docs.opencv.org/3.4.0/d4/d86/group__imgproc__filter.html##ga67493776e3ad1a3df63883829375201f)**

## 理论

形态转换是一些基于图形的简单操作. 它有两个输入, 第一个是原始图像, 第二个叫做结构元素(structuring element)或者内核(kernel). 两个基本的形态转换是侵蚀和扩张

## 侵蚀(Erosion)

```python
import cv2 as cv
import numpy as np
img = cv.imread('j.png',0)
kernel = np.ones((5,5),np.uint8) # use a 5x5 kernel with full of ones
erosion = cv.erode(img,kernel,iterations = 1)
```

图像![j.png](https://static.oschina.net/uploads/img/201712/31071414_3tHA.png)**侵蚀**后的结果: ![erosion.png](https://static.oschina.net/uploads/img/201712/31071414_8dAn.png)

## 扩张(Dilation)

```python
dilation = cv.dilate(img,kernel,iterations = 1)
```

图像![j.png](https://static.oschina.net/uploads/img/201712/31071414_3tHA.png)**扩张**后的结果: ![dilation.png](https://static.oschina.net/uploads/img/201712/31071414_dZZ0.png)

### 参考文件

[Morphological Transformations](https://docs.opencv.org/3.4.0/d9/d61/tutorial_py_morphological_ops.html)
