const getAllProducts = async () => {
    return await fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => { 
            localStorage.setItem("products", JSON.stringify(json))
            return json })
        .catch(err => console.log(err))
}

const getCategorys = async () => {
    return await fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(json => {return json})
}

const showCounterCart = ()=>{
    // get cart from LS
    const CART = localStorage.getItem('cart')
    if (CART){
        // get element
        const COUNTER = document.querySelector(".products__cart_counter")
        // calc qty products
        let allProductsQty  = 0
        JSON.parse(CART).map((e)=>{
            allProductsQty += e.qty
        })
        // displaying counter
        COUNTER.innerHTML = allProductsQty
    }else{
        return
    }
}

const removeProductFromCart = (product_id)=>{
    let cart = localStorage.getItem('cart')

    cart ? cart = JSON.parse(cart) : cart = []

    if(cart.length > 0){
        let index = cart.findIndex(product => product.id == product_id)
        if(index != -1 && cart[index].qty > 1){
            cart[index].qty = cart[index].qty - 1
        }else if(index != -1){
            cart.splice(index, 1)
        }
    }

    localStorage.setItem('cart', JSON.stringify(cart))
    showCounterCart()
}

const addProductsToCart = (product_id)=>{
    // get cart from LS
    let cart = localStorage.getItem('cart')
    // check if cart is TRUE :)
    cart ? cart = JSON.parse(cart) : cart = [] 
    // check if cart is empty
    if (cart.length > 0){
        let index = cart.findIndex(product => product.id == product_id)
        // check existance of product
        if (index != -1){
            cart[index].qty++
            showCounterCart()
        }else{
            cart.push(
                {
                    id: product_id,
                    qty: 1
                }
            )
        }

    }else{
        cart.push({id: product_id, qty: 1})
    }

    // write to LS
    localStorage.setItem('cart', JSON.stringify(cart))
    showCounterCart()

    // display counter

}

const showProductsOnDOM = async (products, selector) => {
    // create html
    let html = ''
    // check if elements is in array
    products.length > 0 ? (
        products.map((e) => {
            const { title, description, category, id, price, image } = e
            html += `
            <div data-category="${category}" data-id="${id}" class="products__area_item">
                <img src="${image}" alt="">
                <h2>${title}</h2>
                <h4>${price} $</h4>
                <p>${description}</p>
                <button id="${id}" class="add_to_cart">Add to cart</button>
                <button id="${id}" class="delete_from_cart"">Delete from Cart</button>
            </div>
            `
        })
    ) : html = "<h1>Product not found</h1>"


    const AREA = document.querySelector(selector)

    AREA.innerHTML = html
    
    const ADD_TO_CART_BTNS = document.querySelectorAll('.add_to_cart')
    ADD_TO_CART_BTNS.forEach((btn)=>{
        btn.addEventListener('click', (e)=>{
            const product_id = btn.getAttribute('id')
            
            addProductsToCart(product_id)
        })
    })

    const REMOVE_FROM_CART_BTNS = document.querySelectorAll('.delete_from_cart')
    REMOVE_FROM_CART_BTNS.forEach((btn)=>{
        btn.addEventListener('click', (e)=>{
            const product_id = btn.getAttribute('id')
            
            removeProductFromCart(product_id)
        })
    })
}

const showCategorysOnDOM = (categories, selector)=>{
    const SELECT = document.querySelector(selector)

    let html = ``
    categories.map((e)=>{
        html += `<option>${e}</option>`
    })

    SELECT.innerHTML += html
}

const addNewProduct = async () => {
    await fetch('https://fakestoreapi.com/products', {
        method: "POST",
        body: JSON.stringify(
            {
                title: 'test product',
                price: 13.5,
                description: 'lorem ipsum set',
                image: 'https://i.pravatar.cc',
                category: 'electronic'
            }
        )
    })
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.log(err))
}

const sortProducts = (products, type, selector_area) => {
    let sortedProducts
    if (type == "ASC") {
        sortedProducts = products.sort((a, b) => a.price - b.price)
    } else {
        sortedProducts = products.sort((a, b) => b.price - a.price)
    }
    showProductsOnDOM(sortedProducts, selector_area)
}

const filterBySearchQuery = (products, query, selector_area) => {
    let filteredProducts = products.filter(item => item.title.toLowerCase().includes(query.toLowerCase()))
    localStorage.setItem('dynamic_products', JSON.stringify(filteredProducts))

    showProductsOnDOM(filteredProducts, selector_area)
}


