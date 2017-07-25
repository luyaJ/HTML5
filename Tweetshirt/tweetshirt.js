window.onload = function () {
    var btn = document.getElementById("previewButton");
    btn.onclick = previewHandler;

    //每次点击preview按钮，都只出现新的画布
    function fillBackgroundColor(canvas,context){
        var selectObj = document.getElementById("backgroundColor");
        var index = selectObj.selectedIndex;
        var bgColor = selectObj.options[index].value;
        context.fillStyle = bgColor;
        context.fillRect(0,0,canvas.width,canvas.height);
    }

    function previewHandler() {
        var canvas = document.getElementById("tshirtCanvas");
        var context = canvas.getContext("2d");
        //绘制方块前增加函数调用，覆盖之前绘制的内容，为之后的绘制提供一个干净整洁的背景
        fillBackgroundColor(canvas,context);
        drawText(canvas,context);
        drawIMG(canvas,context);

        //查看界面中选择了哪个形状
        var selectObj = document.getElementById("shape");
        //查找选择了哪个元素（方or圆），为此得到所选元素的索引，把他的值赋给变量shape
        var index = selectObj.selectedIndex;
        var shape = selectObj[index].value;

        if(shape == "squares"){
            for(var squares=0 ; squares<20 ; squares++){
                //绘制方块，利用一个新的函数
                drawSquare(canvas,context);
            }
         } else if(shape == "circles") {
            for(var circles=0 ; circles<20 ; circles++){
                drawCircle(canvas,context);
            }
        }

        function  drawSquare(canvas,context) {
            var w = Math.floor(Math.random() * 40);
            var x = Math.floor(Math.random() * canvas.width);
            var y = Math.floor(Math.random() * canvas.height);

            context.fillStyle = "lightblue";
            context.fillRect(x,y,w,w);
        }

        function drawCircle(canvas,context) {
            var radius = Math.floor(Math.random() * 50);
            var x = Math.floor(Math.random() * canvas.width);
            var y = Math.floor(Math.random() * canvas.height);

            context.beginPath();
            context.arc(x,y,radius,0,degreesToRadians(360),true);

            context.fillStyle = "lightblue";
            context.fill();
        }

        //度变成弧度
        function  degreesToRadians(degrees) {
            return (degrees * Math.PI / 180);
        }

        // function updateTweets(tweets) {
        //     var tweetsSelection = document.getElementById("tweets");
        //
        //     for(var i=0;i<tweets.length;i++){
        //         tweet = tweets[i];
        //         var option = document.createElement("option");
        //         option.text = tweet.text;
        //         option.value = tweet.text.replace("\"","'");
        //
        //         tweetsSelection.options.add(option);
        //     }
        //     tweetsSelection.selectedIndex = 0;
        // }

        function drawText(canvas,context) {
            var selectObj = document.getElementById("foregroundColor");
            var index = selectObj.selectedIndex;
            var fgColor = selectObj[index].value;

            context.fillStyle = fgColor;
            context.font = "bold 1em sans-serif";
            context.textAlign = "left";
            context.fillText("I saw this tweet",20,40);

            // selectObj = document.getElementById("tweets");
            // index = selectObj.selectedIndex;
            // var tweet = selectObj[index].value;
            // context.font = "italic 1.2em serif";
            // context.fillText(tweet,30,100);

            context.font = "bold 1em sans-serif";
            context.textAlign = "right";
            context.fillText("and all I got was this lousy t-shirt!",canvas.width-20,canvas.height-40);
        }

        //创建一个新的image对象
        function drawIMG(canvas,context) {
            var img = new Image();
            img.src = "deer.png";

            img.onload = function () {
                context.drawImage(img,20,120,70,70);
            };
        }

    }

}