export default class TabPanel {
    constructor(app) {
        this.app = app;
        this.tabs = []
        this.element = null;
    }

    render() {
        return `<div class="tabpanel">${this.renderInnerHTML()}</div>`
    }

    renderInnerHTML() {
        let result = '';

        let buttonsInnerHTML = ''

        this.tabs.forEach(elem => {
            buttonsInnerHTML += `<button>${elem.title}</button>`
        })

        result += `<div class="tabpanel-buttons">${buttonsInnerHTML}</div>`

        this.tabs.forEach(elem => {
            result += `${elem.render()}`
        })

        return result
    }

    fastRender() {
        this.element.innerHTML = this.renderInnerHTML()
    }

    addTab(config) {
        const tab = new Tab(this.app, config)
        this.tabs.push(tab)
        this.element.innerHTML = this.renderInnerHTML()
    }

    closeTab(index) {

    }

    init() {
        if (this.element == null) {
            this.element = document.querySelector('.tabpanel')
        }
    }
}

class Tab{
    constructor(app, config) {
        this.config = JSON.stringify(config);
        this.title = config.title;

    }

    setTitle(title) {
        this.title = title
    }

    render() {
        return `<div class="tabpanel-tab">${this.config}</div>`
    }

    renderInnerHTML() {

    }
}