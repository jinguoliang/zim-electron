[![Build Status](https://travis-ci.org/jinguoliang/zim-electron.svg?branch=master)](https://travis-ci.org/jinguoliang/zim-electron)


## 源起
在Linux平台一直使用Zim管理知识,Zim是一个桌面WIKI,有树状图来组织知识,加上方便的链接,感觉太好用了  
但是到了Mac平台,刚开始装了一个,根本没法用,从网上查不知从哪得到的消息,就认定Mac上Gtk(Zim使用PyGtk作UI)支持不好,所以就放弃了(然而,官网明明写着真正跨平台,不改动就可以在Windows, MacOs X, Linux运行,蛋蛋的忧伤呀,这时候话.).  
但是实在太想要一个Zim这样的软件了,于是就像把他的UI替换掉.后来跟朋友聊,得知了electron,查了查立马决定用它,它是一个Js桌面应用的库,结合了NodeJs和Chrome, 一开始打算,只作UI,复用Zim Python的代码,但是网上并没有成熟的方案来使得JS和Python互相调用,于是打算只用JS实现简单的功能.  
后来朋友跟我说他在Mac上安装的Zim可以用,就是UI搓,我这才开始重新来看是不是安装的问题,之前是从网上下了一个pygtk的安装包,下一步下一步,就好了,不行,现在,用HomeBrew安装,行了,于是最初的动力没了:)  
不过一件事开始了...其实不想停

## Feature
1. 这是个Markdown编辑器
2. 实时预览
3. 自动保存
4. 支持直接粘贴图片
5. Markdown带了一个Yaml头,描述源信息

## TODO
1. 要成一个以Markdown文件作为存储的知识管理软件
* 有一个知识树
* 很容易的创建链接,吸取Wiki的特性
* 快捷键等提供编辑的便利
* 日历功能,像Zim一样,点击某一天创建某一天的一个页面很方便记事

## Stack
1. electron 构建桌面应用的库
* react mv**框架
* babel 翻译器,只用它来翻译react的jsx
* mocha 测试框架

我并不是一个前段,所以搞得很头大,Javascript的技术的确太多了!!
## How

``` bash
npm install
npm start
```

## Contributor
*I want you*


## License
The MIT License
