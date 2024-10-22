const {NodeSSH} = require('node-ssh');
const { Terminal } = require('xterm');
const { FitAddon } = require('xterm-addon-fit')
const readline = require('readline')

export default class Console{
    constructor(app) {
        this.app = app
        this.buffer = '';
        this.command = '';
        this.element = null;
        this.ssh = new NodeSSH()
        this.terminal = new Terminal({cols: 160, scrollback: 9999999, bufferSize: 9999999});
        this.fitAddon = new FitAddon();
        this.terminal.loadAddon(this.fitAddon);
    }

    render() {
        return `<div class="terminal"></div>`
    }

    renderInnerHTML() {
        return
        if (this.element == null) {
            this.element = document.querySelector('.terminal');
        }
        this.element.innerHTML = this.buffer;
    }

    init() {
        if (this.element == null) {
            this.element = document.querySelector('.terminal');
            this.terminal.open(this.element);
            const theme = this.terminal.options.theme;
            //theme.background = '#313131'
            theme.background = 'green'
            this.terminal.options = {
                fontFamily: '"Source Code Pro", "Lucida Console"',
                fontSize: '16',
            }
            this.terminal.resize(this.terminal.cols, this.terminal.rows*2);
            this.terminal.options = {...theme}
            //this.fitAddon.fit()
            this.element.style.backgroundColor = '#f0f0f0'


        }

        this.ssh.connect({
            host: 'media',
            username: 'bggth',
            password: '123'
        }).then((status) => {
            this.ssh.connection.shell({window: false, options:{x11: false}
            }, async (err, stream) => {
                if (err) throw err;

                stream.on('close', () => {                    
                });
                
                stream.on('data', (data) => {
                    this.terminal.write(data) 
                });
                this.terminal.onKey(key => {
                    stream.write(key.key)
                })  

            })

        })

    }

}