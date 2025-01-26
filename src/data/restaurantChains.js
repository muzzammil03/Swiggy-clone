const chains = [
    {
        "index": 0,
        "image": "/images/2b4f62d606d1b2bfba9ba9e5386fabb7.jpeg",
        "offer": "Items at ₹179",
        "title": "Pizza Hut",
        "rating": 4.2,
        "minTime": 30,
        "maxTime": 40,
        "name": "Pizzas",
        "place": "Arera Colony, Bhopal"
    },
    {
        "index": 1,
        "image": "/images/75d0b3ebeb56fe2484c944e94cac7a8d.jpeg",
        "offer": "₹50 OFF ABOVE ₹199",
        "title": "Janta Sweet Home",
        "rating": 4.5,
        "minTime": 35,
        "maxTime": 40,
        "name": "Sweets, South Indian",
        "place": "MP Nagar, Bhopal"
    },
    {
        "index": 2,
        "image": "/images/cef5bf4cc31dc3c46a1e1b027c5627e4.jpeg",
        "offer": "₹85 OFF ABOVE ₹149",
        "title": "Bhopal Bhojnalay",
        "rating": 4.3,
        "minTime": 35,
        "maxTime": 40,
        "name": "North Indian, Thalis",
        "place": "Habibganj, Bhopal"
    },
    {
        "index": 3,
        "image": "/images/eillc7d7hbrzcuussus5.jpeg",
        "offer": "₹70 OFF ABOVE ₹149",
        "title": "Kwality Walls Frozen",
        "rating": 4.5,
        "minTime": 25,
        "maxTime": 25,
        "name": "Desserts, Ice Cream",
        "place": "Indrapuri, Bhopal"
    },
    {
        "index": 4,
        "image": "/images/6e04be27387483a7c00444f8e8241108.jpeg",
        "offer": "₹1-5 OFF ABOVE ₹179",
        "title": "The Good Bowl",
        "rating": 4.4,
        "minTime": 30,
        "maxTime": 35,
        "name": "Biryani, North India",
        "place": "Shahpura, Bhopal"
    },
    {
        "index": 5,
        "image": "/images/w7ndo1dkkk6kf4qfz2p1.jpeg",
        "offer": "₹100 OFF ABOVE ₹499",
        "title": "NIC Ice Creams",
        "rating": 4.7,
        "minTime": 25,
        "maxTime": 30,
        "name": "Desserts, Ice Cream",
        "place": "Kolar Road, Bhopal"
    },
    {
        "index": 6,
        "image": "/images/f1bc9ddf53de574cdc35ab2f717df234.jpeg",
        "offer": "Items at ₹109",
        "title": "South Corner",
        "rating": 4.0,
        "minTime": 35,
        "maxTime": 40,
        "name": "South Indian",
        "place": "Bawadia Kalan, Bhopal"
    },
    {
        "index": 7,
        "image": "/images/919cb3be0e7406f86f6741ebe7c30128.jpeg",
        "offer": "₹125 OFF ABOVE ₹349",
        "title": "Lunch Box - Meals and Thalis",
        "rating": 4.3,
        "minTime": 30,
        "maxTime": 35,
        "name": "Biryani, North India",
        "place": "Raisen Road, Bhopal"
    },
    {
        "index": 8,
        "image": "/images/535fc9f9c135f7982317bbb6a64a1ffc.jpeg",
        "offer": "₹70 OFF ABOVE ₹249",
        "title": "McDonald's",
        "rating": 4.4,
        "minTime": 30,
        "maxTime": 35,
        "name": "American",
        "place": "DB City Mall, Bhopal"
    },
    {
        "index": 9,
        "image": "/images/2a41aa363a8ae1e98a4cce95c2d0c589.jpeg",
        "offer": "₹100 OFF ABOVE ₹449",
        "title": "Kajal's Cake",
        "rating": 4.5,
        "minTime": 35,
        "maxTime": 40,
        "name": "Cake",
        "place": "Ashoka Garden, Bhopal"
    },
    {
        "index": 10,
        "image": "https://b.zmtcdn.com/data/collections/21650cff91a2be578aca3a09325fe694_1690789343.png",
        "offer": "Flat 20% OFF",
        "title": "Taste of Malwa",
        "rating": 4.6,
        "minTime": 30,
        "maxTime": 45,
        "name": "Malwa Cuisine",
        "place": "Lalghati, Bhopal"
    },
    {
        "index": 11,
        "image": "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38",
        "offer": "₹150 OFF ABOVE ₹399",
        "title": "Zaika Biryani",
        "rating": 4.3,
        "minTime": 25,
        "maxTime": 35,
        "name": "Biryani, Mughlai",
        "place": "New Market, Bhopal"
    },
    {
        "index": 12,
        "image": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
        "offer": "Buy 1 Get 1 Free",
        "title": "Chatori Chaat",
        "rating": 4.5,
        "minTime": 20,
        "maxTime": 30,
        "name": "Chaat, Snacks",
        "place": "Bittan Market, Bhopal"
    },
    {
        "index": 13,
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
        "offer": "20% OFF Above ₹199",
        "title": "Chai Shai Adda",
        "rating": 4.7,
        "minTime": 15,
        "maxTime": 25,
        "name": "Tea, Fast Food",
        "place": "Hoshangabad Road, Bhopal"
    },
    {
        "index": 14,
        "image": "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
        "offer": "₹50 Cashback on ₹299",
        "title": "Bhopali Zaika",
        "rating": 4.4,
        "minTime": 25,
        "maxTime": 35,
        "name": "Biryani, Indian",
        "place": "BHEL, Bhopal"
    },
    {
        "index": 15,
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/7/434566621/RA/YZ/BI/225954536/non-veg-spring-roll.jpg",
        "offer": "Free Delivery on ₹199",
        "title": "Royal Rolls",
        "rating": 4.3,
        "minTime": 20,
        "maxTime": 30,
        "name": "Rolls, Kebab",
        "place": "Karond, Bhopal"
    },
    {
        "index": 16,
        "image": "https://thumbs.dreamstime.com/b/delicious-mix-sweets-mithai-tray-milk-made-indian-pakistani-festivals-344617176.jpg",
        "offer": "₹100 OFF Above ₹399",
        "title": "Mithaas Sweets",
        "rating": 4.6,
        "minTime": 25,
        "maxTime": 35,
        "name": "Sweets, Indian Desserts",
        "place": "Kolar Road, Bhopal"
    }
];

export default chains;
