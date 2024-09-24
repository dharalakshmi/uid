const product = [
    {
        id: 0,
        image: 'https://th.bing.com/th/id/OIP.HJ1GybYAMddPVos5Ho2t9QHaFj?pid=ImgDet&rs=1',
        title: 'Carrots',
        price: 5, 
    },
    {
        id: 2,
        image: 'https://gpsretail.in/wp-content/uploads/2021/07/cabbage-1.png',
        title: 'Cabbage',
        price: 3,
    },
    {
        id: 3,
        image: 'https://www.rationatmydoor.com/wp-content/uploads/2019/02/beetroot-500x500.jpg',
        title: 'Beetroot',
        price: 4,
    },
    {
        id: 4,
        image: 'https://3.imimg.com/data3/XM/AB/MY-9152098/tomato.jpg',
        title: 'Tomatos',
        price: 3,
    },
    {
        id: 5,
        image: 'https://winfitservices.co.zw/wp-content/uploads/2020/06/diamond-potato-500x500-500x500-1.jpg',
        title: 'Potato',
        price: 4,

    },
    {
        id: 6,
        image: 'https://freshfruitsandveges.co.nz/wp-content/uploads/2020/04/green-capsicum-500x500.jpeg',
        title: 'capsicum',
        price: 4,
    },
    {
        id: 7,
        image: 'https://th.bing.com/th/id/OIP.VMptMwjOKUOzBCDt4CMmowHaHa?pid=ImgDet&rs=1',
        title: 'Brinjal',
        price: 3,

    },
    {
        id: 8,
        image: 'https://th.bing.com/th/id/OIP.57DqUG0bfylVsxF44wzOfQHaHa?pid=ImgDet&rs=1',
        title: 'Ladys finger',
        price: 2,
    },
    {
        id: 9,
        image: 'https://communityfarm.in/wp-content/uploads/2018/01/sweet-potato-500x500.jpg',
        title: 'Sweet potato',
        price: 3,
    },
    {
        id: 10,
        image: 'https://th.bing.com/th/id/OIP.Ua3JAEK7o6Emy-uavkdonQHaHa?pid=ImgDet&rs=1',
        title: 'Bittergourd',
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
