setTimeout(()=> {
    $(".modal").fadeIn().css("display", "flex")
    $('body').addClass('hide-scroll')
}, 8000);

$(".btn-close").click(() => {
    $(".modal").fadeOut()
    $('body').removeClass('hide-scroll')
});

$(".modal").click((e) => {
    $(".modal").fadeOut()
    $('body').removeClass('hide-scroll')

});

$(".modal-wrapper").click((e) => {
    //Khong nhan event ben ngoai
    e.stopPropagation();
})

$(document).ready(function() {
    $(".heart-icon").click((e) => {
        e.preventDefault();
        $('.overlayWishlist').css('visibility','visible');
        $(".wishlist").addClass("opened")
    })
    $(".close-wishlist").click((e) => {
        e.preventDefault();
        $('.overlayWishlist').css('visibility','hidden');
        $(".wishlist").removeClass("opened")
    })
    $(".overlayWishlist").click((e) => {
        $('.overlayWishlist').css('visibility','hidden');
        $(".wishlist").removeClass("opened");
    })
    $(".cart-selected").click((e) => {
        $('.overlayCart').css('visibility','visible');
        $(".cart").addClass("opened")
    })
    $(".close-cart").click((e) => {
        $('.overlayCart').css('visibility','hidden');
        $(".cart").removeClass("opened")
    })
    $(".overlayCart").click((e) => {
        $('.overlayCart').css('visibility','hidden');
        $(".cart").removeClass("opened");
    })
})


// Scroll
$(document).ready(function() {
    $(window).scroll(function() {
        const html = $("html").scrollTop();
        if(html>150){
            $('.header-middle').css('box-shadow','0 2px 5px rgb(0,0,0,0.1)')
            $(".header-middle").addClass("fixed");
        } else {
            $('.header-middle').css('box-shadow','none')
            $(".header-middle").removeClass("fixed");
        }
        if(html > 300){
            $(".scroll-top").addClass("show-scroll-top");
        } else {
            $(".scroll-top").removeClass("show-scroll-top");
        }
        if(html > 1450){
            $("aside").addClass("stickyPosition");
            $(".page-content").addClass("positionRelative")	

        } else {
            $("aside").removeClass("stickyPosition");
            $(".page-content").removeClass("positionRelative")	
        }
        if(html > 1650){
            $("aside").removeClass("stickyPosition");
            $("aside").addClass("positionAbsolute");
        } else {
            $("aside").removeClass("positionAbsolute"); 
        }
        

    })
})
$(document).on("click",".icon-chevron",function(e){
    var id = $(this).data("id")
    $(`.i-${id}`).toggleClass("icon-rotate")
    $(`.mobile-menu-${id}`).toggleClass("show")  
})
$(document).ready(function() {
    $(".scroll-top").click(function() {
        $("html").animate({ scrollTop: 0 });
    });
})

$(document).ready(function(e) {
    $(".btn-menu").click((e) => {
        $(".mobile-menu-wrapper").addClass("show-mobile-menu")
        $(".home-loader").addClass("menu-active")
        $('body').css("overflow-x", "hidden")
    })
    $(".mobile-menu-close").click((e) => {
        $(".mobile-menu-wrapper").removeClass("show-mobile-menu")
        $(".home-loader").removeClass("menu-active")
    })
})

// owl-carousel
const nextIcon = '<i class="fa-solid fa-angle-right"></i>'
const prevIcon = '<i class="fa-solid fa-angle-left"></i>'
$(document).ready(function(){
    $(".slider").owlCarousel({
        items: 1,
        dots: true,
        nav: false,
        loop: true,
        autoplay: false
    });
    $(".owl-brands").owlCarousel({
        nav: false,
        dots: false,
        autoplay: true,
        margin: 20,
        loop: true,
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 5
            }
        }
    });
    $(".owl-widget").owlCarousel({
        nav: true,
        navText: [
            prevIcon,
            nextIcon
        ],
        dots: false,
        loop: false,
        items: 1,
        margin: 20
    });
});


