document.addEventListener("DOMContentLoaded", function() {

   
    
    var header = document.querySelector("header");
    var nav = document.querySelector("nav");
   

    window.addEventListener("scroll", function() {
        if (window.scrollY > 0) {
            nav.style.backgroundColor = "black"; /* Altera para a cor desejada após rolar 50px */
        } else {
            nav.style.backgroundColor = "transparent"; /* Volta à cor transparente */
        }
    });

    var burguer = document.getElementById('burguer');
    var menu = document.querySelector('.menu');
    
    function linear(t, b, c, d) {
        return c * t / d + b;
    }
    
    burguer.addEventListener('click', function () {
        if (menu.style.display === 'none' || menu.style.display === '') {
            menu.style.display = 'flex';
            var startHeight = 0;
            var targetHeight = 500;
            menu.style.transition = 'max-height 0.3s linear'; // Adiciona a transição para a abertura
        } else {
            var startHeight = 500;
            var targetHeight = 0;
        }
    
        var duration = 240; // Tempo ajustado para corresponder à transição no CSS
        var startTime = performance.now();
    
        function updateHeight(currentTime) {
            var elapsedTime = currentTime - startTime;
            if (elapsedTime < duration) {
                var newHeight = linear(elapsedTime, startHeight, targetHeight - startHeight, duration);
                menu.style.maxHeight = newHeight + 'px';
                requestAnimationFrame(updateHeight);
            } else {
                menu.style.maxHeight = targetHeight + 'px';
                if (targetHeight === 0) {
                    menu.style.display = 'none';
                    menu.style.transition = ''; // Remove a transição após o fechamento
                }
            }
        }
    
        requestAnimationFrame(updateHeight);
    });

    const elements = document.querySelectorAll('.animate-container')
    const myObserver = new IntersectionObserver((entries) =>{
       entries.forEach((entry) =>{   
         if(entry.isIntersecting){
                entry.target.classList.add('show')
            }else{
                entry.target.classList.remove('show')
            }
       })
    })
   
    elements.forEach((element) => myObserver.observe(element))

  
   

        lightbox.option({
            'resizeDuration': 0,
            'fadeDuration': 300,
            'positionFromTop': 50,
            'wrapAround': true,
            'alwaysShowNavOnTouchDevices': true,
            'disableScrolling':true
            
        
        });

});
