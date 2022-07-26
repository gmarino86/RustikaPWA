const home      = {template:`<gm-inicio></gm-inicio>`, name: "home"}
const productos = {template:`<gm-productos></gm-productos>`, name: "productos"}
const contacto  = {template:`<gm-contacto></gm-contacto>`, name: "contacto"}
const clientes  = {template:`<gm-clientes></gm-clientes>`, name: "clientes"}

const routes = [
    {path: '/', component: home},
    {path: '/productos', component: productos},
    {path: '/contacto', component: contacto},
    {path: '/clientes', component: clientes},
    {path: '*', redirect: '/'}
]

const router = new VueRouter({
    routes
  })
  
const app = new Vue({
    router,
}).$mount('#app')


  