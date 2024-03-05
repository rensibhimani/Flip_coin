const flipBtn = document.querySelector('.buttons button'),
coin = document.querySelector('.coin'),
resetBtn = document.querySelector('.reset'),
hates = document.querySelector('.hates strong'),
loves = document.querySelector('.loves strong')

let texts = ['hates','loves'];
let hateWin = 0,loveWin = 0;

flipBtn.addEventListener('click',()=>{
    coin.classList.add('active');
    let randomtext = texts[Math.floor(Math.random() * texts.length)]
    coin.innerHTML = randomtext
    if(randomtext == 'hates'){
        //if randomtext is heads than heads win otherwise loves win
        hateWin++;
    }
    if(randomtext == 'loves'){
        loveWin++;
    }
    setTimeout(() => {
        coin.classList.remove('active')
        hates.innerHTML = hateWin
        loves.innerHTML = loveWin
        //randomly select a text from texts array
    }, 1000);
})

resetBtn.addEventListener('click',()=>{
    hateWin = 0; loveWin = 0;
    hates.innerHTML = hateWin
    loves.innerHTML = loveWin
    coin.innerHTML = 'Hates'
})