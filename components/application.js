import Config from "./config.js";
import Hello from "./hello.js";
import HostList from "./hostList.js";
import TabPanel from "./tabPanel.js";

export default class Application {
    constructor() {
        this.config = new Config(this)
        this.hostList = new HostList(this);
        this.tabPanel = new TabPanel(this);
    }

    render() {
        return this.hostList.render() + this.tabPanel.render()
    }

    init() {
        this.hostList.init();
        this.tabPanel.init();
    }
}
