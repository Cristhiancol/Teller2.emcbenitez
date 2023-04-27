function buscar() {
    let input = document.getElementById('buscar');
    let filter = input.value.toUpperCase();
    let ul = document.getElementById('lista-frutas');
    let li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
        let a = li[i].textContent.toUpperCase();
        let encontro = a.indexOf(filter);
        console.log("li: " + a + " Encontro "+ encontro);
        if (encontro >= 0) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}