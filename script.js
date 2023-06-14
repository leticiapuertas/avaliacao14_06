function lista() {
    var input = document.querySelector('#alunos');
    if (input.value !== "") {
        var lista_1 = document.querySelector('ul');
        var li = document.createElement('li');
        var card = document.createElement('article');
        var texto = document.createTextNode(input.value);
        li.appendChild(card);
        card.appendChild(texto);
        lista_1.appendChild(li);
    }
}
