var tarefas = []
var input = document.querySelector('#input')
var todoLista = document.querySelector('#todo-lista')
var excluir = document.querySelector('.botão-excluir')
var finalizar = document.querySelector('.botão-ok')

todoLista.addEventListener("click", confirmarExcluir)

function adicionar(){
    if (input.value.length == 0){
        window.alert('[ERRO] Preencha sua tarefa antes de adicionar')
    } else {
        tarefas.push(input.value)
        //DIV
        var todoDiv = document.createElement('div')
        todoDiv.classList.add('todo')
        //LI
        var newTodo = document.createElement('li')
        newTodo.innerHTML = tarefas[tarefas.length-1]
        newTodo.classList.add('todo-item')
        todoDiv.appendChild(newTodo)
        //Botão Finalizar Tarefa
        var botãoOK = document.createElement('button')
        botãoOK.innerHTML = '<i class="fas fa-check"></i>'
        botãoOK.classList.add('botão-ok')
        todoDiv.appendChild(botãoOK)
        //Botão Excluir Tarefa
        var botãoExcluir = document.createElement('button')
        botãoExcluir.innerHTML = '<i class="fas fa-trash"></i>'
        botãoExcluir.classList.add('botão-excluir')
        todoDiv.appendChild(botãoExcluir)
        //Adicionar DIV na Lista
        todoLista.appendChild(todoDiv)
    }   
	input.value = ''
	input.focus()   
}

function confirmarExcluir(e){
    var item = e.target
    //Deletar
    if (item.classList[0] === "botão-excluir"){
        var todo = item.parentElement 
        todo.remove()
    //Finalizar  
    } else if (item.classList[0] === "botão-ok"){
        var todo = item.parentElement 
        todo.classList.toggle("finalizada")
    }
}