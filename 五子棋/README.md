2017/8/28 16:44:37 

## HTML5实现五子棋

使用HTML5画布实现五子棋。
```html
<canvas id="canvas" height="600" width="600" onclick="play(event)">you browser dose not support canvas!</canvas>
```

给画布样式：
```css
div{ height: 600px; width: 600px; margin: 30px auto; }
#canvas{ border: 1px solid #000; background: url(images/bak.jpg); }
```

初始化棋盘并绘制画布：
```js
canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

ctx.strokeStyle = '#fff';
for(var i=0 ; i<15 ; i++){
for(var j=0 ; j<15 ; j++){
ctx.strokeRect(j*40,i*40,40,40); //棋盘每格40px
    }
}
```

下子计算位置：

1.`e.clientX` 是鼠标点击的位置；`(screen.width-600)/2` 是棋盘距离浏览器窗口的位置。
```js
var leftOffset = (screen.width-600)/2;
var x = e.clientX - leftOffset;
var y = e.clientY - 30;
```

2.计算下子位置是靠近左边一格还是右边一格：
```js
var row,col;
if(x%40 < 20){  
	col = parseInt(x/40);
} else {
	col = parseInt(x/40 + 1);
}
if(y%40 < 20){
	row = parseInt(y/40);
} else {
	row = parseInt(y/40 + 1);
}
```

3.判断此时是下白棋还是下黑棋,先定义`var isBlack = true`
```js
if(isBlack){
    ctx.drawImage(black,col*40-20,row*40-20);
    isBlack = false;
    maps[row][col] = 1; //黑
    iswin(1,row,col);
} else {
    ctx.drawImage(white,col*40-20,row*40-20);
    isBlack = true;
    maps[row][col] = 2; //白
    iswin(2,row,col);
}
```

4.上面绘制好棋子后，就需要计算上下左右成行的棋子数，来判断是白子赢还是黑子赢：
```js
var orgrow = row;
var orgcol = col;
var total = 1; 

//水平方向
while(col-1 > 0 && maps[row][col-1] == t){  //水平向左，列-1，行不变
    total++;
    col--;
}
row = orgrow;
col = orgcol;
while(col+1 < 15 && maps[row][col+1] == t){  //水平向右，列+1，行不变
    col++;
    total++;
}
if(total >= 5){
    if(t == 1){
        alert('黑子赢');
    } else {
        alert('白子赢');
    }
}
```

垂直，左上右下，左下右上的方法和上面类似。