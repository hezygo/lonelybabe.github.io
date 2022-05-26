---
title: Linux '>>' '>' '2&>1'指令说明
categories:
 - shell
tags:
 - linux
author: LittleBoy 
date: '2022-05-26'
---

### 关于Linux 中的 `>>` 、`>`、 `&`、`2`、`1` 等操作符的说明 

​        经常在Linux环境中，在执行一些脚本，尤其是在定义一些定时任务时，在crontab调用中经常发现如下形式：
```shell
    /tmp/test.sh > /tmp/test.log 2>&1
```
​        前半部分/tmp/test.sh > /tmp/test.log 很容易理解，即就是将test.sh脚本执行的结果，生成到后面的文件中，会覆盖源文件中的内容。
​        还有一种用途是直接输入>a.txt，表示直接生成一个空白文件，相当于touch命令。

1. `>`
 直接把内容生成到指定文件，会覆盖源文件中的内容。

2. `>>`
   尾部追加，不会覆盖掉文件中原有的内容，相当于append。

3. `2>&1`
   
   >基本符号及其含义
   * `/dev/null`：表示空设备文件
   * `0`: 表示stdin标准输入
   * `1`: 表示stdout标准输出
   * `2`: 表示stderr标准错误

​        从`command>/dev/null` 说起：
​        其实这条命令是一个缩写版，对于一个重定向命令，肯定是`a > b`这种形式，那么`command > /dev/null`难道是command充当a的角色，`/dev/null`充当b的角色。这样看起来比较合理，其实一条命令肯定是充当不了a，肯定是command执行产生的输出来充当a，其实就是标准输出stdout。所以`command > /dev/null`相当于执行了`command 1 > /dev/null`。执行command产生了标准输出stdout(用`1`表示)，重定向到`/dev/null`的设备文件中。

​        再说`2>&1`：
​        `&`是把该命令以后台的job的形式运行
​        通过上面`command > /dev/null`等价于`command 1 > /dev/null`,那么对于`2>&1`也就好理解了，`2`就是标准错误，`1`是标准输出，那么这条命令就是相当于把标准错误重定向到标准输出。
​        而`&`是把该命令以后台的job的形式运行，所以这条命令就是相当于把标准错误重定向到标准输出并以后台的形式运行。