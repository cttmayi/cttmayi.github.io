---
title: Python 小技巧 - 重试(retry)
tags: [Python]
authors: cttmayi
---

在某些情况下, 特别是网络访问的时候, 会有访问失败, 跑出异常. 那一般会有如下写法.

```
import time

def do_net():
    pass

for i in range(10):
    try:
        do_net()
        break
    except:
        time.sleep(1)
```

Python库retry可以让你有很简单的写法, 直接定义函数的属性即可
```
from retry import retry

@retry(tries=10, delay=2)
def do_net():
    pass

do_net()
``````