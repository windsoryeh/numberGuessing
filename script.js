function generate() {
    clearInput()
    let beginning = Number(document.getElementById("minimum").value);
    let ending = Number(document.getElementById("maximum").value);
    let currlist = document.getElementById("list")
    if (ending < beginning) {
        currlist.innerHTML = `<p class="red">Invalid range: maximum must be greater than or equal to minimum.</p><hr>` + currlist.innerHTML;
        return;
    }
    else{
        let difficulty = ending - beginning + 1;
        
        let answer = beginning + Math.floor(Math.random() * difficulty);
        
        console.log(answer);
        window.answer = answer
        
        if (beginning == ending){
            currlist.innerHTML = `<p class="green">The answer is obviously ${answer}. You are an absolute cheater.</p><hr>` + currlist.innerHTML;

        }
        else currlist.innerHTML = `<p class="green">A new number between ${beginning} and ${ending} (including) has been generated.</p><hr>` + currlist.innerHTML;

    }
    Window.relationsMax = ending
    Window.relationsMin = beginning
    Window.tries = 0
    relations();
}

window.onload = generate()

function solve(){
    let input = Number(document.getElementById("input").value);
    Window.tries += 1
    let currlist = document.getElementById("list")
    let list = [" is too large." , " is too small." , " is the correct answer."]

    if (input > answer){
        currlist.innerHTML = `Trial #${Window.tries}: ${input + list[0]}` + `<br>` + currlist.innerHTML;
        if (input < Window.relationsMax){
            Window.relationsMax = input - 1
        }
    }
    else if (input < answer){
        currlist.innerHTML = `Trial #${Window.tries}: ${input + list[1]}` + `<br>` + currlist.innerHTML;
        if (input > Window.relationsMin){
            Window.relationsMin = input + 1
        }
     }
    else{
        currlist.innerHTML = `<p class="blue">Trial #${Window.tries}: ${input + list[2]}</p>` + `<br>` + currlist.innerHTML;
        generate()
    }
    relations();
}

function enterGenerate(){
    if(event.keyCode == 13) {
        generate();
    }
}

function enterSolve(){
    if(event.keyCode == 13) {
        solve();
    }
}

function relations(){
    document.getElementById("relations").innerHTML = `${Window.relationsMin} ~ ${Window.relationsMax}`
}

function clearInput(){
    document.getElementById("input").value = ""
}