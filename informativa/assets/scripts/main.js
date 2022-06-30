//Obtener los elementos de la calse .close
let links = document.querySelectorAll(".close")

//Recorrerlos
links.forEach(function (link) {

    //Agregar un evento click a cada uno de ellos
    //case sensitive
    link.addEvenListener("click", function (ev) {
        ev.preventDefault();
        let content = document.querySelector(".content");

        //Quitar las clases de animaciones que ya tiene
        content.classlist.remove(animate__fadeInDown)
        content.classlist.remove(animate__animated);

        //Agregar las clases de animaciones que ya tiene
        content.classlist.add("animated__fadeOutup");
        content.classlist.add("animate__animated");

        setTimeout(function () {
            window.history.go(-1);
        }, 600);
        setInterval

        return false;
    });
});