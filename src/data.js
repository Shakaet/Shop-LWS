const data = [
    {
        "id": crypto.randomUUID(),
        "cover": "image 1.png",
        "title": "Gradient Graphic T-shirt",
         "left":8,
        "rating": 5,
        "price": 750,
         "btn":"add",
         "size": "Large",
         "color": "Red"
    },
    {
        "id": crypto.randomUUID(),
        "cover": "image 7-1.png",
        "title": "Polo with Tipping Details",
         "left":9,
        "rating": 3,
        "price": 700,
        "btn":"add",
        "size": "Medium",
         "color": "Blue"
    },
    {
        "id": crypto.randomUUID(),
        "cover": "image 7.png",
        "title": "Black Striped T-shirt",
         "left":10,
        "rating": 2,
        "price": 400,
        "btn":"add",
        "size": "Long",
         "color": "Gray"
    },
    {
        "id": crypto.randomUUID(),
        "cover": "image 8-1.png",
        "title": "Skinny Fit Jeans",
         "left":13,
        "rating": 4,
        "price": 750,
        "btn":"add",
        "size": "Large",
         "color": "Black"
    },
    {
        "id": crypto.randomUUID(),
        "cover": "image 8-2.png",
        "title": "Checkered Shirt",
         "left":4,
        "rating": 5,
        "price": 500,
        "btn":"add",
        "size": "Medium",
         "color": "Green"
    },
    {
        "id": crypto.randomUUID(),
        "cover": "image 8.png",
        "title": "Sleeve Striped T-shirt",
        "left":5,
        "rating": 5,
        "price": 800,
        "btn":"add",
        "size": "Medium",
         "color": "White"
    }
]

function getAllMovies() {
    return data;
}

export { getAllMovies };