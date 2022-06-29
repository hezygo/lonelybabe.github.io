---
title: 常用的Linux命令及其说明
categories:
 - shell
tags:
 - linux
date: '2022-06-29'
author: konglingbiny
---

> 引用自   https://www.cnblogs.com/klb561/p/9157569.html

#### linux 查看系统信息命令

```
uname -a   查看内核/操作系统/CPU信息 
head -n 1 /etc/issue   查看操作系统版本 
cat /proc/cpuinfo   查看CPU信息 
hostname   查看计算机名 
lspci -tv   列出所有PCI设备 
lsusb -tv   列出所有USB设备 
lsmod   列出加载的内核模块 
env   查看环境变量资源 
free -m   查看内存使用量和交换区使用量 
df -h   查看各分区使用情况 
du -sh <目录名>   查看指定目录的大小 
grep MemTotal /proc/meminfo   查看内存总量 
grep MemFree /proc/meminfo   查看空闲内存量 
uptime   查看系统运行时间、用户数、负载 
cat /proc/loadavg   查看系统负载磁盘和分区 
mount | column -t   查看挂接的分区状态 
fdisk -l   查看所有分区 
swapon -s   查看所有交换分区 
hdparm -i /dev/hda   查看磁盘参数(仅适用于IDE设备) 
dmesg | grep IDE   查看启动时IDE设备检测状况网络 
ifconfig   查看所有网络接口的属性 
iptables -L   查看防火墙设置 
route -n   查看路由表 
netstat -lntp   查看所有监听端口 
netstat -antp   查看所有已经建立的连接 
netstat -s   查看网络统计信息进程 
ps -ef   查看所有进程 
top   实时显示进程状态用户 
w   查看活动用户 
id <用户名>   查看指定用户信息 
last   查看用户登录日志 
cut -d: -f1 /etc/passwd   查看系统所有用户 
cut -d: -f1 /etc/group   查看系统所有组 
crontab -l   查看当前用户的计划任务服务 
chkconfig –list   列出所有系统服务 
chkconfig –list | grep on   列出所有启动的系统服务程序 
rpm -qa   查看所有安装的软件包
```


#### 查看linux系统版本信息（Oracle Linux、Centos Linux、Redhat Linux、Debian、Ubuntu）

查看Linux系统版本的命令（3种方法）
1、`cat /etc/issue`，此命令也适用于所有的Linux发行版。
[root@S-CentOS home]  cat /etc/issue
CentOS release 6.5 (Final)
Kernel \r on an \m

2、`cat /etc/redhat-release`，这种方法只适合Redhat系的Linux：
[root@S-CentOS home]  cat /etc/redhat-release
CentOS release 6.5 (Final)

3、`lsb_release -a`，即可列出所有版本信息：
[root@S-CentOS ~]  lsb_release -a
LSB Version: :base-4.0-amd64:base-4.0-noarch:core-4.0-amd64:core-4.0-noarch:graphics-4.0-amd64:graphics-4.0-noarch:printing-4.0-amd64:printing-4.0-noarch
Distributor ID: CentOS

查看Linux内核版本命令（两种方法）：
`cat /proc/version`
`uname -a`

