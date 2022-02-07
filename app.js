
const Hora = {
    data () {
        return {
            hora: "",
            imagem: "",
            cor: ""
        }
    },
    methods: {
        atualizar() {
            var data = new Date();
            var hora = data.getHours();
            var minuto = data.getMinutes();
            var segundo = data.getSeconds();
            this.hora = `Agora são ${hora}:${minuto}:${segundo} horas.`;


            if (hora >= 0 && hora < 12) {
                //BOM DIA 
                this.imagem = "img/fotomanha.jpg"
                this.cor = '#F9FF37'
            } else if (hora >= 12 && hora < 18) {
                //BOA TARDE
                this.imagem = "img/fototarde.jpg"
                this.cor = '#00FFF3'
            } else {
                this.imagem = "img/fotonoite.jpg"
                this.cor = '#020105'
                //BOA NOITE
            };
        }
    },
    mounted () {
        this.atualizar();
        setInterval(() => {
            this.atualizar()            
        }, 1000);
    }
};

Vue.createApp(Hora).mount('#app')