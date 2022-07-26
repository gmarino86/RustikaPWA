Vue.component('gm-cliente-list', {
    props:['nombre','apellido','mail'],
    template: `
        <div>
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title text-dark">{{nombre}} {{apellido}}</h5>
                <p class="card-text text-dark">{{mail}}</p>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
                </div>
            </div>
        </div>
    `
})