window.onload = function () {
    var ctx = document.getElementById('canvas').getContext('2d');

    //配置全局默认信息
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#777';

    var myChart = new Chart(ctx,{
        type: 'pie',
        data: {
            labels: ["北京","上海","杭州","天津","广州","南昌"],
            datasets: [{
                label: "工作热度值",
                data: [2345,4678,3289,4232,3189,4823],
                backgroundColor: [
                    'rgba(255,99,132,0.6)',
                    'rgba(54,39,132,0.6)',
                    'rgba(54,99,32,0.6)',
                    'rgba(55,90,152,0.6)',
                    'rgba(211,30,89,0.6)',
                    'rgba(65,49,72,0.6)'
                ],
                borderWidth: 2,
                borderColor: '#777',
                hoverBorderWidth: 3,
                hoverBorderColor: '#000'
            }]
        },
        options: {
            title: {
                display: true,
                text: "中国各大城市工作热度值",
                fontSize: 25
            },
            legend: {  //工作热度值
                display: true,
                position: 'right',
                labels: {
                    fontColor: "#000"
                }
            },
            layout: {
               padding: {
                   left: 50,right:0,bottom:0,top:0
               }
            },
            tooltips: {  //鼠标划上方块出现，城市和data
                enabled: true
            }
        }
    });
}
