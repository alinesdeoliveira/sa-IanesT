if(localStorage.getItem('token') == null) {
    alert('Você precisa estar loogado para acessar essa pagina!!');
    window.open('../Login/index.html');
}