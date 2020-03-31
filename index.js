function newColor() {
    var colorStart = [
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256)];
    
    
    var colorChange = [
        calcChange(colorStart[0]),
        calcChange(colorStart[1]),
        calcChange(colorStart[2]),]
    
    return {"colorStart":colorStart, "colorChange":colorChange}
}

function calcChange(rgb){
    return Math.floor(rgb/10);
}

function generateGameSpace(color, change){
    let gameSpace = ""
    for (i=0; i<16; i++){
        gameSpace += "<div class='cell' id='cell-" + i +"'></div>"
    }
    var gameContainer = document.querySelector('#game-container')
    gameContainer.innerHTML = "";
    gameContainer.innerHTML = gameSpace;
    gameContainer.addEventListener("click", this.reset);

    document.querySelectorAll('.cell').forEach( (e)=> {
        let rollOver = -1;
        e.addEventListener("mouseenter", (cell) => {
            rollOver++
            console.log(cell.target.id);
            cell.target.style.backgroundColor = 
                'rgb('
                + (color[0]-(change[0]*rollOver)) + ','
                + (color[1]-(change[1]*rollOver)) + ','
                + (color[2]-(change[2]*rollOver)) +
                ')';
            })
        });
}

function reset(){
    colors = newColor()
    generateGameSpace(colors.colorStart,colors.colorChange)
}

reset();