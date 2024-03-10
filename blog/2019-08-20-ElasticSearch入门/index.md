---
title: ElasticSearch 入门
tags: [Elastic, Python]
authors: cttmayi
---

## ElasticSearch
ElasticSearch 是分布式数据库，允许多台服务器协同工作，每台服务器可以运行多个实例。单个实例称为一个节点（node），一组节点构成一个集群（cluster）。分片是底层的工作单元，文档保存在分片内，分片又被分配到集群内的各个节点里，每个分片仅保存全部数据的一部分。

### 基本概念

#### 索引(index)
它类似于数据库中db的概念。

#### 文档类型(document type)
它类似于数据库中table的概念, 不过它不需要在提前建立, 在存入数据的时候指定即可.

#### 文档(document)
它类似于数据中一个table里面的一行数据

### 代码范例(Python)

```
from elasticsearch import Elasticsearch

HITS = "hits"
SOURCE = "_source"
ID = "_id"
DOC_TYPE = "type"

class DbElasticsearch():
    es = Elasticsearch()

    def __init__(self):
        super().__init__()
```

#### 创建索引

```
    def create(self, table_name):
        if not self.es.indices.exists(index=table_name):
            self.es.indices.create(index=table_name)
```

#### 插入数据
```
    def insert(self, table_name, id, db_body):
        self.es.index(index=table_name, doc_type=DOC_TYPE, id=id, body=db_body)
```

#### 查询数据
```
    def query(self, table_name, cond=None):
        if cond is None:
            query_body = {
                "query" : {"match_all" : {}}
            }
        else:
            query_body = {
                "query" : {"match" : cond}
            }
        content_list = []
        res_list = self.es.search(index=table_name, doc_type=DOC_TYPE, body=query_body)[HITS][HITS]
        for res in res_list:
            content = res[SOURCE]
            content_list.append(content)
        return content_list
```

#### 删除数据
```
    def delete(self, table_name, id):
        self.es.delete(index=table_name, doc_type=DOC_TYPE, id=id)
```

#### 更新数据

```
    def update(self, table_name, id, db_body):
        update_body = {
            'doc': db_body
        }
        self.es.update(index=table_name, doc_type=DOC_TYPE, id=id, body=update_body)
```

#### 测试代码

```
DB_CONTENT_TEST = {
    'itemid' : 'ID',
    'productid' : 'PD',
    'listprice' : '1.0',
    'unitcost' : '0.5',
}

DB_CONTENT_UPDATE = {
    'itemid' : 'ID',
    'productid' : 'PD',
    'listprice' : '2.0',
}

def test():
    db = DbElasticsearch()
    db.create('test')

    id = db.insert('test', DB_CONTENT_TEST)
    print(db.query('test', {'itemid' : 'ID'}))

    db.update('test', id, DB_CONTENT_UPDATE)
    print(db.query('test', {'itemid' : 'ID'}))
```