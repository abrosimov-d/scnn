export default class Config{
    constructor(app) {
        this.app = app
        this.hosts = [
            {
                title: 'RUS-MSK',
                host: 'media',
                username: 'bggth',
                password: '1234',
            }, 
            {
                title: 'FIN-HEL',
                host: 'ha',
                username: 'bggth',
                password: '1234',
            }, 
            {title: 'ABC-DEF'}, 
            {title: 'GEH-KLM'}, 
            {title: 'MOP-QRS'}
        ]
    }
}