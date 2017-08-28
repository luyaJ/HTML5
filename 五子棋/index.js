window.onload = function(){
	init();
}

var maps = new Array(15);
for(var i=0 ; i<15 ; i++){
	maps[i] = new Array(15);
	for(var j=0 ; j<15 ; j++){
		maps[i][j] = 0;
	}
}

var black = new Image();
var white = new Image();
black.src = 'images/black.png';
white.src = 'images/white.png';

var canvas;
var ctx;
var isBlack = true;

//初始化棋盘
function init(){
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');

	ctx.strokeStyle = '#fff';
	for(var i=0 ; i<15 ; i++){
		for(var j=0 ; j<15 ; j++){
			ctx.strokeRect(j*40,i*40,40,40);
		}
	}
}

//下子（screen.width=1536；棋盘左边距离浏览器窗口的位置468）
function play(e){
	var leftOffset = (screen.width-600)/2;
	//点击后坐标
	var x = e.clientX - leftOffset;
	var y = e.clientY - 30;

	var row,col;
	if(x%40 < 20){  // 40/2=20
		col = parseInt(x/40);
	} else {
		col = parseInt(x/40 + 1);
	}
	if(y%40 < 20){
		row = parseInt(y/40);
	} else {
		row = parseInt(y/40 + 1);
	}

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
	
	// param t 1黑 2白 
	// 计算上下左右成行的棋子数
	function iswin(t,row,col){
		var orgrow = row;
		var orgcol = col;
		var total = 1; 

		//水平方向
		while(col-1 > 0 && maps[row][col-1] == t){
			total++;
			col--;
		}
		row = orgrow;
		col = orgcol;
		while(col+1 < 15 && maps[row][col+1] == t){
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

		//垂直方向
		row = orgrow;
		col = orgcol;
		total = 1;
		while(row-1 > 0 && maps[row-1][col] == t){
			row--;
			total++;
		} 
		row = orgrow;
		col = orgcol;
		while(row+1 < 15 && maps[row+1][col] == t){
			row++;
			total++;
		}
		if(total >= 5){
			if(t == 1){
				alert('黑子赢');
			} else {
				alert('白子赢');
			}
		}

		//左下(行加一，列减一) 右上(行减一，列加一) 
		row = orgrow;
		col = orgcol;
		total = 1;
		while(row+1 < 15 && col-1 > 0 && maps[row+1][col-1] == t){
			row++;
			col--;
			total++;
		}
		row = orgrow;
		col = orgcol;
		while(row-1 > 0 && col+1 < 15 && maps[row-1][col+1] == t){
			row--;
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

		//左上(行减一，列加一) 右下(行加一，列减一) 
		row = orgrow;
		col = orgcol;
		total = 1;
		while(row-1 > 0 && col-1 > 0 && maps[row-1][col-1] == t){
			row--;
			col--;
			total++;
		}
		row = orgrow;
		col = orgcol;
		while(row+1 < 15 && col+1 < 15 && maps[row+1][col+1] == t){
			row++;
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

	}
	
}


	