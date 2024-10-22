import Application from "./components/application.js"


window.onload = () => {
    let application = new Application()
    document.querySelector('.app').innerHTML = application.render();
    application.init();
}