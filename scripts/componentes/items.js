Vue.component('componente-items',{
	props:["id","imagen", "alt", "nombre", "precio"],
    template: `
        <div class="col mb-4">
            <div class="card">
                <img :src="imagen" class="card-img-top" :alt="alt">
                <div class="card-body">
                    <div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" :value="id" :id="'producto' + id" @change="favorito" :checked="isChecked" />
                            <label class="form-check-label" :for="'producto'+id">Favorito</label>
                        </div>
                        <p class="card-text text-dark text-center">{{ nombre }}</p>
                        <p class="card-text text-dark text-center"> {{ precio }}</p>
                    </div>
                    <button type="button" class="btn btn-outline-light btn-negro mx-auto d-block">Comprar</button>
                </div>
            </div>
        </div>
    `,    
	computed: {
		isChecked: function( ){
			var productosLocalStorage = localStorage.getItem( 'favoritos' );
			if( !productosLocalStorage ){
				productosLocalStorage = {}
			}else{
				productosLocalStorage = JSON.parse( productosLocalStorage );
			}
			return this.id in productosLocalStorage;
		}
	},

	methods:{
		favorito(e){
			// console.log( this._props );
			let estado = e.target.checked;

			if( estado == true ){
				this.agregarFavorito( this._props );
			}else{
				this.quitarFavorito( this.id );
			}

			
		},
		agregarFavorito(datos){ 			
			var productosLocalStorage = localStorage.getItem('favoritos');

			if( !productosLocalStorage ){
				productosLocalStorage = {}; 
			}else{
				productosLocalStorage = JSON.parse( productosLocalStorage ); 
			}

			productosLocalStorage[ datos.id ] = datos; 
			productosLocalStorage = JSON.stringify( productosLocalStorage );
			localStorage.setItem( 'favoritos', productosLocalStorage );
		},
		quitarFavorito(prod){			
            var productosLocalStorage = localStorage.getItem('favoritos'); 				
            productosLocalStorage = JSON.parse( productosLocalStorage ); 
			
			if( prod in productosLocalStorage ){
				delete productosLocalStorage[prod]; 
			}
			productosLocalStorage = JSON.stringify( productosLocalStorage ); 
			localStorage.setItem( 'favoritos', productosLocalStorage ); 
		}
	}

})
