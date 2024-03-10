---
title: smali2java -  正则表达式化
tags: [smali2java, 正则表达式, 项目]
authors: cttmayi
---

经过进一步的改进, 确实正则表达式的表达方式比用string.split优美很多.
主要通过match + groups的组合可轻松完成匹配
具体代码参考: [https://github.com/cttmayi/smaii2java/blob/master/re_gra.py](https://github.com/cttmayi/smaii2java/blob/master/re_gra.py)
```
class ReGra:
    NUM = '(\d+)'
    NUM_16 = '([\dx]+)'
    ATTS = '((\w+ +)*) *'
    CLS = '(L[a-zA-Z/]+;)'
    VAR = '(\w+)'
    VT = '([\w/;]+)'
    FUN = '(\w+)'
    PARAMS = '([\[a-zA-Z/;]*)'
    FT = '([\w/;]+)'
    REG = '(\w\d)'

    GS = [
        # .line 84
        ['.line', ['\.line +', NUM], ['NUM']],
        # .class public Landroidx/activity/ComponentActivity;
        ['.class', ['\.class +', ATTS, CLS], ['ATTS', None, 'CLS']],
        # .super Landroid/text/TextWatcher;
        ['.super', ['\.super +', CLS], ['CLS']],
        # .implements Landroid/text/TextWatcher;
        ['.implements', ['\.implements +', CLS], ['CLS']],
        # .field private static final COLUMN_INDEX_FIRST:I = 0x0
        ['.field', ['\.field +', ATTS, VAR, ':', VT, '( += +', NUM_16, ')*'], ['ATTS', None, 'VAR', 'VT', None, 'VAL']],
        # .end field
        ['.end field', None, None],
        # .method public static main([Ljava/lang/String;)V
        ['.method', ['\.method +', ATTS, FUN, '\(', PARAMS, '\)', FT], ['ATTS', None, 'FUN', 'PARAMS', 'FT']],
        # .end method
        ['.end method', None, None],
        # .param p0, "feedbackType"    # I   @baksmali
        ['.param', ['\.param +', REG, '(, +"', VAR, '")*'], ['REG', None, 'VAR']],
        # .end param
        ['.end param', None, None],

    ]

    def __init__(self):
        for gs in self.GS:
            if gs[1] is not None:
                gs[1] = ''.join(gs[1])
        pass

    @staticmethod
    def to(line):
        ret = {}
        for g in ReGra.GS:
            g_start = g[0]
            g_pattern = g[1]
            g_keys = g[2]
            if line.startswith(g_start):
                ret['CMD'] = g_start
                if g_pattern is not None:
                    mat = re.match(g_pattern, line)
                    if mat:
                        groups = mat.groups()
                        for i in range(len(g_keys)):
                            key = g_keys[i]
                            value = groups[i]
                            if value is not None and key is not None:
                                ret[key] = value.strip()
                return ret

        return None
```