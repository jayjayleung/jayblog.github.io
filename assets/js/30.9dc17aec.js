(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{448:function(s,a,t){"use strict";t.r(a);var e=t(2),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[s._v("#")]),s._v(" 背景")]),s._v(" "),a("p",[s._v("使用Docker容器搭建数据库，可以极为方便的移植到其他环境。本文有两种配置方式，一种是在全部文件数据都在容器内部，一种是挂载到外部配置和数据，这要的好处是打包的容器不会随着使用而越来越大。")]),s._v(" "),a("p",[s._v("这里使用的mysql 5.7.36版本，具体需要哪个版本，在[dockerHub][https://hub.docker.com/]搜索查看")]),s._v(" "),a("h1",{attrs:{id:"一、挂载在容器内部配置文件和数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、挂载在容器内部配置文件和数据"}},[s._v("#")]),s._v(" 一、挂载在容器内部配置文件和数据")]),s._v(" "),a("h2",{attrs:{id:"docker拉取最新mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker拉取最新mysql"}},[s._v("#")]),s._v(" docker拉取最新MySQL")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull mysql:5.7.36\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" images //查看是否有镜像\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"启动docker-创建mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动docker-创建mysql"}},[s._v("#")]),s._v(" 启动docker，创建MySQL")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run --name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysql -it -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v(":3306 -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v(" -d mysql\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这里挂载内部文件的就完成了，这种方法最快，但改配置不方便")]),s._v(" "),a("h1",{attrs:{id:"二、挂载外部配置文件和数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、挂载外部配置文件和数据"}},[s._v("#")]),s._v(" 二、挂载外部配置文件和数据")]),s._v(" "),a("h2",{attrs:{id:"docker拉取mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker拉取mysql"}},[s._v("#")]),s._v(" docker拉取MySQL")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull mysql:5.7.36\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"创建配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建配置文件"}},[s._v("#")]),s._v(" 创建配置文件")]),s._v(" "),a("p",[s._v("可以根据需要设置到合适的目录")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /home/mysql/conf\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /home/mysql/data\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /home/mysql/logs\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"创建mysql配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建mysql配置文件"}},[s._v("#")]),s._v(" 创建MySQL配置文件")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /home/mysql/conf/my.cnf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("复制以下内容，为了解决中文乱码问题")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysqld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\npid-file        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /var/run/mysqld/mysqld.pid\nsocket          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /var/run/mysqld/mysqld.sock\ndatadir         "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /var/lib/mysql\nsecure-file-priv"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" NULL\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Disabling symbolic-links is recommended to prevent assorted security risks")]),s._v("\nsymbolic-links"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\ncharacter-set-server"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8 \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\ndefault-character-set"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8 \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\ndefault-character-set"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8 \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Custom config should go here")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("includedir /etc/mysql/conf.d/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h2",{attrs:{id:"运行容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行容器"}},[s._v("#")]),s._v(" 运行容器")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run --restart"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("always -d -v /home/mysql/conf/my.cnf:/etc/mysql/my.cnf -v /home/mysql/logs:/logs -v /home/mysql/data/mysql:/var/lib/mysql  -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v(":3306 --name mysql -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v(" mysql:5.7.36\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("参数解释")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("--restart"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("always                                            -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 开机启动容器,容器异常自动重启\n-d                                                          -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 以守护进程的方式启动容器\n-v /home/app/mysql/conf.d/my.cnf:/etc/mysql/my.cnf          -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 映射配置文件\n-v /home/app/mysql/logs:/logs                               -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 映射日志\n-v /home/app/mysql/data/mysql:/var/lib/mysql                -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 映射数据\n-p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v(":3306                                                -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 绑定宿主机端口\n--name mysql                                                -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 指定容器名称\n-e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("                               -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 写入配置root密码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("使用数据连接工具连接(比如Navicat)能连上就表示安装成功了")])])}),[],!1,null,null,null);a.default=r.exports}}]);