页面划分

首页:
	搜索--->侧边栏(导航) --->点击跳转到列表页--->详情页 <=========> 使用嵌套路由
	横向导航条--->拼团页需要用到
	商品信息(根据点击tab请求相应信息)  无限加载功能   点击事件跳转到详情页(头部+详情+底部)

拼团:
	列表页--->拼团页(详情+底部)

购物车:
	头部 (我的,详情页共用)
	商品list

我的:
	登录 (登录信息储存在localStroage)
	注册		
	个人信息




======================================

公共组件:
	头部 (Jheader.jsx)
	横向导航条 (Jhnav.jsx)
	底部 (Jfooter.jsx)
	详情页中的详情部分  (Jdetails.jsx)


页面部分:主页用来合并组件,不书写内容
	home:
		主页:(Home.jsx)
		搜索(Hsearch.jsx)
		侧边栏(Hslider.jsx)
		列表(Hlist.jsx)

	pintuan:
		主页(Pintuan.jsx)
		列表(Plist)

	shoppingCar:
		主页(ShoppingCar.jsx)
		列表(Slist.jsx)

	mine:
		主页(Mine.jsx)
		详细(Mcontent.jsx)






npm run eject    暴露配置文件

项目问题
1.在生命周期中,render函数总会在ajax请求完成前执行(异步状态),
这时在render函数中渲染数据就会报错,需先判断是否有数据,再做执行-->三元运算或者函数判断

2.组件show,点击事件去改变某个状态值,再三元运算作show与非show的判断
3.render 函数中的{}内不能加分号 ';'
