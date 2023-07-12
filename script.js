addEventListener("DOMContentLoaded",()=>{
    const cardArray = [
        {
          name: 'fries',
          img: 'images/fries.png'
        },
        {
          name: 'cheeseburger',
          img: 'images/cheeseburger.png'
        },
        {
          name: 'ice-cream',
          img: 'images/ice-cream.png'
        },
        {
          name: 'pizza',
          img: 'images/pizza.png'
        },
        {
          name: 'milkshake',
          img: 'images/milkshake.png'
        },
        {
          name: 'hotdog',
          img: 'images/hotdog.png'
        },
        {
          name: 'fries',
          img: 'images/fries.png'
        },
        {
          name: 'cheeseburger',
          img: 'images/cheeseburger.png'
        },
        {
          name: 'ice-cream',
          img: 'images/ice-cream.png'
        },
        {
          name: 'pizza',
          img: 'images/pizza.png'
        },
        {
          name: 'milkshake',
          img: 'images/milkshake.png'
        },
        {
          name: 'hotdog',
          img: 'images/hotdog.png'
        }
    ];


    

    const gridDisplay = document.querySelector("#grid");
    let img_id   = [];
    let img_name =[];
    let card_won = [];
    function createBord (){
        for(var i = 0; i<cardArray.length; i++){
            let img = document.createElement("img");
            img.setAttribute("src", "images/blank.png");
            img.setAttribute('data-id',i);
            gridDisplay.appendChild(img);
            img.addEventListener("click",imgclick)
        }
    }
    createBord()
    function imgclick(){
        let img_card= this.getAttribute('data-id');
        this.setAttribute("src",cardArray[img_card].img);
        img_id.push(img_card);
        img_name.push(cardArray[img_card].name);
        if(img_id.length === 2){
            setTimeout(match_img,100);
        }
    }

    function match_img(){
    const cards = document.querySelectorAll("#grid img");

    if(img_id[0] === img_id[1]){
        cards[img_id[0]].setAttribute('src','images/blank.png')
       }
    if(img_name[0] === img_name[1]){
        cards[img_id[0]].setAttribute("src",'images/white.png');
        cards[img_id[1]].setAttribute("src",'images/white.png');
        card_won.push(img_name[0],img_name[1]);
    }else{
        cards[img_id[0]].setAttribute("src",'images/blank.png')
        cards[img_id[1]].setAttribute("src",'images/blank.png')
    }

    img_id = [];
    img_name=[];



    let rejult = document.querySelector("#rejult");
    let rejultNumber = card_won.length*2
    rejult.innerHTML=rejultNumber
    if(card_won.length === 12){
        rejult.innerHTML = `Congratulation you are win of ${rejultNumber}`
    }
    }

})