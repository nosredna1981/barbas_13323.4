

// navBarComponent()

// navbarComponentTemplate()

// function navBarComponent() {
//     const element = document.getElementById('navbar-component')        
//     const navbar = `
//     <nav class="navbar navbar-expand-lg fixed-top">
//     <div class="container">
//         <!-- <a class="navbar-brand" href="#">Navbar</a> -->
//         <img class="navbar-toggler" src="./imagem/barbershop-logo.jpg" height="40" alt="">
//         <button class="navbar-toggler bg-yellow" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
//             aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse" id="navbarNav">
//             <ul class="navbar-nav me-auto">
//                 <li class="nav-item">
//                     <a class="nav-link" href="index.html">Inicio</a>
//                 </li>
//                 <li class="nav-item">
//                     <a class="nav-link" href="index.html#services">Serviços</a>
//                 </li>
//                 <li class="nav-item">
//                     <a class="nav-link" href="index.html#about">Sobre Nós</a>
//                 </li>
//                 <li class="nav-item">
//                     <a class="nav-link" href="index.html#contact">Contato</a>
//                 </li>                   
//             </ul>

//             <ul class="navbar-nav">
//                 <li class="nav-item">
//                     <a class="nav-link" href="login.html">Entrar</a>
//                 </li>
//             </ul>

//         </div>
//     </div>
// </nav>
// `  
// }
export function navbarComponentTemplate() {
    const localTemplate = 'components/nav-component/nav-component.html'
    const localStyle = 'components/nav-component/nav-component.css'
    const element = document.getElementById('navbar-component')


    //Style -> css
    element.innerHTML = ''
    element.innerHTML += `<link rel="stylesheet" href="${localStyle}">`


    //Template -> HTML
    fetch(localTemplate)
        .then((res) => res.text())
        .then((nav) => {
            element.innerHTML += nav
        })
        .catch((error) => {
            console.error("Erro ao montar a navbar:", error);
        })

}