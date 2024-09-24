const product = [
    {
        id: 0,
        image: 'https://tomavo.ca/wp-content/uploads/2020/07/grapes-gree-500x500-1.png',
        title: 'Grapes',
        price: 5, 
    },
    {
        id: 2,
        image: 'https://th.bing.com/th/id/R.ac109ae4b4ae3b7741f179e987272542?rik=TlBiFd86iDYl5w&riu=http%3a%2f%2fclipartmag.com%2fimages%2fwatermelon-clipart-40.jpg&ehk=gkx7gvg5O9M5wb4fjAnv7mRkeab6jnEo4zobsI2Vbno%3d&risl=&pid=ImgRaw&r=0',
        title: 'Watermelon',
        price: 3,
    },
    {
        id: 3,
        image: 'https://static.vecteezy.com/system/resources/thumbnails/046/323/390/small/bunch-of-ripe-yellow-bananas-on-transparent-background-png.png',
        title: 'Banana',
        price: 4,
    },
    {
        id: 4,
        image: 'https://5.imimg.com/data5/SELLER/Default/2021/1/LJ/WU/GH/116075104/mango-500x500.png',
        title: 'Dragen fruit',
        price: 3,
    },
    {
        id: 5,
        image: 'https://th.bing.com/th/id/OIP.ma7-nP8F6yZlg1bZjUp1JwHaHa?pid=ImgDet&rs=1',
        title: 'oranges',
        price: 4,

    },
    {
        id: 6,
        image: 'https://th.bing.com/th/id/R.307d324b509320a9cdaf710bc50e3078?rik=Qs69ccokGar%2b0A&riu=http%3a%2f%2fhealthyliving.natureloc.com%2fwp-content%2fuploads%2f2015%2f08%2fPapaya-ripe-fruit-health-benefitsmedicinal-values.jpg&ehk=8i%2fGDkvKmhiqtf1tO460MejKKnXhRotvIgDEX4E6hRg%3d&risl=&pid=ImgRaw&r=0',
        title: 'Papaya',
        price: 4,
    },
    {
        id: 7,
        image: 'https://th.bing.com/th/id/OIP.vrz2y0NQv0a1RcxjFQRrfgHaE7?pid=ImgDet&rs=1',
        title: 'Sapota',
        price: 3,

    },
    {
        id: 8,
        image: 'https://th.bing.com/th/id/R.4843110c0a87f69186b7ad89e64100ee?rik=EKV%2b7U3qxlbiGA&riu=http%3a%2f%2fsites.psu.edu%2fsiowfa15%2fwp-content%2fuploads%2fsites%2f29639%2f2015%2f09%2f04_Apples.jpg&ehk=MszF7eJXsNMnD2CaW4UbOQmfHpNofv%2fo3vfKbvkoWU0%3d&risl=&pid=ImgRaw&r=0',
        title: 'Apple',
        price: 2,
    },
    {
        id: 9,
        image: 'https://th.bing.com/th/id/OIP.3yrzbKoKIgyR7eBhHma26AHaGm?pid=ImgDet&rs=1',
        title: 'Pineapple',
        price: 3,
    },
    {
        id: 10,
        image: 'https://th.bing.com/th/id/OIP.EbkRmN5coli6C914SvPVswHaF8?pid=ImgDet&rs=1',
        title: 'Guava',
        price: 2,
    }
    
];
const categories = [...new Set(product.map((item)=>{return item}))]
   let i=0;
document.getElementById('root').innerHTML=categories.map((item)=>
{
    var{image,title,price}=item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`

    )

}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(a){
    let j=0,total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
        
    }
    else {
        document.getElementById("cartitem").innerHTML = cart.map((items)=>
        {
            var{image, title, price} = items;
            total=total+price;
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>    
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size:15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
        if (total > 0) {
            document.getElementById("total").innerHTML = "$ "+total+".00";
        } else {
            document.getElementById("total").innerHTML = "";
        }
    }
}
