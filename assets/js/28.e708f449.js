(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{630:function(e,n,s){"use strict";s.r(n);var a=s(6),t=Object(a.a)({},(function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("blockquote",[s("p",[e._v("引用自   https://www.cnblogs.com/klb561/p/9157569.html")])]),e._v(" "),s("h4",{attrs:{id:"linux-查看系统信息命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux-查看系统信息命令"}},[e._v("#")]),e._v(" linux 查看系统信息命令")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("uname -a   查看内核/操作系统/CPU信息 \nhead -n 1 /etc/issue   查看操作系统版本 \ncat /proc/cpuinfo   查看CPU信息 \nhostname   查看计算机名 \nlspci -tv   列出所有PCI设备 \nlsusb -tv   列出所有USB设备 \nlsmod   列出加载的内核模块 \nenv   查看环境变量资源 \nfree -m   查看内存使用量和交换区使用量 \ndf -h   查看各分区使用情况 \ndu -sh <目录名>   查看指定目录的大小 \ngrep MemTotal /proc/meminfo   查看内存总量 \ngrep MemFree /proc/meminfo   查看空闲内存量 \nuptime   查看系统运行时间、用户数、负载 \ncat /proc/loadavg   查看系统负载磁盘和分区 \nmount | column -t   查看挂接的分区状态 \nfdisk -l   查看所有分区 \nswapon -s   查看所有交换分区 \nhdparm -i /dev/hda   查看磁盘参数(仅适用于IDE设备) \ndmesg | grep IDE   查看启动时IDE设备检测状况网络 \nifconfig   查看所有网络接口的属性 \niptables -L   查看防火墙设置 \nroute -n   查看路由表 \nnetstat -lntp   查看所有监听端口 \nnetstat -antp   查看所有已经建立的连接 \nnetstat -s   查看网络统计信息进程 \nps -ef   查看所有进程 \ntop   实时显示进程状态用户 \nw   查看活动用户 \nid <用户名>   查看指定用户信息 \nlast   查看用户登录日志 \ncut -d: -f1 /etc/passwd   查看系统所有用户 \ncut -d: -f1 /etc/group   查看系统所有组 \ncrontab -l   查看当前用户的计划任务服务 \nchkconfig –list   列出所有系统服务 \nchkconfig –list | grep on   列出所有启动的系统服务程序 \nrpm -qa   查看所有安装的软件包\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br"),s("span",{staticClass:"line-number"},[e._v("29")]),s("br"),s("span",{staticClass:"line-number"},[e._v("30")]),s("br"),s("span",{staticClass:"line-number"},[e._v("31")]),s("br"),s("span",{staticClass:"line-number"},[e._v("32")]),s("br"),s("span",{staticClass:"line-number"},[e._v("33")]),s("br"),s("span",{staticClass:"line-number"},[e._v("34")]),s("br"),s("span",{staticClass:"line-number"},[e._v("35")]),s("br"),s("span",{staticClass:"line-number"},[e._v("36")]),s("br"),s("span",{staticClass:"line-number"},[e._v("37")]),s("br")])]),s("h4",{attrs:{id:"查看linux系统版本信息-oracle-linux、centos-linux、redhat-linux、debian、ubuntu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看linux系统版本信息-oracle-linux、centos-linux、redhat-linux、debian、ubuntu"}},[e._v("#")]),e._v(" 查看linux系统版本信息（Oracle Linux、Centos Linux、Redhat Linux、Debian、Ubuntu）")]),e._v(" "),s("p",[e._v("查看Linux系统版本的命令（3种方法）\n1、"),s("code",[e._v("cat /etc/issue")]),e._v("，此命令也适用于所有的Linux发行版。\n[root@S-CentOS home]  cat /etc/issue\nCentOS release 6.5 (Final)\nKernel \\r on an \\m")]),e._v(" "),s("p",[e._v("2、"),s("code",[e._v("cat /etc/redhat-release")]),e._v("，这种方法只适合Redhat系的Linux：\n[root@S-CentOS home]  cat /etc/redhat-release\nCentOS release 6.5 (Final)")]),e._v(" "),s("p",[e._v("3、"),s("code",[e._v("lsb_release -a")]),e._v("，即可列出所有版本信息：\n[root@S-CentOS ~]  lsb_release -a\nLSB Version: :base-4.0-amd64:base-4.0-noarch:core-4.0-amd64:core-4.0-noarch:graphics-4.0-amd64:graphics-4.0-noarch:printing-4.0-amd64:printing-4.0-noarch\nDistributor ID: CentOS")]),e._v(" "),s("p",[e._v("查看Linux内核版本命令（两种方法）：\n"),s("code",[e._v("cat /proc/version")]),e._v(" "),s("code",[e._v("uname -a")])]),e._v(" "),s("p",[e._v("linux CPU大小\n"),s("code",[e._v('cat /proc/cpuinfo |grep "model name" && cat /proc/cpuinfo |grep "physical id"')]),e._v(" "),s("img",{attrs:{src:"https://images2015.cnblogs.com/blog/945786/201607/945786-20160714191834014-964804946.png",alt:"",referrerPolicy:"no-referrer"}}),e._v("\n说明：Linux下可以在/proc/cpuinfo中看到每个cpu的详细信息。但是对于双核的cpu，在cpuinfo中会看到两个cpu。常常会让人误以为是两个单核的cpu。\n其实应该通过Physical Processor ID来区分单核和双核。而Physical Processor ID可以从cpuinfo或者dmesg中找到. flags 如果有 ht 说明支持超线程技术 判断物理CPU的个数可以查看physical id 的值，相同则为")]),e._v(" "),s("p",[e._v("内存大小\n"),s("code",[e._v("cat /proc/meminfo |grep MemTotal")])]),e._v(" "),s("p",[s("img",{attrs:{src:"https://images2015.cnblogs.com/blog/945786/201607/945786-20160714192242342-87677541.png",alt:"",referrerPolicy:"no-referrer"}})]),e._v(" "),s("p",[e._v("硬盘大小\n"),s("code",[e._v("fdisk -l |grep Disk")])]),e._v(" "),s("p",[s("img",{attrs:{src:"https://images2015.cnblogs.com/blog/945786/201607/945786-20160714192353357-889932853.png",alt:"",referrerPolicy:"no-referrer"}})]),e._v(" "),s("p",[s("code",[e._v("uname -a")]),e._v("   查看内核/操作系统/CPU信息的linux系统信息命令")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://images2015.cnblogs.com/blog/945786/201607/945786-20160714194041920-2079682098.png",alt:"",referrerPolicy:"no-referrer"}})]),e._v(" "),s("p",[s("code",[e._v("head -n 1 /etc/issue")]),e._v("   查看操作系统版本，是数字1不是字母L")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://images2015.cnblogs.com/blog/945786/201607/945786-20160714194609576-1832936070.png",alt:"",referrerPolicy:"no-referrer"}})]),e._v(" "),s("p",[s("code",[e._v("cat /proc/cpuinfo")]),e._v("   查看CPU信息的linux系统信息命令")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://images2015.cnblogs.com/blog/945786/201607/945786-20160714194658889-256302652.png",alt:"",referrerPolicy:"no-referrer"}}),s("img",{attrs:{src:"https://images2015.cnblogs.com/blog/945786/201607/945786-20160714194733186-1852291147.png",alt:"",referrerPolicy:"no-referrer"}})]),e._v(" "),s("p",[s("code",[e._v("hostname")]),e._v("   查看计算机名的linux系统信息命令")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://images2015.cnblogs.com/blog/945786/201607/945786-20160714194813779-2080167308.png",alt:"",referrerPolicy:"no-referrer"}})]),e._v(" "),s("p",[s("code",[e._v("lspci -tv")]),e._v("   列出所有PCI设备")]),e._v(" "),s("p",[s("img",{attrs:{src:"C:%5CUsers%5CCM%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20220629102009413.png",alt:"",referrerPolicy:"no-referrer"}})]),e._v(" "),s("p",[s("code",[e._v("lsusb -tv")]),e._v("   列出所有USB设备的linux系统信息命令")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://images2015.cnblogs.com/blog/945786/201607/945786-20160714195010311-1391346792.png",alt:"",referrerPolicy:"no-referrer"}})]),e._v(" "),s("p",[s("code",[e._v("lsmod")]),e._v("   列出加载的内核模块")]),e._v(" "),s("p",[s("code",[e._v("env")]),e._v("   查看环境变量资源")]),e._v(" "),s("hr"),e._v(" "),s("p",[s("code",[e._v("free -m")]),e._v("   查看内存使用量和交换区使用量")]),e._v(" "),s("p",[e._v("​                         total       used       free     shared    buffers     cached\nMem:                     3706       3534        171          0         31       3258\n-/+ buffers/cache:                                                    244       3461\nSwap:                                                     3711          0       3711")]),e._v(" "),s("hr"),e._v(" "),s("p",[e._v("[root@localhost /]  "),s("code",[e._v("df -h")]),e._v("           # 查看各分区使用情况\n文件系统                                                         容量          已用        可用     已用%%   挂载点\n/dev/mapper/VolGroup-lv_root                                    50G           6.4G        41G       14%      /\ntmpfs                                                           1.9G          72K         1.9G       1%      /dev/shm\n/dev/sda1                                                       485M          38M         422M      9%       /boot\n/dev/mapper/VolGroup-lv_home                                    406G          2.8G        382G      1%       /home")]),e._v(" "),s("hr"),e._v(" "),s("p",[e._v("防火墙会限制端口只能用虚拟机图形操作：")]),e._v(" "),s("p",[s("code",[e._v("firewall-cmd --state")]),e._v("查看火墙状态")]),e._v(" "),s("p",[s("code",[e._v("firewall-cmd --get-active-zones")]),e._v("列出当前被系统使用的域")]),e._v(" "),s("p",[s("code",[e._v("firewall-cmd --get-default-zone")]),e._v("查看火墙默认生效的域")]),e._v(" "),s("p",[s("code",[e._v("firewall-cmd --get-zones")]),e._v("查看默认的规则")]),e._v(" "),s("p",[s("code",[e._v("firewall-cmd --list-all-zones")]),e._v("查看所有的域")]),e._v(" "),s("p",[s("code",[e._v("firewall-cmd --zone=public --list-all")]),e._v("查看public域里面的信息")]),e._v(" "),s("p",[s("code",[e._v("firewall-cmd --get-services")]),e._v("列出系统中用名称表示的服务")]),e._v(" "),s("p",[s("code",[e._v("firewall-cmd --set-default-zone=dmz")]),e._v(" 设定默认使用的域")]),e._v(" "),s("p",[e._v("[root@client Desktop]  "),s("code",[e._v("yum install firewalld firewalld-config")]),e._v(" 安装")]),e._v(" "),s("p",[s("img",{attrs:{src:"http://www.2cto.com/uploadfile/Collfiles/20180606/20180606090004876.png",alt:"",referrerPolicy:"no-referrer"}})]),e._v(" "),s("p",[e._v("[root@client Desktop]  "),s("code",[e._v("firewall-config")]),e._v(" 会直接打开界面")]),e._v(" "),s("p",[e._v("[root@client Desktop]  "),s("code",[e._v("systemctl stop iptables")]),e._v(" 关闭iptables")]),e._v(" "),s("p",[e._v("[root@client Desktop]  "),s("code",[e._v("systemctl disable iptables")]),e._v(" 开机自动关闭")]),e._v(" "),s("p",[e._v("[root@client Desktop]  "),s("code",[e._v("systemctl start firewalld")]),e._v(" 打开防火墙")]),e._v(" "),s("p",[e._v("[root@client Desktop]  "),s("code",[e._v("systemctl enable firewalld")]),e._v(" 开机自动开启")]),e._v(" "),s("p",[e._v("[root@client Desktop]  "),s("code",[e._v("yum search iptables")]),e._v(" 寻找iptables安装包")]),e._v(" "),s("p",[e._v("[root@client Desktop]  "),s("code",[e._v("yum install iptables-services.x86_64")]),e._v(" 安装")]),e._v(" "),s("p",[s("code",[e._v("firewall-cmd --state")]),e._v(" 查看火墙状态")]),e._v(" "),s("p",[e._v("running")]),e._v(" "),s("p",[e._v("[root@client Desktop]  "),s("code",[e._v("firewall-cmd --get-active-zones")]),e._v(" 列出当前被系统使用的域")]),e._v(" "),s("p",[e._v("ROL")]),e._v(" "),s("p",[e._v("sources: 172.25.0.252/32")]),e._v(" "),s("p",[e._v("public")]),e._v(" "),s("p",[e._v("interfaces: eth0")]),e._v(" "),s("p",[e._v("[root@client Desktop]  "),s("code",[e._v("firewall-cmd --get-default-zone")]),e._v(" 查看火墙默认生效的域")]),e._v(" "),s("p",[e._v("public")]),e._v(" "),s("p",[e._v("[root@client Desktop] "),s("code",[e._v("firewall-cmd --get-zones")]),e._v(" 查看默认的规则")]),e._v(" "),s("p",[e._v("ROL block dmz drop external home internal public trusted work")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("du -sh   查看指定目录的大小\ngrep MemTotal /proc/meminfo   查看内存总量\ngrep MemFree /proc/meminfo   查看空闲内存量\nuptime   查看系统运行时间、用户数、负载\ncat /proc/loadavg   查看系统负载磁盘和分区\nmount | column -t   查看挂接的分区状态\nfdisk -l   查看所有分区\nswapon -s   查看所有交换分区\nhdparm -i /dev/hda   查看磁盘参数(仅适用于IDE设备)\ndmesg | grep IDE   查看启动时IDE设备检测状况网络\nifconfig   查看所有网络接口的属性\niptables -L   查看防火墙设置\nroute -n   查看路由表\nnetstat -lntp   查看所有监听端口\nnetstat -antp   查看所有已经建立的连接\nnetstat -s   查看网络统计信息进程\nps -ef   查看所有进程\ntop   实时显示进程状态用户\nw   查看活动用户\nid   查看指定用户信息\nlast   查看用户登录日志\ncut -d: -f1 /etc/passwd   查看系统所有用户\ncut -d: -f1 /etc/group   查看系统所有组\ncrontab -l   查看当前用户的计划任务服务\nchkconfig –list   列出所有系统服务\nchkconfig –list | grep on   列出所有启动的系统服务程序\nrpm -qa   查看所有安装的软件包\ncat /proc/cpuinfo ：查看CPU相关参数的linux系统命令\ncat /proc/partitions ：查看linux硬盘和分区信息的系统信息命令\ncat /proc/meminfo ：查看linux系统内存信息的linux系统命令\ncat /proc/version ：查看版本，类似uname -r\ncat /proc/ioports ：查看设备io端口\ncat /proc/interrupts ：查看中断\ncat /proc/pci ：查看pci设备的信息\ncat /proc/swaps ：查看所有swap分区的信息\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br"),s("span",{staticClass:"line-number"},[e._v("29")]),s("br"),s("span",{staticClass:"line-number"},[e._v("30")]),s("br"),s("span",{staticClass:"line-number"},[e._v("31")]),s("br"),s("span",{staticClass:"line-number"},[e._v("32")]),s("br"),s("span",{staticClass:"line-number"},[e._v("33")]),s("br"),s("span",{staticClass:"line-number"},[e._v("34")]),s("br"),s("span",{staticClass:"line-number"},[e._v("35")]),s("br")])]),s("hr"),e._v(" "),s("p",[e._v("系统\t      发行版本 -内核版本、位数")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("RedHat\tcat /etc/issue\tcat /etc/redhat-release\tlsb_release -a\nCentOS\tcat /etc/issue\tcat /etc/centos-release\tcat /proc/version\nDebian\tcat /etc/issue\tcat /etc/debian_version\tcat /proc/version\nUbuntu\tcat /etc/issue\tcat /etc/lsb_release\tcat /proc/version\nOracle\tcat /etc/issue\tcat /etc/oracle-release\tlsb_release -a\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("hr"),e._v(" "),s("p",[e._v("RedHat")]),e._v(" "),s("p",[e._v("查看系统发行版本\n[root@getlnx05 ~]  "),s("code",[e._v("cat /etc/issue")]),e._v("\nRed Hat Enterprise Linux Server release 5.7 (Tikanga)\nKernel \\r on an \\m\n通过cat /etc/redhat-release也查到看到相关的信息。")]),e._v(" "),s("p",[e._v("查看系统内核版本、位数\n[root@getlnx05 ~] "),s("code",[e._v("lsb_release -a")]),e._v("\nLSB Version:    :core-4.0-amd64:core-4.0-ia32:core-4.0-noarch:graphics-4.0-amd64:graphics-4.0-ia32:graphics-4.0-noarch:printing-4.0-amd64:printing-4.0-ia32:printing-4.0-noarch\nDistributor ID: RedHatEnterpriseServer\nDescription:    Red Hat Enterprise Linux Server release 5.7 (Tikanga)\nRelease:        5.7\nCodename:      Tikanga\nLSB Version项显示的是系统的内核版本，其中amd64表示系统是64位的。")]),e._v(" "),s("hr"),e._v(" "),s("p",[e._v("CentOS")]),e._v(" "),s("p",[e._v("查看系统发行版本 cat /etc/issue\n[chenyurong@localhost local]$ "),s("code",[e._v("cat /etc/issue")]),e._v("\nCentOS release 6.5 (Final)\nKernel \\r on an \\m\n通过"),s("code",[e._v("cat /etc/centos-release")]),e._v("也可以查询到一样的信息。")]),e._v(" "),s("p",[e._v("查看系统内核版本、位数 more /proc/version\n[chenyurong@localhost local]$"),s("code",[e._v("cat /proc/version")]),e._v("\nLinux version 2.6.32-431.el6.x86_64 (mockbuild@c6b8.bsys.dev.centos.org) (gcc version 4.4.7 20120313 (Red Hat 4.4.7-4) (GCC) )  1 SMP Fri Nov 22 03:15:09 UTC 2013\nLinux version 2.6.32-431.el6.x86_64显示了Linux的版本，x86_64显示了是64位的系统。通过uname -r也可以查到相关信息。")]),e._v(" "),s("hr"),e._v(" "),s("p",[e._v("Oracle Linux")]),e._v(" "),s("p",[e._v("查看系统发行版本\n[root@DB-Server ~] "),s("code",[e._v("cat /etc/issue")]),e._v("\nOracle Linux Server release 5.7\nKernel \\r on an \\m\n通过cat /etc/oracle-release也可以查询到相关信息。")]),e._v(" "),s("p",[e._v("查看系统内核版本、位数\n[root@DB-Server ~]"),s("code",[e._v("lsb_release -a")]),e._v("\nLSB Version:    :core-4.0-amd64:core-4.0-ia32:core-4.0-noarch:graphics-4.0-amd64:graphics-4.0-ia32:graphics-4.0-noarch:printing-4.0-amd64:printing-4.0-ia32:printing-4.0-noarch\nDistributor ID: EnterpriseEnterpriseServer\nDescription:    Enterprise Linux Enterprise Linux Server release 5.7 (Carthage)\nRelease:        5.7\nCodename:      Carthage\nLSB Version显示的是系统的内核版本，其中amd64表示系统是64位的。")]),e._v(" "),s("hr"),e._v(" "),s("h4",{attrs:{id:"所有命令适用范围总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#所有命令适用范围总结"}},[e._v("#")]),e._v(" 所有命令适用范围总结")]),e._v(" "),s("p",[e._v("查看系统发行版本\n命令\t                                   适用范围")]),e._v(" "),s("div",{staticClass:"language-lsb_release -a\t                   所有Linux发行版 line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("cat /etc/redhat-release\t     RedHat系Linux\ncat /etc/issue\t                   所有Linux发行版\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("查看系统内核位数\n命令\t                                 适用范围")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("uname -a、uname -r\t  所有Linux发行版\ncat /proc/version\t         所有Linux发行版\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);