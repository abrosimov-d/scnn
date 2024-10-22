export default class HostList{
    constructor(app) {
        this.app = app;
        this.element = null;
    }

    render() {
        return `<div class="hostlist">${this.renderInnerHTML()}</div>`
    }

    renderInnerHTML() {
        let result = ''
        this.app.config.hosts.forEach(elem => {
            result += `<div class="hostlist-elem" id=${this.app.config.hosts.indexOf(elem)}>🖥<a href="#" onclick="event.preventDefault();">${elem.title}</a></div>`
        })
        return result
    }

    init() {
        if (this.element == null) {
            this.element = document.querySelector('.hostlist')
            this.element.addEventListener('click', e => {
                const index = e.srcElement.closest(".hostlist-elem").id
                this.app.tabPanel.addTab(this.app.config.hosts[index])
            })
        }
    }
}