linux CPU大小
`cat /proc/cpuinfo |grep "model name" && cat /proc/cpuinfo |grep "physical id"`
![](https://images2015.cnblogs.com/blog/945786/201607/945786-20160714191834014-964804946.png)
说明：Linux下可以在/proc/cpuinfo中看到每个cpu的详细信息。但是对于双核的cpu，在cpuinfo中会看到两个cpu。常常会让人误以为是两个单核的cpu。
其实应该通过Physical Processor ID来区分单核和双核。而Physical Processor ID可以从cpuinfo或者dmesg中找到. flags 如果有 ht 说明支持超线程技术 判断物理CPU的个数可以查看physical id 的值，相同则为

内存大小
`cat /proc/meminfo |grep MemTotal`

![](https://images2015.cnblogs.com/blog/945786/201607/945786-20160714192242342-87677541.png)

硬盘大小
`fdisk -l |grep Disk`

![](https://images2015.cnblogs.com/blog/945786/201607/945786-20160714192353357-889932853.png)

`uname -a`   查看内核/操作系统/CPU信息的linux系统信息命令

![](https://images2015.cnblogs.com/blog/945786/201607/945786-20160714194041920-2079682098.png)

`head -n 1 /etc/issue`   查看操作系统版本，是数字1不是字母L

![](https://images2015.cnblogs.com/blog/945786/201607/945786-20160714194609576-1832936070.png)

`cat /proc/cpuinfo`   查看CPU信息的linux系统信息命令

![](https://images2015.cnblogs.com/blog/945786/201607/945786-20160714194658889-256302652.png)![](https://images2015.cnblogs.com/blog/945786/201607/945786-20160714194733186-1852291147.png)

`hostname`   查看计算机名的linux系统信息命令

![](https://images2015.cnblogs.com/blog/945786/201607/945786-20160714194813779-2080167308.png)

`lspci -tv`   列出所有PCI设备

![](C:\Users\CM\AppData\Roaming\Typora\typora-user-images\image-20220629102009413.png)

`lsusb -tv`   列出所有USB设备的linux系统信息命令

![](https://images2015.cnblogs.com/blog/945786/201607/945786-20160714195010311-1391346792.png)

`lsmod`   列出加载的内核模块

`env`   查看环境变量资源

---
`free -m`   查看内存使用量和交换区使用量

​                         total       used       free     shared    buffers     cached
Mem:                     3706       3534        171          0         31       3258
-/+ buffers/cache:                                                    244       3461
Swap:                                                     3711          0       3711

---
[root@localhost /]  `df -h`           # 查看各分区使用情况
文件系统                                                         容量          已用        可用     已用%%   挂载点
/dev/mapper/VolGroup-lv_root                                    50G           6.4G        41G       14%      /
tmpfs                                                           1.9G          72K         1.9G       1%      /dev/shm
/dev/sda1                                                       485M          38M         422M      9%       /boot
/dev/mapper/VolGroup-lv_home                                    406G          2.8G        382G      1%       /home

---
防火墙会限制端口只能用虚拟机图形操作：

`firewall-cmd --state`查看火墙状态

`firewall-cmd --get-active-zones`列出当前被系统使用的域

`firewall-cmd --get-default-zone`查看火墙默认生效的域

`firewall-cmd --get-zones`查看默认的规则

`firewall-cmd --list-all-zones`查看所有的域

`firewall-cmd --zone=public --list-all`查看public域里面的信息

`firewall-cmd --get-services`列出系统中用名称表示的服务

`firewall-cmd --set-default-zone=dmz` 设定默认使用的域

[root@client Desktop]  `yum install firewalld firewalld-config` 安装

![](http://www.2cto.com/uploadfile/Collfiles/20180606/20180606090004876.png)


[root@client Desktop]  `firewall-config` 会直接打开界面

[root@client Desktop]  `systemctl stop iptables` 关闭iptables

[root@client Desktop]  `systemctl disable iptables` 开机自动关闭

[root@client Desktop]  `systemctl start firewalld` 打开防火墙

[root@client Desktop]  `systemctl enable firewalld` 开机自动开启

[root@client Desktop]  `yum search iptables` 寻找iptables安装包

[root@client Desktop]  `yum install iptables-services.x86_64` 安装

`firewall-cmd --state` 查看火墙状态

running

[root@client Desktop]  `firewall-cmd --get-active-zones` 列出当前被系统使用的域

ROL

sources: 172.25.0.252/32

public

interfaces: eth0

[root@client Desktop]  `firewall-cmd --get-default-zone` 查看火墙默认生效的域

public

[root@client Desktop] `firewall-cmd --get-zones` 查看默认的规则

ROL block dmz drop external home internal public trusted work

```
du -sh   查看指定目录的大小
grep MemTotal /proc/meminfo   查看内存总量
grep MemFree /proc/meminfo   查看空闲内存量
uptime   查看系统运行时间、用户数、负载
cat /proc/loadavg   查看系统负载磁盘和分区
mount | column -t   查看挂接的分区状态
fdisk -l   查看所有分区
swapon -s   查看所有交换分区
hdparm -i /dev/hda   查看磁盘参数(仅适用于IDE设备)
dmesg | grep IDE   查看启动时IDE设备检测状况网络
ifconfig   查看所有网络接口的属性
iptables -L   查看防火墙设置
route -n   查看路由表
netstat -lntp   查看所有监听端口
netstat -antp   查看所有已经建立的连接
netstat -s   查看网络统计信息进程
ps -ef   查看所有进程
top   实时显示进程状态用户
w   查看活动用户
id   查看指定用户信息
last   查看用户登录日志
cut -d: -f1 /etc/passwd   查看系统所有用户
cut -d: -f1 /etc/group   查看系统所有组
crontab -l   查看当前用户的计划任务服务
chkconfig –list   列出所有系统服务
chkconfig –list | grep on   列出所有启动的系统服务程序
rpm -qa   查看所有安装的软件包
cat /proc/cpuinfo ：查看CPU相关参数的linux系统命令
cat /proc/partitions ：查看linux硬盘和分区信息的系统信息命令
cat /proc/meminfo ：查看linux系统内存信息的linux系统命令
cat /proc/version ：查看版本，类似uname -r
cat /proc/ioports ：查看设备io端口
cat /proc/interrupts ：查看中断
cat /proc/pci ：查看pci设备的信息
cat /proc/swaps ：查看所有swap分区的信息
```

---

系统	      发行版本 -内核版本、位数
```
RedHat	cat /etc/issue	cat /etc/redhat-release	lsb_release -a
CentOS	cat /etc/issue	cat /etc/centos-release	cat /proc/version
Debian	cat /etc/issue	cat /etc/debian_version	cat /proc/version
Ubuntu	cat /etc/issue	cat /etc/lsb_release	cat /proc/version
Oracle	cat /etc/issue	cat /etc/oracle-release	lsb_release -a
```

---
RedHat

查看系统发行版本
[root@getlnx05 ~]  `cat /etc/issue`
Red Hat Enterprise Linux Server release 5.7 (Tikanga)
Kernel \r on an \m
通过cat /etc/redhat-release也查到看到相关的信息。

查看系统内核版本、位数
[root@getlnx05 ~] ` lsb_release -a`
LSB Version:    :core-4.0-amd64:core-4.0-ia32:core-4.0-noarch:graphics-4.0-amd64:graphics-4.0-ia32:graphics-4.0-noarch:printing-4.0-amd64:printing-4.0-ia32:printing-4.0-noarch
Distributor ID: RedHatEnterpriseServer
Description:    Red Hat Enterprise Linux Server release 5.7 (Tikanga)
Release:        5.7
Codename:      Tikanga
LSB Version项显示的是系统的内核版本，其中amd64表示系统是64位的。

---
CentOS

查看系统发行版本 cat /etc/issue
[chenyurong@localhost local]$ `cat /etc/issue`
CentOS release 6.5 (Final)
Kernel \r on an \m
通过`cat /etc/centos-release`也可以查询到一样的信息。

查看系统内核版本、位数 more /proc/version
[chenyurong@localhost local]$` cat /proc/version`
Linux version 2.6.32-431.el6.x86_64 (mockbuild@c6b8.bsys.dev.centos.org) (gcc version 4.4.7 20120313 (Red Hat 4.4.7-4) (GCC) )  1 SMP Fri Nov 22 03:15:09 UTC 2013
Linux version 2.6.32-431.el6.x86_64显示了Linux的版本，x86_64显示了是64位的系统。通过uname -r也可以查到相关信息。

---
Oracle Linux

查看系统发行版本
[root@DB-Server ~] ` cat /etc/issue`
Oracle Linux Server release 5.7
Kernel \r on an \m
通过cat /etc/oracle-release也可以查询到相关信息。

查看系统内核版本、位数
[root@DB-Server ~]`  lsb_release -a`
LSB Version:    :core-4.0-amd64:core-4.0-ia32:core-4.0-noarch:graphics-4.0-amd64:graphics-4.0-ia32:graphics-4.0-noarch:printing-4.0-amd64:printing-4.0-ia32:printing-4.0-noarch
Distributor ID: EnterpriseEnterpriseServer
Description:    Enterprise Linux Enterprise Linux Server release 5.7 (Carthage)
Release:        5.7
Codename:      Carthage
LSB Version显示的是系统的内核版本，其中amd64表示系统是64位的。

---



#### 所有命令适用范围总结


查看系统发行版本
命令	                                   适用范围
```lsb_release -a	                   所有Linux发行版
cat /etc/redhat-release	     RedHat系Linux
cat /etc/issue	                   所有Linux发行版
```

查看系统内核位数
命令	                                 适用范围
```
uname -a、uname -r	  所有Linux发行版
cat /proc/version	         所有Linux发行版
```