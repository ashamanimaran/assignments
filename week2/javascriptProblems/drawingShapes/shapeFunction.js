var shapeModuleFunction=function(){
var canvaswidth;
var canvasheight;
var shapeModule={
clear:function(width,height){
  canvaswidth=width;
  canvasheight=height;  
},
drawRect:function(x,y,width,height,color){
    var canvasctx=document.getElementById("mycanvas").getContext("2d");
    canvasctx.fillStyle=color;
    canvasctx.clearRect(0,0,canvaswidth,canvasheight);
    canvasctx.fillRect(x,y,width,height);
},
drawCircle: function(x,y,radius,color){
    var canvasctx=document.getElementById("mycanvas").getContext("2d");
    canvasctx.fillStyle=color;
    canvasctx.clearRect(0,0,canvaswidth,canvasheight);
    canvasctx.beginPath();
    canvasctx.arc(x,y,radius,0,Math.PI*2,false);
    canvasctx.closePath();
    canvasctx.fill();   
},
drawLine: function(x1,y1,x2,y2,color){
    var canvasctx=document.getElementById("mycanvas").getContext("2d");
    canvasctx.strokeStyle=color;
    canvasctx.clearRect(0,0,canvaswidth,canvasheight);
    canvasctx.beginPath();
    canvasctx.moveTo(x1,y1);
    canvasctx.lineTo(x2,y2);
    canvasctx.stroke();
    canvasctx.closePath();
      
}
};
return shapeModule;
}();
