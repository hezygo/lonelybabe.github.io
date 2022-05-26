---
title: 常用命令记录
categories:
 - shell
tags:
 - linux
author: LittleBoy 
date: '2022-05-26'
---

###### Windows 

``````powershell
del filename.exe
rmdir dirname
``````



##### Linux

````bash
npm install anywhere -g
/home/xxxx/vue_install/node-v10.15.0-linux-x64/bin/anywhere -> /home/xxxx/vue_install/node-v10.15.0-linux-x64/lib/node_modules/anywhere/bin/anywhere
anywhere -p 8002

tar -zcvf ./stacs-customize-0.1.1.tar.gz /stacs
````





##### ***使用allure2生成pytest的测试报告***

- ***下载allure***

  > github上下载最新版本https://github.com/allure-framework/allure2/releases

- ***安装allure***

  > 解压allure.tgz文件 
  >
  > 然后 ln -s home/xxxx/allure /usr/bin/allure 

- ***安装allure-pytest***

  > pip install allure-pytest

- ***使用allure***

  > pytest -s -q --alluredir ./report test_module.py
  >
  > allure generate report/ -o report/html
  >
  > cd report/html

- ***使用anywhere做服务***

  > node -v  && npm install -g anywhere
  >
  > /home/xxxx/vue_install/node-v10.15.0-linux-x64/bin/anywhere -> /home/xxxx/vue_install/node-v10.15.0-linux-x64/lib/node_modules/anywhere/bin/anywhere
  >
  > anywhere -p 8002



```python
def is_number(s):
    try:  # 如果能运行float(s)语句，返回True（字符串s是浮点数）
        float(s)
        return True
    except ValueError:  # ValueError为Python的一种标准异常，表示"传入无效的参数"
        pass  # 如果引发了ValueError这种异常，不做任何事情（pass：不做任何事情，一般用做占位语句）
    try:
        import unicodedata  # 处理ASCii码的包
        unicodedata.numeric(s)  # 把一个表示数字的字符串转换为浮点数返回的函数
        return True
    except (TypeError, ValueError):
        pass
    return False
```

##### 查看进程
```shell
ps -ef | grep 
lsof -i:8000

```