---
title: SMALI基本格式结构
tags: [Android, smali]
authors: cttmayi
---

无论是普通类、抽象类、接口类或者内部类，在反编译出的代码中，它们都以单独的Smali 文件来存放

基本格式
===
| 格式| 说明 |
| --- | --- |
| .class \<访问权限\> [修饰关键字] \<类名\> | 定义类 |
| .super \<父类名\> | 继承于父类 |
| .source \<源文件名\> | 对应的java文件名 |
| .implements \<接口名\> | 继承于接口类 |
| .field \<访问权限\> [修饰关键字] \<字段名\>:\<字段类型\> | 定义类的成员变量 |
| .method \<访问权限\> [修饰关键字] \<方法原型\> | 定义类的方法 |

方法格式
===
| 格式| 说明 |
| --- | --- |
| .locals \<个数\> | 方法中局部变量个数 |
| .parameter \<变量名\> | 方法的参数名称 |
| .prologue | 指定了代码的开始处 |
| .line \<行号\> | 对应的Java代码行号 |

范例
===
```
.class public final Landroidx/appcompat/widget/AppCompatDrawableManager;
.super Ljava/lang/Object;
.source "AppCompatDrawableManager.java"

# static fields
.field private static final DEBUG:Z = false

# instance fields
.field private mResourceManager:Landroidx/appcompat/widget/ResourceManagerInternal;

# direct methods
.method static constructor <clinit>()V
    .locals 1

    .line 49
    sget-object v0, Landroid/graphics/PorterDuff$Mode;->SRC_IN:Landroid/graphics/PorterDuff$Mode;

    sput-object v0, Landroidx/appcompat/widget/AppCompatDrawableManager;->DEFAULT_MODE:Landroid/graphics/PorterDuff$Mode;

    return-void
.end method
```