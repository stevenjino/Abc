function showDate(){
//Dom
    document.getElementById('Date').innerHTML = Date()
//        document.write("Hello from document.write");
//        styling
    document.getElementById('Date').style.color = "red";
    document.getElementById('Date').style.fontSize = "25px";
    //body styling
    document.body.style.background = "black";
}
//outer html to create elements
function createE(){
    document.getElementById('Date').outerHTML = "<a href='https://www.google.com/'>Google</a>"
    //    changing value of an attribute
    document.getElementById('myimage').src= "../images/closet4.jpg";
    var x = document.querySelectorAll("p.para");
    document.getElementById('Demo').innerHTML = "The first paragraph with class para is " +x[1].innerHTML;
}