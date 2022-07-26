Vue.component('gm-clientes',{
    data:function(){
        return {
            form_data:{
                nombre:"",
                apellido:"",
                mail:""
            },
            listaClientes:[],
            arrayPush: []
        }
    },
    template: `
    <div class="container mt-5">
        <h2 class="mb-5 text-center">Clientes</h2>

        <div class="row justify-content-center">
            <div class="col-12 col-md-6 borde pb-3">  
                
                <form v-on:submit.prevent="agregar">
                    <div class="row mb-3">
                        <div class="col">
                            <label for="nombre" class="mr-2">Nombre</label>
                            <input type="text" v-model="form_data.nombre" name="nombre" class="form-control" id="nombre" placeholder="Tu Nombre...">
                        </div>
                        <div class="col">
                            <label for="Apellido" class="mr-2">Apellido</label>
                            <input type="text" v-model="form_data.apellido" name="apellido" class="form-control" id="apellido" placeholder="Tu Apellido...">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="mail">Email</label>
                        <input type="email" v-model="form_data.mail" name="mail" class="form-control" id="mail" aria-describedby="tuEmail" placeholder="Tu Email...">
                                
                        <small id="tuEmail" class="form-text text-muted">Tu dirección de email está segura con nosotros.</small>
                    </div>

                    <input type="submit" value="Agregar" class="btn btn-success d-block ml-auto">
                </form>
            </div>
            <div class="col-12 col-md-6 borde pb-3">
                <p>Clientes</p>
                <gm-cliente-list v-for="(x, index) of listaClientes"
                    v-bind:key="x.index"
                    v-bind:nombre="x.nombre"
                    v-bind:apellido="x.apellido"
                    v-bind:mail="x.mail"
                ></gm-cliente-list>
            </div>
        </div>

    </div>
    `,
    mounted:function(){
        this.actNAV(),
        this.verLista()
    },
    methods:{
        actNAV: function () {
            losNav = document.getElementsByClassName('nav-item');
            losNav[0].classList.remove("active");
            losNav[1].classList.remove("active");
            losNav[2].classList.remove("active");
            losNav[3].classList.remove("active");
            losNav[3].classList.add("active");
        },
        verLista: function () {
            if( localStorage.getItem('clientes') == null){
                this.listaClientes = []
            } else {
                this.listaClientes = JSON.parse(localStorage.getItem('clientes'))
            }
        },
        agregar: function (){
            console.log('Entro acá')
            console.log(this.listaClientes)
            this.listaClientes.push(this.form_data)
            localStorage.setItem("clientes",JSON.stringify(this.listaClientes))

            // Limpio los inputs
            this.form_data.nombre = ""
            this.form_data.apellido = ""
            this.form_data.mail = ""
            this.listaClientes = JSON.parse(localStorage.getItem('clientes'))
        }
    },
})