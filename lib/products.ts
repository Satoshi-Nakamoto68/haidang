export type Product = {
  id: string
  name: string
  images: string[]
  category: string
  description: string
  features: string[]
  sizes: string[]
  rating: number
  inStock: boolean
  isNew: boolean
}

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Cotton Dress Shirt",
    images: [
      "/elegant-white-dress-shirt-front-view.png",
      "/elegant-white-dress-shirt-back-view.png",
      "/elegant-white-dress-shirt-detail-collar.png",
      "/elegant-white-dress-shirt-on-model.png",
    ],
    category: "Men's Fashion",
    description:
      "Crafted from premium 100% cotton, this dress shirt combines classic elegance with modern comfort. Perfect for business meetings, formal events, or any occasion where you want to look your best.",
    features: [
      "100% Premium Cotton",
      "Non-iron finish",
      "Classic fit",
      "French seams",
      "Mother-of-pearl buttons",
      "Machine washable",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.8,
    inStock: true,
    isNew: true,
  },
  {
    id: "2",
    name: "Men's Linen Shirts Short Sleeve Casual Button Down Shirt",
    images: [
      "/men/2.jpg",
      "/men/2.1.jpg",
      "/men/2.2.jpg",
      "/men/2.3.jpg",
    ],
    category: "Men's Fashion",
    description:
      "Stay cool and stylish with this men's linen short sleeve shirt. Perfect for beach days, summer outings, or weddings, its breathable fabric ensures comfort all day. The button-down design adds a touch of elegance, making it a versatile choice for any occasion.",
    features: [
      "70% Rayon, 30% Linen",
      "Short sleeve",
      "Breathable fabric",
      "Button down closure",
      "Machine washable",
      "Imported"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.6,
    inStock: true,
    isNew: true,
  },
  {
    id: "3",
    name: "Men's EcoSmart Fleece Pullover Crewneck Sweatshirt",
    images: [
      "/men/3.jpg",
      "/men/3.1.jpg",
      "/men/3.2.jpg",
      "/men/3.3.jpg",
    ],
    category: "Men's Fashion",
    description:
      "Enjoy warmth and comfort with the EcoSmart fleece sweatshirt for men. Made from a soft cotton-polyester blend, this pullover is perfect for casual wear or layering. The classic crewneck style suits any outfit, while the eco-friendly materials make it a smart choice.",
    features: [
      "80% Cotton, 20% Polyester",
      "Eco-friendly material",
      "Pullover crewneck",
      "Soft and warm",
      "Machine washable",
      "Imported"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.8,
    inStock: true,
    isNew: true,
  },
  {
    id: "4",
    name: "Men's Casual Cargo Sweatpants Waist Drawstring Joggers",
    images: [
      "/men/4.jpg",
      "/men/4.1.jpg",
      "/men/4.2.jpg",
      "/men/4.3.jpg",
    ],
    category: "Men's Fashion",
    description:
      "Upgrade your active style with these men's casual cargo sweatpants. Designed for hiking and workouts, they offer breathability and comfort all day. The elastic waist and mid-rise fit provide flexibility, while multiple pockets keep your essentials handy.",
    features: [
      "Breathable & comfortable fabric",
      "Elastic waist with drawstring",
      "Mid rise",
      "Multiple pockets",
      "Machine washable"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.7,
    inStock: true,
    isNew: true,
  },
  {
    id: "5",
    name: "Mens Casual Polo Shirt Summer Short Sleeve Vacation Golf Shirts",
    images: [
      "/men/5.jpg",
      "/men/5.1.jpg",
      "/men/5.2.jpg",
      "/men/5.3.jpg",
    ],
    category: "Men's Fashion",
    description:
      "Experience comfort and style with this men's casual polo shirt. Perfect for summer vacations, beach trips, or golf, the stretchy knit fabric ensures a great fit. The short sleeves and button collar add a classic touch.",
    features: [
      "95% Polyester, 5% Elastane",
      "Short sleeve",
      "Stretchy knit fabric",
      "Button collar",
      "Machine washable",
      "Imported"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.6,
    inStock: true,
    isNew: true,
  },
  {
    id: "6",
    name: "EcoSmart Hoodie Midweight Fleece Pullover Hooded Sweatshirt",
    images: [
      "/men/6.jpg",
      "/men/6.1.jpg",
      "/men/6.2.jpg",
      "/men/6.3.jpg",
    ],
    category: "Men's Fashion",
    description:
      "Stay warm and eco-conscious with this midweight EcoSmart hoodie for men. The soft fleece fabric provides comfort during chilly days, while the pullover design and hood offer extra protection.",
    features: [
      "50% Cotton, 50% Polyester",
      "Midweight fleece",
      "Pullover hooded design",
      "Machine washable",
      "Imported"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.8,
    inStock: true,
    isNew: true,
  },
  {
    id: "7",
    name: "Men's Crew T-Shirts Multipack Style G1100",
    images: [
      "/men/7.jpg",
      "/men/7.1.jpg",
      "/men/7.2.jpg",
      "/men/7.3.jpg",
    ],
    category: "Men's Fashion",
    description:
      "Refresh your basics with this multipack of men's crew t-shirts. Made from 100% cotton, they provide softness and breathability for everyday wear.",
    features: [
      "100% Cotton",
      "Multipack",
      "Crew neck",
      "Pull on closure",
      "Machine washable",
      "Imported"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.7,
    inStock: true,
    isNew: true,
  },
  {
    id: "8",
    name: "Men’s Active Quick Dry Crew Neck T Shirts Athletic Running Gym Workout",
    images: [
      "/men/8.jpg",
      "/men/8.1.jpg",
      "/men/8.2.jpg",
      "/men/8.3.jpg",
    ],
    category: "Men's Fashion",
    description:
      "Boost your performance with these quick dry crew neck t-shirts for men. Designed for athletic activities, the moisture-wicking fabric keeps you cool and comfortable.",
    features: [
      "88% Polyester, 12% Spandex",
      "Quick dry & moisture wicking",
      "Crew neck",
      "Short sleeve",
      "Pull on closure",
      "Machine washable"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.8,
    inStock: true,
    isNew: true,
  },
  {
    id: "9",
    name: "Athletic Gym Mens Shorts Quick Dry Basketball Shorts with Pockets",
    images: [
      "/men/9.jpg",
      "/men/9.1.jpg",
      "/men/9.2.jpg",
      "/men/9.3.jpg",
    ],
    category: "Men's Fashion",
    description:
      "Stay comfortable and agile with these athletic gym shorts for men. The quick-dry fabric is perfect for basketball, running, or any workout. With convenient pockets for your essentials.",
    features: [
      "100% Polyester",
      "Quick dry",
      "With pockets",
      "Drawstring closure",
      "Machine washable",
      "Imported"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.7,
    inStock: true,
    isNew: true,
  },
  {
    id: "10",
    name: "Men's Bomber Jacket Fashion Stylish Lightweight Windbreaker",
    images: [
      "/men/10.jpg",
      "/men/10.1.jpg",
      "/men/10.2.jpg",
      "/men/10.3.jpg",
    ],
    category: "Men's Fashion",
    description:
      "Step out in style with this men's bomber jacket. Lightweight and fashionable, it's ideal for spring and fall weather. The windbreaker design offers protection, while the modern look suits both casual and semi-formal occasions.",
    features: [
      "Polyester",
      "Lightweight windbreaker",
      "Bomber jacket style",
      "Imported"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.6,
    inStock: true,
    isNew: true,
  },
  {
    id: "11",
    name: "Mens Casual Cargo Pants Baggy Straight Leg Sweatpants Large Flap Pockets",
    images: [
      "/men/11.jpg",
      "/men/11.1.jpg",
      "/men/11.2.jpg",
      "/men/11.3.jpg",
    ],
    category: "Men's Fashion",
    description:
      "Enjoy ultimate comfort and utility with these baggy straight leg cargo pants for men. Featuring large flap pockets, they're perfect for hiking, sports, or casual outings.",
    features: [
      "100% Polyester",
      "Baggy straight leg fit",
      "Large flap pockets",
      "Zipper-button closure",
      "Machine washable",
      "Imported"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.6,
    inStock: true,
    isNew: true,
  },
  {
    id: "12",
    name: "Men's Fashion Polo Shirts Vintage Striped Knitting Slim Fit Golf Shirts",
    images: [
      "/men/12.jpg",
      "/men/12.1.jpg",
      "/men/12.2.jpg",
      "/men/12.3.jpg",
    ],
    category: "Men's Fashion",
    description:
      "Step up your style with these vintage striped polo shirts for men. The slim fit and V-neck design create a modern, flattering look ideal for golf or casual wear.",
    features: [
      "65% Polyester, 30% Cotton, 5% Spandex",
      "Vintage striped knitting",
      "Slim fit",
      "V-neck",
      "Button closure",
      "Machine washable"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.7,
    inStock: true,
    isNew: true,
  },
  {
    id: "13",
    name: "Makkrom Mens Henley Shirts Short Sleeve Vintage Lightweight Tee",
    images: [
      "/men/13.jpg",
      "/men/13.1.jpg",
      "/men/13.2.jpg",
      "/men/13.3.jpg",
    ],
    category: "Men's Fashion",
    description:
      "Stay cool and stylish with these Makkrom Henley shirts for men. Featuring a classic button design and lightweight fabric, they're perfect for summer days and casual outings.",
    features: [
      "79% Polyester, 16% Viscose, 5% Elastane",
      "Henley style",
      "Short sleeve",
      "Lightweight",
      "Button closure",
      "Machine washable",
      "Imported"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.8,
    inStock: true,
    isNew: true,
  },
  {
    id: "14",
    name: "Men's Short Sleeve Dress Shirts Stretch Stain Shield Button Down",
    images: [
      "/men/14.jpg",
      "/men/14.1.jpg",
      "/men/14.2.jpg",
      "/men/14.3.jpg",
    ],
    category: "Men's Fashion",
    description:
      "Upgrade your formal wardrobe with these stretch stain shield dress shirts for men. The solid color and button-down style make them perfect for both work and casual occasions.",
    features: [
      "95% Cotton, 5% Spandex",
      "Stretch fabric",
      "Stain shield technology",
      "Short sleeve",
      "Button down closure",
      "Machine or hand wash",
      "Imported"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.7,
    inStock: true,
    isNew: true,
  },
  {
    id: "15",
    name: "Mens Casual Shorts Cotton Drawstring Summer Beach Stretch Twill Chino",
    images: [
      "/men/15.jpg",
      "/men/15.1.jpg",
      "/men/15.2.jpg",
      "/men/15.3.jpg",
    ],
    category: "Men's Fashion",
    description:
      "Enjoy summer comfort with these men's casual cotton shorts. The stretch twill fabric and drawstring waist provide a perfect fit for beach, golf, or casual outings.",
    features: [
      "94% Cotton, 6% Elastane",
      "Stretch twill chino",
      "Drawstring closure",
      "Breathable & lightweight",
      "Machine washable"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.6,
    inStock: true,
    isNew: true,
  },
  {
    id: "16",
    name: "Mens Cargo Pants Casual Joggers Athletic Cotton Loose Straight",
    images: [
      "/men/16.jpg",
      "/men/16.1.jpg",
      "/men/16.2.jpg",
      "/men/16.3.jpg",
    ],
    category: "Men's Fashion",
    description:
      "Stay active and comfortable in these men's cargo jogger pants. Made from soft cotton with a touch of spandex, they offer flexibility for athletic activities or casual wear.",
    features: [
      "95% Cotton, 5% Spandex",
      "Loose straight fit",
      "Drawstring closure",
      "Machine washable",
      "Imported"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.7,
    inStock: true,
    isNew: true,
  },
  {
    id: "17",
    name: "Men’s Premium Twill Cargo Short",
    images: [
      "/men/17.jpg",
      "/men/17.1.jpg",
      "/men/17.2.jpg",
      "/men/17.3.jpg",
    ],
    category: "Men's Fashion",
    description:
      "Experience superior comfort and style with these premium twill cargo shorts for men. Crafted from 100% cotton, they offer breathability and durability for everyday wear.",
    features: [
      "100% Cotton",
      "Premium twill fabric",
      "Cargo pockets",
      "Zipper closure",
      "Machine washable",
      "Imported"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.8,
    inStock: true,
    isNew: true,
  },
  {
    id: "18",
    name: "Mens Flannel Shirts Long Sleeve Brushed 100% Cotton Shirt",
    images: [
      "/men/18.jpg",
      "/men/18.1.jpg",
      "/men/18.2.jpg",
      "/men/18.3.jpg",
    ],
    category: "Men's Fashion",
    description:
      "Stay cozy and stylish with these men's long sleeve flannel shirts. Made from brushed 100% cotton, they offer warmth and softness for cooler days.",
    features: [
      "100% Cotton",
      "Long sleeve flannel",
      "Brushed fabric",
      "Button down closure",
      "Machine washable",
      "Imported"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.7,
    inStock: true,
    isNew: true,
  },
  {
    id: "19",
    name: "Mens Linen Shirts Short Sleeve Button Down Wrinkle Free Summer Tops",
    images: [
      "/men/19.jpg",
      "/men/19.1.jpg",
      "/men/19.2.jpg",
      "/men/19.3.jpg",
    ],
    category: "Men's Fashion",
    description:
      "Stay fresh and wrinkle-free with these men's linen short sleeve shirts. Perfect for vacations, beach trips, or summer outings, the lightweight fabric keeps you comfortable all day.",
    features: [
      "70% Rayon, 30% Linen",
      "Wrinkle free",
      "Short sleeve",
      "Button down closure",
      "Machine washable",
      "Imported"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.6,
    inStock: true,
    isNew: true,
  },
  {
    id: "20",
    name: "Mens Corduroy Casual Pants Fashion Loose Fit Wide Leg Pants",
    images: [
      "/men/20.jpg",
      "/men/20.1.jpg",
      "/men/20.2.jpg",
      "/men/20.3.jpg",
    ],
    category: "Men's Fashion",
    description:
      "Add a trendy touch to your wardrobe with these men's corduroy casual pants. The loose fit and wide leg design offer maximum comfort and style. Featuring an elastic waist and drawstring closure, they're perfect for everyday wear. Enjoy both fashion and functionality in one piece.",
    features: [
      "Corduroy fabric",
      "Elastic waist",
      "Drawstring closure",
      "Loose fit",
      "Wide leg design",
      "Machine washable",
      "Imported"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.6,
    inStock: true,
    isNew: true,
  },
  {
    id: "21",
    name: "Men's Relaxed Fit Stretch Cargo Pant",
    images: [
      "/men/21.jpg",
      "/men/21.1.jpg",
      "/men/21.2.jpg",
      "/men/21.3.jpg",
    ],
    category: "Men's Fashion",
    description:
      "Enjoy relaxed comfort with these stretch cargo pants for men. Made from a cotton-spandex blend, they provide flexibility for all-day wear. The zipper closure ensures easy fitting, while multiple pockets offer practical storage. Perfect for work, travel, or casual outings.",
    features: [
      "98% Cotton, 2% Spandex",
      "Relaxed fit",
      "Stretch fabric",
      "Zipper closure",
      "Multiple pockets",
      "Machine washable",
      "Imported"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.7,
    inStock: true,
    isNew: true,
  },
  {
    id: "22",
    name: "Men's Cotton T-Shirts Oversized Unisex Short Sleeves Casual Loose Tee",
    images: [
      "/men/22.jpg",
      "/men/22.1.jpg",
      "/men/22.2.jpg",
      "/men/22.3.jpg",
    ],
    category: "Men's Fashion",
    description:
      "Stay casual and comfortable with these oversized cotton t-shirts for men. The loose fit and short sleeves make them perfect for everyday wear. Made from nearly pure cotton, they offer softness and breathability. Ideal for layering or wearing solo in any season.",
    features: [
      "99.9% Cotton, 0.1% Polyester",
      "Oversized fit",
      "Short sleeves",
      "Casual style",
      "Pull on closure",
      "Machine washable",
      "Imported"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.8,
    inStock: true,
    isNew: true,
  },
  {
    id: "23",
    name: "Mens Corduroy Shorts Casual 7 Inch Inseam Elastic Waist Drawstring",
    images: [
      "/men/23.jpg",
      "/men/23.1.jpg",
      "/men/23.2.jpg",
      "/men/23.3.jpg",
    ],
    category: "Men's Fashion",
    description:
      "Enjoy summer days with these men's corduroy shorts. The 7-inch inseam and elastic waist with drawstring provide a comfortable, secure fit. Made from soft polyester, they're perfect for the beach, vacations, or casual outings. Add a stylish touch to your warm-weather wardrobe.",
    features: [
      "100% Polyester",
      "Corduroy fabric",
      "Elastic waist",
      "Drawstring closure",
      "7 inch inseam",
      "Machine washable",
      "Imported"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.6,
    inStock: true,
    isNew: true,
  },
  {
    id: "24",
    name: "Men's Chest Compression Shirt to Hide Gynecomastia Moobs Shapewear",
    images: [
      "/men/24.jpg",
      "/men/24.1.jpg",
      "/men/24.2.jpg",
      "/men/24.3.jpg",
    ],
    category: "Men's Fashion",
    description:
      "Achieve a confident look with this men's chest compression shirt. Designed to hide gynecomastia and moobs, it offers firm support and a smooth silhouette. The pull-on style and stretchy fabric ensure comfort all day. Perfect for layering under any outfit as effective shapewear.",
    features: [
      "90% Nylon, 10% Spandex",
      "Compression fit",
      "Pull on closure",
      "Hand wash only",
      "Imported"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.7,
    inStock: true,
    isNew: true,
  },
  {
    id: "25",
    name: "Adult Tri-Blend Track T-Shirt, Style GTR401",
    images: [
      "/men/25.jpg",
      "/men/25.1.jpg",
      "/men/25.2.jpg",
      "/men/25.3.jpg",
    ],
    category: "Men's Fashion",
    description:
      "Experience ultimate softness with this adult tri-blend track t-shirt. The blend of polyester, cotton, and rayon provides comfort and durability for everyday wear. The pull-on style makes it easy to layer or wear alone. Ideal for workouts, casual outings, or relaxing at home.",
    features: [
      "50% Polyester, 25% Cotton, 25% Rayon",
      "Tri-blend fabric",
      "Track style",
      "Pull on closure",
      "Machine washable",
      "Imported"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.8,
    inStock: true,
    isNew: true,
  },
  {
    id: "26",
    name: "Womens Fashion Tops Hoodies Pullover Oversized Sweatshirts",
    images: [
      "/woman/1.jpg",
      "/woman/1.1.jpg",
      "/woman/1.2.jpg",
      "/woman/1.3.jpg",
    ],
    category: "Women's Fashion",
    description:
      "Stay cozy and stylish with these oversized pullover hoodies for women. Made from a soft and lightweight blend, they're perfect for lounging or casual outings. The loose fit and long sleeves offer extra comfort. Elevate your fall and winter wardrobe with these trendy sweatshirts.",
    features: [
      "60% Polyester, 35% Rayon, 5% Spandex",
      "Soft, comfortable, lightweight",
      "Pullover",
      "Oversized fit",
      "Long sleeve",
      "Machine washable",
      "Imported"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.7,
    inStock: true,
    isNew: true,
  },
  {
    id: "27",
    name: "Matching Summer Sweatsuit Lounge Set Womens Wide Leg Pants Side Ruching Crop Top Sets",
    images: [
      "/woman/2.jpg",
      "/woman/2.1.jpg",
      "/woman/2.2.jpg",
      "/woman/2.3.jpg",
    ],
    category: "Women's Fashion",
    description:
      "Enjoy ultimate comfort with this matching summer lounge set for women. Featuring wide leg pants and a side ruching crop top, it's perfect for relaxing at home or casual outings. The stretchy fabric ensures a flattering fit. Stay on trend with this stylish two-piece sweatsuit.",
    features: [
      "Spandex+ fabric",
      "Wide leg pants",
      "Side ruching crop top",
      "Matching set",
      "Machine washable",
      "Imported"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.6,
    inStock: true,
    isNew: true,
  },
  {
    id: "28",
    name: "Women's Long Sleeve Shirts 2025 Fall Fashion Dressy Casual Tops Trendy Henley Blouses",
    images: [
      "/woman/3.jpg",
      "/woman/3.1.jpg",
      "/woman/3.2.jpg",
      "/woman/3.3.jpg",
    ],
    category: "Women's Fashion",
    description:
      "Upgrade your work wardrobe with these trendy long sleeve Henley blouses for women. The soft, stretchy fabric offers comfort all day. Perfect for both dressy and casual occasions, these tops are a must-have for the 2025 fall fashion season. Look cute and feel confident at work or out.",
    features: [
      "82% Polyester, 12% Rayon, 6% Spandex",
      "Henley style",
      "Long sleeve",
      "Dressy casual",
      "Machine washable",
      "Imported"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.7,
    inStock: true,
    isNew: true,
  },
  {
    id: "29",
    name: "Women's 2 Piece Matching Lounge Set Long Sleeve Slightly Crop Top Wide Leg Pants",
    images: [
      "/woman/4.jpg",
      "/woman/4.1.jpg",
      "/woman/4.2.jpg",
      "/woman/4.3.jpg",
    ],
    category: "Women's Fashion",
    description:
      "Stay comfortable and stylish with this 2-piece lounge set for women. The set includes a slightly cropped long sleeve top and wide leg pants for a relaxed fit. Made from soft, stretchy fabric, it's perfect for lounging or running errands. Elevate your casual wear with this chic sweatsuit.",
    features: [
      "Spandex+ fabric",
      "2-piece set",
      "Slightly crop top",
      "Wide leg pants",
      "Machine washable",
      "Imported"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.6,
    inStock: true,
    isNew: true,
  },
  {
    id: "30",
    name: "Cropped Cardigan Sweaters for Women Lightweight Crop Cotton Knit Y2k Fall Outfits",
    images: [
      "/woman/5.jpg",
      "/woman/5.1.jpg",
      "/woman/5.2.jpg",
      "/woman/5.3.jpg",
    ],
    category: "Women's Fashion",
    description:
      "Add a touch of Y2K style to your fall outfits with these cropped cardigan sweaters for women. Lightweight and trendy, they're perfect for layering over your favorite tops. The cotton knit fabric provides comfort and softness. Stay fashionable and cozy all season long.",
    features: [
      "71% Polyester, 18% Acrylic, 11% Polyamide",
      "Cropped style",
      "Cardigan sweater",
      "Lightweight cotton knit",
      "Hand wash only",
      "Imported"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.8,
    inStock: true,
    isNew: true,
  },
  {
    id: "31",
    name: "Womens Top Ruffle Sleeve Blouses V Neck T Shirts Casual Outfit Bell Sleeve Tee",
    images: [
      "/woman/6.jpg",
      "/woman/6.1.jpg",
      "/woman/6.2.jpg",
      "/woman/6.3.jpg",
    ],
    category: "Women's Fashion",
    description:
      "Embrace feminine style with these ruffle sleeve blouses for women. The V-neck and bell sleeves add a playful touch to any outfit. Perfect for spring, summer, or fall, these tunics are both cute and comfortable. Pair with jeans or skirts for a chic casual look.",
    features: [
      "60% Polyester, 5% Spandex, 35% Rayon",
      "Ruffle sleeve",
      "V-neck",
      "Bell sleeve",
      "Slim/closer fit",
      "Machine washable",
      "Cotton shirt material"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.7,
    inStock: true,
    isNew: true,
  },
  {
    id: "32",
    name: "Womens Long Sleeve Shirts Fall Fashion 2025 Basic Crop Tops Going Out Workout Outfits Y2k Clothes",
    images: [
      "/woman/7.jpg",
      "/woman/7.1.jpg",
      "/woman/7.2.jpg",
      "/woman/7.3.jpg",
    ],
    category: "Women's Fashion",
    description:
      "Stay on trend with these basic crop tops for women, perfect for going out or working out. The long sleeve design and Y2K vibes make them ideal for fall fashion 2025. Stretchy and comfortable, they're easy to mix and match. Upgrade your casual and active wardrobe today.",
    features: [
      "88% Polyester, 12% Spandex",
      "Long sleeve",
      "Crop top",
      "Y2K style",
      "Pull on closure",
      "Machine washable",
      "Imported"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.6,
    inStock: true,
    isNew: true,
  },
  {
    id: "33",
    name: "Women Shirts Fall Sweaters Regular Fit Short Sleeve Tunic Tops Dressy Casual Business Blouses",
    images: [
      "/woman/8.jpg",
      "/woman/8.1.jpg",
      "/woman/8.2.jpg",
      "/woman/8.3.jpg",
    ],
    category: "Women's Fashion",
    description:
      "Look polished and professional with these regular fit tunic tops for women. Perfect for business or casual settings, they feature short sleeves and a comfortable fit. The soft fabric blend is easy to care for. Dress up or down for any occasion in 2025.",
    features: [
      "60% Polyester, 35% Rayon, 5% Spandex",
      "Regular fit",
      "Short sleeve",
      "Tunic top",
      "Pull on closure",
      "Machine washable or dry-cleanable",
      "Imported"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.7,
    inStock: true,
    isNew: true,
  },
  {
    id: "34",
    name: "Women's 2025 Fashion Tops 3/4 Length Sleeve Business Casual Blouses Summer Tees Shirts S-4X",
    images: [
      "/woman/9.jpg",
      "/woman/9.1.jpg",
      "/woman/9.2.jpg",
      "/woman/9.3.jpg",
    ],
    category: "Women's Fashion",
    description:
      "Stay stylish and comfortable with these 3/4 sleeve business casual blouses for women. Ideal for summer or office wear, they come in sizes S-4X to fit all body types. The soft, stretchy fabric ensures all-day comfort. Upgrade your 2025 wardrobe with these versatile tops.",
    features: [
      "60% Polyester, 35% Rayon, 5% Spandex",
      "3/4 length sleeve",
      "Business casual",
      "Pull on closure",
      "Machine washable",
      "Imported"
    ],
    sizes: ["S", "M", "L", "XL", "XXL", "3XL", "4XL"],
    rating: 4.8,
    inStock: true,
    isNew: true,
  },
  {
    id: "35",
    name: "Women's Basic Double Lined Scoop Neck Tank Tops Adjustable Cami Tank",
    images: [
      "/woman/10.jpg",
      "/woman/10.1.jpg",
      "/woman/10.2.jpg",
      "/woman/10.3.jpg",
    ],
    category: "Women's Fashion",
    description:
      "Beat the heat with these double lined scoop neck tank tops for women. Adjustable straps and sleeveless design make them perfect for summer. The stretchy, soft fabric offers a comfortable fit. Ideal for layering or wearing alone on sunny days.",
    features: [
      "88% Polyester, 12% Spandex",
      "Double lined",
      "Adjustable cami straps",
      "Scoop neck",
      "Sleeveless",
      "Imported"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.8,
    inStock: true,
    isNew: true,
  },
  {
    id: "36",
    name: "Womens Tops Long Sleeve Lightweight Shirts 2025 Fall Fashion Crewneck Knit Basic Tee",
    images: [
      "/woman/11.jpg",
      "/woman/11.1.jpg",
      "/woman/11.2.jpg",
      "/woman/11.3.jpg",
    ],
    category: "Women's Fashion",
    description:
      "Stay cozy and stylish in these lightweight long sleeve shirts for women. The crewneck knit design is perfect for layering or wearing alone during fall. Soft, stretchy fabric ensures maximum comfort. Add these basic tees to your trendy 2025 wardrobe.",
    features: [
      "95% Polyester, 5% Elastane",
      "Lightweight",
      "Long sleeve",
      "Crew neck",
      "Basic tee",
      "Pull on closure",
      "Imported"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.7,
    inStock: true,
    isNew: true,
  },
  {
    id: "37",
    name: "T Shirts Short Sleeve V Neck Tees Womens Tops Beach Vacation Fashion Clothes",
    images: [
      "/woman/12.jpg",
      "/woman/12.1.jpg",
      "/woman/12.2.jpg",
      "/woman/12.3.jpg",
    ],
    category: "Women's Fashion",
    description:
      "Enjoy effortless style with these V-neck short sleeve tees for women. Perfect for beach vacations or casual outings, they feature a relaxed fit and breathable fabric. Ideal for summer, spring, or fall, these tops are easy to dress up or down. Stay fashionable all year round.",
    features: [
      "60% Polyester, 5% Spandex, 35% Rayon",
      "Short sleeve",
      "V-neck",
      "Relaxed fit",
      "Pull on closure",
      "Imported"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.8,
    inStock: true,
    isNew: true,
  },
  {
    id: "38",
    name: "Womens Tank Tops Eyelet Loose Casual Summer Tops Crew Neck Basic Sleeveless Shirts",
    images: [
      "/woman/13.jpg",
      "/woman/13.1.jpg",
      "/woman/13.2.jpg",
      "/woman/13.3.jpg",
    ],
    category: "Women's Fashion",
    description:
      "Stay cool and trendy with these eyelet tank tops for women. The loose fit and crew neck design make them perfect for summer and spring. Soft, airy fabric keeps you comfortable all day. Add a stylish touch to your casual wardrobe in 2025.",
    features: [
      "95% Polyester, 5% Spandex",
      "Eyelet textured design",
      "Loose fit",
      "Crew neck",
      "Sleeveless",
      "Pull on closure",
      "Imported"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.7,
    inStock: true,
    isNew: true,
  },
  {
    id: "39",
    name: "Biker Shorts Women with Pockets High Waisted Workout Spandex Tummy Control",
    images: [
      "/woman/14.jpg",
      "/woman/14.1.jpg",
      "/woman/14.2.jpg",
      "/woman/14.3.jpg",
    ],
    category: "Women's Fashion",
    description:
      "Achieve your fitness goals with these high waisted biker shorts for women. Designed with pockets and tummy control, they're perfect for gym, running, or yoga sessions. The stretchy spandex blend offers a secure and comfortable fit. Choose your preferred length for any workout.",
    features: [
      "92% Polyester, 8% Spandex",
      "High waisted",
      "Tummy control",
      "With pockets",
      "Pull on closure",
      "Machine washable"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.8,
    inStock: true,
    isNew: true,
  },
  {
    id: "40",
    name: "Women Short Sleeve Workout Shirts Open Back Tops Casual Yoga Y2k Crop Running Tees",
    images: [
      "/woman/15.jpg",
      "/woman/15.1.jpg",
      "/woman/15.2.jpg",
      "/woman/15.3.jpg",
    ],
    category: "Women's Fashion",
    description:
      "Stay active and stylish with these short sleeve workout shirts for women. Featuring an open back and slouchy crop design, they're perfect for yoga, gym, or running. The soft fabric blend keeps you comfortable during any activity. Add a Y2K vibe to your athletic wardrobe.",
    features: [
      "65% Polyester, 35% Cotton",
      "Short sleeve",
      "Boat neck",
      "Open back",
      "Crop style",
      "Imported"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.7,
    inStock: true,
    isNew: true,
  },
    {
    id: "41",
    name: "Womens Square Neck Tennis Dress",
    images: [
      "/woman/16.jpg",
      "/woman/16.1.jpg",
      "/woman/16.2.jpg",
      "/woman/16.3.jpg",
    ],
    category: "Women's Fashion",
    description:
      "This tennis dress features a square neck, short sleeves, and built-in shorts for comfort and mobility. Made with moisture-wicking, quick-drying fabric, it's perfect for golf, tennis, or any active day. The breathable, skin-friendly material ensures you stay fresh and confident.",
    features: [
      "78% nylon, 22% spandex",
      "Built-in shorts",
      "Moisture wicking",
      "Quick-dry, breathable",
      "4-way stretch",
      "Professional grade fabric",
      "Hand wash only"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.7,
    inStock: true,
    isNew: true,
  },
  {
    id: "42",
    name: "Women's Pants with Deep Pockets 7/8 Stretch Ankle Sweatpants",
    images: [
      "/woman/17.jpg",
      "/woman/17.1.jpg",
      "/woman/17.2.jpg",
      "/woman/17.3.jpg",
    ],
    category: "Women's Fashion",
    description:
      "Versatile stretch ankle sweatpants designed for golf, athletic activities, lounging, travel, or work. Featuring deep pockets and a comfortable drawstring waist, these pants offer both style and functionality for women on the go.",
    features: [
      "75% Polyamide, 25% Elastane",
      "Machine washable",
      "Imported",
      "Drawstring closure",
      "Deep pockets",
      "7/8 ankle length"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.6,
    inStock: true,
    isNew: true,
  },
  {
    id: "43",
    name: "Women's Wool Blend Sweaters Non See Through All-Season Business Casual Tank",
    images: [
      "/woman/18.jpg",
      "/woman/18.1.jpg",
      "/woman/18.2.jpg",
      "/woman/18.3.jpg",
    ],
    category: "Women's Fashion",
    description:
      "This all-season business casual tank is made from a high-quality wool blend, providing warmth and comfort without transparency. The non see-through design and classic fit make it perfect for work or casual occasions.",
    features: [
      "5% Wool, 20% Viscose, 30% Anti-Pilling Acrylic, 45% Nylon",
      "Non see-through",
      "Machine wash with laundry bag",
      "Pull on closure",
      "All-season wear"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.5,
    inStock: true,
    isNew: true,
  },
  {
    id: "44",
    name: "Women Casual Lightweight Drawstring Elastic Waist Pants with Pockets",
    images: [
      "/woman/19.jpg",
      "/woman/19.1.jpg",
      "/woman/19.2.jpg",
      "/woman/19.3.jpg",
    ],
    category: "Women's Fashion",
    description:
      "Lightweight casual pants with a drawstring elastic waist and practical pockets. Made from 100% cotton for breathability and comfort, these capri-length pants are ideal for everyday wear and relaxation.",
    features: [
      "100% Cotton",
      "Elastic waist with drawstring",
      "Ankle rise",
      "Capri leg style",
      "Imported"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.4,
    inStock: true,
    isNew: true,
  },
  {
    id: "45",
    name: "Womens Shirts Button Down Printed Lantern Long Sleeve Blouse",
    images: [
      "/woman/20.jpg",
      "/woman/20.1.jpg",
      "/woman/20.2.jpg",
      "/woman/20.3.jpg",
    ],
    category: "Women's Fashion",
    description:
      "Fashion-forward button down blouse featuring lantern sleeves and a V-neck. The printed design and regular fit make it a stylish choice for casual or business occasions in 2025.",
    features: [
      "Button closure",
      "V-Neck",
      "Lantern sleeve",
      "Regular fit",
      "Printed design",
      "Long sleeve"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.7,
    inStock: true,
    isNew: true,
  },
  {
    id: "46",
    name: "T Shirts Short Sleeve V Neck Tees Womens Fashion Tops",
    images: [
      "/woman/21.jpg",
      "/woman/21.1.jpg",
      "/woman/21.2.jpg",
      "/woman/21.3.jpg",
    ],
    category: "Women's Fashion",
    description:
      "Soft and trendy V-neck short sleeve tees perfect for summer, spring, or casual outings. The lightweight blend provides comfort and style, making them ideal for beach vacations and everyday fashion.",
    features: [
      "60% Polyester, 5% Spandex, 35% Rayon",
      "Pull on closure",
      "V-Neck",
      "Short sleeve",
      "Beach vacation style",
      "Trendy 2025"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.8,
    inStock: true,
    isNew: true,
  },
  {
    id: "47",
    name: "Womens Long Sleeve Shirts 2025 Henley Casual Fall Outfits",
    images: [
      "/woman/22.jpg",
      "/woman/22.1.jpg",
      "/woman/22.2.jpg",
      "/woman/22.3.jpg",
    ],
    category: "Women's Fashion",
    description:
      "Henley style long sleeve shirts designed for fall and casual wear. Made with a comfortable polyester-blend fabric, these fitted ribbed tops are easy to care for and perfect for layering.",
    features: [
      "Polyester-blend",
      "Machine washable, dry-cleanable",
      "Pull on closure",
      "Ribbed fabric",
      "Fitted style",
      "Imported"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.6,
    inStock: true,
    isNew: true,
  },
  {
    id: "48",
    name: "Womens Strapless Tube Tops Basic Backless Sleeveless Bandeau",
    images: [
      "/woman/23.jpg",
      "/woman/23.1.jpg",
      "/woman/23.2.jpg",
      "/woman/23.3.jpg",
    ],
    category: "Women's Fashion",
    description:
      "Basic strapless tube tops for women, perfect for summer and going out. The backless sleeveless bandeau design offers a cute and trendy look for 2025.",
    features: [
      "88% Polyester, 12% Spandex",
      "Pull on closure",
      "Sleeveless",
      "Backless design",
      "Machine washable or dry clean",
      "Imported"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.5,
    inStock: true,
    isNew: true,
  },
  {
    id: "49",
    name: "Dresses for Women 2025 Casual Summer V Neck Wedding Guest Dress",
    images: [
      "/woman/24.jpg",
      "/woman/24.1.jpg",
      "/woman/24.2.jpg",
      "/woman/24.3.jpg",
    ],
    category: "Women's Fashion",
    description:
      "Elegant summer dress with a V-neck and short sleeves, perfect for wedding guests, beach vacations, or casual outings. The soft and stretchy fabric blend ensures comfort and style for any occasion.",
    features: [
      "60% Polyester, 35% Rayon, 5% Spandex",
      "Machine washable",
      "V-Neck",
      "Short sleeve",
      "Imported"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.7,
    inStock: true,
    isNew: true,
  },
  {
    id: "50",
    name: "Womens Basic T Shirts Summer Tops 2025 Short Sleeve Crop Tops",
    images: [
      "/woman/25.jpg",
      "/woman/25.1.jpg",
      "/woman/25.2.jpg",
      "/woman/25.3.jpg",
    ],
    category: "Women's Fashion",
    description:
      "Basic short sleeve crop tops designed for summer workouts and everyday wear. Slim fit and made from a soft, stretchy fabric blend, these tops are perfect for gym, Y2K style, and casual outfits.",
    features: [
      "88% Polyester, 12% Spandex",
      "Pull on closure",
      "Short sleeve",
      "Slim fit",
      "Machine washable",
      "Imported"
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.8,
    inStock: true,
    isNew: true,
  },
    {
      id: "51",
      name: "Men's Belt, Reversible Belt Adjustable For Gift Men 1.25”",
      images: [
        "/accessories/1.jpg",
        "/accessories/1.1.jpg",
        "/accessories/1.2.jpg",
        "/accessories/1.3.jpg"
      ],
      category: "Accessories",
      description: "Reversible genuine leather belt for men, adjustable for perfect fit. Removable buckle allows easy cut-to-fit customization. Ideal for gift or everyday use.",
      features: [
        "100% Leather",
        "Reversible design, 2 sides in 1 belt",
        "Removable buckle for cut-to-fit",
        "Width: 1.25 inch",
        "Dry cloth clean"
      ],
      sizes: ["One Size"],
      rating: 4.7,
      inStock: true,
      isNew: true
    },
    {
      id: "52",
      name: "Mens Belts Leather 1 Pack - 1.25\" Reversible Belts for Dress Pants",
      images: [
        "/accessories/2.jpg",
        "/accessories/2.1.jpg",
        "/accessories/2.2.jpg",
        "/accessories/2.3.jpg"
      ],
      category: "Accessories",
      description: "Premium leather reversible belt for men, perfect for dress pants and formal occasions. One belt, two styles.",
      features: [
        "Premium Leather",
        "Reversible design",
        "Imported"
      ],
      sizes: ["One Size"],
      rating: 4.6,
      inStock: true,
      isNew: true
    },
    {
      id: "53",
      name: "Men's 35mm Classic Buckle Leather Belt for Jeans",
      images: [
        "/accessories/3.jpg",
        "/accessories/3.1.jpg",
        "/accessories/3.2.jpg",
        "/accessories/3.3.jpg"
      ],
      category: "Accessories",
      description: "Classic genuine leather belt with 35mm buckle, ideal for jeans and casual wear. Durable and stylish.",
      features: [
        "100% Leather",
        "35mm classic buckle",
        "Hand wash only",
        "Imported"
      ],
      sizes: ["One Size"],
      rating: 4.7,
      inStock: true,
      isNew: true
    },
    {
      id: "54",
      name: "Women Belts For Jeans Dresses Pants Ladies Leather Waist Belt with Gold Buckle",
      images: [
        "/accessories/4.jpg",
        "/accessories/4.1.jpg",
        "/accessories/4.2.jpg"
      ],
      category: "Accessories",
      description: "Elegant leather belt for women with gold buckle, suitable for jeans, dresses, and pants. Adds a stylish touch to any outfit.",
      features: [
        "100% Leather",
        "Gold buckle",
        "Dry cloth clean",
        "Imported"
      ],
      sizes: ["One Size"],
      rating: 4.8,
      inStock: true,
      isNew: true
    },
    {
      id: "55",
      name: "Leather Ratchet Belt Men 2 Pack - Customizable Fit, Effortless Style (35mm)",
      images: [
        "/accessories/5.jpg",
        "/accessories/5.1.jpg",
        "/accessories/5.2.jpg"
      ],
      category: "Accessories",
      description: "Set of 2 genuine leather ratchet belts for men, customizable fit and effortless style. Easy to adjust for comfort.",
      features: [
        "Genuine Leather",
        "Ratchet buckle for customizable fit",
        "Dry cloth clean",
        "Imported"
      ],
      sizes: ["One Size"],
      rating: 4.8,
      inStock: true,
      isNew: true
    },
    {
      id: "56",
      name: "Men's Nylon Belts, 5 Pack Military Canvas Outdoor Metal-free Belts",
      images: [
        "/accessories/6.jpg",
        "/accessories/6.1.jpg",
        "/accessories/6.2.jpg",
        "/accessories/6.3.jpg"
      ],
      category: "Accessories",
      description: "Pack of 5 men's nylon belts, casual and military style, metal-free for outdoor use. Durable and easy to clean.",
      features: [
        "100% Nylon",
        "Metal-free design",
        "Wet wipe clean",
        "Imported"
      ],
      sizes: ["One Size"],
      rating: 4.6,
      inStock: true,
      isNew: true
    },
    {
      id: "57",
      name: "Mens Work Belts, Holeless Adjustable Canvas Web Cloth Fabric Belts",
      images: [
        "/accessories/7.jpg",
        "/accessories/7.1.jpg",
        "/accessories/7.2.jpg",
        "/accessories/7.3.jpg"
      ],
      category: "Accessories",
      description: "Holeless adjustable canvas web belt for men, suitable for casual, business, and work outfits. Comfortable and easy to adjust.",
      features: [
        "100% Polyester",
        "Holeless adjustable design",
        "Hand wash only",
        "Imported"
      ],
      sizes: ["One Size"],
      rating: 4.7,
      inStock: true,
      isNew: true
    },
    {
      id: "58",
      name: "Shoulder Bag for Women Cute Hobo Purses and Handbags Retro Clutch",
      images: [
        "/accessories/8.jpg",
        "/accessories/8.1.jpg",
        "/accessories/8.2.jpg",
        "/accessories/8.3.jpg"
      ],
      category: "Accessories",
      description: "Retro style hobo shoulder bag for women, cute design for daily use. Spacious and stylish with zipper closure.",
      features: [
        "Polyurethane Leather",
        "Retro hobo style",
        "Zipper closure",
        "Imported"
      ],
      sizes: ["One Size"],
      rating: 4.8,
      inStock: true,
      isNew: true
    },
    {
      id: "59",
      name: "Slouchy Hobo Bags for Women Leather Shoulder Bag Everyday Purse",
      images: [
        "/accessories/9.jpg",
        "/accessories/9.1.jpg",
        "/accessories/9.2.jpg",
        "/accessories/9.3.jpg"
      ],
      category: "Accessories",
      description: "Vintage slouchy hobo bag for women, faux leather with zipper. Perfect for everyday use, spacious and comfortable.",
      features: [
        "Faux Leather",
        "Slouchy hobo style",
        "Zipper closure",
        "Hand wash only",
        "Imported"
      ],
      sizes: ["One Size"],
      rating: 4.7,
      inStock: true,
      isNew: true
    },
    {
      id: "60",
      name: "Geometric Luminous Purses and Handbags Holographic Reflective Crossbody Bag",
      images: [
        "/accessories/10.jpg",
        "/accessories/10.1.jpg",
        "/accessories/10.2.jpg",
        "/accessories/10.3.jpg"
      ],
      category: "Accessories",
      description: "Unique geometric luminous purse, holographic reflective crossbody bag for women. Eye-catching design, easy to care for.",
      features: [
        "Geometric luminous material",
        "Holographic reflective effect",
        "Hand wash only with mild detergent",
        "Imported"
      ],
      sizes: ["One Size"],
      rating: 4.8,
      inStock: true,
      isNew: true
    },
    {
      id: "61",
      name: "Trendy Leather Crossbody Purse with Adjustable Strap, Women's Shoulder Handbag",
      images: [
        "/accessories/11.jpg",
        "/accessories/11.1.jpg",
        "/accessories/11.2.jpg",
        "/accessories/11.3.jpg"
      ],
      category: "Accessories",
      description: "Trendy PU leather crossbody purse for women with adjustable strap. Zipper closure and fabric lining for secure and stylish storage.",
      features: [
        "PU leather",
        "Adjustable strap",
        "Zipper closure",
        "Fabric lining",
        "Imported"
      ],
      sizes: ["One Size"],
      rating: 4.7,
      inStock: true,
      isNew: true
    },
    {
      id: "62",
      name: "Casual Crossbody Bag with Anti Theft Pocket - Women Lightweight Purse",
      images: [
        "/accessories/12.jpg",
        "/accessories/12.1.jpg",
        "/accessories/12.2.jpg",
        "/accessories/12.3.jpg"
      ],
      category: "Accessories",
      description: "Lightweight casual crossbody bag for women, water-resistant nylon material with anti-theft pocket. Perfect for travel and daily use.",
      features: [
        "Nylon",
        "Anti-theft pocket",
        "Water-resistant",
        "Imported"
      ],
      sizes: ["One Size"],
      rating: 4.8,
      inStock: true,
      isNew: true
    },
    {
      id: "63",
      name: "Canvas Handbag Multi-Color Striped Lattice Cross Body Shoulder Purse Tote",
      images: [
        "/accessories/13.jpg",
        "/accessories/13.1.jpg",
        "/accessories/13.2.jpg",
        "/accessories/13.3.jpg"
      ],
      category: "Accessories",
      description: "Multi-color striped canvas handbag, crossbody and shoulder tote for women. Fashionable and practical for everyday use.",
      features: [
        "Cotton canvas",
        "Multi-color striped lattice design",
        "Crossbody/shoulder/tote styles",
        "Imported"
      ],
      sizes: ["One Size"],
      rating: 4.7,
      inStock: true,
      isNew: true
    },
    {
      id: "64",
      name: "Crossbody Purses for Women Trendy Vegan Leather, Cell Phone Camera Shoulder Handbags",
      images: [
        "/accessories/14.jpg",
        "/accessories/14.1.jpg",
        "/accessories/14.2.jpg",
        "/accessories/14.3.jpg"
      ],
      category: "Accessories",
      description: "Trendy vegan leather crossbody purse for women, designed for cell phone and camera with card slots. Zipper closure and polyester lining.",
      features: [
        "PU leather (vegan)",
        "Card slots for essentials",
        "Zipper closure",
        "Polyester lining",
        "Imported"
      ],
      sizes: ["One Size"],
      rating: 4.8,
      inStock: true,
      isNew: true
    },
    {
      id: "65",
      name: "Crossbody Bags For Women Pocketbooks Soft PU Leather Multi Pocket Shoulder Bag",
      images: [
        "/accessories/15.jpg",
        "/accessories/15.1.jpg",
        "/accessories/15.2.jpg",
        "/accessories/15.3.jpg"
      ],
      category: "Accessories",
      description: "Soft PU leather crossbody bag for women with multiple pockets. Practical and stylish, perfect for daily use.",
      features: [
        "PU leather",
        "Multiple pockets",
        "Zipper closure",
        "Polyester lining",
        "Imported"
      ],
      sizes: ["One Size"],
      rating: 4.7,
      inStock: true,
      isNew: true
    },
      {
      id: "66",
      name: "Retro Oval Sunglasses for Women Chic Cat Eye 90s Sunnies Lightweight Narrow Shades Trendy UV protection Sun Glasses",
      images: [
        "/accessories/16.jpg",
        "/accessories/16.1.jpg",
        "/accessories/16.2.jpg",
        "/accessories/16.3.jpg"
      ],
      category: "Accessories",
      description: "Retro oval sunglasses for women in chic cat eye 90s style. Lightweight, narrow shades with trendy UV protection.",
      features: [
        "Origin Imported"
      ],
      sizes: ["One Size"],
      rating: 4.7,
      inStock: true,
      isNew: true
    },
    {
      id: "67",
      name: "Classic Aviator Sunglasses for Men Women Driving Sun glasses Polarized Lens UV Blocking",
      images: [
        "/accessories/17.jpg",
        "/accessories/17.1.jpg",
        "/accessories/17.2.jpg",
        "/accessories/17.3.jpg"
      ],
      category: "Accessories",
      description: "Classic aviator sunglasses for men and women, ideal for driving. Polarized lens with UV blocking.",
      features: [
        "Origin Imported"
      ],
      sizes: ["One Size"],
      rating: 4.8,
      inStock: true,
      isNew: true
    },
    {
      id: "68",
      name: "Premium Vintage Round Sunglasses for Women Men Classic Retro Trendy Style",
      images: [
        "/accessories/18.jpg",
        "/accessories/18.1.jpg",
        "/accessories/18.2.jpg",
        "/accessories/18.3.jpg"
      ],
      category: "Accessories",
      description: "Premium vintage round sunglasses for women and men. Classic retro and trendy style.",
      features: [
        "Origin Imported"
      ],
      sizes: ["One Size"],
      rating: 4.7,
      inStock: true,
      isNew: true
    },
    {
      id: "69",
      name: "Polarized Sunglasses for Men and Women Semi-Rimless Frame Driving Sun glasses UV Blocking",
      images: [
        "/accessories/19.jpg",
        "/accessories/19.1.jpg",
        "/accessories/19.2.jpg",
        "/accessories/19.3.jpg"
      ],
      category: "Accessories",
      description: "Polarized sunglasses for men and women with semi-rimless frame. UV blocking, suitable for driving.",
      features: [
        "Origin Imported"
      ],
      sizes: ["One Size"],
      rating: 4.6,
      inStock: true,
      isNew: true
    },
    {
      id: "70",
      name: "Men's and Women's Guardrails Polarized Aviator Sunglasses",
      images: [
        "/accessories/20.jpg",
        "/accessories/20.1.jpg",
        "/accessories/20.2.jpg",
        "/accessories/20.3.jpg"
      ],
      category: "Accessories",
      description: "Guardrails polarized aviator sunglasses for men and women. Metal frames, classic style.",
      features: [
        "Fabric type: Metal Frames",
        "Care instructions: Clean with a soft, dry cloth. Store in a protective case when not in use.",
        "Origin Imported"
      ],
      sizes: ["One Size"],
      rating: 4.8,
      inStock: true,
      isNew: true
    },
    {
      id: "71",
      name: "Polarized Sports Sunglasses for Men, Mens Sunglasses Wrap Around UV400 Protection for Cycling Fishing Driving",
      images: [
        "/accessories/21.jpg",
        "/accessories/21.1.jpg",
        "/accessories/21.2.jpg",
        "/accessories/21.3.jpg"
      ],
      category: "Accessories",
      description: "Polarized sports sunglasses for men. Wrap around UV400 protection for cycling, fishing, and driving.",
      features: [
        "Origin Imported"
      ],
      sizes: ["One Size"],
      rating: 4.7,
      inStock: true,
      isNew: true
    },
    {
      id: "72",
      name: "Women Large Sunglasses, UV 400 Glasses Oversized Classic Trend Ladies Sunglasses Sparkling Large Frame",
      images: [
        "/accessories/22.jpg",
        "/accessories/22.1.jpg",
        "/accessories/22.2.jpg",
        "/accessories/22.3.jpg"
      ],
      category: "Accessories",
      description: "Women large sunglasses, UV 400 protection, oversized classic trend with sparkling large frame.",
      features: [
        "Origin Imported"
      ],
      sizes: ["One Size"],
      rating: 4.7,
      inStock: true,
      isNew: true
    },
    {
      id: "73",
      name: "Women Short Lace Gloves Sunblock Fingerless Bridal Wrist Gloves Opera Evening Wedding Tea Party Prom Cosplay 1920s",
      images: [
        "/accessories/23.jpg",
        "/accessories/23.1.jpg",
        "/accessories/23.2.jpg",
        "/accessories/23.3.jpg"
      ],
      category: "Accessories",
      description: "Women short lace gloves, sunblock fingerless bridal wrist gloves for opera, evening, wedding, tea party, prom, cosplay 1920s.",
      features: [
        "Fabric type: Lace",
        "Care instructions: Hand Wash Only",
        "Origin Imported"
      ],
      sizes: ["One Size"],
      rating: 4.8,
      inStock: true,
      isNew: true
    },
    {
      id: "74",
      name: "Rhinestone Long Fishnet Gloves Mesh Rave Gloves Bling Elbow Length Evening Party Glove for Women and Girls",
      images: [
        "/accessories/24.jpg",
        "/accessories/24.1.jpg",
        "/accessories/24.2.jpg",
        "/accessories/24.3.jpg"
      ],
      category: "Accessories",
      description: "Rhinestone long fishnet gloves, mesh rave gloves, bling elbow length evening party glove for women and girls.",
      features: [
        "Fabric type: Spandex",
        "Origin Imported"
      ],
      sizes: ["One Size"],
      rating: 4.6,
      inStock: true,
      isNew: true
    },
    {
      id: "75",
      name: "Long Opera Party Gloves for Women 1920s 20s Satin Gloves Costumes Elbow Length Bridal Evening Dress, 21.6 inches",
      images: [
        "/accessories/25.jpg",
        "/accessories/25.1.jpg",
        "/accessories/25.2.jpg",
        "/accessories/25.3.jpg"
      ],
      category: "Accessories",
      description: "Long opera party gloves for women, 1920s satin gloves, costumes, elbow length bridal evening dress, 21.6 inches.",
      features: [
        "Fabric type: 90% Nylon, 10% Spandex",
        "Care instructions: Hand Wash Only",
        "Origin Imported"
      ],
      sizes: ["One Size"],
      rating: 4.7,
      inStock: true,
      isNew: true
    },
    {
      id: "76",
      name: "Fairy Grunge Accessories: Ripped & Crochet Gloves - Grunge Aesthetic",
      images: [
        "/accessories/26.jpg",
        "/accessories/26.1.jpg",
        "/accessories/26.2.jpg",
        "/accessories/26.3.jpg"
      ],
      category: "Accessories",
      description: "Fairy grunge accessories: ripped & crochet gloves, perfect for grunge aesthetic.",
      features: [
        "Care instructions: Hand Wash Only",
        "Origin Imported"
      ],
      sizes: ["One Size"],
      rating: 4.8,
      inStock: true,
      isNew: true
    },
    {
      id: "77",
      name: "Women's Star Pattern Fingerless Thumb Hole Knitted Wrist Length Mitten Gloves",
      images: [
        "/accessories/27.jpg",
        "/accessories/27.1.jpg",
        "/accessories/27.2.jpg",
        "/accessories/27.3.jpg"
      ],
      category: "Accessories",
      description: "Women's star pattern fingerless thumb hole knitted wrist length mitten gloves.",
      features: [
        "Fabric type: 100% Polyester",
        "Care instructions: Hand Wash Only",
        "Origin Imported"
      ],
      sizes: ["One Size"],
      rating: 4.7,
      inStock: true,
      isNew: true
    },
    {
      id: "78",
      name: "Long Opera Gloves for Women, 1920s Satin Stretchy Elbow Length Party Gloves Costumes Bridal, 20inch",
      images: [
        "/accessories/28.jpg",
        "/accessories/28.1.jpg",
        "/accessories/28.2.jpg",
        "/accessories/28.3.jpg"
      ],
      category: "Accessories",
      description: "Long opera gloves for women, 1920s satin stretchy elbow length party gloves, costumes bridal, 20inch.",
      features: [
        "Fabric type: Spandex",
        "Care instructions: Hand Wash Only",
        "Origin Imported"
      ],
      sizes: ["One Size"],
      rating: 4.6,
      inStock: true,
      isNew: true
    },
    {
      id: "79",
      name: "Women's Long Sheer Gloves Tulle Mesh Gloves 1920s Wedding Opera Tea Party Dance Glove",
      images: [
        "/accessories/29.jpg",
        "/accessories/29.1.jpg",
        "/accessories/29.2.jpg",
        "/accessories/29.3.jpg"
      ],
      category: "Accessories",
      description: "Women's long sheer gloves tulle mesh gloves, 1920s wedding opera tea party dance glove.",
      features: [
        "Fabric type: 95% Polyester, 5% Spandex",
        "Care instructions: Hand Wash Only",
        "Origin Imported"
      ],
      sizes: ["One Size"],
      rating: 4.7,
      inStock: true,
      isNew: true
    },
    {
      id: "80",
      name: "Women's Punk Fingerless Glove Cosplay Ripped Gloves for Halloween Costume Party 1Pair",
      images: [
        "/accessories/30.jpg",
        "/accessories/30.1.jpg",
        "/accessories/30.2.jpg",
        "/accessories/30.3.jpg"
      ],
      category: "Accessories",
      description: "Women's punk fingerless glove cosplay ripped gloves for Halloween costume party (1 pair).",
      features: [
        "Fabric type: Polyester",
        "Care instructions: Hand Wash Only",
        "Origin Imported"
      ],
      sizes: ["One Size"],
      rating: 4.8,
      inStock: true,
      isNew: true
    }
]

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}


