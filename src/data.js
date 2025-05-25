const data = [
    {
        "id": crypto.randomUUID(),
        "index":0,
        "cover": "image 1.png",
        "title": "Gradient Graphic T-shirt",
         "left":8,
        "rating": 5,
        "price": 750,
         "btn":"add",
         "size": "Large",
         "color": "Red",
         "fee":15
    },
    {
        "id": crypto.randomUUID(),
        "index":1,
        "cover": "image 7-1.png",
        "title": "Polo with Tipping Details",
         "left":9,
        "rating": 3,
        "price": 700,
        "btn":"add",
        "size": "Medium",
         "color": "Blue",
         "fee":15
    },
    {
        "id": crypto.randomUUID(),
        "index":2,
        "cover": "image 7.png",
        "title": "Black Striped T-shirt",
         "left":10,
        "rating": 2,
        "price": 400,
        "btn":"add",
        "size": "Long",
         "color": "Gray",
         "fee":15
    },
    {
        "id": crypto.randomUUID(),
        "index":3,
        "cover": "image 8-1.png",
        "title": "Skinny Fit Jeans",
         "left":13,
        "rating": 4,
        "price": 750,
        "btn":"add",
        "size": "Large",
         "color": "Black",
         "fee":15
    },
    {
        "id": crypto.randomUUID(),
        "index":4,
        "cover": "image 8-2.png",
        "title": "Checkered Shirt",
         "left":4,
        "rating": 5,
        "price": 500,
        "btn":"add",
        "size": "Medium",
         "color": "Green",
         "fee":15
    },
    {
        "id": crypto.randomUUID(),
        "index":4,
        "cover": "image 8.png",
        "title": "Sleeve Striped T-shirt",
        "left":5,
        "rating": 5,
        "price": 800,
        "btn":"add",
        "size": "Medium",
         "color": "White",
         "fee":15
    }
]

function getAllMovies() {
    return data;
}

export { getAllMovies };