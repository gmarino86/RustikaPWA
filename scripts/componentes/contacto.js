Vue.component('gm-contacto',{
    data:function(){
		return {
			form_data:{
				nombre:"",
				apellido:"",
				mail:"",
				comentario:""
			}
		}
	},
    template: `
    <div class="container mt-5">
        <h2 class="mb-5 text-center">Contactate con nosotros</h2>

        <div class="row justify-content-center">
            <div class="col-md-8 borde pb-3">  
                
                <form v-on:submit.prevent>
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

                    <div class="form-group">
                        <label for="comentario">Ingresa tu comentario</label>
                        <textarea id="comentario" v-model="form_data.comentario" class="form-control" cols="30" rows="5" name="comentario"></textarea>
                    </div>

                    <input type="submit" value="enviar" class="btn btn-success d-block ml-auto">
                </form>

                <p>El nombre es: {{form_data.nombre}}</p>
                <p>El apellido es: {{form_data.apellido}}</p>
                <p>El mail es: {{form_data.mail}}</p>
                <p>El comentario es: {{form_data.comentario}}</p>
        
            </div>
        </div>

    </div>
    `,	
    mounted:function(){
		this.actNAV()
	},
	methods:{
        actNAV: function() {
			losNav = document.getElementsByClassName('nav-item');
			losNav[0].classList.remove("active");
			losNav[1].classList.remove("active");
			losNav[2].classList.remove("active");
			losNav[3].classList.remove("active");
			losNav[2].classList.add("active");
		}
    },
})