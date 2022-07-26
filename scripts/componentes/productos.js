Vue.component ('gm-productos',{
    data: function(){
        return {
			titulo : "<h2 class='text-center my-5'>Nuestros Productos</h2>",
			promociones: true,
			productos: [
				{
					id: 1,
					imagen : "img/goldenAle.png",
					alt : "RUSTIKA - Golden Ale",
					nombre : "Golden Ale",
					precio : "Cerveza Artesanal 660cc ........ $160"
				},
				{
					id: 2,
					imagen : "img/ipa.png",
					alt : "RUSTIKA - IPA",
					nombre : "IPA",
					precio : "Cerveza Artesanal 660cc ........ $160"
				},
				{
					id: 3,
					imagen : "img/irishRed.png",
					alt : "RUSTIKA - Irish Red",
					nombre : "Irish Red",
					precio : "Cerveza Artesanal 660cc ........ $160"
				},
				{
					id: 4,
					imagen : "img/englishPorter.png",
					alt : "RUSTIKA - English Porter",
					nombre : "English Porter",
					precio : "Cerveza Artesanal 660cc ........ $160"
				},
				{
					id: 5,
					imagen : "img/barleyWine.png",
					alt : "RUSTIKA - Barley Wine",
					nombre : "Barley Wine",
					precio : "Cerveza Artesanal 660cc ........ $160"
				},
				{
					id: 6,
					imagen : "img/hefeweizen.png",
					alt : "RUSTIKA - Hefeweizen",
					nombre : "Hefeweizen",
					precio : "Cerveza Artesanal 660cc ........ $160"
				}
			]
        }
    },
    template: `
        <section class="container" id="productos">
        <div v-html="titulo">
        </div>


        <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">

                <!-- ACA ARRANCA EL V-FOR  -->
                
				
				<componente-items v-for="item in productos"
					v-bind:key="item.id"
					v-bind:id="item.id"
					v-bind:imagen="item.imagen"
					v-bind:alt="item.alt"
					v-bind:checked="item.seleccionado"
					v-bind:nombre = "item.nombre"
					v-bind:precio = "item.precio">
				</componente-items>


                <!-- ACA TERMINA EL V-FOR  -->

            </div>        
        </div>

        </section>
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
			losNav[1].classList.add("active");
		},

	},
})