#### css样式表四种写法：
1.内部样式（作用于当前页面）：  

	<head>
		<style>
			选择器{
				属性:"属性值";
			}
		</style>
	</head>
2.外部样式（作用于所有引用HTML页面）：  

	<link rel=" stylesheet" href=" css文件路径">
3.内联样式（作用于当前标签）：  

	<标签 style=" 属性：属性值;"></标签>  
4.@import url("css文件路径"); 写在style第一行
#### 优先级：   

	内联样式表 > 内部样式表 、外部样式表（后执行，优先级高）
### 选择器
#### 优先级：

	！important > 内联样式 > id选择器 > class选择器 > 类型选择器 > 通配符选择器
#### 权重：

	！important（无穷大） ——内联样式（1000）——id选择器（100）——类选择器（10）——类型选择器（1）——通配符选择器（0）
	
	包含选择器：各选择器权重之和
#### 注意：
	包含选择器 ，类选择器，尽量避免标签选择器，写注释，先写结构，后写样式
#### 基本选择器
通配符选择器（清除所有默认样式）—— *  

类型选择器（标签选择器）—— 标签名 

类选择器（class选择器）—— . class名  

id选择器—— #id名  

#### 群组选择器—— 多个选择器之间 , 逗号隔开  

#### 层次选择器
后代选择器 [包含选择器（父元素 子元素）]—— 空格隔开

浮动时孙子元素不继承父元素

子代选择器（父元素>子元素）—— > 隔开

通用选择器（ 匹配后面所有兄弟元素） —— ~ 隔开

相邻元素兄弟选择器（选择器1+选择器2）——+隔开

#### 动态伪类选择器


a:link ——链接未访问状态

a:visited—— 链接已访问状态

a:hover——鼠标滑过状态

a:active——鼠标按下去未松开状态

input获取焦点时状态—— input:focus 

目标伪类 ——:target 

语言伪类——<q></q>—— 默认引号

符号css修改 q:lang(no) {quotes:"$" "$"; }

状态伪类选择器 

disable——禁用状态伪类选择器

enabled——启用状态伪类选择器，input默认值

checked——选中状态伪类选择器

input:disabled{

background: blue;

}

结构伪类选择器

:first-child

:last-child

:nth-child(n)——父元素下第n个子元素

:nth-child(2n) | :nth-child(even)——偶数项设置

:nth-child(2n+1) | :nth-child(2n-1) | :nth-child(odd) ——奇数项设置

:nth-child(-n+ x)——父元素第1---x子元素

:nth- last-child(n) ——父元素从最后子元素开始往前数第n个子元素

:nth-of -type(n)——父元素下类型第n个

:nth - last-of-type(n)——

:empty——选中没有任何子节点的元素【空格也算子节点】

F E:only-child——父元素只有唯一一个节点，且唯一节点要满足为E

F E:only-of-type——父元素中E元素类型只有一个

否定选择器

:not(类名)

伪元素选择器

伪元素选择器在IE中只使用一个冒号

选中元素文字状态——选择器::selection （背景色，字体颜色，不可改变文字大小）

伪元素（配合content使用，content内可添加文字和图片（url(图片路径)）

选择器::after {

content:'';

}

给元素添加最后一个子元素（行内元素）

选择器::before {

content:'';

}

给元素添加第一个子元素（行内元素）

选择器::first-letter————改变第一个字符样式，只适用于块级元素 

选择器::first-line————改变第一行样式，只适用于块级元素 

选择器::selection 选中元素文字的状态 ，只可改变字体颜色及背景色

目标伪类

E:target——匹配所有的E元素，E元素要跟url（类似锚链接）指向有关联

属性选择器

input

E[attr] 表示匹配的拥有attr属性的E元素

E[attr=“value”] 表示匹配的到拥有attr属性，并且属性值为value的E元素

E[attr~=“value”] 表示匹配的拥有attr属性，并且属性值中包含一个value词的E元素



E[attr^=“value”] 表示拥有attr属性，并且属性值值以value开头的E元素



E[attr$=“value”] 表示拥有attr属性，并且属性值以value结尾的E元素



E[attr*=“value”] 表示拥有attr属性，并且属性值中包含value的E元素



E[attr|=“value”] 表示拥有attr属性，并且属性值仅是value 或者 以value-开头的（例如main-left）