// Featured products
const wishlistProduct = [
    {
        id: 22,
        img: "./assets/img/Wishlist/product-1 (1).jpg",
        name: "Girl's Dark Bag",
        price: 84.00
    },
    {
        id: 23,
        img: "./assets/img/Wishlist/product-2.jpg",
        name: "Women's Fashional Comforter",
        price: 84.00
    },
    {
        id: 24,
        img: "./assets/img/Wishlist/product-3.jpg",
        name: "Wide Knickerbockers",
        price: 84.00
    },
]
const cartProduct = [
    {
        id: 20,
        img: "./assets/img/Cart/product-1.jpg",
        name: "Riode White Trends",
        quantity: 1,
        price: 21.00
    },
    {
        id: 21,
        img: "./assets/img/Cart/product-2.jpg",
        name: "Dark Blue Women's Leomora Hat",
        quantity: 1,
        price: 118.00
    },
]
const products = [
    {
        id: 1,
        new: true,
        img: './assets/img/products/1.jpg',
        name: "Comfortable Brown Scarf",
        type: "Women's",
        price: 28.74,
        oldPrice: 0,
        sale: 0,
        rating: 3
    },
    {
        id: 2,
        new: false,
        img: './assets/img/products/2.jpg',
        name: "Fashional Handbag",
        type: "Bags",
        price: 83.32,
        oldPrice: 0,
        sale: 0,
        rating: 1
    },
    {
        id: 3,
        new: true,
        img: './assets/img/products/3.jpg',
        name: "Converse Season Shoes",
        type: "Shoes",
        price: 140.00,
        oldPrice: 187.00,
        sale: 35,
        rating: 4
    }, 
    {
        id: 4,
        new: true,
        img: './assets/img/products/4.jpg',
        name: "A Dress-suit Valise",
        type: "Bags",
        price: 242.12,
        oldPrice: 0,
        sale: 0,
        rating: 3
    },
    {
        id: 5,
        new: false,
        img: './assets/img/products/5.jpg',
        name: "Fashion Electric Wrist Watch",
        type: "Watch",
        price: 472.14,
        oldPrice: 524.45,
        sale: 27,
        rating: 2
    },
    {
        id: 6,
        new: false,
        img: './assets/img/products/6.jpg',
        name: "Fashional Handbag",
        type: "Women's",
        price: 72.34,
        oldPrice: 0,
        sale: 0,
        rating: 4
    },
    {
        id: 7,
        new: true,
        img: './assets/img/products/7.jpg',
        name: "Flush Blue Tank",
        type: "Cosmetic",
        price: 16.45,
        oldPrice: 0,
        sale: 0,
        rating: 2
    },
    {
        id: 8,
        new: false,
        img: './assets/img/products/8.jpg',
        name: "Women’s Red Sneaker",
        type: "Shoes",
        price: 49.76,
        oldPrice: 0,
        sale: 0,
        rating: 5
    },

];
const saleProducts = [
    {
        id: 9,
        img: './assets/img/products/9.jpg',
        name: "Women’s Beautiful Headgear",
        price: 78.24,
        oldPrice: 0,
        sale: 0,
        rating: 2
    },
    {
        id: 10,
        img: './assets/img/products/10.jpg',
        name: "Hand Electric Cell",
        price: 26.00,
        oldPrice: 0,
        sale: 0,
        rating: 5
    },
    {
        id: 11,
        img: './assets/img/products/11.jpg',
        name: "Women Hempen Hood a Mourner",
        price: 30.00,
        oldPrice: 0,
        sale: 0,
        rating: 1
    }
]
const latestProducts = [
    {
        id: 12,
        img: './assets/img/products/12.jpg',
        name: "Fashionable Orginal Trucker",
        price: 78.64,
        oldPrice: 0,
        sale: 0,
        rating: 2
    },
    {
        id: 13,
        img: './assets/img/products/13.jpg',
        name: "Men Summer Sneaker",
        price: 79.45,
        oldPrice: 0,
        sale: 0,
        rating: 3
    },
    {
        id: 14,
        img: './assets/img/products/14.jpg',
        name: "Season Sports Cap",
        price: 64.27,
        oldPrice: 0,
        sale: 0,
        rating: 1
    }
]
const bestWeekProducts = [
    {
        id: 15,
        img: './assets/img/products/15.jpg',
        name: "Blue Sports Shoes",
        price: 36.00,
        oldPrice: 0,
        sale: 0,
        rating: 1
    },
    {
        id: 16,
        img: './assets/img/products/16.jpg',
        name: "Fashion Handbag",
        price: 53.99,
        oldPrice: 67.99,
        sale: 0,
        rating: 5
    },
    {
        id: 17,
        img: './assets/img/products/17.jpg',
        name: "Women’s Beautiful Headgear",
        price: 82.23,
        oldPrice: 0,
        sale: 0,
        rating: 3
    }
]
const popularProducts = [
    {
        id: 10,
        img: './assets/img/products/10.jpg',
        name: "Hand Electric Cell",
        price: 26.00,
        oldPrice: 0,
        sale: 0,
        rating: 5
    },
    {
        id: 11,
        img: './assets/img/products/11.jpg',
        name: "Men's Fashion Hood",
        price: 39.00,
        oldPrice: 0,
        sale: 0,
        rating: 5
    },
    {
        id: 12,
        img: './assets/img/products/12.jpg',
        name: "Women's Fashion Jeans Clothing",
        price: 199.00,
        oldPrice: 210.00,
        sale: 0,
        rating: 5
    }
]
const popularProducts2 = [
    {
        id: 10,
        img: './assets/img/products/10.jpg',
        name: "Fashion Haking Hat",
        price: 39.00,
        oldPrice: 0,
        sale: 0,
        rating: 5
    },
    {
        id: 11,
        img: './assets/img/products/11.jpg',
        name: "Men's Fashion Hood",
        price: 19.00,
        oldPrice: 0,
        sale: 0,
        rating: 5
    },
    {
        id: 12,
        img: './assets/img/products/12.jpg',
        name: "Women's Fashion Jeans Clothing",
        price: 199.00,
        oldPrice: 210.00,
        sale: 0,
        rating: 5
    }
]
$(function(){
    renderProducts('.product', products);
    renderGroupProducts('.sale-products', saleProducts);
    renderGroupProducts('.latest-products', latestProducts);
    renderGroupProducts('.best-of-week-products', bestWeekProducts);
    renderGroupProducts('.popular-products-1', popularProducts);
    renderGroupProducts('.popular-products-2', popularProducts2);
    renderCartProduct('.cart-products', cartProduct);
    renderWishlist('.wishlist-product', wishlistProduct);
})

