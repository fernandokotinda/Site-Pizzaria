function verificarTamanhoDaTela() {
    window.addEventListener('resize', function() {

        let menuImg = document.querySelector("nav img");
        let menu = document.querySelector(".op");

        if (window.innerWidth <= 1300) {

            menuImg.style.display = "flex";
            menu.style.display = "none";

        } else if(window.innerWidth > 1300) {

            menuImg.style.display = "none";
            menu.style.display = "flex";
        }
    });
}
   

function abrirMenu() {

    let menuHamburger = document.querySelector(".menu-hamburger");

    if(menuHamburger.style.display == 'flex') {
            
        menuHamburger.style.display = 'none'
        verificarTamanhoDaTela();
            
    } else {
            
        menuHamburger.style.display = 'flex'
        verificarTamanhoDaTela();
        }
}
 
function validarNumeros(input) {
    input.value = input.value.replace(/\D/g, ''); 
}

function formatarTelefone(input) {
   
    var numero = input.value.replace(/\D/g, '');
    
    if (numero.length == 11) {
        input.value = '(' + numero.substring(0, 2) + ') ' + numero.substring(2, 7) + '-' + numero.substring(7);
    } else if (numero.length == 10) {
        input.value = '(' + numero.substring(0, 2) + ') ' + numero.substring(2, 6) + '-' + numero.substring(6);
    } else {
        input.value = numero;
    }
}

function formatarCEP(input) {

    var cep = input.value.replace(/\D/g, '');
    
    if (cep.length > 5) {
        input.value = cep.substring(0, 5) + '-' + cep.substring(5);
    } else {
        input.value = cep;
    }
}

//=======Funções ao fazer pedido online=======

// Escolher tamanho da pizza
let tamanhos = document.querySelector('#tamanhos');
let sabores = document.querySelector('#sabores');
let drinks = document.querySelector('#drinks');
let pagamento = document.querySelector('#pagamento');

let selectedPizzaNames = [];
let selectedPizzaPrices = [];
let selectedDrinkNames = [];
let selectedDrinkPrices = [];
let selectedPag = [];
let campos = [];

document.querySelectorAll('.tamanho-pizza').forEach(function(div) {
    div.addEventListener('click', function() {


        let pizzaTop = document.querySelector('.fundo-pedido').offsetTop;
        

        tamanhos.style.display = 'none';
        sabores.style.display = 'block';
        window.scrollTo({
            top: pizzaTop + 400,
            behavior: 'smooth'
          });

        let pizzaBarata = document.querySelectorAll('.preco .pizza-barata');
        let pizzaCara = document.querySelectorAll('.preco .pizza-cara');

        let tamanho = this.classList[1]; 

        //Colocar preços de acordo com o tamanho da pizza
        if(tamanho == 'pequena') {

            pizzaBarata.forEach((element) => {
                element.innerText = 'R$64,00';
            });

            pizzaCara.forEach((element) => {
                element.innerText = 'R$68,00';
            });  

        } else if(tamanho == 'media') {

            pizzaBarata.forEach((element) => {
                element.innerText = 'R$76,00';
            });

            pizzaCara.forEach((element) => {
                element.innerText = 'R$82,00';
            });  

        } else {

            pizzaBarata.forEach((element) => {
                element.innerText = 'R$88,00';
            });

            pizzaCara.forEach((element) => {
                element.innerText = 'R$94,00';
            });  
        }
    });
});

//Escolher sabores pizzas
let concluirPizza = document.querySelector('.pizzaConcluido');

const pizzas = document.querySelectorAll('.pizza');

pizzas.forEach(pizza => {
    pizza.addEventListener('click', function() {

        const pizzaSelecionada = this.classList.contains('escolhida');
        
        const pizzasEscolhidas = document.querySelectorAll('.escolhida');

        if(pizzaSelecionada) {

            this.classList.remove('escolhida');

            const pizzaName = this.querySelector('.nome-pizza h3').textContent;
            const index = selectedPizzaNames.indexOf(pizzaName);
            if (index !== -1) {
                selectedPizzaNames.splice(index, 1);
                selectedPizzaPrices.splice(index, 1);
            }

        } else {

            if (pizzasEscolhidas.length >= 3) {

                pizzasEscolhidas[pizzasEscolhidas.length - 1].classList.remove('escolhida');
                
                selectedPizzaNames.pop();
                selectedPizzaPrices.pop();

            }

            this.classList.add('escolhida');

            selectedPizzaNames.push(this.querySelector('.nome-pizza h3').textContent);
            selectedPizzaPrices.push(this.querySelector('.preco p').textContent);
        }
    });
    
});

