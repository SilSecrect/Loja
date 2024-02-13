const product = [
  {
    id: 1,
    marca: "SIL",
    nome: "Perfume",
    preco: 125.00,
    imagem: "f12.png",
   
  },
{
    id: 2,
    marca: "SIL",
    nome: "Fahrenheit 100ml",
    preco: 280.00,
    imagem: "f2.png",
   
  },
{
    id: 3,
    marca: "SIL",
    nome: "Gabriela Sabatini 100ml",
    preco: .00,
    imagem: "f3.png",
   
  },
{
    id: 4,
    marca: "SIL",
    nome: "Mugle Angel 100ml",
    preco: 300.00,
    imagem: "f4.png",
   
  },
{
    id: 5,
    marca: "SIL",
    nome: "Giorgio Armani 100ml",
    preco: 250.00,
    imagem: "f5.png",
   
  },
{
    id: 6,
    marca: "SIL",
    nome: "Armani Cude 125ml", //Masculino
    preco: 300.00,
    imagem: "f6.png",
   
  },
{
    id: 7,
    marca:"SIL",
    nome: "Chanel Chance 100ml",
    preco: 320.00,
    imagem: "f7.png",
   
  },
{
    id: 8,
    marca: "SIL",
    nome: "Miss Dior 100ml",
    preco: 320.00,
    imagem: "f8.png",
   
  },
{
    id: 9,
    marca: "SIL",
    nome: "Gabriela Sabatini 100ml",
    preco: .00,
    imagem: "f9.png",
   
  },
{
    id: 10,
    marca: "SIL",
    nome: "Gaultier Scandal 100ml",
    preco: 300.00,
    imagem: "f10.png",
   
  },
{
    id: 11,
    marca: "SIL",
    nome: "Perfume",
    preco: 100.00,
    imagem: "f11.png",
   
  },
    
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {imagem, nome, preco} = item;
    return(
        `<div class='box'>
          <img  src=./image/${imagem} height="80px;"></img>
          <p>${nome}</p>
          <h2>$ ${preco}.00</h2>`+
         "<button class='add' onclick='addtocart("+(i++)+")'><i class='fa-solid fa-cart-shopping'></i></button>"+
         `</div>`
        
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {imagem, nome, preco} = items;
            total=total+preco;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=./image/${imagem}>
                </div>
                <p style='font-size:12px;'>${nome}</p>
                <h2 style='font-size: 15px;'>$ ${preco}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}
var entrar = document.querySelector('#entrar');
var lateral = document.querySelector("#carrinho");
    entrar.addEventListener('click' , function() {
    lateral.classList.toggle('expandir')
    })
var sair = document.querySelector('#sair');
sair.addEventListener('click', function(){
    lateral.classList.toggle('expandir')
})
