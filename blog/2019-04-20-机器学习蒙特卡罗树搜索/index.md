---
title: 机器学习 -  蒙特卡罗树搜索
tags: [AI, 机器学习]
authors: cttmayi
---

### 蒙特卡罗方法

它是对一类有随机算法特性的概括. 是一种使用随机方法的统计.

类似于抽样调查, 虽无法保证最优解, 但也是近似解.

\<[蒙特卡罗方法入门](http://www.ruanyifeng.com/blog/2015/07/monte-carlo-method.html)\>, 这篇文章不错, 通过几个例子让你更加了解此方法的原理.

### 蒙特卡罗树搜索(MCTS)

全称 Monte Carlo Tree Search

使用蒙特卡罗方法对树进行搜索, 是一种人工智能问题中做出最优决策的方法.一般用于组合博弈中的行动规划.

### 上置信算法(UCB)

全称 The Upper Confidence BoundAlgorithm

UCB1算法如下,  

![](https://static.oschina.net/uploads/img/201701/14040853_rJ1C.jpg)

其中 v 是节点估计的值，n 是节点被访问的次数，而 N 则是其父节点已经被访问的总次数。C 是可调整参数。

更多细节可参考 \<[UCB算法](http://blog.csdn.net/yw8355507/article/details/48579635)\> , 文章写得不错

### UCT

全称  Upper Confidence Bounds for Trees

是通过UCB算法进行的树搜索

UCT 可以被描述为 MCTS 的一个特例,  即 UCT = MCTS + UCB, 后面介绍MCTS即指UCT算法.

### Python 代码学习

在GitHub下载 [mittmcts](https://github.com/dbravender/mittmcts).

介绍一下, 使用方法, 

首先定义Game类, 实现特定函数

```python
class Game(object):
    @classmethod
    def initial_state(cls):
        return state # 返回初始状态

    @classmethod
    # 参数: 传入此类名, 当前的状态, 下一步
    # 返回值: 走了step这步后的状态
    def apply_move(cls, state, step):
        return state

    @staticmethod
    # 参数: 传入状态信息
    # 返回值: (是否不随机选择, 所有可能的下一步棋)
    def get_moves(state):
        return False, choices

    @staticmethod
    # 返回值: 此状况下的获胜者, 如果平局, 则返回mittmcts.Draw, 如果没有结局, 则返回None
    def get_winner(state):
        return state.winner

    @staticmethod
    # 返回值: 当前执行者
    def current_player(state):
        return state.current_player
```

然后, 通过MCTS得到计算结果

```python
from mittmcts import MCTS

def main():
    result = (MCTS(Game)
              .get_simulation_result(1000)) # 测试1000次, 得到结果
    move = result.move # 下一步
```