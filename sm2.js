setTimeout(function () {
    console.log("hello world");
}, 3000);

let plr1 = 0;
let plr2 = 0;
let player1 = false;
let player2 = false;
let plRes1;
let plRes2;
let p1win = 0;
let p2win = 0;
let i = 0;
let f=true;


function myfun() {
    if (f) {
        let show = document.getElementById("show")
        let img1 = document.getElementById('img1')
        let tb1 = document.getElementById('tb1');
        let fw = document.getElementById('fw');
        f=false;

        img1.src = "https://viterbi-web.usc.edu/~ckojukwu/itp301/assignment_04/img/diceroll.gif"
        setTimeout(function () {
            let n = document.getElementById("n")
            let btn = document.getElementById('btn');
            plr1 = radiant(1, 6)
            if (!n.value) {
                n.value = "Player 1"
            }
            show.innerHTML = n.value + ":" + plr1
            btn.style.backgroundColor = "green"
            btn.style.color = "white"

            player1 = true;
            plRes1 = n.value;

            //for image
            if (plr1 == 1) {
                img1.src = "https://t3.ftcdn.net/jpg/01/97/16/30/360_F_197163001_H2gm3LqIrVTm7Fne6kclwRDfMcfm57BC.jpg"
            }
            if (plr1 == 2) {
                img1.src = "https://static.thenounproject.com/png/3899961-200.png"
            }
            if (plr1 == 3) {
                img1.src = "https://www.svgrepo.com/show/320121/inverted-dice-3.svg"
            }
            if (plr1 == 4) {
                img1.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Dice-4-b.svg/836px-Dice-4-b.svg.png"
            }
            if (plr1 == 5) {
                img1.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Dice-5-b.svg/1024px-Dice-5-b.svg.png"
            }
            if (plr1 == 6) {
                img1.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGyvsEBGlRP_g_X8EHgsyD_5JzFCF8nYIgoh_88JXlCg&s"
            }





            let win1 = document.getElementById('win1')

            if (player1 && player2) {

                i++;
                f=true
                player1 = false;
                player2 = false;

                if (plr1 > plr2) {
                    p1win++;
                    win1.innerHTML = n.value
                    tb1.innerHTML += `<tr>
                                    <td>
                                         ${p1win} 
                                   </td>
                                    <td>
                                        ${p2win}
                                    </td>
                                    
                                </tr>`
                }
                else if (plr1 == plr2) {
                    // document.getElementById('win').innerText = "Draw"
                    win1.innerHTML = "draw"
                    tb1.innerHTML += `<tr>
                                    <td>
                                         ${p1win} 
                                   </td>
                                    <td>
                                        ${p2win}
                                    </td>
                                    
                                </tr>`
                }
                else {
                    win1.innerHTML = plRes2
                    p2win++;
                    tb1.innerHTML += `<tr>
                                    <td>
                                         ${p1win} 
                                   </td>
                                    <td>
                                        ${p2win}
                                    </td>
                                    
                                </tr>`
                }
                if (i == 3) {
                    if (p1win > p2win) {
                        fw.innerHTML = `final winner is:${plRes1}`
                    }
                    else {
                        fw.innerHTML = `final winner is: ${plRes2}`
                    }
                }
            }
        }, 1000);
        // img1.src="https://t4.ftcdn.net/jpg/02/26/41/27/360_F_226412790_OxHXXGzZGqlQaGxhmlYAKXJCgPvs5dkK.jpg"
        // show.innerHTML=radiant(1,6)

    }
}
function radiant(min, max) {

    //1 se 6 tak ki value chahiye
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function myfun2() {
    let showme = document.getElementById("showme")
    let img2 = document.getElementById('img2')
    let tb1 = document.getElementById('tb1');
    let fw = document.getElementById('fw');
    let img3 = document.getElementById('img3')

    img2.src = "https://viterbi-web.usc.edu/~ckojukwu/itp301/assignment_04/img/diceroll.gif"
    setTimeout(function () {
        showme.innerHTML = radiant(1, 6)
        let n1 = document.getElementById("n1")
        plr2 = radiant(1, 6);

        if (!n1.value) {
            n1.value = "Player 2"
        }
        showme.innerHTML = n1.value + ":" + plr2
        document.getElementById('btn1').style.backgroundColor = "green";

        //for images
        if (plr2 == 1) {
            img2.src = "https://t3.ftcdn.net/jpg/01/97/16/30/360_F_197163001_H2gm3LqIrVTm7Fne6kclwRDfMcfm57BC.jpg"
        }
        if (plr2 == 2) {
            img1.src = "https://static.thenounproject.com/png/3899961-200.png"
        }
        if (plr2 == 3) {
            img2.src = "https://www.svgrepo.com/show/320121/inverted-dice-3.svg"
        }
        if (plr2 == 4) {
            img2.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Dice-4-b.svg/836px-Dice-4-b.svg.png"
        }
        if (plr2 == 5) {
            img2.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Dice-5-b.svg/1024px-Dice-5-b.svg.png"
        }
        if (plr2 == 6) {
            img2.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGyvsEBGlRP_g_X8EHgsyD_5JzFCF8nYIgoh_88JXlCg&s"
        }

        player2 = true;
        plRes2 = n1.value

        let win1 = document.getElementById('win1')

        if (player1 && player2) {

            f=true
            i++;
            player1 = false;
            player2 = false;

            if (plr1 < plr2) {
                p2win++;
                win1.innerHTML = n1.value;
                tb1.innerHTML += `<tr>
                                    <td>
                                         ${p1win} 
                                   </td>
                                    <td>
                                        ${p2win}
                                    </td>
                                    
                                </tr>`

            }
            else if (plr1 == plr2) {
                // document.getElementById('win').innerText = "Draw"
                win1.innerHTML = "draw"
                tb1.innerHTML += `<tr>
                                    <td>
                                         ${p1win} 
                                   </td>
                                    <td>
                                        ${p2win}
                                    </td>
                                    
                                </tr>`
            }
            else {
                p1win++;
                win1.innerHTML = plRes1
                tb1.innerHTML += `<tr>
                                    <td>
                                         ${p1win} 
                                   </td>
                                    <td>
                                        ${p2win}
                                    </td>
                                    
                                </tr>`
            }
            if (i == 3) {
                console.log("hi")
                if (p1win > p2win) {
                    fw.innerHTML = `final winner is:${plRes1}`
                }
                else {
                    fw.innerHTML = `final winner is: ${plRes2}`
                }
                img3.style.display = "block"
            }

        }
    }, 1000);


}