// start point
document.addEventListener('DOMContentLoaded', async () => {
    // get path
    const PATH = window.location
   
    // setInterval(()=>{
    //     console.log(1)
    // }, 1000)

    // let counter = 0
    // const intervalID = setInterval(()=>{
    //     console.log(1)
    //     counter++
    //     if (counter >= 3){
    //         clearInterval(intervalID)
    //     }
    // }, 2000)

    showCounterCart()
    // get elements DOM
    const INPUT_SELECT = document.querySelector("#products__sort")
    const INPUT_SEARCH = document.querySelector("#filter_search")
    const REFRESH_PAGE_BTN = document.querySelector('.refresh_page')
    const ADD_Q_BTN = document.querySelector('.add_q_params')
    const READ_Q_BTN = document.querySelector('.read_q_params')
    const SCROLL_TO_BTN = document.querySelector('.scroll_to')
    const CATEGORY_SELECT = document.querySelector('#filter_category')
    const DELETE_CART_BTN = document.querySelector('.clear_cart')
    // get products
    
    const PRODUCTS = await getAllProducts()
    const CATEGORIES = await getCategorys()

    // display products
    showProductsOnDOM(PRODUCTS, ".products__area")
    showCategorysOnDOM(CATEGORIES, '#filter_category')

    // add event listeners
    DELETE_CART_BTN.addEventListener('click', (e)=>{
        const CART = localStorage.getItem('cart')

        const empty = []
        CART ? localStorage.setItem('cart',JSON.stringify(empty)) : localStorage.setItem('cart',JSON.stringify(empty))
        showCounterCart()
    })
    CATEGORY_SELECT.addEventListener('change', (e)=>{
        const VALUE = e.target.value
        const FILTERED_PRODUCTS = PRODUCTS.filter(products => products.category == VALUE)
        const CATEGORY_FILTERED = localStorage.getItem('dynamic_products')

        if (CATEGORY_FILTERED){
            localStorage.removeItem('category_filtered')
            localStorage.setItem('category_filtered', JSON.stringify(FILTERED_PRODUCTS))
        }else{
            localStorage.setItem('category_filtered', JSON.stringify(FILTERED_PRODUCTS))
        }
        
        showProductsOnDOM(FILTERED_PRODUCTS, '.products__area')

    })
    SCROLL_TO_BTN.addEventListener('click', (e)=>{
        const targetElement = document.querySelector(".read_q_params")
        targetElement.scrollIntoView({behavior: "smooth"})
    })
    INPUT_SELECT.addEventListener("change", (e) => {
        // get dynamic products
        let current_products
        const CATEGORY_FILTERED = localStorage.getItem('category_filtered')
        const DYNAMIC_PRODUCTS = localStorage.getItem('dynamic_products')

        if(DYNAMIC_PRODUCTS){
            current_products = JSON.parse(DYNAMIC_PRODUCTS)
        }else if(CATEGORY_FILTERED){
            current_products= JSON.parse(CATEGORY_FILTERED)
        }else{
            current_products = PRODUCTS
        }
        sortProducts(current_products, e.target.value, ".products__area")
    })

    INPUT_SEARCH.addEventListener("input", (e) => {
        const CATEGORY_FILTERED = localStorage.getItem('category_filtered')

        if(CATEGORY_FILTERED){
            filterBySearchQuery(JSON.parse(CATEGORY_FILTERED), e.target.value, ".products__area")
        }else{
            filterBySearchQuery(PRODUCTS, e.target.value, ".products__area")
        }
    })

    REFRESH_PAGE_BTN.addEventListener('click', (e)=>{
        location.reload() //page refreshing
        // location.href = 'https://rozetka.com.ua'
        // window.open('https://rozetka.com.ua', '_blank')
        // window.close()
    })
    ADD_Q_BTN.addEventListener('click', (e)=>{
        const url = new URL(location.href)
        const queryParams = url.searchParams
        queryParams.set('name', 'Jane')
        queryParams.set('age', 21)
        window.open(`${url.href}`, '_self')
    })

    READ_Q_BTN.addEventListener('click', (e)=>{
        const url = new URL(location.href)
        const queryParams = url.searchParams
        const name = queryParams.get('name')
        const age = queryParams.get('age')

        console.log(name, age)
    })
})

document.addEventListener('DOMContentLoaded', ()=>{
    localStorage.removeItem('dynamic_products')
    localStorage.removeItem('category_filtered')

})