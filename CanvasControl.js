//Souce: https://en.wikipedia.org/wiki/A*_search_algorithm

window.onload = function(){

    var canvas = document.getElementById("Background");
    var ctx = canvas.getContext("2d");

    //make 3d array of grid
    var rows = 5;
    var cols = 5;
    var grid = new Array(cols)

    var openSet = [];
    var closedSet = [];

    var startNode;
    var endNode;

    var width = canvas.width;
    var height = canvas.height;

    var PointWidth,PointHeight;


    class Point{
        constructor(f,g,h,x,y){
            this.x = x;
            this.y = y;
            this.f = f;
            this.g = g;
            this.h = h;
        }

        ShowPoint(){
            drawCircle(ctx,this.x * PointWidth,this.y * PointHeight,3,"white","white",3)
        }
    }

    function MakeGrid(){
        for(var i = 0; i < cols; i++){
            grid[i] = new Array(rows);
        }

        for(var i = 0; i < cols; i++){
            for(var j = 0; j < rows; j++){
                grid[i][j] = new Point();
            }
        }

        PointWidth = width / cols;
        PointHeight = height / rows;

        startNode = grid[0][0];
        endNode = grid[cols - 1][rows - 1];

        openSet.push(startNode);
    }

    function main(){
        if(openSet.length > 0){
            //keep looping
        } else{
            //no solution
        }
    }

    //basic function to draw a circle shape
    function drawCircle(ctx, x, y, radius, fill, stroke, strokeWidth) {
        ctx.beginPath()
        ctx.arc(x, y, radius, 0, 2 * Math.PI, false)
        if (fill) {
            ctx.fillStyle = fill
            ctx.fill()
        }
        if (stroke) {
            ctx.lineWidth = strokeWidth
            ctx.strokeStyle = stroke
            ctx.stroke()
        }
    }

    for(var i = 0; i < cols; i++){
        for(var j = 0; j < rows; j++){
            grid[i][j].ShowPoint();
        }
    }
    
    MakeGrid();
    console.log(grid);
}