const lista = document.querySelector('#listadoPrendas')

const obetenerProductos = async() => {
    try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        .then( (data) => {
                    data.forEach((post) => {
                        const li = document.createElement('li')
                        li.innerHTML = `
                            <div class="listadoProductos">
                            <p class="titulo-Compra">Prenda: ${post.title}</p>
                            <p class="precio-Compra">Precio: ${post.price}</p>
                            </div>
                        `
                        lista.append(li)
                    })
                })
        
    } catch(error) {
        console.log(error)
    }
}

obetenerProductos()