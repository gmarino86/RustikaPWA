self.addEventListener('activate', function (event) {
	console.log(' El SW activado', event); // extendableEvent
});

self.addEventListener('install', function (event) {
	self.skipWaiting();
	console.log('El SW se instalo', event); //installEvent
});







