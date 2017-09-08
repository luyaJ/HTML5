var randomScalingFactor = function(){ return Math.round(Math.random()*100)};  // 创建随机数
var lineChartData = {
    labels : ["January","February","March","April","May","June","July"],  // 横坐标的数据
    datasets : [
        {
            label: "My First dataset",
            fillColor : "rgba(220,220,220,0.2)", // 填充颜色
            strokeColor : "rgba(220,220,220,1)", // 线条颜色
            pointColor : "rgba(220,220,220,1)", // 点颜色
            pointStrokeColor : "#fff", // 点线条颜色
            pointHighlightFill : "#fff", // 点高光填充
            pointHighlightStroke : "rgba(220,220,220,1)", // 点线条高光颜色
            data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]  // 纵坐标的随机数
        },
        {
            label: "My Second dataset",
            fillColor : "rgba(151,187,205,0.2)",
            strokeColor : "rgba(151,187,205,1)",
            pointColor : "rgba(151,187,205,1)",
            pointStrokeColor : "#fff",
            pointHighlightFill : "#fff",
            pointHighlightStroke : "rgba(151,187,205,1)",
            data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
        }
    ]

}

window.onload = function(){
    var ctx = document.getElementById("canvas").getContext("2d");  // 获取上下文对象
    window.myLine = new Chart(ctx,{
        type: 'line',
        data: lineChartData,
    });
}
