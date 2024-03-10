---
title: Python 小技巧 - 遍历文件
tags: [Python]
authors: cttmayi
---

## 方法1
```
def list_all_files(rootdir):
    import os
    _files = []
    list = os.listdir(rootdir)
    for i in range(0,len(list)):
           path = os.path.join(rootdir,list[i])
           if os.path.isdir(path):
              _files.extend(list_all_files(path))
           if os.path.isfile(path):
              _files.append(path)
    return _files
```

## 方法2
```
for parent,dirnames,filenames in os.walk(rootdir): 
 　　　for dirname in  dirnames:
　　　　  print "parent is:" + parent
　　　　  print  "dirname is" + dirname

　　　 for filename in filenames:
　　　　  print "parent is": + parent
　　　　  print "filename is:" + filename
　　     print "the full name of the file is:" + os.path.join(parent,filename) 
```