---
title: 算术题产生器
tags: [亲子, 开发]
authors: cttmayi
---

国庆期间, 孩子老师布置70道算术题目, 为一劳永逸, 制作了一个算术题产生器.

## 开发效果图
![image.jpg](https://img.hacpai.com/file/2019/10/image-8bbb12e3.jpg)

## 遗留功能开发
1. 添加混合运算功能
1. 调整算术题目比例

## Python 代码
```python
#-*- coding: utf-8 -*-
import random
import pygame

pygame.init()
surface = pygame.Surface((595, 842))
surface.fill((240,240,240))
font = pygame.font.SysFont('arial',28)

def get_int(min, max):
    return random.randint(min, max)

def get_choice(choice):
    return random.choice(choice)

def get_type(max):
    return random.randint(0, max)

OP_ADD = 0
OP_SUB = 1
OP_MUL = 2
OP_DIV = 3

def op_4(type, args):
    flag = flags[type][0]

    while(True):
        i1 = get_int(args[0],args[1])
        i2 = get_int(args[2],args[3])
        if type == OP_SUB or type == OP_DIV :
            if i1 > i2:
                break
        else:
            break
    s = ' '.join([str(i1), flag, str(i2), '='])
    print(s)
    text = font.render(s, True, (65, 83, 130),(240, 240, 240))
    return text

flags = [
    ['+'],
    ['-'],
    ['\u00D7'],
    ['\u00F7'],
]

conds = [
    [op_4, OP_ADD, (1, 999, 1, 999)], # 加数1的范围1~999, 加数2的范围1~999
    [op_4, OP_SUB, (1, 999, 1, 999)], # 被减数的范围1~999, 减数的范围1~999
    [op_4, OP_MUL, (2, 999, 2, 9)], # 乘数1的范围2~999, 乘数2的范围2~9
    [op_4, OP_DIV, (2, 999, 2, 9)], # 被除数的范围2~999, 除数的范围2~9
]

def main(file):
    count = 0
    while(True):
        id = get_type(len(conds)-1)
        if id == OP_ADD or id == OP_SUB or id == OP_MUL or id == OP_DIV :
            cond = conds[id]
            func = cond[0]
            type = cond[1]
            args = cond[2]
                
            op = func(type, args)
            if op:
                draw(op, count)
                count += 1
        if count == 50:
            break

    pygame.image.save(surface, file)

def draw(text, count):
    surface.blit(text, (40 + (count % 2) * 300, 75 + int(count/2) * 30))

main("image.jpg")
```