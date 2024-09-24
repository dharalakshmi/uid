const product = [
    {
        id: 0,
        image: 'https://th.bing.com/th/id/OIP.qlZ77KU9ZJXNQtYbxt33-gAAAA?pid=ImgDet&rs=1',
        title: 'Candie 1',
        price: 5, 
    },
    {
        id: 2,
        image: 'https://i.pinimg.com/736x/ab/17/f7/ab17f7f5500e3dffe190cc1a4a389e6d.jpg',
        title: 'Candie 2',
        price: 3,
    },
    {
        id: 3,
        image: 'https://i5.walmartimages.com/asr/ed3b4b7e-a923-4413-b774-750c63189125.f1779c41278636a8ba5887339534f8d7.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff',
        title: 'candie 3',
        price: 4,
    },
    {
        id: 4,
        image: 'https://i.pinimg.com/originals/f1/55/c1/f155c11561c5dbf280323456f16fdaa7.jpg',
        title: 'candie 4',
    },
    {
        id: 5,
        image: 'https://i.pinimg.com/originals/9a/c2/43/9ac243968fddb0a53037e976dfee3ca8.jpg',
        title: 'candie 5',
        price: 4,

    },
    {
        id: 6,
        image: 'https://th.bing.com/th/id/OIP.robEjkoBfx7udjELSQpaqwHaGN?pid=ImgDet&w=768&h=644&rs=1',
        title: 'candie 6',
        price: 4,
    },
    {
        id: 7,
        image: 'https://th.bing.com/th/id/OIP._cxzIhPTL-NTXdyNGw0zUQHaFj?pid=ImgDet&w=4032&h=3024&rs=1',
        title: 'candie 7',
        price: 3,

    },
    {
        id: 8,
        image: 'https://preview.redd.it/lft7twnp34951.jpg?width=960&crop=smart&auto=webp&s=01689b6c3bbe00b33aa09ef5ffbb29dae090d5a8',
        title: 'candie 8',
        price: 2,
    },
    {
        id: 9,
        image: 'https://external-preview.redd.it/oQE5p-NKxkg6r7xqiF4KdrUushaDnP15D5y8sAHu4uY.jpg?auto=webp&s=afaf9c3851b50139ce27313c93422da6f75e8358',
        title: 'candie 9',
        price: 3,
    },
    {
        id: 10,
        image: 'https://th.bing.com/th/id/OIP.-fyAMiw06xxoHtFHiueCmgHaFK?pid=ImgDet&rs=1',
        title: 'candie 10',
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
