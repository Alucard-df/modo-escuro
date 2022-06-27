function darkMode() {
    var darkMode = document.getElementById('dark-mode');
    var theme = document.getElementById('theme');

    // alternando temas
    if (darkMode.checked == true) {
        // setAttribute serve p mudar qq atributo de um comando ou css.
        theme.setAttribute('href', 'css/dark-mode.css');
        document.getElementById('ativar-dark-mode').innerHTML = 'Modo Escuro Ativado';
    }
    else {
        theme.setAttribute('href', 'css/light-mode.css');
        document.getElementById('ativar-dark-mode').innerHTML = 'Ativar Modo Escuro';
    }
}