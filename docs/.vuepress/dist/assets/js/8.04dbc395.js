(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{367:function(v,t,_){"use strict";_.r(t);var a=_(42),s=Object(a.a)({},(function(){var v=this,t=v.$createElement,_=v._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h4",{attrs:{id:"css样式表四种写法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#css样式表四种写法"}},[v._v("#")]),v._v(" css样式表四种写法：")]),v._v(" "),_("p",[v._v("1.内部样式（作用于当前页面）：")]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[v._v('<head>\n\t<style>\n\t\t选择器{\n\t\t\t属性:"属性值";\n\t\t}\n\t</style>\n</head>\n')])])]),_("p",[v._v("2.外部样式（作用于所有引用HTML页面）：")]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[v._v('<link rel=" stylesheet" href=" css文件路径">\n')])])]),_("p",[v._v("3.内联样式（作用于当前标签）：")]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[v._v('<标签 style=" 属性：属性值;"></标签>  \n')])])]),_("p",[v._v('4.@import url("css文件路径"); 写在style第一行')]),v._v(" "),_("h4",{attrs:{id:"优先级"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#优先级"}},[v._v("#")]),v._v(" 优先级：")]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[v._v("内联样式表 > 内部样式表 、外部样式表（后执行，优先级高）\n")])])]),_("h3",{attrs:{id:"选择器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#选择器"}},[v._v("#")]),v._v(" 选择器")]),v._v(" "),_("h4",{attrs:{id:"优先级-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#优先级-2"}},[v._v("#")]),v._v(" 优先级：")]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[v._v("！important > 内联样式 > id选择器 > class选择器 > 类型选择器 > 通配符选择器\n")])])]),_("h4",{attrs:{id:"权重"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#权重"}},[v._v("#")]),v._v(" 权重：")]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[v._v("！important（无穷大） ——内联样式（1000）——id选择器（100）——类选择器（10）——类型选择器（1）——通配符选择器（0）\n\n包含选择器：各选择器权重之和\n")])])]),_("h4",{attrs:{id:"注意"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[v._v("#")]),v._v(" 注意：")]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[v._v("包含选择器 ，类选择器，尽量避免标签选择器，写注释，先写结构，后写样式\n")])])]),_("h4",{attrs:{id:"基本选择器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基本选择器"}},[v._v("#")]),v._v(" 基本选择器")]),v._v(" "),_("p",[v._v("通配符选择器（清除所有默认样式）—— *")]),v._v(" "),_("p",[v._v("类型选择器（标签选择器）—— 标签名")]),v._v(" "),_("p",[v._v("类选择器（class选择器）—— . class名")]),v._v(" "),_("p",[v._v("id选择器—— #id名")]),v._v(" "),_("h4",{attrs:{id:"群组选择器-多个选择器之间-逗号隔开"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#群组选择器-多个选择器之间-逗号隔开"}},[v._v("#")]),v._v(" 群组选择器—— 多个选择器之间 , 逗号隔开")]),v._v(" "),_("h4",{attrs:{id:"层次选择器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#层次选择器"}},[v._v("#")]),v._v(" 层次选择器")]),v._v(" "),_("p",[v._v("后代选择器 [包含选择器（父元素 子元素）]—— 空格隔开")]),v._v(" "),_("p",[v._v("浮动时孙子元素不继承父元素")]),v._v(" "),_("p",[v._v("子代选择器（父元素>子元素）—— > 隔开")]),v._v(" "),_("p",[v._v("通用选择器（ 匹配后面所有兄弟元素） —— ~ 隔开")]),v._v(" "),_("p",[v._v("相邻元素兄弟选择器（选择器1+选择器2）——+隔开")]),v._v(" "),_("h4",{attrs:{id:"动态伪类选择器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#动态伪类选择器"}},[v._v("#")]),v._v(" 动态伪类选择器")]),v._v(" "),_("p",[v._v("a:link ——链接未访问状态")]),v._v(" "),_("p",[v._v("a:visited—— 链接已访问状态")]),v._v(" "),_("p",[v._v("a:hover——鼠标滑过状态")]),v._v(" "),_("p",[v._v("a:active——鼠标按下去未松开状态")]),v._v(" "),_("p",[v._v("input获取焦点时状态—— input:focus")]),v._v(" "),_("p",[v._v("目标伪类 ——:target")]),v._v(" "),_("p",[v._v("语言伪类——"),_("q"),v._v("—— 默认引号")]),v._v(" "),_("p",[v._v('符号css修改 q:lang(no) {quotes:"$" "$"; }')]),v._v(" "),_("p",[v._v("状态伪类选择器")]),v._v(" "),_("p",[v._v("disable——禁用状态伪类选择器")]),v._v(" "),_("p",[v._v("enabled——启用状态伪类选择器，input默认值")]),v._v(" "),_("p",[v._v("checked——选中状态伪类选择器")]),v._v(" "),_("p",[v._v("input:disabled{")]),v._v(" "),_("p",[v._v("background: blue;")]),v._v(" "),_("p",[v._v("}")]),v._v(" "),_("p",[v._v("结构伪类选择器")]),v._v(" "),_("p",[v._v(":first-child")]),v._v(" "),_("p",[v._v(":last-child")]),v._v(" "),_("p",[v._v(":nth-child(n)——父元素下第n个子元素")]),v._v(" "),_("p",[v._v(":nth-child(2n) | :nth-child(even)——偶数项设置")]),v._v(" "),_("p",[v._v(":nth-child(2n+1) | :nth-child(2n-1) | :nth-child(odd) ——奇数项设置")]),v._v(" "),_("p",[v._v(":nth-child(-n+ x)——父元素第1---x子元素")]),v._v(" "),_("p",[v._v(":nth- last-child(n) ——父元素从最后子元素开始往前数第n个子元素")]),v._v(" "),_("p",[v._v(":nth-of -type(n)——父元素下类型第n个")]),v._v(" "),_("p",[v._v(":nth - last-of-type(n)——")]),v._v(" "),_("p",[v._v(":empty——选中没有任何子节点的元素【空格也算子节点】")]),v._v(" "),_("p",[v._v("F E:only-child——父元素只有唯一一个节点，且唯一节点要满足为E")]),v._v(" "),_("p",[v._v("F E:only-of-type——父元素中E元素类型只有一个")]),v._v(" "),_("p",[v._v("否定选择器")]),v._v(" "),_("p",[v._v(":not(类名)")]),v._v(" "),_("p",[v._v("伪元素选择器")]),v._v(" "),_("p",[v._v("伪元素选择器在IE中只使用一个冒号")]),v._v(" "),_("p",[v._v("选中元素文字状态——选择器::selection （背景色，字体颜色，不可改变文字大小）")]),v._v(" "),_("p",[v._v("伪元素（配合content使用，content内可添加文字和图片（url(图片路径)）")]),v._v(" "),_("p",[v._v("选择器::after {")]),v._v(" "),_("p",[v._v("content:'';")]),v._v(" "),_("p",[v._v("}")]),v._v(" "),_("p",[v._v("给元素添加最后一个子元素（行内元素）")]),v._v(" "),_("p",[v._v("选择器::before {")]),v._v(" "),_("p",[v._v("content:'';")]),v._v(" "),_("p",[v._v("}")]),v._v(" "),_("p",[v._v("给元素添加第一个子元素（行内元素）")]),v._v(" "),_("p",[v._v("选择器::first-letter————改变第一个字符样式，只适用于块级元素")]),v._v(" "),_("p",[v._v("选择器::first-line————改变第一行样式，只适用于块级元素")]),v._v(" "),_("p",[v._v("选择器::selection 选中元素文字的状态 ，只可改变字体颜色及背景色")]),v._v(" "),_("p",[v._v("目标伪类")]),v._v(" "),_("p",[v._v("E:target——匹配所有的E元素，E元素要跟url（类似锚链接）指向有关联")]),v._v(" "),_("p",[v._v("属性选择器")]),v._v(" "),_("p",[v._v("input")]),v._v(" "),_("p",[v._v("E[attr] 表示匹配的拥有attr属性的E元素")]),v._v(" "),_("p",[v._v("E[attr=“value”] 表示匹配的到拥有attr属性，并且属性值为value的E元素")]),v._v(" "),_("p",[v._v("E[attr~=“value”] 表示匹配的拥有attr属性，并且属性值中包含一个value词的E元素")]),v._v(" "),_("p",[v._v("E[attr^=“value”] 表示拥有attr属性，并且属性值值以value开头的E元素")]),v._v(" "),_("p",[v._v("E[attr$=“value”] 表示拥有attr属性，并且属性值以value结尾的E元素")]),v._v(" "),_("p",[v._v("E[attr*=“value”] 表示拥有attr属性，并且属性值中包含value的E元素")]),v._v(" "),_("p",[v._v("E[attr|=“value”] 表示拥有attr属性，并且属性值仅是value 或者 以value-开头的（例如main-left）")])])}),[],!1,null,null,null);t.default=s.exports}}]);