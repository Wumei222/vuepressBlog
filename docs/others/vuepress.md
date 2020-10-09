#### 搭建个人博客
1.全局安装 vuepress：npm install -g vuepress  
2.初始化项目：npm init  
3.创建文件夹docs  
4.在 package.json 文件里添加两个启动命令  

	"scripts":{ 
	     "dev": "vuepress dev docs",  
 	    "build": "vuepress build docs"
	 }
5.运行：npm run dev  
6.运行: npm run build  生成dist文件
7.在.vuepress文件中创建config.js配置文件 

	module.exports = {
  		title: 'WM_Blog',  //设置网站标题
  		description : 'WM_Blog',
  		base : '/',
  		themeConfig : {
    	nav : [
			{ text: '描述', link: '路径' }
  		],
		sidebar: {
			'/' : [
			"/", //指的是根目录的md文件，README.md内容
			]
		},
		sidebarDepth : 2
		}
        }
