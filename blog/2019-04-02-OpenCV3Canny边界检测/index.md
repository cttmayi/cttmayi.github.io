---
title: OpenCV3 - Canny 边界检测
tags: [OpenCV, 翻译]
authors: cttmayi
---

**[cv.Canny()](https://docs.opencv.org/3.4.0/dd/d1a/group__imgproc__feature.html##ga04723e007ed888ddf11d9ba04e2232de)**

### 理论

Canny Edge Detection 是一个流行的边界检测算法. 它是一个多步骤的算法

1.  降噪
2.  寻找图像的灰度梯度
    1.  ![](https://static.oschina.net/uploads/space/2017/1231/053759_F7Jk_1169303.png)
3.  非最大值抑制
4.  迟滞阈值

### Canny Edge Detection in OpenCV

OpenCV把如上所有步骤集成到同一个函数(**[cv.Canny()](https://docs.opencv.org/3.4.0/dd/d1a/group__imgproc__feature.html##ga04723e007ed888ddf11d9ba04e2232de)**)中.

-   第一个参数是我们输入的图片
-   第二和第三个参数分别是最小值和最大值
-   第四个参数是孔径尺寸, 它被用于寻找图像梯度, 是Sobel kernel的尺寸, 默认值是3.
-   最后一个参数是L2gradient(指定查找渐变幅度的公式), 如果为True, 它使用如上更精密的公式, 否则使用Edge_Gradient(G)=|Gx|+|Gy|, 默认值为False

```python
import numpy as np
import cv2 as cv
from matplotlib import pyplot as plt
img = cv.imread('messi5.jpg',0)
edges = cv.Canny(img,100,200)
plt.subplot(121),plt.imshow(img,cmap = 'gray')
plt.title('Original Image'), plt.xticks([]), plt.yticks([])
plt.subplot(122),plt.imshow(edges,cmap = 'gray')
plt.title('Edge Image'), plt.xticks([]), plt.yticks([])
plt.show()
```

运行结果:

![canny1.jpg](https://static.oschina.net/uploads/img/201712/31054027_wy0k.jpg)

### 参考文件

[Canny Edge Detection](https://docs.opencv.org/3.4.0/da/d22/tutorial_py_canny.html)
