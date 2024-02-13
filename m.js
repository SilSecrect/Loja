const product = [
  {
    id: 1,
    marca: "SIL",
    nome: "Perfume",
    preco: 155.00,
    imagem: "m1.png",
   
  },
{
    id: 2,
    marca: "SIL",
    nome: "Perfume",
    preco: 155.00,
    imagem: "m2.png",
   
  },
{
    id: 3,
    marca: "SIL",
    nome: "Perfume",
    preco: 155.00,
    imagem: "m3.png",
   
  },
{
    id: 4,
    marca: "SIL",
    nome: "Perfume",
    preco: 155.00,
    imagem: "m4.png",
   
  },
{
    id: 5,
    marca: "SIL",
    nome: "Perfume",
    preco: 155.00,
    imagem: "m5.png",
   
  },
{
    id: 6,
    marca: "SIL",
    nome: "Perfume",
    preco: 155.00,
    imagem: "m6.png",
   
  },
{
    id: 7,
    marca: "SIL",
    nome: "Perfume",
    preco: 155.00,
    imagem: "m7.png",
   
  },
{
    id: 8,
    marca: "SIL",
    nome: "Perfume",
    preco: 155.00,
    imagem: "m8.png",
   
  },
{
    id: 9,
    marca: "SIL",
    nome: "Perfume",
    preco: 155.00,
    imagem: "m9.png",
   
  },
{
    id: 10,
    marca: "SIL",
    nome: "Perfume",
    preco: 155.00,
    imagem: "m10.png",
   
  },
{
    id: 11,
    marca: "SIL",
    nome: "Perfume",
    preco: 155.00,
    imagem: "m11.png",
   
  },
{
    id: 12,
    marca: "SIL",
    nome: "Perfume",
    preco: 155.00,
    imagem: "m12.png",
   
  },
{
    id: 13,
    marca: "SIL",
    nome: "Perfume",
    preco: 155.00,
    imagem: "m13.png",
   
  },
{
    id: 15,
    marca: "SIL",
    nome: "Perfume",
    preco: 155.00,
    imagem: "m15.png",
   
  },
{
    id: 16,
    marca: "SIL",
    nome: "Perfume",
    preco: 155.00,
    imagem: "m16.png",
   
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
