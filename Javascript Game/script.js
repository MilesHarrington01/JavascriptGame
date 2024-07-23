const container = document.querySelector('.container');
const startButton = document.querySelector('button');
const countdown = document.querySelector('.countdown');
const character = document.getElementById('character');
const block = document.getElementById('block');
let decrementer = 10;
startButton.addEventListener('click', function(){

        startButton.disabled = true;

        countdown.textContent = decrementer;
    
        const intervalId =   setInterval(function(){

        if(decrementer > 0){
            decrementer--;
            countdown.textContent = decrementer;
        }

        if(decrementer === 0){
            countdown.textContent = 'Game begins...';
            clearInterval(intervalId);
            
            

            //Animate the block
            block.classList.add('animateBlock');

            //Add event listener on container to make the character jump when clicking on the container
            container.addEventListener('click', function(){
                
                character.classList.add('animateCharacter');

                setTimeout(function(){
                    character.classList.remove('animateCharacter');
                }, 500)

              
            })

            function checkCollision(){
                const characterRect = character.getBoundingClientRect();
                const blockRect = block.getBoundingClientRect();

                if(characterRect.right >= blockRect.left && blockRect.top <= characterRect.bottom){
                    window.location.reload();
                }
            }

            setInterval(checkCollision, 10)

            
        }


    }, 1000);
})