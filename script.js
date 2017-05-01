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


var grass = document.createElement("div");
grass.className = "sun";
view.appendChild(sun);

//Write a [`while`] loop to create 5 divs. 
//The div classes will be "**ray-1**", "**ray-2**", 
//"**ray-3**", "**ray-4**", and "**ray-5**". 
//Append each of these divs to the previously created "sun" div from step 5.



var grass = document.createElement("div");
grass.className = "mountain";
view.appendChild(mountain);

var grass = document.createElement("div");
grass.className = "mountainTop";
view.appendChild(mountainTop);


// Write a [`do...while`] loop to create 3 divs. 
//The div classes will be "**mountain-cap-1**", 
//"**mountain-cap-2**", and "**mountain-cap-3**". 
//Append each of these divs to the previously created "mountain-top" div from step 8.