function MiniGolf() {
    var name=prompt("Welcome to Virtual Mini Golf! What is your name?");
    if (name != null) { 
        var NumofHoles=prompt("Hi, " + name + "! Would you like to play 3 or 6 holes today?");
        NumofHoles = Number(NumofHoles)
        var Par0 = 3 * NumofHoles;
        var TotalPutts = 0;
        for(i = 1; i <= NumofHoles; i++) {
        var PuttsPerHole=prompt("How many puts for hole " + i + "? (par is 3)");
        PuttsPerHole = Number(PuttsPerHole)
        TotalPutts = Number(TotalPutts)
        TotalPutts += PuttsPerHole;
        }
        var TotalPar = TotalPutts - Par0;
        if (TotalPar == 0) {
        alert("Good game, " + name + "! Your total par was: " + TotalPar);
        }
        else if (TotalPar < 0) {
        alert("Great Job, " + name + "! Your total par was: " + TotalPar);
        }
        else {
        alert("Nice try, " + name + "... Your total par was: +" + TotalPar);
        }
    }   
}
MiniGolf();
