---
title: Python小技巧 - 进度条(tqdm)
tags: [Python]
authors: cttmayi
---

Python库**tqdm**是用来显示进度条的, 而且基本不影响原程序效率. 在长时间操作的时候使用, 非常酷.

```
from tqdm import tqdm
import time

for i in tqdm(range(100)):
    sleep(1)
```

![æ¥çæºå¾å](https://camo.githubusercontent.com/48838faaa8d00ea297f18e5bf55d3c6bb4e0ba6b/68747470733a2f2f692e696d6775722e636f6d2f686539417735432e676966)