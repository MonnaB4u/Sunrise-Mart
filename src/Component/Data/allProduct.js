const fakeData = [{
  "name": "Fresh Fruits",
  "images": "https://www.jiomart.com/images/category/36/thumb/0-36.png",
  "height": 600,
  "width": 400,
  "price": 28.1,
  "rating": 4,
  "id":1,
}, {
  "name": "Fresh Vegetables",
  "images": "https://www.jiomart.com/images/category/35/thumb/0-35.png",
  "description": "Sweet fresh stawberry on the wooden table",
  "filename": "0_25.jpg",
  "height": 450,
  "width": 299,
  "price": 29.45,"id":2,
  "rating": 4,
}, {
  "name": "Asparagus",
  "type": "vegetable",
  "description": "Asparagus with ham on the wooden table",
  "filename": "https://www.linkpicture.com/view.php?img=LPic61e25ed04dc8b506514719",
  "height": 450,
  "width": 299,
  "price": 18.95,"id":3,
  "rating": 3
}, {
  "name": "Green smoothie",
  "type": "dairy",
  "description": "Glass of green smoothie with quail egg's yolk, served with cocktail tube, green apple and baby spinach leaves over tin surface.",
  "filename": "https://www.linkpicture.com/q/3_944.jpg",
  "height": 600,
  "width": 399,
  "price": 17.68,"id":4,
  "rating": 4
}, {
  "name": "Raw legums",
  "type": "vegetable",
  "description": "Raw legums on the wooden table",
  "filename": "https://www.linkpicture.com/q/4_913.jpg",
  "height": 450,
  "width": 299,
  "price": 17.11,"id":5,
  "rating": 2
}, {
  "name": "Baking cake",
  "type": "dairy",
  "description": "Baking cake in rural kitchen - dough  recipe ingredients (eggs, flour, sugar) on vintage wooden table from above.",
  "filename": "https://www.linkpicture.com/q/5_750.jpg",
  "height": 450,
  "width": 675,
  "price": 11.14,"id":6,
  "rating": 4
}, {
  "name": "Pesto with basil",
  "type": "vegetable",
  "description": "Italian traditional pesto with basil, chesse and oil",
  "filename": "https://www.linkpicture.com/q/6_633.jpg",
  "height": 450,
  "width": 299,
  "price": 18.19,"id":7,
  "rating": 2
}, {
  "name": "Hazelnut in black ceramic bowl",
  "type": "vegetable",
  "description": "Hazelnut in black ceramic bowl on old wooden background. forest wealth. rustic style. selective focus",
  "filename": "https://www.linkpicture.com/q/7_563.jpg",
  "height": 450,
  "width": 301,
  "price": 27.35,"id":8,
  "rating": 0
}, {
  "name": "Herbs & Seasonings",
  "images": "https://www.jiomart.com/images/category/37/thumb/0-37.png",
  "height": 600,
  "width": 399,
  "price": 28.59,"id":10,
  "rating": 4
}, {
  "name": "Dairy",
  "images": "https://www.jiomart.com/images/category/117/thumb/dairy-20200522.png",
  "filename": "7_29.jpg",
  "height": 450,
  "width": 299,
  "price": 15.79,"id":11,
  "rating": 5
}, {

  "name": "Toast & Khari",
  "images": "https://www.jiomart.com/images/category/46/thumb/0-46.png",
  "filename": "8_210.jpg",
  "height": 450,
  "width": 301,"id":12,
  "price": 17.48,
  "rating": 3
}, {
  "name": "Cakes & Muffins",
  "images": "https://www.jiomart.com/images/category/130/thumb/0-130.png",
  "filename": "9_211.jpg",
  "height": 600,
  "width": 399,"id":13,
  "price": 14.77,
  "rating": 0
}, {
  "name": "Breads and Buns",
  "images": "https://www.jiomart.com/images/category/240/thumb/breads-and-buns-20200522.png",
  "filename": "10_212.jpg",
  "height": 600,"id":14,
  "width": 903,
  "price": 16.3,
  "rating": 2
}, {
  "name": "Bakery Snacks",
  "images": "https://www.jiomart.com/images/category/281/thumb/bakery-snacks-20200712.png",
  "height": 450,
  "width": 350,"id":15,
  "price": 13.02,
  "rating": 2
}, {
  "name": "Atta, Flours & Sooji",
  "images": "https://www.jiomart.com/images/category/14/thumb/0-14.png",
  "height": 450,
  "width": 300,
  "price": 28.79,"id":16,
  "rating": 1
}, {
  "name": "Dals & Pulses",
  "images": "https://www.jiomart.com/images/category/19/thumb/0-19.png",
  "filename": "13_15.jpg",
  "height": 600,"id":17,
  "width": 400,
  "price": 20.31,
  "rating": 1
}, {
  "name": "Rice & Rice Products",
  "images": "https://www.jiomart.com/images/category/16/thumb/0-16.png",
  "filename": "14_16.jpg",
  "height": 400,
  "width": 600,"id":18,
  "price": 14.18,
  "rating": 1
}, {
  "name": "Edible Oils",
  "images": "https://www.jiomart.com/images/category/18/thumb/0-18.png",
  "filename": './images/1.jpg',
  "height": 600,
  "width": 398,"id":19,
  "price": 19.49,
  "rating": 4
// }, {
//   "name": "Fresh pears",
//   "type": "fruit",
//   "description": "Sweet fresh pears on the wooden table",
//   "filename": "16_18.jpg",
//   "height": 600,
//   "width": 398,
//   "price": 15.12,
//   "rating": 5
// }, {
//   "name": "Caprese salad",
//   "type": "vegetable",
//   "description": "Homemade healthy caprese salad with tomato mozzarella and basil",
//   "filename": "17_19.jpg",
//   "height": 400,
//   "width": 600,
//   "price": 16.76,
//   "rating": 5
// }, {
//   "name": "Oranges",
//   "type": "fruit",
//   "description": "Orange popsicle ice cream bars made from fresh oranges.  a refreshing summer treat.",
//   "filename": "18_20.jpg",
//   "height": 450,
//   "width": 274,
//   "price": 21.48,
//   "rating": 4
// }, {
//   "name": "Vegan food",
//   "type": "vegetable",
//   "description": "Concept of vegan food",
//   "filename": "19_21.jpg",
//   "height": 450,
//   "width": 299,
//   "price": 29.66,
//   "rating": 4
// }, {
//   "name": "Breakfast with muesli",
//   "type": "dairy",
//   "description": "Concept of healthy breakfast with muesli",
//   "filename": "20_22.jpg",
//   "height": 450,
//   "width": 299,
//   "price": 22.7,
//   "rating": 2
// }, {
//   "name": "Honey",
//   "type": "bakery",
//   "description": "Honey and honeycell on the table",
//   "filename": "21_23.jpg",
//   "height": 450,
//   "width": 299,
//   "price": 17.01,
//   "rating": 2
// }, {
//   "name": "Breakfast with cottage",
//   "type": "fruit",
//   "description": "Healthy breakfast with cottage cheese and strawberry",
//   "filename": "22_24.jpg",
//   "height": 600,
//   "width": 398,
//   "price": 14.05,
//   "rating": 1
// }, {
//   "name": "Strawberry smoothie",
//   "type": "fruit",
//   "description": "Glass of red strawberry smoothie with chia seeds, served with retro cocktail tube, fresh mint and strawberries over dark background",
//   "filename": "_25.jpg",
//   "height": 600,
//   "width": 400,
//   "price": 28.86,
//   "rating": 2
// }, {
//   "name": "Strawberry and mint",
//   "type": "fruit",
//   "description": "Homemade muesli with strawberry and mint",
//   "filename": "_26.jpg",
//   "height": 450,
//   "width": 299,
//   "price": 26.21,
//   "rating": 4
// }, {
//   "name": "Ricotta",
//   "type": "dairy",
//   "description": "Ricotta with berry and mint",
//   "filename": "_27.jpg",
//   "height": 600,
//   "width": 398,
//   "price": 27.81,
//   "rating": 5
// }, {
//   "name": "Cuban sandwiche",
//   "type": "bakery",
//   "description": "Homemade traditional cuban sandwiches with ham pork and cheese",
//   "filename": "_28.jpg",
//   "height": 450,
//   "width": 300,
//   "price": 18.5,
//   "rating": 4
// }, {
//   "name": "Granola",
//   "type": "dairy",
//   "description": "Glass jar with homemade granola and yogurt with nuts, raspberries and blackberries on wooden cutting board over white textile in day light",
//   "filename": "_29.jpg",
//   "height": 450,
//   "width": 300,
//   "price": 29.97,
//   "rating": 3
// }, {
//   "name": "Smoothie with chia seeds",
//   "type": "fruit",
//   "description": "Glass of red strawberry smoothie with chia seeds, served with retro cocktail tube, fresh mint and strawberries over wooden table",
//   "filename": "_30.jpg",
//   "height": 600,
//   "width": 900,
//   "price": 25.26,
//   "rating": 5
// }, {
//   "name": "Yogurt",
//   "type": "dairy",
//   "description": "Homemade yogurt with raspberry and mint",
//   "filename": "_31.jpg",
//   "height": 450,
//   "width": 299,
//   "price": 27.61,
//   "rating": 4
// }, {
//   "name": "Sandwich with salad",
//   "type": "vegetable",
//   "description": "Vegan sandwich with salad, tomato and radish",
//   "filename": "_32.jpg",
//   "height": 600,
//   "width": 398,
//   "price": 22.48,
//   "rating": 5
// }, {
//   "name": "Cherry",
//   "type": "fruit",
//   "description": "Cherry with sugar on old table",
//   "filename": "_33.jpg",
//   "height": 600,
//   "width": 400,
//   "price": 14.35,
//   "rating": 5
// }, {
//   "name": "Raw asparagus",
//   "type": "vegetable",
//   "description": "Raw fresh asparagus salad with cheese and dressing",
//   "filename": "_34.jpg",
//   "height": 600,
//   "width": 400,
//   "price": 22.97,
//   "rating": 4
// }, {
//   "name": "Corn",
//   "type": "vegetable",
//   "description": "Grilled corn on the cob with salt and butter",
//   "filename": "_35.jpg",
//   "height": 450,
//   "width": 300,
//   "price": 13.55,
//   "rating": 2
// }, {
//   "name": "Vegan",
//   "type": "vegan",
//   "description": "Concept of healthy vegan eating",
//   "filename": "_36.jpg",
//   "height": 600,
//   "width": 398,
//   "price": 28.96,
//   "rating": 5
// }, {
//   "name": "Fresh blueberries",
//   "type": "fruit",
//   "description": "Healthy breakfast. berry crumble with fresh blueberries, raspberries, strawberries, almond, walnuts, pecans, yogurt, and mint in ceramic plates over white wooden surface, top view",
//   "filename": "_37.jpg",
//   "height": 450,
//   "width": 321,
//   "price": 21.01,
//   "rating": 4
// }, {
//   "name": "Smashed avocado",
//   "type": "fruit",
//   "description": "Vegan sandwiches with smashed avocado, tomatoes and radish. top view",
//   "filename": "_38.jpg",
//   "height": 450,
//   "width": 450,
//   "price": 25.88,
//   "rating": 0
// }, {
//   "name": "Italian ciabatta",
//   "type": "bakery",
//   "description": "Italian ciabatta bread cut in slices on wooden chopping board with herbs, garlic and olives over dark grunge backdrop, top view",
//   "filename": "_39.jpg",
//   "height": 450,
//   "width": 565,
//   "price": 15.18,
//   "rating": 1
// }, {
//   "name": "Rustic breakfast",
//   "type": "dairy",
//   "description": "Rustic healthy breakfast set. cooked buckwheat groats with milk and honey on dark grunge backdrop. top view, copy space",
//   "filename": "_40.jpg",
//   "height": 450,
//   "width": 307,
//   "price": 21.32,
//   "rating": 0
// }, {
//   "name": "Sliced lemons",
//   "type": "fruit",
//   "description": "Heap of whole and sliced lemons and limes with mint in vintage metal grid box over old wooden table with turquoise wooden background. dark rustic style.",
//   "filename": "_41.jpg",
//   "height": 600,
//   "width": 900,
//   "price": 27.14,
//   "rating": 2
// }, {
//   "name": "Plums",
//   "type": "fruit",
//   "description": "Yellow and red sweet plums",
//   "filename": "_42.jpg",
//   "height": 450,
//   "width": 299,
//   "price": 19.18,
//   "rating": 1
// }, {
//   "name": "French fries",
//   "type": "bakery",
//   "description": "Homemade oven baked french fries with ketchup",
//   "filename": "_43.jpg",
//   "height": 600,
//   "width": 400,
//   "price": 18.32,
//   "rating": 3
// }, {
//   "name": "Strawberries",
//   "type": "fruit",
//   "description": "Healthy breakfast set. rice cereal or porridge with fresh strawberry, apricots, almond and honey over white rustic wood backdrop, top view, \u0000",
//   "filename": "_44.jpg",
//   "height": 450,
//   "width": 352,
//   "price": 15.13,
//   "rating": 3
// }, {
//   "name": "Ground beef meat burger",
//   "type": "meat",
//   "description": "Raw ground beef meat burger steak cutlets with seasoning on vintage wooden boards, black background",
//   "filename": "_45.jpg",
//   "height": 450,
//   "width": 675,
//   "price": 11.73,
//   "rating": 5
// }, {
//   "name": "Tomatoes",
//   "type": "fruit",
//   "description": "Organic tomatoes made with love",
//   "filename": "_46.jpg",
//   "height": 450,
//   "width": 675,
//   "price": 26.03,
//   "rating": 4
// }, {
//   "name": "Basil",
//   "type": "vegetable",
//   "description": "Concept of vegan food with basil",
//   "filename": "_47.jpg",
//   "height": 450,
//   "width": 678,
//   "price": 15.19,
//   "rating": 4
// }, {
//   "name": "Fruits bouquet",
//   "type": "fruit",
//   "description": "Abstract citrus fruits bouquet on blue background",
//   "filename": "_48.jpg",
//   "height": 600,
//   "width": 401,
//   "price": 18.18,
//   "rating": 1
// }, {
//   "name": "Peaches on branch",
//   "type": "fruit",
//   "description": "Peaches on branch with leaves and glasses with peach juice and limonade with ice cubes in aluminum tray over old metal table. dark rustic style. top view.",
//   "filename": "_49.jpg",
//   "height": 600,
//   "width": 400,
//   "price": 25.62,
//   "rating": 3
}]
export default fakeData
