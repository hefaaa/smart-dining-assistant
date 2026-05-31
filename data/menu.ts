export const menu = [

{
id:"VS1",
name:"Paneer Tikka",
category:"Veg Starters",
price:220,
description:"Chargrilled cottage cheese marinated in aromatic Indian spices.",
image_url:"/images/paneer-tikka.webp",
tags:["veg","spicy","bestseller"],
allergens:["dairy"],
available:true,
popular_score:0.92,
complementary_items:["BC1","D1"]
},

{
id:"VS2",
name:"Hara Bhara Kebab",
category:"Veg Starters",
price:180,
description:"Spinach and green pea patties served with mint chutney.",
image_url:"/images/hara-bhara.webp",
tags:["veg","light"],
allergens:[],
available:true,
popular_score:0.78,
complementary_items:["BC1"]
},

{
id:"NVS1",
name:"Chicken Wings",
category:"Non-Veg Starters",
price:280,
description:"Crispy spicy wings tossed in house special sauce.",
image_url:"/images/chicken-wings.webp",
tags:["non-veg","spicy","bestseller"],
allergens:[],
available:true,
popular_score:0.95,
complementary_items:["BC2"]
},

{
id:"NVS2",
name:"Chicken Tikka",
category:"Non-Veg Starters",
price:320,
description:"Juicy chicken cubes grilled in a traditional tandoor.",
image_url:"/images/chicken-tikka.webp",
tags:["non-veg","bestseller"],
allergens:["dairy"],
available:true,
popular_score:0.91,
complementary_items:["BC2"]
},

{
id:"VM1",
name:"Paneer Butter Masala",
category:"Mains (Veg)",
price:280,
description:"Rich tomato and butter gravy with soft paneer cubes.",
image_url:"/images/pbm.webp",
tags:["veg","bestseller"],
allergens:["dairy"],
available:true,
popular_score:0.93,
complementary_items:["BR1","BR2"]
},

{
id:"VM2",
name:"Veg Biryani",
category:"Mains (Veg)",
price:260,
description:"Fragrant basmati rice cooked with vegetables and spices.",
image_url:"/images/veg-biryani.webp",
tags:["veg","quick-serve"],
allergens:[],
available:true,
popular_score:0.87,
complementary_items:["BC1"]
},

{
id:"NVM1",
name:"Butter Chicken",
category:"Mains (Non-Veg)",
price:340,
description:"Creamy tomato gravy with tender chicken pieces.",
image_url:"/images/butter-chicken.webp",
tags:["non-veg","bestseller"],
allergens:["dairy"],
available:true,
popular_score:0.97,
complementary_items:["BR1","BR2"]
},

{
id:"NVM2",
name:"Chicken Biryani",
category:"Mains (Non-Veg)",
price:320,
description:"Classic dum biryani layered with aromatic spices.",
image_url:"/images/chicken-biryani.webp",
tags:["non-veg","spicy","bestseller"],
allergens:[],
available:true,
popular_score:0.96,
complementary_items:["BC1"]
},

{
id:"BR1",
name:"Butter Naan",
category:"Breads & Rice",
price:50,
description:"Soft tandoor-baked naan brushed with butter.",
image_url:"/images/butter-naan.webp",
tags:["veg"],
allergens:["gluten","dairy"],
available:true,
popular_score:0.89,
complementary_items:["VM1","NVM1"]
},

{
id:"BR2",
name:"Jeera Rice",
category:"Breads & Rice",
price:120,
description:"Steamed basmati rice tempered with cumin seeds.",
image_url:"/images/jeera-rice.webp",
tags:["veg","light"],
allergens:[],
available:true,
popular_score:0.82,
complementary_items:["VM1","NVM1"]
},

{
id:"D1",
name:"Gulab Jamun",
category:"Desserts",
price:90,
description:"Soft milk dumplings soaked in saffron sugar syrup.",
image_url:"/images/gulab-jamun.webp",
tags:["sweet","bestseller"],
allergens:["dairy"],
available:true,
popular_score:0.90,
complementary_items:["BH1"]
},

{
id:"D2",
name:"Chocolate Brownie",
category:"Desserts",
price:140,
description:"Warm chocolate brownie served with rich sauce.",
image_url:"/images/brownie.webp",
tags:["sweet"],
allergens:["gluten","dairy"],
available:true,
popular_score:0.86,
complementary_items:["BC2"]
},

{
id:"BH1",
name:"Masala Chai",
category:"Beverages (Hot)",
price:40,
description:"Traditional Indian tea brewed with aromatic spices.",
image_url:"/images/chai.webp",
tags:["hot","quick-serve"],
allergens:["dairy"],
available:true,
popular_score:0.80,
complementary_items:["D1"]
},

{
id:"BC1",
name:"Mango Lassi",
category:"Beverages (Cold)",
price:110,
description:"Refreshing yogurt drink blended with ripe mangoes.",
image_url:"/images/mango-lassi.webp",
tags:["cold","bestseller"],
allergens:["dairy"],
available:true,
popular_score:0.88,
complementary_items:["VS1","VM2"]
},

{
id:"BC2",
name:"Mint Mojito",
category:"Beverages (Cold)",
price:120,
description:"Chilled mint and lime cooler perfect with spicy food.",
image_url:"/images/mint-mojito.webp",
tags:["cold","light"],
allergens:[],
available:true,
popular_score:0.91,
complementary_items:["NVS1","NVS2"]
},

{
id:"C1",
name:"Family Feast Combo",
category:"Combos & Deals",
price:999,
description:"Starter, mains, breads and drinks for four guests.",
image_url:"/images/family-feast.webp",
tags:["deal","bestseller"],
allergens:["dairy","gluten"],
available:true,
popular_score:0.94,
complementary_items:["D1"]
}

];

export const categories = [
"Veg Starters",
"Non-Veg Starters",
"Mains (Veg)",
"Mains (Non-Veg)",
"Breads & Rice",
"Desserts",
"Beverages (Hot)",
"Beverages (Cold)",
"Combos & Deals"
];
export const tags = [
"spicy",
"light",
"veg",
"non-veg",
"bestseller",
"quick-serve"
];