           //for first player
           var a = Math.floor(Math.random() * 6) + 1;

            if (a == 1) {
                document.querySelector(".play1 .img1").setAttribute("src", "./image/dice1.png");
            }

            if (a == 2) {
                document.querySelector(".play1 .img1").setAttribute("src", "./image/dice2.png");
            }

            if (a == 3) {
                document.querySelector(".play1 .img1").setAttribute("src", "./image/dice3.png");
            }

            if (a == 4) {
                document.querySelector(".play1 .img1").setAttribute("src", "./image/dice4.png");
            }

            if (a == 5) {
                document.querySelector(".play1 .img1").setAttribute("src", "./image/dice5.png");
            }

            if (a == 6) {
                document.querySelector(".play1 .img1").setAttribute("src", "./image/dice6.png");
            }
            
            //for second player
            var b = Math.floor(Math.random() * 6) + 1;

            if (b == 1) {
                document.querySelector(".play1 .img2").setAttribute("src", "./image/dice1.png");
            }

            if (b == 2) {
                document.querySelector(".play1 .img2").setAttribute("src", "./image/dice2.png");
            }

            if (b == 3) {
                document.querySelector(".play1 .img2").setAttribute("src", "./image/dice3.png");
            }

            if (b == 4) {
                document.querySelector(".play1 .img2").setAttribute("src", "./image/dice4.png");
            }

            if (b == 5) {
                document.querySelector(".play1 .img2").setAttribute("src", "./image/dice5.png");
            }

            if (b == 6) {
                document.querySelector(".play1 .img2").setAttribute("src", "./image/dice6.png");
            }

            //for showing final result
            if (a > b) {
                document.querySelector("h1").textContent = "Player 1 Won"
                document.querySelector("h1").style.color = "white"
                document.getElementById("p1").style.color = "red"
            } 
            else if(a==b){
                document.querySelector("h1").textContent = "Match Draw..."
                document.querySelector("h1").style.color = "red"
            }
            else {
                document.querySelector("h1").textContent = "Player 2 Won"
                document.querySelector("h1").style.color = "black"
                document.getElementById("p2").style.color = "red"
            }