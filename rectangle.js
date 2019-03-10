function recTangle(width,height) {
    this.width=width;
    this.height=height;
    this.C=2*this.width+2*this.height;
    this.S=this.width*this.height
}
let a=[];
function inputwidthheight() {
let i=parseFloat(prompt("Enter width"));
let j=parseFloat(prompt("Enter height"));
a[a.length]=new recTangle(i,j);
}
var pen =document.getElementById("showrectangle").getContext("2d");
function showcanvas(hcn) {
    pen.clearRect(0,0,400,300);
    // pen.moveTo(10, 10);
    // pen.lineTo(hcn.width+10, 10);
    // pen.lineTo(hcn.width+10, hcn.height+10);
    // pen.lineTo(10, hcn.height+10);
    pen.fillStyle="red";
    // pen.fillRect(0,0,hcn.width,hcn.height);
    pen.fillRect(10,10,hcn.width,hcn.height)
    // pen.lineTo(10, 10);

    // pen.stroke();
}
function showinfor() {
    alert("with=" +a[a.length-1].width )
    alert("height=" +a[a.length-1].height )
    alert("C=" +a[a.length-1].C )
    alert("S="+ a[a.length-1].S)

}
function cleara() {pen.clearRect(0,0,400,300)

}