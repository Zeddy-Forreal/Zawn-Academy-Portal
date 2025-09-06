let buts = document.querySelectorAll(".student button")
let inps = document.querySelectorAll(".field input")
buts.forEach((button)=>{
    button.onclick = ()=>{
        activate(buts, button)
    }
})

function activate(arr, target = false){
    arr.forEach((elem)=>{
        elem.classList.remove("active");
    })
    if(target){
        target.classList.add("active")
    }
}

inps.forEach((input)=>{
    input.onfocus = ()=>{
        input.parentElement.classList.add("active")
    }
        input.onblur = ()=>{
        input.parentElement.classList.remove("active")
    }
})