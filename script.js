function generate() {
    let beginning = Number(document.getElementById("minimum").value);
    let ending = Number(document.getElementById("maximum").value);
    let difficulty = ending - beginning + 1;
    
    let answer = beginning + Math.ceil(Math.random() * difficulty) - 1;
    
    console.log(answer);
    window.answer = answer

    let currlist = document.getElementById("list")
    currlist.innerHTML = `<br>` + currlist.innerHTML;
}

window.onload = generate()

function solve(){
    let input = Number(document.getElementById("input").value);
    let currlist = document.getElementById("list")
    let list = ["過大" , "過小" , "正確"]

    if (input > answer){
        currlist.innerHTML = input + list[0] + `<br>` + currlist.innerHTML;
    }
    else if (input < answer){
        currlist.innerHTML = input + list[1] + `<br>` + currlist.innerHTML;
    }
    else{
        currlist.innerHTML = input + list[2] + `<br>` + currlist.innerHTML;
        generate()
    }
}