let drinksTop = document.querySelector('.fundo-pedido').offsetTop;

concluirPizza.addEventListener('click', () => {

    if(selectedPizzaNames.length === 0) {
        alert('Por favor, escolha de 1 a 3 sabores de Pizza!');
        return;

    } else {

        sabores.style.display = 'none';
        drinks.style.display = 'block';
        window.scrollTo({
            top: drinksTop + 400,
            behavior: 'smooth'
        });
    }
});

//Escolher bebidas
const bebidas = document.querySelectorAll('.bebida');

bebidas.forEach(bebida => {
    bebida.addEventListener('click', function() {

        const bebidaSelecionada = this.classList.contains('escolhida-bebida');
        
        const bebidaEscolhidas = document.querySelectorAll('.escolhida-bebida');

        if(bebidaSelecionada) {

            this.classList.remove('escolhida-bebida');

            const drinkName = this.querySelector('.nome-bebida h3').textContent;
            const index = selectedDrinkNames.indexOf(drinkName);
            if (index !== -1) {
                selectedDrinkNames.splice(index, 1);
                selectedDrinkPrices.splice(index, 1);
            }

        } else {

            if (bebidaEscolhidas.length >= 3) {

                bebidaEscolhidas[bebidaEscolhidas.length - 1].classList.remove('escolhida-bebida');
                
                selectedDrinkNames.pop();
                selectedDrinkPrices.pop();

            }

            this.classList.add('escolhida-bebida');

            selectedDrinkNames.push(this.querySelector('.nome-bebida h3').textContent);
            selectedDrinkPrices.push(this.querySelector('.preco p').textContent);
        }
    });
});

let concluirBebida = document.querySelector('.bebidaConcluido');

let pagamentoTop = document.querySelector('.fundo-pedido').offsetTop;

concluirBebida.addEventListener('click', () => {

    drinks.style.display = 'none';
    pagamento.style.display = 'block';
    window.scrollTo({
        top: pagamentoTop + 400,
        behavior: 'smooth'
    });
    
});

//Escolher bebidas
const pagamentos = document.querySelectorAll('.pag');

pagamentos.forEach(pag => {
    pag.addEventListener('click', function() {

        const pagSelecionado = this.classList.contains('escolhida-pag');
        
        const pagEscolhido = document.querySelectorAll('.escolhida-pag');

        if(pagSelecionado) {

            this.classList.remove('escolhida-pag');

            const drinkName = this.querySelector('.pag h3').textContent;
            const index = selectedPag.indexOf(drinkName);
            if (index !== -1) {
                selectedPag.splice(index, 1);
            }

        } else {

            if (pagEscolhido.length >= 1) {

                pagEscolhido[pagEscolhido.length - 1].classList.remove('escolhida-pag');
                
                selectedPag.pop();

            }

            this.classList.add('escolhida-pag');

            selectedPag.push(this.querySelector('.pag h3').textContent);
        }
    });
});

// Exibição do formulario
let buscarPizzaria = document.querySelector('#deliveryInPlace');
let entregarEndereco = document.querySelector('#deliveryInHome');
let form = document.querySelector('#local-entrega');
let hr = document.querySelector('.margin');
let concluirPagamento = document.querySelector('.pagamentoConcluir');

function atualizarExibicao() {
    if (buscarPizzaria.checked) {

        form.style.display = 'none';
        hr.style.display = 'none';
        concluirPagamento.style.display ='block'

    } else if (entregarEndereco.checked) {

        form.style.display = 'block';
        hr.style.display = 'block';
        concluirPagamento.style.display ='none'

    }
}

buscarPizzaria.addEventListener('change', atualizarExibicao);
entregarEndereco.addEventListener('change', atualizarExibicao);

atualizarExibicao();

//Pegar informações formulário
let concluirForm = document.querySelector('.formConcluir');

