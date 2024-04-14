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