// Add to cart
$(document).on('click','.btn-product-cart', function(e) {
    e.preventDefault();
    let id = $(this).data("id")
    let indexCart = cartProduct.findIndex(val => val.id == id)
    let indexProduct = products.findIndex(val => val.id == id)
    if(indexCart !== -1){
        cartProduct[indexCart].quantity += 1 
    } else {
        cartProduct.push({
            id: products[indexProduct].id,
            img: products[indexProduct].img,
            name: products[indexProduct].name,
            price: products[indexProduct].price,
            quantity: 1         
        })
    }
    renderCartProduct('.cart-products', cartProduct);
})

// Add to wishlist
$(document).on('click','.btn-product-heart', function(e) {
    e.preventDefault();
    let id = $(this).data("id")
    let indexWishlist = wishlistProduct.findIndex(val => val.id == id)
    let indexProduct = products.findIndex(val => val.id == id)
    if(indexWishlist == -1){
        wishlistProduct.push({
            id: products[indexProduct].id,
            img: products[indexProduct].img,
            name: products[indexProduct].name,
            price: products[indexProduct].price,
            quantity: 1         
        })
    } 
    renderWishlist('.wishlist-product', wishlistProduct);
})

// Remove from cart
$(document).on("click",".btn-removeCart",function(e) {
    let id = $(this).data("id");
    let idx = cartProduct.findIndex(val => val.id == id)
    cartProduct.splice(idx,1)
    renderCartProduct('.cart-products', cartProduct);
})


// Remove from wishlist
$(document).on("click",".btn-removeWishlist",function(e) {
    let id = $(this).data("id");
    let idx = wishlistProduct.findIndex(val => val.id == id)
    wishlistProduct.splice(idx,1)
    renderWishlist('.wishlist-product', wishlistProduct);
})


