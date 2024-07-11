export default function manageHight() {

    var altura = 0;

    const hero = document.getElementById('hero');

    if (hero) {
        const propriedades = hero.getBoundingClientRect();
        altura = propriedades.height;
        // const largura = propriedades.width;
        // console.log("Altura:", altura, "Largura:", largura);
    } else {
        console.log("'hero' element not found.");
    }

    return altura;

}