//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let friends = [];
let regex = /^[A-Za-z]+$/;
const list = document.getElementById('listaAmigos');
const result = document.getElementById('resultado');
const btn = document.getElementById('btn-submit');
let inputFriends;

const adicionarAmigo = () => {
    inputFriends = document.getElementById('amigo').value;
    if (!inputFriends || !regex.test(inputFriends)) {
        if(!isNaN(inputFriends)){
            alert("Você digitou número ao invés do nome. Por favor, insira um nome.");
            inputClear();
        } else {
            alert("Por favor, insira um nome.");
            inputClear(); 
        }
    } else {
        console.log('teste')
        friends.push(inputFriends);
        inputClear();
        updatedList();
    }
}

const sortearAmigo = () => {
    result.innerHTML = '';
    const amount = friends.length;
    let li = document.createElement('li');
    if(amount >= 2){
        const luck = Math.floor(Math.random() * amount);
        li.textContent = `O sorteado foi ${friends[luck]}`;
        result.appendChild(li);
    } else {
        li.textContent = `Não foi possível sortear, mínimo para sorteo é 2 pessoas!`
        result.appendChild(li);
        li.classList.add('name-danger');
    }
}

const inputClear = () => {
    document.getElementById('amigo').value = '';
}

const listClear = () => {
    list.innerHTML = '';
    friends = [];
    result.innerHTML = '';
}

const updatedList = () => {
    list.innerHTML = ''
    console.log(friends)
    friends.map(function(index){
        let li = document.createElement('li');
        li.textContent = index;
        list.appendChild(li);
    })
}

btn.addEventListener('click', function(event){
    event.preventDefault();
})

