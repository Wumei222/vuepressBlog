module.exports = {
  title: 'WM_Blog',  // 设置网站标题
  description : 'WM_Blog',
  
  base : '/',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/images/logo.png' }],
    ['link', { rel: 'manifest', href: '/images/pic.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/images/pic.png' }],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache'}],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache,must-revalidate'}],
    ['meta', { 'http-quiv': 'expires', cotent: '0'}]
  ],
  themeConfig : {
    nav : [
		{ text: 'ui', link: '/ui/' },
		{ text: '前端', 
		  items:[{
			  text:'html',
			  link: '/html/' 
		  },
		  {
			text:'css',
			link: '/css/' 
		},
		{
			text:'js',
			link: '/js/' 
		},
		{
			text:'vue',
			link: '/vue/' 
		},
		{
			text:'react',
			link: '/react/' 
		},
		]
		},
		{ text: '后端', 
		items:[{
			text:'java',
	    	link:'/java/' 
	     },{
			text: 'mysql', 
			link: '/database/' 
			}
	     ]
	   },
	   { text: '其它', 
	   items:[{
		   text:'markdown',
		   link:'/others/markdown' 
		},{
		   text: 'vuepress', 
		   link: '/others/vuepress' 
		   }
		]
	  }
	],
    sidebar: {
		'/ui/':[{
			title: 'ui',
			collapsable: false
		}],
		'/html/':[{
			title: 'html',
			collapsable: false
		}],
		'/css/':[{
			title: 'css'
		}],
		'/js/':[{
			title: 'js',
			collapsable: false
		}],
		'/java/':[{
			title: 'java',
			collapsable: false
		}],
		'/vue/':[{
			title: 'vue',
			collapsable: false
		}],
		'/react/':[{
			title: 'react',
			collapsable: false
		}],
		'/others/':[{
			title: 'others',
			collapsable: false,
			children:[
				{ title: 'markdown', path:'/others/markdown'},
				{ title: 'vuepress', path:'/others/vuepress'}
			]
		}]
		
    },
    sidebarDepth : 2
  }
}