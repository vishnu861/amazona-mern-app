import bcrypt from 'bcryptjs';


const data = {
    users: [
        {
            name:'vishnu',
            email:'admin@example.com',
            password: bcrypt.hashSync('1234',8),
            isAdmin:true
        },
        {
            name:'vamshi',
            email:'user@example.com',
            password: bcrypt.hashSync('1234',8),
            isAdmin:false
        }
    ],
    products: [
        {

            name:'Nike Slim Shirt',
            category:'Shirts',
            image:'/images/p1.jpg',
            price:120,
            countInStock:10,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            description:'high quality product'
        },
        {
        
            name:'Adidas Fit Shirt',
            category:'Shirts',
            image:'/images/p2.jpg',
            price:100,
            countInStock:20,
            brand:'Adidas',
            rating:4.0,
            numReviews:10,
            description:'high quality product'
        },
        {
            
            name:'Lacoste Free Shirt',
            category:'Shirts',
            image:'/images/p3.jpg',
            price:220,
            countInStock:0,
            brand:'Lacoste',
            rating:3.5,
            numReviews:17,
            description:'high quality product'
        },
        {
           
            name:'Nike slim Pant',
            category:'Pants',
            image:'/images/p4.jpg',
            price:78,
            countInStock:15,
            brand:'Nike',
            rating:3,
            numReviews:14,
            description:'high quality product'
        },
        {
          
            name:'Puma Slim Pant',
            category:'Pants',
            image:'/images/p5.jpg',
            price:140,
            countInStock:5,
            brand:'Puma',
            rating:5,
            numReviews:10,
            description:'high quality product'
        },
        {
            
            name:'Adidas Slim Shirt',
            category:'Pants',
            image:'/images/p6.jpg',
            price:120,
            countInStock:10,
            brand:'Adidas',
            rating:2,
            numReviews:22,
            description:'high quality product'
        }
    ]
}

export default data;