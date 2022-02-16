---
title: Python中导入模块的处理方法
author: littlepig
date: '2022-02-16'
---

# 关于Python中导入模块的处理方法

## 利用importlib导入 
```python
import importlib

# 用户表的路径
USER_MODEL_DIR = "autoApp.models.UserInfo"

*user_dir, model_name = USER_MODEL_DIR.split(".")
user = importlib.import_module(".".join(user_dir))
```

## 父子目录的问题
```python
import os,sys
father_path=os.path.abspath(os.path.dirname(__file__)+os.path.sep+"..")
sys.path.append(father_path)
# 然后导入需要的模块
```