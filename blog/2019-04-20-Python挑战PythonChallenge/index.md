---
title: Python - 挑战(Python Challenge)
tags: [Python]
authors: cttmayi
---

[Python Challenge](http://www.pythonchallenge.com/) , 挑战你的Python编程知识, 看看能过多少关. 同时也加强一下自己的Python编程技巧.

###### 第0关 (0.html)

通过提示, 跳转到"pc/def/1.html".

```python
print 2 ** 38
```

"******" 表示阶乘, 得到"274877906944"

###### 第1关(274877906944.html)

简单加解密方法. ord: 字符转ASCII, chr: ASCII转字符

```python
n = ord('M') - ord('K')

strs = "g fmnc wms bgblr rpylqjyrc gr zw fylb. rfyrq ufyr amknsrcpq ypc dmp. bmgle gr gl zw fylb gq glcddgagclr ylb rfyr'q ufw rfgq rcvr gq qm jmle. sqgle qrpgle.kyicrpylq() gq pcamkkclbcb. lmu ynnjw ml rfc spj."
ans = ""
for i in range(len(strs)):
	s = strs[i]
	if (ord(s) >= ord('a') and ord(s) <= ord('z')):
		s = chr((ord(s) + n - ord('a')) % (ord('z') - ord('a') + 1) + ord('a'))
	ans = ans + s
print ans
```

得到"i hope you didnt translate it by hand. thats what computers are for. doing it in by hand is inefficient and that's why this text is so long. using string.maketrans() is recommended. now apply on the url."

再翻译"map", 得到"ocr"

###### 第2关(ocr.html)

通过查看html源代码, 发现很长的乱码字符串.

猜测里面夹杂了ASCII字符, 于是代码如下, 得到"equality"

```
strs = "..." # 字符串太长, 省略
ans = ""
for i in range(len(strs)):
	s = strs[i]
	if (ord(s) >= ord('a') and ord(s) <= ord('z')):
		ans += s
print ans
```

###### 第3关(pc/def/equality.html)

同上查看html源代码, 发现乱码字符串.

小写字母, 并且左右两边各3个大写字母(只有3个), 代码如下, 得到"linkedlist"

```python
strs = "..." #省略

ans = ""
std = [False, True, True, True, False, True, True, True, False]

for i in range(9, len(strs)):

	f = True
	for j in range(9):
		s = strs[i - j]
		ff = None
		if (ord(s) >= ord('A') and ord(s) <= ord('Z')):
			ff = True
		elif (ord(s) >= ord('a') and ord(s) <= ord('z')):
			ff = False
		if ff != std[j]:
			f = False
	if f == True:
		ans += strs[i - 4]	
print ans
```

###### 第4关([linkedlist.html](http://www.pythonchallenge.com/pc/def/linkedlist.html))

根据提示跳转到"pc/def/linkedlist.php"

查看html源代码, 发现提示"urllib may help. DON'T TRY ALL NOTHINGS, since it will never end. 400 times is more than enough.", 同上发现连接"[pc/def/linkedlist.php?nothing=12345](http://www.pythonchallenge.com/pc/def/linkedlist.php?nothing=12345)"

```python
import urllib

def read(url):
	nothing = None
	f = urllib.urlopen('http://www.pythonchallenge.com/pc/def/linkedlist.php?nothing=' + url)
	line = f.read()
	try:
		nothing = line.split('the next nothing is ')[1] # and the next nothing is 44827
	except:
		print line
	f.close()
	return nothing

nothing = '12345' # 84 -> 16044 , Yes. Divide by two and keep going.
# nothing = str(16044/2) # 163 -> 66831, peak.html
	
for i in range(400):
	nothing = read(nothing)
	if nothing == None:
		break
	else:
		print i, '->', nothing
```

代码入上, 2次执行后, 得到"peak.html"

###### 第5关([peak.html](http://www.pythonchallenge.com/pc/def/peak.html))

阅读html源代码, 发现"[pc/def/banner.p](http://www.pythonchallenge.com/pc/def/banner.p)", 提示"peak hell sounds familiar ?", 怎么也没想到"peak hell" 谐音 "pickle".

```python
import pickle

f = file('banner.p', 'rb')  
p = pickle.load(f) 
print p

for pp in p:
	for ppp in pp:
		for i in range(ppp[1]):
			print ppp[0],
	print
```

解析banner.p后, 并显示为图片, 得到"channel"

###### 第6关 now there are pairs([channel.html](http://www.pythonchallenge.com/pc/def/channel.html))

通过源代码中的提示, 找到[pc/def/zip.html](http://www.pythonchallenge.com/pc/def/zip.html), 但貌似没什么用.

没忍住, 又去网上找答案了, 原来是channel.zip. 太需要想象力了.

解开zip, 发现readme, 提示 hint1: start from 90052; hint2: answer is inside the zip

```python
def read(url):
	nothing = None
	f = open('channel/' + url + '.txt')
	line = f.read()
	try:
		nothing = line.split('Next nothing is ')[1]
	except:
		print line
	f.close()
	return nothing

nothing = '90052' # 907 -> 46145, Collect the comments.
	
for i in range(1000):
	nothing = read(nothing)
	if nothing == None:
		break
	else:
		print i, '->', nothing
```

得到提示"Collect the comments.". 没想出来, 又看答案了, 原来comments是指zip文件中的属性, zip文件中的每个文件都有. 学习[zipfile](https://docs.python.org/2/library/zipfile.html)模块, 代码如下, 得到"hockey", 

```python
import zipfile

def read(zf, url):
	nothing = None
	filename = url + '.txt'

	print zf.getinfo(filename).comment,
	line = zf.read(filename)
	try:
		nothing = line.split('Next nothing is ')[1]
	except:
		#print line
		pass
	return nothing

nothing = '90052'

with zipfile.ZipFile('channel.zip', 'r') as zf:
	for i in range(1000):
		nothing = read(zf, nothing)
		if nothing == None:
			break
		else:
			#print i, '->', nothing
			pass
```

查看hockey.html, 提示"it's in the air. look at the letters.", 什么意思,  又没搞懂,

最后看答案才恍然大悟, 组成"hockey"的字符分别是OXYGEN

###### 第7关([oxygen.html](http://www.pythonchallenge.com/pc/def/oxygen.html))

发现没有特别的提示, 图片有些奇怪. 下载图片(oxygen.png). 学习PIL模块, 分析图片亮度.

```python
import Image

img = Image.open("oxygen.png")

box = (0, 43, 629, 52)
region = img.crop(box)
region=region.convert("YCbCr")

for i in range(0, 600, 7):
	y,cb,cr = region.getpixel((i,5))
	print chr(y),

```

得到"s m a r t  g u y ,  y o u  m a d e  i t .  t h e  n e x t  l e v e l  i s  \[ 1 0 5 ,  1 1 0 ,  1 1 6 ,  1 0 1 ,  1 0 3 ,  1 1 4 ,  1 0 5 ,  1 1 6 ,  1 2 1"

```
print chr(105), chr(110), chr(116), chr(101), chr(103), chr(114), chr(105), chr(116), chr(121)
```

翻译数字得到"i n t e g r i t y"

###### 第8关([integrity.html](http://www.pythonchallenge.com/pc/def/integrity.html))

发现链接"http://www.pythonchallenge.com/pc/return/good.html", 需要账号密码.

看到 shape="poly" coords="...",  学习Matplotlib模块, 绘图出来应该就会有结果. 最后发现没什么作用

还发现一串可能加密的字符串, 

```python
import bz2

un = 'BZh91AY&SYA\xaf\x82\r\x00\x00\x01\x01\x80\x02\xc0\x02\x00 \x00!\x9ah3M\x07<]\xc9\x14\xe1BA\x06\xbe\x084'
pw = 'BZh91AY&SY\x94$|\x0e\x00\x00\x00\x81\x00\x03$ \x00!\x9ah3M\x13<]\xc9\x14\xe1BBP\x91\xf08'

def out(orig):
	dec = bz2.decompress(orig)
	return dec
	
print 'user:', out(un)
print 'password:', out(pw)
```

得到user: huge, password: file, 输入后, 跳转到下一关.

###### 第9关([good.html](http://www.pythonchallenge.com/pc/return/good.html))