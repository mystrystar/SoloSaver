export const restaurants = [
    {
        id: 1,
        name: 'Dragonfly',
        cuisine: 'Chinese, Asian',
        rating: 4.5,
        deliveryTime: '40 mins',
        priceForTwo: '₹1600 for two',
        image: 'https://images.unsplash.com/photo-1599493356221-109c636d9342?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        menu: [
            { id: 101, name: 'Chilli Chicken', price: 420, isVeg: false },
            { id: 102, name: 'Veg Hakka Noodles', price: 320, isVeg: true },
            { id: 103, name: 'Manchow Soup', price: 180, isVeg: true },
            { id: 104, name: 'Spring Rolls', price: 250, isVeg: true },
        ]
    },
    {
        id: 2,
        name: 'The Golden Spoon',
        cuisine: 'North Indian, Mughlai',
        rating: 4.2,
        deliveryTime: '35 mins',
        priceForTwo: '₹1200 for two',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        menu: [
            { id: 201, name: 'Butter Chicken', price: 480, isVeg: false },
            { id: 202, name: 'Chicken Biryani', price: 290, isVeg: false },
            { id: 203, name: 'Dal Makhani', price: 300, isVeg: true },
            { id: 204, name: 'Garlic Naan', price: 75, isVeg: true },
        ]
    },
    {
        id: 3,
        name: 'Pasta La Vista',
        cuisine: 'Italian, Pasta, Pizza',
        rating: 4.0,
        deliveryTime: '30 mins',
        priceForTwo: '₹1000 for two',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        menu: [
            { id: 301, name: 'Margherita Pizza', price: 350, isVeg: true },
            { id: 302, name: 'Arrabbiata Pasta', price: 380, isVeg: true },
            { id: 303, name: 'Chicken Lasagna', price: 550, isVeg: false },
            { id: 304, name: 'Garlic Bread', price: 180, isVeg: true },
        ]
    },
    {
        id: 4,
        name: 'Spice Route',
        cuisine: 'South Indian, Kerala',
        rating: 4.6,
        deliveryTime: '45 mins',
        priceForTwo: '₹900 for two',
        image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        menu: [
            { id: 401, name: 'Appam with Stew', price: 250, isVeg: true },
            { id: 402, name: 'Kerala Prawn Curry', price: 450, isVeg: false },
            { id: 403, name: 'Malabar Parotta', price: 60, isVeg: true },
            { id: 404, name: 'Fish Molee', price: 400, isVeg: false },
        ]
    },
    {
        id: 5,
        name: 'Urban Tadka',
        cuisine: 'Punjabi, Street Food',
        rating: 4.1,
        deliveryTime: '25 mins',
        priceForTwo: '₹800 for two',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=481&q=80',
        menu: [
            { id: 501, name: 'Chole Bhature', price: 220, isVeg: true },
            { id: 502, name: 'Amritsari Kulcha', price: 180, isVeg: true },
            { id: 503, name: 'Tandoori Chicken', price: 380, isVeg: false },
            { id: 504, name: 'Lassi', price: 120, isVeg: true },
        ]
    },
    {
        id: 6,
        name: 'The Noodle Bar',
        cuisine: 'Thai, Chinese',
        rating: 4.3,
        deliveryTime: '38 mins',
        priceForTwo: '₹1100 for two',
        image: 'https://images.unsplash.com/photo-1562802378-063ec14a1c72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        menu: [
            { id: 601, name: 'Pad Thai', price: 360, isVeg: false },
            { id: 602, name: 'Green Curry', price: 340, isVeg: false },
            { id: 603, name: 'Tom Yum Soup', price: 200, isVeg: false },
            { id: 604, name: 'Fried Rice', price: 220, isVeg: true },
        ]
    },
    {
        id: 7,
        name: 'Pizza Italiano',
        cuisine: 'Pizza, Italian',
        rating: 4.4,
        deliveryTime: '32 mins',
        priceForTwo: '₹950 for two',
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
        menu: [
            { id: 701, name: 'Farmhouse Pizza', price: 400, isVeg: true },
            { id: 702, name: 'Pepperoni Pizza', price: 450, isVeg: false },
            { id: 703, name: 'Spaghetti Aglio e Olio', price: 320, isVeg: true },
            { id: 704, name: 'Cheese Garlic Bread', price: 200, isVeg: true },
        ]
    },
    {
        id: 8,
        name: 'The Curry House',
        cuisine: 'Indian, Biryani',
        rating: 4.0,
        deliveryTime: '50 mins',
        priceForTwo: '₹1300 for two',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        menu: [
            { id: 801, name: 'Hyderabadi Chicken Biryani', price: 350, isVeg: false },
            { id: 802, name: 'Mutton Rogan Josh', price: 550, isVeg: false },
            { id: 803, name: 'Paneer Lababdar', price: 320, isVeg: true },
            { id: 804, name: 'Rumali Roti', price: 50, isVeg: true },
        ]
    },
    {
        id: 9,
        name: 'Bangkok Street',
        cuisine: 'Thai, Street Food',
        rating: 4.7,
        deliveryTime: '33 mins',
        priceForTwo: '₹700 for two',
        image: 'https://images.unsplash.com/photo-1563245372-f217244a0740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        menu: [
            { id: 901, name: 'Som Tam Salad', price: 220, isVeg: true },
            { id: 902, name: 'Chicken Satay', price: 280, isVeg: false },
            { id: 903, name: 'Mango Sticky Rice', price: 250, isVeg: true },
            { id: 904, name: 'Pad See Ew', price: 300, isVeg: false },
        ]
    },
    {
        id: 10,
        name: 'Grill Nation',
        cuisine: 'BBQ, Grill',
        rating: 4.2,
        deliveryTime: '48 mins',
        priceForTwo: '₹1500 for two',
        image: 'https://images.unsplash.com/photo-1529692236671-f1f6b5f46b5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        menu: [
            { id: 1001, name: 'BBQ Chicken Wings', price: 380, isVeg: false },
            { id: 1002, name: 'Grilled Fish', price: 550, isVeg: false },
            { id: 1003, name: 'Corn on the Cob', price: 150, isVeg: true },
            { id: 1004, name: 'Veggie Skewers', price: 280, isVeg: true },
        ]
    }
];