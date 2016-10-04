console.log("dont steal my code");

var bang = function ()
{
    console.log("big bang");
}

// bang();

var poop = function ()
{
    document.body.style.backgroundColor = "green";
}

var  poopBtn = document.getElementById("poop-btn");
poopBtn.addEventListener("click", poop);




var flush = function()
{
    document.body.style.backgroundColor = "mintcream";
}

var delay =  function()
{
    setTimeout(flush, 5000);
}


var flushBtn = document.getElementById("flush-btn");
flushBtn.addEventListener("click", delay);

// setTimeout(flush(), 5000);

