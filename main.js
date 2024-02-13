const catalogo = [
    {
        id: 1,
        marca: "SIL || SECRECT",
        nome: "Perfume",
        imagem: "1.jpg",
       
      },
    {
        id: 2,
        marca: "SIL || SECRECT",
        nome: "Perfume",
        imagem: "2.jpg",
       
      },
    {
        id: 3,
        marca: "SIL || SECRECT",
        nome: "Perfume",
        imagem: "3.jpg",
       
      },
    {
        id: 4,
        marca: "SIL || SECRECT",
        nome: "Perfume",
        imagem: "4.jpg",
       
      },
    {
        id: 5,
        marca: "SIL || SECRECT",
        nome: "Perfume",
        imagem: "5.jpg",
       
      },
    {
        id: 6,
        marca: "SIL || SECRECT",
        nome: "Perfume",
        imagem: "6.jpg",
       
      },
    {
        id: 7,
        marca: "SIL || SECRECT",
        nome: "Perfume",
        imagem: "7.jpg",
       
      },
    {
        id: 8,
        marca: "SIL || SECRECT",
        nome: "Perfume",
        imagem: "8.jpg",
       
      },
    {
        id: 9,
        marca: "SIL || SECRECT",
        nome: "Perfume",
        imagem: "9.jpg",
       
      },
    {
        id: 10,
        marca: "SIL || SECRECT",
        nome: "Perfume",
        imagem: "10.jpg",
       
      },
    {
        id: 11,
        marca: "SIL || SECRECT",
        nome: "Perfume",
        imagem: "11.jpg",
       
      },
    {
        id: 12,
        marca: "SIL || SECRECT",
        nome: "Perfume",
        imagem: "12.jpg",
       
      },
    {
        id: 13,
        marca: "SIL || SECRECT",
        nome: "Perfume",
        imagem: "13.jpg",
       
      },
    {
        id: 15,
        marca: "SIL || SECRECT",
        nome: "Perfume",
        imagem: "15.jpg",
       
      },
    {
        id: 16,
        marca: "SIL || SECRECT",
        nome: "Perfume",
        imagem: "16.jpg",
       
      },
    {
        id: 17,
        marca: "SIL || SECRECT",
        nome: "Perfume",
        imagem: "17.jpg",
       
      },
    {
        id: 18,
        marca: "SIL || SECRECT",
        nome: "Perfume",
        imagem: "18.jpg",
       
      },
      
      
      {
          id: 19,
          marca: "SIL || SECRECT",
          nome: "Perfume",

          imagem: "19.jpg",
         
        },
      {
          id: 21,
          marca: "SIL || SECRECT",
          nome: "Perfume",

          imagem: "21.jpg",
         
        },
      {
          id: 22,
          marca: "SIL || SECRECT",
          nome: "Perfume",

          imagem: "22.jpg",
         
        },
      {
          id: 23,
          marca: "SIL || SECRECT",
          nome: "Perfume",

          imagem: "23.jpg",
         
        },
      {
          id: 24,
          marca: "SIL || SECRECT",
          nome: "Perfume",

          imagem: "24.jpg",
         
        },
      {
          id: 25,
          marca: "SIL || SECRECT",
          nome: "Perfume",

          imagem: "25.jpg",
         
        },
      {
          id: 26,
          marca: "SIL || SECRECT",
          nome: "Perfume",

          imagem: "26.jpg",
         
        },
      {
          id: 27,
          marca: "SIL || SECRECT",
          nome: "Perfume",

          imagem: "27.jpg",
         
        },
      {
          id: 28,
          marca: "SIL || SECRECT",
          nome: "Perfume",

          imagem: "28.jpg",
         
        },
      {
          id: 29,
          marca: "SIL || SECRECT",
          nome: "Perfume",

          imagem: "29.jpg",
         
        },
      {
          id: 30,
          marca: "SIL || SECRECT",
          nome: "Perfume",

          imagem: "30.jpg",
         
        },
      {
          id: 31,
          marca: "SIL || SECRECT",
          nome: "Perfume",

          imagem: "31.jpg",
         
        },
      {
          id: 32,
          marca: "SIL || SECRECT",
          nome: "Perfume",

          imagem: "32.jpg",
         
        },
      {
          id: 33,
          marca: "SIL || SECRECT",
          nome: "Perfume",

          imagem: "33.jpg",
         
        },
      {
          id: 34,
          marca: "SIL || SECRECT",
          nome: "Perfume",

          imagem: "34.jpg",
         
        },
      {
          id: 35,
          marca: "SIL || SECRECT",
          nome: "Perfume",

          imagem: "35.jpg",
         
        },
      {
          id: 36,
          marca: "SIL || SECRECT",
          nome: "Perfume",

          imagem: "36.jpg",
         
        },
  ];
  
  // MEU HEADER CONTAINER PRINCIPAL
  for (const produtoCatalogo of catalogo) {
    const cartaoProduto = `<div  id="card-produto${produtoCatalogo.id}" class="ProdutoLoja">
    <img  src="./img/${produtoCatalogo.imagem}" alt="Perfumaria" >
    <p class="logo-flex">${produtoCatalogo.marca}</p>
    <p class="logo-flex">${produtoCatalogo.nome}</p>
    </div>`
    
    document.getElementById("container-produto").innerHTML += cartaoProduto;
    
  };
