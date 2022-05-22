let list = document.querySelector('#list')

let text = document.getElementById('data')

let add = document.querySelector('#add')

let sport = document.getElementsByClassName('sport')

for(let i = 0; i < sport.length; i++){
    sport[i].style.color = "red"
}

add.addEventListener('click', function(){
    let li = document.createElement('li')
    li.textContent = text.value
    list.appendChild(li)
    text.value=''
})