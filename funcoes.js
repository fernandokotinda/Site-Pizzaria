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

document.querySelectorAll('.tamanho-pizza').forEach(function(div) {
    div.addEventListener('click', function() {

        let tamanhos = document.querySelector('#tamanhos');
        let sabores = document.querySelector('#sabores');

        tamanhos.style.display = 'none';
        sabores.style.display = 'block';

        let pizzaBarata = document.querySelectorAll('.preco .pizza-barata');
        let pizzaCara = document.querySelectorAll('.preco .pizza-cara');

        let tamanho = this.classList[1]; 

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