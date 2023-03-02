(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{452:function(s,e,n){"use strict";n.r(e);var a=n(2),l=Object(a.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("1、查看当前未挂载的硬盘")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("fdisk")]),s._v(" -l\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"linux-disk-install.assets/image-20220926150840615.png",alt:"image-20220926150840615"}}),s._v("\n2、创建硬盘分区")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("fdisk")]),s._v(" /dev/xvdb\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v('根据提示，依次输入"n"，"p" "1"，两次回车，"wq"，分区就开始了，很快就会完成。')]),s._v(" "),e("p",[s._v("3、格式化硬盘")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("mkfs.ext4 /dev/xvdb\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("4、建立挂载目录")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /data\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("5、挂载硬盘")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" /dev/xvdb /data\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("6、设置开机自动挂载")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/fstab\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v('7、在vi中输入i进入INERT模式，将光标移至文件结尾处并回车，将下面的内容复制/粘贴，然后按Esc键，输入":wq"(不含双引号)保存并退出')]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("/dev/xvdb    /data    ext4    defaults    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("8、重启服务器")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("shutdown")]),s._v(" -r now\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("strong",[s._v("如果遇到写保护，将以只读方式挂载。mount: 未知的文件系统类型“(null)”，请按下面的方法来处理")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" /dev/xvdb /mnt/usb/\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("blockquote",[e("p",[s._v("mount: /dev/sdb 写保护，将以只读方式挂载\nmount: 未知的文件系统类型“(null)”")])]),s._v(" "),e("p",[s._v("格式化一下")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("mkfs.ext4 /dev/xvdb\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("blockquote",[e("p",[s._v("mke2fs 1.42.9 (28-Dec-2013)\n/dev/sdb is entire device, not just one partition!\n无论如何也要继续? (y,n) y\n文件系统标签=\nOS type: Linux\n块大小=4096 (log=2)\n分块大小=4096 (log=2)\nStride=0 blocks, Stripe width=0 blocks\n476720 inodes, 1904000 blocks\n95200 blocks (5.00%) reserved for the super user\n第一个数据块=0\nMaximum filesystem blocks=1950351360\n59 block groups\n32768 blocks per group, 32768 fragments per group\n8080 inodes per group\nSuperblock backups stored on blocks:\n32768, 98304, 163840, 229376, 294912, 819200, 884736, 1605632")]),s._v(" "),e("p",[s._v("Allocating group tables: 完成"),e("br"),s._v("\n正在写入inode表: 完成"),e("br"),s._v("\nCreating journal (32768 blocks): 完成\nWriting superblocks and filesystem accounting information: 完成")])]),s._v(" "),e("p",[s._v("再进行挂载")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mount /dev/xvdb /mnt/usb/\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])}),[],!1,null,null,null);e.default=l.exports}}]);