window.addEventListener('load', function () {
    let scoreDisplay = document.getElementById("currentScore");
    let picDisplay = document.getElementById("currentMonsterPic");
    let nameDisplay = document.getElementById("currentName");
    let wrongRoom = Math.floor(Math.random() * 115000);
    let door = document.getElementById("door");
    let currentScarer = 'Scott Squibbles';
    let currentScareValue = 5;
    let score = 0;
    var fired = false;

    console.log(score)

    function updateName() {
        if (score > 1000 && score < 2000) {
            nameDisplay.innerHTML = 'Don Carlton';
            currentScareValue = 10;
            picDisplay.src = 'images/donC.png';
            console.log('trying to update name')
        } else if (score > 2000 && score < 5000) {
            nameDisplay.innerHTML = 'George Sanderson';
            currentScareValue = 15;
            console.log('trying to update name')
            picDisplay.src = 'images/georgeS.png';
        } else if (score > 5000 && score < 15000) {
            nameDisplay.innerHTML = 'Johnny Worthington';
            currentScareValue = 25;
            picDisplay.src = 'images/johnnyW.png';
        } else if (score > 15000 && score < 30000) {
            nameDisplay.innerHTML = 'Randall Boggs';
            currentScareValue = 32;
            picDisplay.src = 'images/randall.png';
        } else if (score > 30000 && score < 65000) {
            nameDisplay.src = 'James Sullivan';
            currentScareValue = 35;
            picDisplay.src = 'images/sulley.png';
        } else if (score > 65000 && score < 115000) {
            nameDisplay.innerHTML = 'Abigail Heartscrabble';
            currentScareValue = 50;
            picDisplay.src = 'images/heartscrabble.png';
        } else if (score > 115000) {
            score = 'You Just Broke The All Time Scare Record';
        }
    }

    function addScore() {
        score += currentScareValue;
        scoreDisplay.innerText = score;
        console.log(score)
        updateName()
    }

    if (wrongRoom === score) {
        let previousWrongRoom = wrongRoom
        score -= previousWrongRoom;
        console.log(previousWrongRoom);
        let wrongRoom = Math.floor(Math.random() * 115000);
    }

    document.onkeydown = function() {
        if(!fired) {
            fired = true;
            addScore();
        }
    };
    
    document.onkeyup = function() {
        fired = false;
    };
    
});