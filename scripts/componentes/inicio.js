Vue.component ('gm-inicio', {
	data : function(){
		return {
			imgBanner : "img/portada.png"
		}
	},
	template : `
	<div>
		<section class="container-fluid">
			<div class="row text-center mt-3">
				<div class="col-12 col-sm-5 order-sm-1 contIMG">
					<img :src="imgBanner" alt="Botellas" class='botellas'>
				</div>
				<div class="col-12 col-sm-7 my-5  order-sm-0 banner">
					<h2>UNA CERVEZA CON <span>PERSONALIDAD</span></h2>
					<p>Te ofrecemos una excelente variedad de cervezas y platos deliciosos para acompañarlas.</p>
					<p>También podés ver nuestra sección de ofertas.</p>
					<router-link class="btn btn-outline-light" to="/productos" exact>Productos</router-link>
				</div>
			</div>
		</section>
		<div class="container-fluid">
			<div class="row bg-white text-dark telefono justify-content-around text-center">
				<div class="col-12 col-sm-4 my-3">
					<p class="h3">HACE TU PEDIDO WHATSAPP</p>
					<div class="row">
						<div class="col-4 text-right">
							<img src="img/whatsapp.png" alt="Whatsapp">
						</div>
						<div class="col-8 text-left">
							<p class="m-0">(011) 2192 3372</p>
							<p class="m-0">(011) 2305 4953</p>
						</div>
					</div>
				</div>
				<div class="col-12 col-sm-4 my-3">
					<p class="h3">SEGUINOS EN INSTAGRAM</p>
					<div class="row">
						<div class="col-4 text-right">
							<img src="img/instagram.png" alt="Instagram">
						</div>
						<div class="col-8 text-left">
							<p class="mt-2">@RUSTIKA_ARG</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<article class="my-5">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<h3 class="text-center"><u>CIUDAMOS EL MEDIO AMBIENTE</u></h3>
					</div>
					
					<div class="col-12 col-lg-6 offset-lg-3 my-4">
						<p>En Rustika Brewing Co. creemos que la calidad de un producto comienza en su materia prima, por eso elaboramos nuestras cervezas con las mejores maltas y lúpulos 100% naturales, sin preservantes aditivos ni colorantes químicos.</p>
						<p>Nos preocupamos tanto de nuestros productos como del entorno de donde obtenemos la materia prima, por ello no utilizamos ningún clarificante de origen animal.</p>
						<p>Nuestras soluciones desinfectantes son 100% naturales y reciclamos un 80% del agua utilizada para el proceso total de la elaboración de nuestra cerveza.</p>
					</div>
				</div>
		
			</div>
		</article>
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
			losNav[0].classList.add("active");
		}
    },
})