function renderProducts(selector = "", products = []){
    products.map((val) => { 
        $(selector).append(`
        <div class="col-md-3 mb-4 plr-2">
            <div class="product-item text-center">
                <figure class="product-media">
                    <a href="">
                        <img src="${val.img}" alt="">
                    </a>
                    <div class="product-label-group">
                        ${renderLabel(val.new, val.sale)}
                    </div>
                    <div class="product-action-vertical">
                        <a data-id=${val.id} href class="btn-product-icon btn-product-cart" title="Add to cart">
                            <i class='bx bx-shopping-bag'></i>
                        </a>
                        <a data-id=${val.id} href class="btn-product-icon btn-product-heart" title="Add to wish list">
                            <i class='bx bx-heart'></i>
                        </a>
                    </div>
                    <div class="product-action-horizontal">
                        <a href="#" class="btn-product-quickview">Quick View</a>
                    </div>
                </figure>
                <div class="product-details">
                    <a class="product-type">
                        ${val.type}
                    </a>
                    <h3 class="product-name">
                        <a href="">${val.name}</a>
                    </h3>
                    <div class="product-price">
                        ${renderPrice(val.price, val.oldPrice, val.sale)}
                    </div>
                    <div class="product-rating">
                        <ul class="stars">
                            ${renderStars(val.rating)}
                        </ul>
                        <div class="popup">
                            ${val.rating.toFixed(2)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `)
    })
}

function renderGroupProducts(selector = "", products = []){
    products.map((val) => { 
        $(selector).append(`
        <div class="product-cols">
            <div class="product-items">
                <figure class="product-media">
                    <a href="">
                        <img src="${val.img}" alt="">
                    </a>
                </figure>
                <div class="product-details">
                    <h3 class="product-name">
                        <a href="">${val.name}</a>
                    </h3>
                    <div class="product-price">
                        ${renderPrice(val.price, val.oldPrice, val.sale)}
                    </div>
                    <div class="product-rating">
                        <ul class="stars">
                            ${renderStars(val.rating)}
                        </ul>
                        <div class="popup">
                            ${val.rating.toFixed(2)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `)
    })
}
function renderStars(rating = 0){
    let res = ""
    for (let i = 0; i < 5; i++){
        if(i<rating){
            res += `<li class="active-star"><i class="fa-solid fa-star"></i></li>`
        } else {
            res += `<li><i class="fa-solid fa-star"></i></li>`
        }
    }
    return res;
}
function renderWishlist(selector = "", products = []) {
    $(selector).empty();
    products.map((val) => {
        $(selector).append(`
        <div class="products-item">
            <figure class="products-item-media">
                <img src="${val.img}" alt="">
                <button data-id=${val.id} class="btn-removeProduct btn-removeWishlist">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </figure>
            <div class="products-item-details">
                <a href="" class="product-name">
                    ${val.name}
                </a>
                <div class="price-box">
                    <p class="product-price">
                        $${val.price.toFixed(2)}
                    </p>
                </div>
            </div>
        </div>
        `)
    })
}
function renderCartProduct(selector = "", product = []){
    let total = 0
    $(selector).empty();
    $('.cart-products-total').empty();
    $('.cart-count').empty();
    $('.cart-price').empty();
    product.map((val) => {
        total += val.price * val.quantity
        $(selector).append(`
        <div class="products-item">
            <figure class="products-item-media">
                <img src="${val.img}" alt="">
                <button data-id=${val.id} class="btn-removeProduct btn-removeCart">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </figure>
            <div class="products-item-details">
                <a href="" class="product-name">
                    ${val.name}
                </a>
                <div class="price-box">
                    <p class="product-quantity">
                        ${val.quantity}
                        <span>X</span>
                    </p>
                    <p class="product-price">
                        $${val.price.toFixed(2)}
                    </p>
                </div>
            </div>
        </div>
        `)
    })
    $('.cart-products-total').append(`
        <label for="">Subtotal</label>
        <label class="price-total">$${total.toFixed(2)}</label>
    `)
    $('.cart-count').append(`
        <span>${cartProduct.length}</span>
    `)
    $('.cart-price').html(`$${total.toFixed(2)}`)
}
function renderLabel(status,sale) {
    let res = ""
    if(status){
        res += `<label class="product-label label-new">new</label>`
    } 
    if(sale){
        res += `<label class="product-label label-sale">${sale}% Off</label>`
    }
    return res;
}
function renderPrice(price, oldPrice, sale) {
    let res = ""
    if(oldPrice){
        res += `<ins class="price-new">$${price.toFixed(2)}</ins>
                <del class="price-old">$${oldPrice.toFixed(2)}</del>`
    } else {
        res += `<span class="price">$${price.toFixed(2)}</span>`
    }
    return res;
}