concluirForm.addEventListener('click', (event) => {
    
    event.preventDefault();

    let confirmacaoTop = document.querySelector('.fundo-pedido').offsetTop;
    let confirmacao = document.querySelector('#confirmacao');

    if(selectedPag.length === 0) {

        alert('Por favor, selecione uma forma de pagamento!');
        return;

    } else {

        let name = document.querySelector('#name').value;
        let surname = document.querySelector('#surname').value;
        let telefone = document.querySelector('#telephone').value;
        let email = document.querySelector('#email').value;
        let cep = document.querySelector('#CEP').value;
        let rua = document.querySelector('#endereco').value;
        let numero = document.querySelector('#numero').value;
        let complemento = document.querySelector('#complemento').value;
        let bairro = document.querySelector('#bairro').value;
        let estado = document.querySelector('#estado').value;
        let cidade = document.querySelector('#cidade').value;

        if (name.trim() === '' || surname.trim() === '' || telefone.trim() === '' || cep.trim() === '' || rua.trim() === ''
        || numero.trim() === '' || bairro.trim() === '' || cidade.trim() === '') { 

            alert('Preencha todos os campos obrigatorios');

        } else {

            campos = [name + surname, telefone, email, cep, rua + numero, complemento, bairro, estado,];

            pagamento.style.display = 'none';
            confirmacao.style.display = 'block';
            window.scrollTo({
                top: confirmacaoTop + 400,
                behavior: 'smooth'
            });
        

        }

    }
});

let concluir = document.querySelector('.pagamentoConcluir');

concluir.addEventListener('click', () => {

    if(selectedPag.length === 0) {

        alert('Por favor, selecione uma forma de pagamento!');
        return;

    } else {

        let pizzaTop = document.querySelector('.fundo-pedido').offsetTop;

        pagamento.style.display = 'none';
        confirmacao.style.display = 'block';
        window.scrollTo({
            top: pizzaTop + 400,
            behavior: 'smooth'
        });
    
        // Tela final de confirmação 
        let pizzasLista = document.querySelector('.escolhas .borda h3')
        let bebidaLista = document.querySelector('.escolhas .pad h3')
        
        selectedPizzaNames.forEach((pizzaName, index) => {
            const p = document.createElement("p");
            const span = document.createElement("span");

            p.textContent = '- ' + pizzaName;
            span.textContent = selectedPizzaPrices[index];
            p.appendChild(span);

            pizzasLista.appendChild(p);
       
        });

        selectedDrinkNames.forEach((drinkName, index) => {

            const p = document.createElement("p");
            const span = document.createElement("span");

            p.textContent = '- ' + drinkName;
            span.textContent = selectedDrinkPrices[index];
            p.appendChild(span);

            bebidaLista.appendChild(p);

        })


       
    }
});

let formConcluido = document.querySelector('.formConcluir');

formConcluido.addEventListener('click', () => {

    if(selectedPag.length === 0) {

        alert('Por favor, selecione uma forma de pagamento!');
        return;

    } else {

        let pizzaTop = document.querySelector('.fundo-pedido').offsetTop;

        pagamento.style.display = 'none';
        confirmacao.style.display = 'block';
        window.scrollTo({
            top: pizzaTop + 400,
            behavior: 'smooth'
        });
    
        // Tela final de confirmação 
        let pizzasLista = document.querySelector('.escolhas .borda h3')
        let bebidaLista = document.querySelector('.escolhas .pad h3')
        
        selectedPizzaNames.forEach((pizzaName, index) => {
            const p = document.createElement("p");
            const span = document.createElement("span");

            p.textContent = '- ' + pizzaName;
            span.textContent = selectedPizzaPrices[index];
            p.appendChild(span);

            pizzasLista.appendChild(p);
       
        });

        selectedDrinkNames.forEach((drinkName, index) => {

            const p = document.createElement("p");
            const span = document.createElement("span");

            p.textContent = '- ' + drinkName;
            span.textContent = selectedDrinkPrices[index];
            p.appendChild(span);

            bebidaLista.appendChild(p);

        })

        const spans = document.querySelectorAll('.dados span');

        spans.forEach((span, index) => {

 

                span.textContent = campos[index]; // Define o texto para o <span> atual usando o índice correspondente

            
        });


       
    }
})






