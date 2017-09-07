这里用canvas来实现“小丑效果”，将使用到`kinetic`的web动画工具包

[kinetic官网](http://kineticjs.com/)
[kinetic-github](https://github.com/ericdrowell/KineticJS/)
[博客园参考资料](http://www.cnblogs.com/zhangleblog/p/3912156.html)

KineticJS is a fast,robust,HTML5 Canvas Library that is no longer maintained.

## 基本结构

KineticJS首先是要绑定到HTML页面上的一个DOM容器元素上，比如最常用的<div>标签。KineticJS在此容器中创建一个称之为舞台（stage）的结构，这个舞台由一个不可见的后台层和一个不可见的缓冲层组成，提供了高性能的路径和像素检测能力。舞台上再包含若干（至少一层）用户层（layer），每个层上又包含有若干canvas元素，比如各种图形、图像、元素组（组可以包含其他的图形和其他的组）等。用户还可以给这些层上的图形、元素组、层本身以及舞台本身添加事件监听方法，以响应鼠标、键盘等事件。浏览器最终显示的就是这些用户层的叠加效果。

## kinetic绘图流程

1.创建一个HTML5页面，引用Kinetic库：

```js
<script src=“./kinetic.js”></script>
```

2.在<body>中添加一个用于绑定到Kinetic用于创建舞台的容器，比如说可以是个<div>：

```html
<div id=“container”></div>
```

Kinetic图像就将在这个容器中完成绘制。

3.创建kinetic舞台，绑定<div>容器

```js
var stage = new Kinetic.Stage({
    container: "container",
    width: 578,
    height: 400
});
```

4.创建用户层

```js
var layer = new Kinetic.Layer();
```

5.创建一个线形对象

```js
var leftEye = new Kinetic.Line({
    x: 150,
    points: [0,200,50,190,100,200,50,210],
    tension: 0.5, //线条弹性(类似于border-radius)
    closed: true,
    stroke: 'white', //线条颜色
    strokeWidth: 10
});
```

6.向用户层中添加上面的线形

```js
layer.add(leftEye);
```

7.将上面的用户层添加到舞台上

```js
stage.add(layer);
```

8.让小丑动起来

```js
var leftEyeTween = new Kinetic.Tween({
    node: leftEye,
    duration: 1,
    easing: Kinetic.Easings.ElasticEaseOut,
    y: -100,
    points: [0,200,50,150,100,200,50,200]
});
```

9.鼠标事件

```js
stage.getContainer().addEventListener('mouseover',function(){
    leftEyeTween.play();
});
stage.getContainer().addEventListener('mouseout',function(){
    leftEyeTween.reverse();
});
```