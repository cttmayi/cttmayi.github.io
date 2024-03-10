---
title: Tornado实现Ajax请求
tags: [Tornado]
authors: cttmayi
---

最近在使用Ajax提交POST请求时, 发现无法使用get_argument函数获得对应的参数, 在网络上查询了很久都没有到答案. 花了一番时间, 终于解决.

**JavaScript**
通过JSON.stringify函数将data转换为JSON字符串
```
$("#submit").on('click', function () {
$.ajax({
    method:  "POST",
    url:  "/article_submit_post",
    contentType :  "application/json",
    dataType :  "json",
    data:  JSON.stringify({
        title:  $("#title").val(),
        brief:  $("#brief").val(),
        keywords:  $("#keywords").val(),
        content:  simplemde.value()}),
})
```
**Tornado**
通过json_decode函数对request.body进行解析
```
from tornado.escape import json_decode
class ArticleSubmitPostHandler(tornado.web.RequestHandler):
    def post(self):
        data = json_decode(self.request.body)
        title = data['title']
        brief = data['brief']
        content = data['content']
        keywords = data['keywords']
```