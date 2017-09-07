window.onload = function(){
    //定义全局变量
    var sw = 578;
    var sh = 400;

    //创建kinetic舞台，绑定div容器
    var stage = new Kinetic.Stage({
        container: "container",
        width: 578,
        height: 400
    });

    //创建kinetic用户层
    var layer = new Kinetic.Layer({
        y: -30
    });

    //创建一个kinetic线形对象
    var leftEye = new Kinetic.Line({
       x: 150,
       points: [0,200,50,190,100,200,50,210],
       tension: 0.5, //线条弹性(类似于border-radius)
       closed: true,
       stroke: 'white', //线条颜色
       strokeWidth: 10
    });
    var rightEye = new Kinetic.Line({
       x: sw - 250,
       points: [0,200,50,190,100,200,50,210],
       tension: 0.5,
       closed: true,
       stroke: 'white',
       strokeWidth: 10
    });
    var nose = new Kinetic.Line({
        points: [240,280,sw/2,300,sw-240,280],
        tension: 0.5,
        closed: true,
        stroke: 'white',
        strokeWidth: 10
    });
    var mouth = new Kinetic.Line({
        points: [150,340,sw/2,380,sw-150,340,sw/2,sh],
        tension: 0.5,
        closed: true,
        stroke: "red",
        strokeWidth: 10
    });

    //向用户层中添加上面的线形
    layer.add(leftEye).add(rightEye).add(nose).add(mouth);

    //将上面的用户层添加到舞台上
    stage.add(layer);

    //让小丑动起来
    var leftEyeTween = new Kinetic.Tween({
        node: leftEye,
        duration: 1,
        easing: Kinetic.Easings.ElasticEaseOut,
        y: -100,
        points: [0,200,50,150,100,200,50,200]
    });
    var rightEyeTween = new Kinetic.Tween({
        node: rightEye,
        duration: 1,
        easing: Kinetic.Easings.ElasticEaseOut,
        y: -100,
        points: [0,200,50,150,100,200,50,200]
    });
    var noseTween = new Kinetic.Tween({
        node: nose,
        duration: 1,
        easing: Kinetic.Easings.ElasticEaseOut,
        y: -100,
        points: [220,280,sw/2,200,sw-220,280]
    });
    var mouthTween = new Kinetic.Tween({
        node: mouth,
        duration: 1,
        easing: Kinetic.Easings.ElasticEaseOut,
        points: [100,250,sw/2,250,sw-100,250,sw/2,sh-20]
    });

    stage.getContainer().addEventListener('mouseover',function(){
       leftEyeTween.play();
       rightEyeTween.play();
       noseTween.play();
       mouthTween.play();
    });
    stage.getContainer().addEventListener('mouseout',function(){
        leftEyeTween.reverse();
        rightEyeTween.reverse();
        noseTween.reverse();
        mouthTween.reverse();
    });
}