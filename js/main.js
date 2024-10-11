navBarComponent()

function navBarComponent() {
    const element = document.getElementById('navbar-component')
    const navbar = `
<nav class="navbar">
<ul class="nav-links">
    <li><a href="index.html">Início</a></li>
    <li><a href="index.html#services">Serviços</a></li>
    <li><a href="index.html#about">Sobre Nós</a></li>
    <li><a href="index.html#contact">Contato</a></li>
    <li><a href="login.html">Entrar</a></li>
</ul>
</nav>`

    element.innerHTML = navbar
}