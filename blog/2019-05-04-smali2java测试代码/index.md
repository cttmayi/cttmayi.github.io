---
title: smali2java - 测试代码
tags: [smali2java]
authors: cttmayi
---

测试代码在开发过程中非常重要, Python也提供了非常好的框架给大家使用.
特别重要, **开发过程中写测试, 而不是开发完成后写测试, 请初学者务必执行.**
网上教程很多, 这里只写一个基本流程给大家参考.

基本步骤:
1. 导入库,`import unittest
`.
2. 定义类, 继承`unittest.TestCase`.
3. 定义类函数, 需要以`test`开头, 其中利用`assertEqual`等函数确定答案的正确性.
4. 加入`if __name__ == '__main__':
 unittest.main()`
5. 直接咨询python文件即可.

代码路径: [https://github.com/cttmayi/smaii2java/blob/master/test.py](https://github.com/cttmayi/smaii2java/blob/master/test.py)
```
# coding = utf-8
import unittest
import re_gra

class ReGraTest(unittest.TestCase):
    def test_to_dot(self):
        lines = [['.line 84', {'NUM': '84'}]]

        for one_line in lines:
            line_smali = one_line[0]
            expected = one_line[1]
            result = re_gra.to_op(line_smali)
            self.assertIsNotNone(result, line_smali + '(Not Match)')
            if expected is not None:
                result2 = {}
                for a_key in expected.keys():
                    if a_key in result.keys():
                        result2[a_key] = result[a_key]
                    else:
                        result2[a_key] = None
                self.assertEqual(expected, result2, line_smali + '(Error)')

if __name__ == '__main__':
    unittest.main()
```