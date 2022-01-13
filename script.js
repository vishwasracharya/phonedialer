let screen = document.getElementById('out-screen-id');
buttons = document.querySelectorAll('button');
const back = document.getElementById('cls');

for (item of buttons){
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log(buttonText);
        
        let screenValue = '';
        screenValue += buttonText;
        screen.value += screenValue;

        if(buttonText == ''){
            screenValue -= buttonText;
            screen.value = screenValue;
        }
    })
}