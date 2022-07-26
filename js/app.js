
var app = new Vue({
	el: "#productos",
	data: {
			titulo : "<h2 class='text-center my-5'>Nuestros Productos</h2>",
			promociones: true,
			productos: [
				{
					imagen : "img/goldenAle.png",
					alt : "RUSTIKA - Golden Ale",
					nombre : "Golden Ale",
					precio : "Cerveza Artesanal 660cc ........ $160"
				},
				{
					imagen : "img/ipa.png",
					alt : "RUSTIKA - IPA",
					nombre : "IPA",
					precio : "Cerveza Artesanal 660cc ........ $160"
				},
				{
					imagen : "img/irishRed.png",
					alt : "RUSTIKA - Irish Red",
					nombre : "Irish Red",
					precio : "Cerveza Artesanal 660cc ........ $160"
				},
				{
					imagen : "img/englishPorter.png",
					alt : "RUSTIKA - English Porter",
					nombre : "English Porter",
					precio : "Cerveza Artesanal 660cc ........ $160"
				},
				{
					imagen : "img/barleyWine.png",
					alt : "RUSTIKA - Barley Wine",
					nombre : "Barley Wine",
					precio : "Cerveza Artesanal 660cc ........ $160"
				},
				{
					imagen : "img/hefeweizen.png",
					alt : "RUSTIKA - Hefeweizen",
					nombre : "Hefeweizen",
					precio : "Cerveza Artesanal 660cc ........ $160"
				}
			]  
 			
		}
})
