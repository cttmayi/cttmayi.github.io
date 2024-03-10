---
title: Tornado常用技巧分享
tags: [Tornado, Web]
authors: cttmayi
---

最近开发了一下tornado的代码, 和django对比, 发现它简洁, 没有帮开发者做大量的事情, 反而认为逻辑更清晰, 更让我容易上手. 下面是开发过程中, 遇到了一些状况以及解决办法.

## 开始入门
一个入门的简单范例, 从他开始
```
import tornado
from tornado.options import define, options
define("port", default=8000, help="run on the given port", type=int)

class IndexHandler(tornado.web.RequestHandler):
    def get(self):
        greeting = self.get_argument('greeting', 'Hello')
        self.write(greeting + ', friendly user!')

if __name__ == "__main__":
    tornado.options.parse_command_line()
    app = tornado.web.Application(handlers=[(r"/", IndexHandler)])
    http_server = tornado.httpserver.HTTPServer(app)
    http_server.listen(options.port)
    tornado.ioloop.IOLoop.instance().start()
```

## 静态资源
添加static_path后, 即可在当前目录添加static目录, 放入静态资源, 比如(将bootstrap放入static中).
```
import tornado
app = tornado.web.Application(
    handlers=[
        (r"/", IndexHandler),
    ],
    static_path=os.path.join(os.path.dirname(__file__), "static"),
)
```
HTML引用方式如下,
```
<head>
    <link  rel="stylesheet"  type="text/css"  href="/static/bootstrap/css/bootstrap.min.css">
    <script type="text/javascript"  src="/static/bootstrap/js/bootstrap.min.js"></script>
</head>
```

## 模板(template)
通过template_path参数定义模板的位置
```
import tornado
app = tornado.web.Application(
    handlers=[
        (r"/", IndexHandler),
    ],
    template_path=os.path.join(os.path.dirname(__file__), "templates"),
)
```
利用render函数进行渲染.
```
class ArticleHandler(tornado.web.RequestHandler):
    def get(self, id):
        ret = db.get('article', id)
        title = ret['title']
        content = ret['content']
        self.render('article.html', title=title, content=content)
```
参数的作用是替换模板中的变量, 有2种情况
1. \{\{ ... \}\}: 有字符转义功能
2. \{% raw ... %\}: 没有字符转义功能. 例如我们需要直接放入html标签的时候, 就需要它
 
```
    <body>
        <h1>{{ title }}</h1>
        <div class="col-sm-2">
        </div>
        <div class="col-sm-8">
            <div class="col-xs-6 col-sm-2">
            </div>
            <div class="col-xs-6 col-sm-10">
                {% raw content %}
            </div>
        </div>
    </body>
```

## Debug相关
### debug=True
加入debug=True, 主要看到2个功能, 
1. 输出错误到网页, 方便查看错误信息
2. auto reload 功能打开, 在你修改Debug
```
import tornado

app = tornado.web.Application(
    handlers=[
        (r"/", IndexHandler),
    ],
    debug=True
)
```

### log_file_prefix
设定默认参数(需要在parse_command_line之前), 或者直接在命令行输入参数.
```
    tornado.options.define("log_file_prefix", default="/tmp/tornado.log")
    tornado.options.parse_command_line()
```

另外, 如下这篇中文文档不错, 基本可解决入门问题. 
[http://demo.pythoner.com/itt2zh/index.html](http://demo.pythoner.com/itt2zh/index.html)