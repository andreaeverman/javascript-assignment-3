// Do your work in this file.


var view = document.createElement("div");
view.className = "view";
document.body.appendChild(view);

// writing a var in javascript like this ^ is the same as// 
//defining something in HTML like this v //
// (and it literally writes the HTML for you.) - Becky
//{/*<html>
/*<body>
<div classname="view">
    </body>
    </html>*/

var grass = document.createElement("div");
grass.className = "grass";
view.appendChild(grass);


var sun = document.createElement("div");
sun.className = "sun";
view.appendChild(sun);


var y = 0
while (y <= 5) {
    var ray = document.createElement("div");
    ray.className = "ray-" + y;
    sun.appendChild(ray);
    y++
}


//this ^ is like doing this in HTML:
/*<html>
    <body>
        <div classname="ray-1"></div>
        <div classname="ray-2"></div>
        <div classname="ray-3"></div>
        <div classname="ray-4"></div>
        <div classname="ray-5"></div>
        </body>
        </html>*/


    //Write a [`while`] loop to create 5 divs. 
    //The div classes will be "**ray-1**", "**ray-2**", 
    //"**ray-3**", "**ray-4**", and "**ray-5**". 
    //Append each of these divs to the previously created "sun" div from step 5.



    var mountain = document.createElement("div");
mountain.className = "mountain";
view.appendChild(mountain);

var mountainTop = document.createElement("div");
mountainTop.className = "mountain-top";
mountain.appendChild(mountainTop);

var z = 0
do {
    var mountainCap = document.createElement("div");
    mountainCap.className = "mountain-cap-" + z;
    mountainTop.appendChild(mountainCap);
    z++
} 
while (z <= 3) 



// Write a [`do...while`] loop to create 3 divs. 
//The div classes will be "**mountain-cap-1**", 
//"**mountain-cap-2**", and "**mountain-cap-3**". 
//Append each of these divs to the previously created "mountain-top" div from step 8.

