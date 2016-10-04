console.log("Mini golf total scores");


var Bob = [3, 2, 6, 11, 9, 2, 6, 9, 10];
var Jimbo = [5, 12, 9, 22, 13, 7,16, 10, 11];
var Fish = [2,2,4,5,4,3,6,4,1];
var par = [3,4,5,5,3,3,4,3,5];



function totalScores(playername)
{
    var total = [];
    var diff = [];
    
    for (i = 0; i < 9; i ++)
    {
        diff = par[i] - playername[i];
        total.push(diff);
    }
    
    var totalScores = 0;
    for (i=0; i < 9; i++)
    {
        totalscores = par[i] + total[i];
    }
    return totalscores;
}



console.log(totalScores(Fish));