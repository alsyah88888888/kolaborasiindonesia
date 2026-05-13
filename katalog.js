// DATA TERFILTER (Hanya Produk dengan Foto)
const ecommerceProducts = [
    {
        "id": 1,
        "name": "Chocolatos Drink Creamy Chocolate 24Gr",
        "category": "minuman",
        "img": "images/catalog/products/chocolatos-drink-creamy-chocolate-24gr.jpg",
        "price": 175000,
        "originalPrice": null,
        "rating": 4.6,
        "sold": 3872,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Mayora",
        "cluster": "Biskuit & Wafer"
    },
    {
        "id": 2,
        "name": "Ultra Milk Uht Caramel 200MI",
        "category": "minuman",
        "img": "images/catalog/products/ultra-milk-uht-caramel-200mi.jpg",
        "price": 200000,
        "originalPrice": null,
        "rating": 5.0,
        "sold": 400,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Ultra Jaya",
        "cluster": "Susu & Olahannya"
    },
    {
        "id": 3,
        "name": "Ultra Milk Plain 1000MI",
        "category": "minuman",
        "img": "images/catalog/products/ultra-milk-plain-1000mi.jpg",
        "price": 235000,
        "originalPrice": null,
        "rating": 4.6,
        "sold": 1327,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Ultra Jaya",
        "cluster": "Susu & Olahannya"
    },
    {
        "id": 4,
        "name": "Teh Pucuk 500MI",
        "category": "minuman",
        "img": "images/catalog/products/teh-pucuk-500mi.jpg",
        "price": 110000,
        "originalPrice": null,
        "rating": 5.0,
        "sold": 4904,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Mayora",
        "cluster": "Kopi & Teh"
    },
    {
        "id": 5,
        "name": "Teh Kotak 300MI",
        "category": "minuman",
        "img": "images/catalog/products/teh-kotak-300mi.jpg",
        "price": 205000,
        "originalPrice": null,
        "rating": 4.9,
        "sold": 2400,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Ultra Jaya",
        "cluster": "Kopi & Teh"
    },
    {
        "id": 6,
        "name": "Teh Botol Sosro Original 24X450MI",
        "category": "minuman",
        "img": "images/catalog/products/teh-botol-sosro-original-24x450mi.jpg",
        "price": 120000,
        "originalPrice": 144000,
        "rating": 4.6,
        "sold": 677,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Kopi & Teh"
    },
    {
        "id": 7,
        "name": "Sprite Soft Drink (24 Cans X 250 MI)",
        "category": "minuman",
        "img": "images/catalog/products/sprite-soft-drink-24-cans-x-250-mi.jpg",
        "price": 120000,
        "originalPrice": null,
        "rating": 4.8,
        "sold": 498,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 8,
        "name": "Sprite Soft Drink (12 Bottles X 250 MI)",
        "category": "minuman",
        "img": "images/catalog/products/sprite-soft-drink-12-bottles-x-250-mi.jpg",
        "price": 250000,
        "originalPrice": 300000,
        "rating": 4.9,
        "sold": 3724,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 9,
        "name": "Sariwangi Tea Asli 48 X 25S X 1.85Gr",
        "category": "minuman",
        "img": "images/catalog/products/sariwangi-tea-asli-48-x-25s-x-1-85gr.jpg",
        "price": 245000,
        "originalPrice": 294000,
        "rating": 4.9,
        "sold": 3235,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Kopi & Teh"
    },
    {
        "id": 10,
        "name": "Oatside Oat Milk Coffee Caps",
        "category": "minuman",
        "img": "images/catalog/products/oatside-oat-milk-coffee-caps.jpg",
        "price": 180000,
        "originalPrice": 216000,
        "rating": 4.8,
        "sold": 3661,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Kopi & Teh"
    },
    {
        "id": 11,
        "name": "Oatside Oat Milk Chocolate Caps",
        "category": "minuman",
        "img": "images/catalog/products/oatside-oat-milk-chocolate-caps.jpg",
        "price": 165000,
        "originalPrice": null,
        "rating": 4.9,
        "sold": 444,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Susu & Olahannya"
    },
    {
        "id": 12,
        "name": "Oatside Oat Milk Barista Blend Caps",
        "category": "minuman",
        "img": "images/catalog/products/oatside-oat-milk-barista-blend-caps.jpg",
        "price": 195000,
        "originalPrice": 234000,
        "rating": 4.5,
        "sold": 2748,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Susu & Olahannya"
    },
    {
        "id": 13,
        "name": "Oatside Milk Plain Barista Straw 200MI",
        "category": "minuman",
        "img": "images/catalog/products/oatside-milk-plain-barista-straw-200mi.jpg",
        "price": 160000,
        "originalPrice": null,
        "rating": 4.8,
        "sold": 102,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Susu & Olahannya"
    },
    {
        "id": 14,
        "name": "Oatside Milk Chocolate Straw 200MI",
        "category": "minuman",
        "img": "images/catalog/products/oatside-milk-chocolate-straw-200mi.jpg",
        "price": 130000,
        "originalPrice": 156000,
        "rating": 4.8,
        "sold": 1302,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Susu & Olahannya"
    },
    {
        "id": 15,
        "name": "Nescafe Kopi Classic 10X(60X2Gr)",
        "category": "minuman",
        "img": "images/catalog/products/nescafe-kopi-classic-10x-60x2gr.jpg",
        "price": 140000,
        "originalPrice": 168000,
        "rating": 4.5,
        "sold": 4707,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Nestle",
        "cluster": "Kopi & Teh"
    },
    {
        "id": 16,
        "name": "Nescafe Kit Kat Drink Latte 220MI",
        "category": "minuman",
        "img": "images/catalog/products/Nescafe Kit Kat Drink Latte 220MI.jpg",
        "price": 60000,
        "originalPrice": 72000,
        "rating": 5.0,
        "sold": 3661,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Nestle",
        "cluster": "Kopi & Teh"
    },
    {
        "id": 18,
        "name": "Nescafe Coffee Ready To Drink Caramel Macchiato 220MI",
        "category": "minuman",
        "img": "images/catalog/products/nescafe-coffee-ready-to-drink-caramel-macchiato-220mi.jpg",
        "price": 205000,
        "originalPrice": 246000,
        "rating": 4.8,
        "sold": 4558,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Nestle",
        "cluster": "Kopi & Teh"
    },
    {
        "id": 19,
        "name": "Nescafe Coffee Ready To Drink Cappuccino 220MI",
        "category": "minuman",
        "img": "images/catalog/products/nescafe-coffee-ready-to-drink-cappuccino-220mi.jpg",
        "price": 50000,
        "originalPrice": 60000,
        "rating": 4.9,
        "sold": 236,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Nestle",
        "cluster": "Kopi & Teh"
    },
    {
        "id": 20,
        "name": "Nescafe Coffee Ready To Drink Black 220MI",
        "category": "minuman",
        "img": "images/catalog/products/nescafe-coffee-ready-to-drink-black-220mi.jpg",
        "price": 250000,
        "originalPrice": null,
        "rating": 4.9,
        "sold": 2413,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Nestle",
        "cluster": "Kopi & Teh"
    },
    {
        "id": 21,
        "name": "Milo Uht Milk 36X110MI",
        "category": "minuman",
        "img": "images/catalog/products/milo-uht-milk-36x110mi.jpg",
        "price": 250000,
        "originalPrice": null,
        "rating": 4.9,
        "sold": 3667,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Nestle",
        "cluster": "Susu & Olahannya"
    },
    {
        "id": 22,
        "name": "Downy 1000 Milky Touch Baby (Putih)",
        "category": "minuman",
        "img": "images/catalog/products/downy-1000-milky-touch-baby-putih.jpg",
        "price": 105000,
        "originalPrice": 126000,
        "rating": 4.6,
        "sold": 753,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Susu & Olahannya"
    },
    {
        "id": 23,
        "name": "Kopi Top Susu Gula Aren (3In1) 20 X 6 X 27 G",
        "category": "minuman",
        "img": "images/catalog/products/kopi-top-susu-gula-aren-3in1-20-x-6-x-27-g.jpg",
        "price": 165000,
        "originalPrice": 198000,
        "rating": 4.8,
        "sold": 2286,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Kopi & Teh"
    },
    {
        "id": 25,
        "name": "Kopi Top Gula Aren Pack 20 X 6 X 22 G",
        "category": "minuman",
        "img": "images/catalog/products/kopi-top-gula-aren-pack-20-x-6-x-22-g.jpg",
        "price": 80000,
        "originalPrice": null,
        "rating": 4.9,
        "sold": 3438,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Kopi & Teh"
    },
    {
        "id": 26,
        "name": "Kopi Top Capuccino 25Gr Bag 10",
        "category": "minuman",
        "img": "images/catalog/products/kopi-top-capuccino-25gr-bag-10.jpg",
        "price": 210000,
        "originalPrice": 252000,
        "rating": 4.5,
        "sold": 4257,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Kopi & Teh"
    },
    {
        "id": 27,
        "name": "Kopi Top Cappuccino Pack 20 X 6 X 25 Gr",
        "category": "minuman",
        "img": "images/catalog/products/kopi-top-cappuccino-pack-20-x-6-x-25-gr.jpg",
        "price": 90000,
        "originalPrice": 108000,
        "rating": 4.7,
        "sold": 2050,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Kopi & Teh"
    },
    {
        "id": 28,
        "name": "Kopi Neo Tiramisu 20G Pack20",
        "category": "minuman",
        "img": "images/catalog/products/kopi-neo-tiramisu-20g-pack20.jpg",
        "price": 205000,
        "originalPrice": 246000,
        "rating": 4.7,
        "sold": 2018,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Kopi & Teh"
    },
    {
        "id": 29,
        "name": "Kopi Neo Moccachino 20G Pack20",
        "category": "minuman",
        "img": "images/catalog/products/kopi-neo-moccachino-20g-pack20.jpg",
        "price": 160000,
        "originalPrice": 192000,
        "rating": 4.6,
        "sold": 1834,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Kopi & Teh"
    },
    {
        "id": 30,
        "name": "Kopi Kapal Api Spesial Mix Bag 6X20X23Gr",
        "category": "minuman",
        "img": "images/catalog/products/kopi-kapal-api-spesial-mix-bag-6x20x23gr.jpg",
        "price": 95000,
        "originalPrice": 114000,
        "rating": 4.5,
        "sold": 1558,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Kopi & Teh"
    },
    {
        "id": 31,
        "name": "Kopi Kapal Api Spesial 165Gr",
        "category": "minuman",
        "img": "images/catalog/products/kopi-kapal-api-spesial-165gr.jpg",
        "price": 250000,
        "originalPrice": null,
        "rating": 4.8,
        "sold": 1949,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Kopi & Teh"
    },
    {
        "id": 32,
        "name": "Kopi Abc Susu Bag",
        "category": "minuman",
        "img": "images/catalog/products/kopi-abc-susu-bag.jpg",
        "price": 90000,
        "originalPrice": null,
        "rating": 4.7,
        "sold": 2195,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "ABC",
        "cluster": "Kopi & Teh"
    },
    {
        "id": 34,
        "name": "Hello Panda Milk Vanilla 42Gr",
        "category": "minuman",
        "img": "images/catalog/products/hello-panda-milk-vanilla-42gr.jpg",
        "price": 115000,
        "originalPrice": null,
        "rating": 4.8,
        "sold": 880,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Susu & Olahannya"
    },
    {
        "id": 35,
        "name": "Fanta Strawberry Soft Drink (24 Cans X 250 MI)",
        "category": "minuman",
        "img": "images/catalog/products/fanta-strawberry-soft-drink-24-cans-x-250-mi.jpg",
        "price": 50000,
        "originalPrice": 60000,
        "rating": 4.9,
        "sold": 3741,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 36,
        "name": "Fanta Strawberry Soft Drink (12 Bottles X 250 MI)",
        "category": "minuman",
        "img": "images/catalog/products/fanta-strawberry-soft-drink-12-bottles-x-250-mi.jpg",
        "price": 65000,
        "originalPrice": null,
        "rating": 4.5,
        "sold": 1379,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 37,
        "name": "Chocolatos Chocolate Drink 27Gra",
        "category": "minuman",
        "img": "images/catalog/products/chocolatos-chocolate-drink-27gra.jpg",
        "price": 240000,
        "originalPrice": 288000,
        "rating": 4.9,
        "sold": 821,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Mayora",
        "cluster": "Biskuit & Wafer"
    },
    {
        "id": 38,
        "name": "Chocolatos Matcha Drink 24Gr",
        "category": "minuman",
        "img": "images/catalog/products/chocolatos-matcha-drink-24gr.jpg",
        "price": 100000,
        "originalPrice": 120000,
        "rating": 4.9,
        "sold": 3099,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Mayora",
        "cluster": "Biskuit & Wafer"
    },
    {
        "id": 39,
        "name": "Pikopi 3ln1 Coffeemix Bag",
        "category": "minuman",
        "img": "images/catalog/products/pikopi-3ln1-coffeemix-bag.jpg",
        "price": 185000,
        "originalPrice": 222000,
        "rating": 4.9,
        "sold": 4151,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Kopi & Teh"
    },
    {
        "id": 40,
        "name": "Coca Cola Soft Drink (12 Bottles X 250 MI)",
        "category": "minuman",
        "img": "images/catalog/products/coca-cola-soft-drink-12-bottles-x-250-mi.jpg",
        "price": 100000,
        "originalPrice": 120000,
        "rating": 4.7,
        "sold": 1876,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 41,
        "name": "Coca Cola Soft Drink (24 Cans X 250 MI)",
        "category": "minuman",
        "img": "images/catalog/products/coca-cola-soft-drink-24-cans-x-250-mi.jpg",
        "price": 100000,
        "originalPrice": 120000,
        "rating": 4.5,
        "sold": 1056,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 42,
        "name": "Coca Cola Zero Soft Drink (24 Cans X 250 MI)",
        "category": "minuman",
        "img": "images/catalog/products/coca-cola-zero-soft-drink-24-cans-x-250-mi.jpg",
        "price": 220000,
        "originalPrice": null,
        "rating": 4.6,
        "sold": 3248,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 43,
        "name": "Zoda Groovy Air Soda 250MI",
        "category": "minuman",
        "img": "images/catalog/products/zoda-groovy-air-soda-250mi.jpg",
        "price": 160000,
        "originalPrice": null,
        "rating": 5.0,
        "sold": 184,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 44,
        "name": "Ultra Milk Uht Taro 200MI",
        "category": "minuman",
        "img": "images/catalog/products/ultra-milk-uht-taro-200mi.jpg",
        "price": 195000,
        "originalPrice": 234000,
        "rating": 4.7,
        "sold": 3850,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Ultra Jaya",
        "cluster": "Susu & Olahannya"
    },
    {
        "id": 45,
        "name": "Ultra Milk Uht Strawberry 200MI",
        "category": "minuman",
        "img": "images/catalog/products/ultra-milk-uht-strawberry-200mi.jpg",
        "price": 225000,
        "originalPrice": 270000,
        "rating": 4.8,
        "sold": 2613,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Ultra Jaya",
        "cluster": "Susu & Olahannya"
    },
    {
        "id": 46,
        "name": "Ultra Milk Uht Chocolate 200MI",
        "category": "minuman",
        "img": "images/catalog/products/ultra-milk-uht-chocolate-200mi.jpg",
        "price": 245000,
        "originalPrice": 294000,
        "rating": 4.7,
        "sold": 1767,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Ultra Jaya",
        "cluster": "Susu & Olahannya"
    },
    {
        "id": 47,
        "name": "Milo Active Original Go 220MI",
        "category": "minuman",
        "img": "images/catalog/products/milo-active-original-go-220mi.jpg",
        "price": 50000,
        "originalPrice": 60000,
        "rating": 4.6,
        "sold": 3861,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Nestle",
        "cluster": "Susu & Olahannya"
    },
    {
        "id": 48,
        "name": "Kapal Api Spesial Mix Bag 12x10x24gr",
        "category": "harian",
        "img": "images/catalog/products/kapal-api-spesial-mix-bag-12x10x24gr.jpg",
        "price": 190000,
        "originalPrice": null,
        "rating": 4.5,
        "sold": 4471,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Kopi & Teh"
    },
    {
        "id": 49,
        "name": "YOU C 1000 Orange Water 500ML",
        "category": "minuman",
        "img": "images/catalog/products/you-c-1000-orange-water-500ml.jpg",
        "price": 205000,
        "originalPrice": 246000,
        "rating": 4.6,
        "sold": 2731,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 50,
        "name": "Milo Cube Pouch 20X25X2.7Gr",
        "category": "minuman",
        "img": "images/catalog/products/milo-cube-pouch-20x25x2-7gr.jpg",
        "price": 230000,
        "originalPrice": null,
        "rating": 4.6,
        "sold": 487,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Nestle",
        "cluster": "Susu & Olahannya"
    },
    {
        "id": 51,
        "name": "MARJAN SIRUP LYCHEE 460ML",
        "category": "minuman",
        "img": "images/catalog/products/marjan-sirup-lychee-460ml.jpg",
        "price": 180000,
        "originalPrice": null,
        "rating": 4.6,
        "sold": 2808,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Marjan",
        "cluster": "Lainnya"
    },
    {
        "id": 52,
        "name": "Milo Actigen E Uht180MI",
        "category": "minuman",
        "img": "images/catalog/products/Milo Actigen E Uht180MI.jpg",
        "price": 165000,
        "originalPrice": null,
        "rating": 4.9,
        "sold": 144,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Nestle",
        "cluster": "Susu & Olahannya"
    },
    {
        "id": 53,
        "name": "NESCAFE ICE COFFEE ORIGINAL 24x220ML",
        "category": "minuman",
        "img": "images/catalog/products/nescafe-ice-coffee-original-24x220ml.jpg",
        "price": 140000,
        "originalPrice": 168000,
        "rating": 4.6,
        "sold": 3197,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Nestle",
        "cluster": "Kopi & Teh"
    },
    {
        "id": 54,
        "name": "MARJAN SIRUP ORANGE 460ML",
        "category": "minuman",
        "img": "images/catalog/products/marjan-sirup-orange-460ml.jpg",
        "price": 195000,
        "originalPrice": null,
        "rating": 4.6,
        "sold": 1057,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Marjan",
        "cluster": "Lainnya"
    },
    {
        "id": 55,
        "name": "Khonguan Kogen Wafer Stick Strawberry",
        "category": "makanan",
        "img": "images/catalog/products/khonguan-kogen-wafer-stick-strawberry.jpg",
        "price": 235000,
        "originalPrice": null,
        "rating": 4.8,
        "sold": 3269,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Biskuit & Wafer"
    },
    {
        "id": 56,
        "name": "DANCOW FORTIGO CHOCOLATE SCHT 10x38gr",
        "category": "minuman",
        "img": "images/catalog/products/dancow-fortigo-chocolate-scht-10x38gr.jpg",
        "price": 110000,
        "originalPrice": null,
        "rating": 5.0,
        "sold": 4154,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Nestle",
        "cluster": "Susu & Olahannya"
    },
    {
        "id": 57,
        "name": "POCARI ION WATER PET 900ML",
        "category": "minuman",
        "img": "images/catalog/products/POCARI ION WATER PET 900ML.jpg",
        "price": 125000,
        "originalPrice": null,
        "rating": 4.7,
        "sold": 31,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Otsuka",
        "cluster": "Lainnya"
    },
    {
        "id": 58,
        "name": "POCARI ION WATER 24x350ML",
        "category": "minuman",
        "img": "images/catalog/products/POCARI ION WATER 24x350ML.jpg",
        "price": 75000,
        "originalPrice": 90000,
        "rating": 4.8,
        "sold": 1109,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Otsuka",
        "cluster": "Lainnya"
    },
    {
        "id": 59,
        "name": "POCARI ION WATER 6x2000ML",
        "category": "minuman",
        "img": "images/catalog/products/pocari-ion-water-6x2000ml.jpg",
        "price": 65000,
        "originalPrice": 78000,
        "rating": 4.8,
        "sold": 1928,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Otsuka",
        "cluster": "Lainnya"
    },
    {
        "id": 60,
        "name": "POCARI ION WATER 24x500ML",
        "category": "minuman",
        "img": "images/catalog/products/pocari-ion-water-24x500ml.jpg",
        "price": 135000,
        "originalPrice": null,
        "rating": 4.8,
        "sold": 4714,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Otsuka",
        "cluster": "Lainnya"
    },
    {
        "id": 61,
        "name": "NESCAFE Caramel Macchiato 24x220ml",
        "category": "minuman",
        "img": "images/catalog/products/nescafe-caramel-macchiato-24x220ml.jpg",
        "price": 195000,
        "originalPrice": null,
        "rating": 4.8,
        "sold": 3330,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Nestle",
        "cluster": "Kopi & Teh"
    },
    {
        "id": 62,
        "name": "Nescafe Ice Coffee Mocha 240ml",
        "category": "minuman",
        "img": "images/catalog/products/nescafe-ice-coffee-mocha-240ml.jpg",
        "price": 75000,
        "originalPrice": 90000,
        "rating": 4.7,
        "sold": 4425,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Nestle",
        "cluster": "Kopi & Teh"
    },
    {
        "id": 63,
        "name": "CHILKID MADU 780GR",
        "category": "harian",
        "img": "images/catalog/products/chilkid-madu-780gr.jpg",
        "price": 120000,
        "originalPrice": 144000,
        "rating": 4.6,
        "sold": 4778,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Nestle",
        "cluster": "Lainnya"
    },
    {
        "id": 64,
        "name": "CHILKID VANILA 780GR",
        "category": "harian",
        "img": "images/catalog/products/chilkid-vanila-780gr.jpg",
        "price": 235000,
        "originalPrice": null,
        "rating": 4.8,
        "sold": 4372,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Nestle",
        "cluster": "Lainnya"
    },
    {
        "id": 65,
        "name": "Milo Activ-Go Healthy Drink Can 220 ml",
        "category": "minuman",
        "img": "images/catalog/products/milo-activ-go-healthy-drink-can-220-ml.jpg",
        "price": 175000,
        "originalPrice": null,
        "rating": 5.0,
        "sold": 4344,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Nestle",
        "cluster": "Susu & Olahannya"
    },
    {
        "id": 66,
        "name": "Nescafe Ice Coffee Latte Can 220 ml",
        "category": "minuman",
        "img": "images/catalog/products/nescafe-ice-coffee-latte-can-220-ml.jpg",
        "price": 200000,
        "originalPrice": 240000,
        "rating": 4.7,
        "sold": 1373,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Nestle",
        "cluster": "Kopi & Teh"
    },
    {
        "id": 67,
        "name": "Coca-Cola 1500 ML (1.5 LITER)",
        "category": "minuman",
        "img": "images/catalog/products/coca-cola-1500-ml-1-5-liter.jpg",
        "price": 200000,
        "originalPrice": null,
        "rating": 4.8,
        "sold": 2162,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 69,
        "name": "Nu Green Tea Royal Jasmine 450MI",
        "category": "minuman",
        "img": "images/catalog/products/nu-green-tea-royal-jasmine-450mi.jpg",
        "price": 150000,
        "originalPrice": 180000,
        "rating": 5.0,
        "sold": 2522,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Kopi & Teh"
    },
    {
        "id": 70,
        "name": "Nu Green Tea Honey 450MI",
        "category": "minuman",
        "img": "images/catalog/products/Nu Green Tea Honey 450MI.jpg",
        "price": 220000,
        "originalPrice": 264000,
        "rating": 4.6,
        "sold": 2728,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Kopi & Teh"
    },
    {
        "id": 71,
        "name": "Dan cow instant fortigro sachet 27 gr x 16 x 10 pcs",
        "category": "harian",
        "img": "images/catalog/products/dan-cow-instant-fortigro-sachet-27-gr-x-16-x-10-pcs.jpg",
        "price": 210000,
        "originalPrice": 252000,
        "rating": 4.6,
        "sold": 3336,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 72,
        "name": "FRISIAN FLAG VANILLA 120x37gr",
        "category": "harian",
        "img": "images/catalog/products/frisian-flag-vanilla-120x37gr.jpg",
        "price": 190000,
        "originalPrice": null,
        "rating": 4.5,
        "sold": 2752,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Susu & Olahannya"
    },
    {
        "id": 73,
        "name": "NESCAF\u00c9 CLASSIC KOPI INSTANT SACHET 17.5GR",
        "category": "minuman",
        "img": "images/catalog/products/nescaf-classic-kopi-instant-sachet-17-5gr.jpg",
        "price": 240000,
        "originalPrice": 288000,
        "rating": 4.9,
        "sold": 3935,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Kopi & Teh"
    },
    {
        "id": 74,
        "name": "SariWangi Teh Celup Asli TB 50",
        "category": "minuman",
        "img": "images/catalog/products/sariwangi-teh-celup-asli-tb-50.jpg",
        "price": 180000,
        "originalPrice": 216000,
        "rating": 4.7,
        "sold": 4835,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Kopi & Teh"
    },
    {
        "id": 75,
        "name": "MARJAN SIRUP COCOPANDAN 460ML",
        "category": "minuman",
        "img": "images/catalog/products/marjan-sirup-cocopandan-460ml.jpg",
        "price": 115000,
        "originalPrice": 138000,
        "rating": 4.9,
        "sold": 4184,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Marjan",
        "cluster": "Lainnya"
    },
    {
        "id": 76,
        "name": "MARJAN SIRUP MELON 460ML",
        "category": "minuman",
        "img": "images/catalog/products/marjan-sirup-melon-460ml.jpg",
        "price": 150000,
        "originalPrice": 180000,
        "rating": 4.9,
        "sold": 3621,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Marjan",
        "cluster": "Lainnya"
    },
    {
        "id": 77,
        "name": "FRISIAN FLAG SACHET CHOCOLATE 120x37gr",
        "category": "minuman",
        "img": "images/catalog/products/frisian-flag-sachet-chocolate-120x37gr.jpg",
        "price": 55000,
        "originalPrice": 66000,
        "rating": 4.7,
        "sold": 756,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Susu & Olahannya"
    },
    {
        "id": 78,
        "name": "MARJAN SIRUP SIRSAK 460ML",
        "category": "minuman",
        "img": "images/catalog/products/marjan-sirup-sirsak-460ml.jpg",
        "price": 50000,
        "originalPrice": null,
        "rating": 4.9,
        "sold": 1331,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Marjan",
        "cluster": "Lainnya"
    },
    {
        "id": 79,
        "name": "Nestle Combo Pack Milo Ball 32Gr",
        "category": "minuman",
        "img": "images/catalog/products/nestle-combo-pack-milo-ball-32gr.jpg",
        "price": 175000,
        "originalPrice": null,
        "rating": 4.8,
        "sold": 3410,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Nestle",
        "cluster": "Susu & Olahannya"
    },
    {
        "id": 80,
        "name": "Rexona Women Powder Dry Stick Deodorant 40 ml",
        "category": "harian",
        "img": "images/catalog/products/rexona-women-powder-dry-stick-deodorant-40-ml.jpg",
        "price": 110000,
        "originalPrice": 132000,
        "rating": 4.7,
        "sold": 4017,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Unilever",
        "cluster": "Perawatan Tubuh"
    },
    {
        "id": 81,
        "name": "Rexona Free Spirit (Antiperspirant Deodoran Roll On) 50ml",
        "category": "harian",
        "img": "images/catalog/products/rexona-free-spirit-antiperspirant-deodoran-roll-on-50ml.jpg",
        "price": 65000,
        "originalPrice": 78000,
        "rating": 4.6,
        "sold": 2733,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Unilever",
        "cluster": "Perawatan Tubuh"
    },
    {
        "id": 82,
        "name": "REXONA SHOWER CLEAN 50ML",
        "category": "harian",
        "img": "images/catalog/products/rexona-shower-clean-50ml.jpg",
        "price": 65000,
        "originalPrice": 78000,
        "rating": 4.7,
        "sold": 1190,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Unilever",
        "cluster": "Perawatan Tubuh"
    },
    {
        "id": 83,
        "name": "Rexona Women Whitening Spray Anti-perspirant 45ml",
        "category": "harian",
        "img": "images/catalog/products/rexona-women-whitening-spray-anti-perspirant-45ml.jpg",
        "price": 120000,
        "originalPrice": null,
        "rating": 4.6,
        "sold": 1136,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Unilever",
        "cluster": "Perawatan Tubuh"
    },
    {
        "id": 84,
        "name": "Larutan Cap Kaki 3 Strawberry 320MI",
        "category": "harian",
        "img": "images/catalog/products/larutan-cap-kaki-3-strawberry-320mi.jpg",
        "price": 170000,
        "originalPrice": 204000,
        "rating": 4.8,
        "sold": 4847,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 85,
        "name": "Lays Seaweed 64Gr",
        "category": "makanan",
        "img": "images/catalog/products/Lays Seaweed 64Gr.jpg",
        "price": 85000,
        "originalPrice": null,
        "rating": 4.8,
        "sold": 3431,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Indofood",
        "cluster": "Lainnya"
    },
    {
        "id": 86,
        "name": "Doritos Snack Jagung Bakar (Roasted Corn) 120Gr",
        "category": "makanan",
        "img": "images/catalog/products/Doritos Snack Jagung Bakar (Roasted Corn) 120Gr.jpg",
        "price": 185000,
        "originalPrice": 222000,
        "rating": 4.9,
        "sold": 4691,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 87,
        "name": "Lays Wavy Beef Bbq 64Gr",
        "category": "makanan",
        "img": "images/catalog/products/Lays Wavy Beef Bbq 64Gr.jpg",
        "price": 225000,
        "originalPrice": 270000,
        "rating": 5.0,
        "sold": 2964,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Indofood",
        "cluster": "Lainnya"
    },
    {
        "id": 88,
        "name": "Wow Spaghetti Aglio Olio 75G",
        "category": "makanan",
        "img": "images/catalog/products/Wow Spaghetti Aglio Olio 75G.jpg",
        "price": 60000,
        "originalPrice": 72000,
        "rating": 4.6,
        "sold": 2177,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Mie Instan"
    },
    {
        "id": 89,
        "name": "Nestle Combo Pack Honey Star 48Pack",
        "category": "harian",
        "img": "images/catalog/products/Nestle Combo Pack Honey Star 48Pack.jpg",
        "price": 250000,
        "originalPrice": 300000,
        "rating": 4.9,
        "sold": 5000,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Nestle",
        "cluster": "Lainnya"
    },
    {
        "id": 90,
        "name": "Calbee Wings Snack Guribee Layers Seaweed 30X68Gr",
        "category": "makanan",
        "img": "images/catalog/products/Calbee Wings Snack Guribee Layers Seaweed 30X68Gr.jpg",
        "price": 160000,
        "originalPrice": null,
        "rating": 4.7,
        "sold": 2678,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 91,
        "name": "Doritos Snack Sambal Salsa (Salsa Chili) 120Gr",
        "category": "makanan",
        "img": "images/catalog/products/Doritos Snack Sambal Salsa (Salsa Chili) 120Gr.jpg",
        "price": 80000,
        "originalPrice": null,
        "rating": 4.5,
        "sold": 3524,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 92,
        "name": "Abc Sambal Extra Pedas 335MI",
        "category": "harian",
        "img": "images/catalog/products/Abc Sambal Extra Pedas 335MI.jpg",
        "price": 190000,
        "originalPrice": 228000,
        "rating": 4.6,
        "sold": 916,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "ABC",
        "cluster": "Lainnya"
    },
    {
        "id": 93,
        "name": "Oatside Chocolate 1000MI",
        "category": "minuman",
        "img": "images/catalog/products/Oatside Chocolate 1000MI.jpg",
        "price": 215000,
        "originalPrice": 258000,
        "rating": 4.9,
        "sold": 3715,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 94,
        "name": "Oreo Sandwich Blueberry 110.4Gr",
        "category": "makanan",
        "img": "images/catalog/products/Oreo Sandwich Blueberry 110.4Gr.jpg",
        "price": 115000,
        "originalPrice": null,
        "rating": 4.7,
        "sold": 796,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Mondelez",
        "cluster": "Biskuit & Wafer"
    },
    {
        "id": 95,
        "name": "Oreo Sandwich Choco 110.4Gr",
        "category": "makanan",
        "img": "images/catalog/products/Oreo Sandwich Choco 110.4Gr.jpg",
        "price": 165000,
        "originalPrice": 198000,
        "rating": 4.7,
        "sold": 2928,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Mondelez",
        "cluster": "Biskuit & Wafer"
    },
    {
        "id": 96,
        "name": "Abc Extra Pedas Botol 335MI",
        "category": "harian",
        "img": "images/catalog/products/Abc Extra Pedas Botol 335MI.jpg",
        "price": 190000,
        "originalPrice": 228000,
        "rating": 5.0,
        "sold": 3174,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "ABC",
        "cluster": "Lainnya"
    },
    {
        "id": 97,
        "name": "Abc Kecap 130MI",
        "category": "harian",
        "img": "images/catalog/products/Abc Kecap 130MI.jpg",
        "price": 170000,
        "originalPrice": 204000,
        "rating": 4.7,
        "sold": 107,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "ABC",
        "cluster": "Lainnya"
    },
    {
        "id": 98,
        "name": "Abc Kecap 275MI",
        "category": "harian",
        "img": "images/catalog/products/Abc Kecap 275MI.jpg",
        "price": 135000,
        "originalPrice": 162000,
        "rating": 4.6,
        "sold": 1724,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "ABC",
        "cluster": "Lainnya"
    },
    {
        "id": 99,
        "name": "Abc Kecap 62Gr",
        "category": "harian",
        "img": "images/catalog/products/Abc Kecap 62Gr.jpg",
        "price": 145000,
        "originalPrice": 174000,
        "rating": 4.5,
        "sold": 2317,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "ABC",
        "cluster": "Lainnya"
    },
    {
        "id": 100,
        "name": "Abc Kecap Manis Jerigen 5Liter",
        "category": "harian",
        "img": "images/catalog/products/Abc Kecap Manis Jerigen 5Liter.jpg",
        "price": 65000,
        "originalPrice": null,
        "rating": 4.8,
        "sold": 3204,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "ABC",
        "cluster": "Lainnya"
    },
    {
        "id": 101,
        "name": "Abc Kecap Pet 600MI",
        "category": "harian",
        "img": "images/catalog/products/Abc Kecap Pet 600MI.jpg",
        "price": 240000,
        "originalPrice": null,
        "rating": 4.7,
        "sold": 371,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "ABC",
        "cluster": "Lainnya"
    },
    {
        "id": 102,
        "name": "Abc Sambal 65Gr",
        "category": "harian",
        "img": "images/catalog/products/Abc Sambal 65Gr.jpg",
        "price": 230000,
        "originalPrice": null,
        "rating": 5.0,
        "sold": 4673,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "ABC",
        "cluster": "Lainnya"
    },
    {
        "id": 103,
        "name": "Abc Sambal Asli 335MI",
        "category": "harian",
        "img": "images/catalog/products/Abc Sambal Asli 335MI.jpg",
        "price": 160000,
        "originalPrice": 192000,
        "rating": 5.0,
        "sold": 2232,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "ABC",
        "cluster": "Lainnya"
    },
    {
        "id": 104,
        "name": "Abc Sambal Asli 380Gr",
        "category": "harian",
        "img": "images/catalog/products/Abc Sambal Asli 380Gr.jpg",
        "price": 170000,
        "originalPrice": null,
        "rating": 4.8,
        "sold": 873,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "ABC",
        "cluster": "Lainnya"
    },
    {
        "id": 105,
        "name": "Abc Sambal Botol 130MI",
        "category": "harian",
        "img": "images/catalog/products/Abc Sambal Botol 130MI.jpg",
        "price": 125000,
        "originalPrice": 150000,
        "rating": 4.9,
        "sold": 4619,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "ABC",
        "cluster": "Lainnya"
    },
    {
        "id": 106,
        "name": "Abc Sambal Botol 270MI",
        "category": "harian",
        "img": "images/catalog/products/Abc Sambal Botol 270MI.jpg",
        "price": 80000,
        "originalPrice": 96000,
        "rating": 4.9,
        "sold": 4452,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "ABC",
        "cluster": "Lainnya"
    },
    {
        "id": 107,
        "name": "Abc Sambal Extra Pedas 65Gr",
        "category": "harian",
        "img": "images/catalog/products/Abc Sambal Extra Pedas 65Gr.jpg",
        "price": 105000,
        "originalPrice": 126000,
        "rating": 4.7,
        "sold": 1304,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "ABC",
        "cluster": "Lainnya"
    },
    {
        "id": 109,
        "name": "Abc Sambal Sc Extra Pedas",
        "category": "harian",
        "img": "images/catalog/products/Abc Sambal Sc Extra Pedas.jpg",
        "price": 185000,
        "originalPrice": 222000,
        "rating": 4.7,
        "sold": 1890,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "ABC",
        "cluster": "Lainnya"
    },
    {
        "id": 110,
        "name": "Abc Sambal Sc Pk",
        "category": "harian",
        "img": "images/catalog/products/Abc Sambal Sc Pk.jpg",
        "price": 50000,
        "originalPrice": 60000,
        "rating": 4.7,
        "sold": 2939,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "ABC",
        "cluster": "Lainnya"
    },
    {
        "id": 111,
        "name": "Abc Sambal St Extra Pedas",
        "category": "harian",
        "img": "images/catalog/products/Abc Sambal St Extra Pedas.jpg",
        "price": 190000,
        "originalPrice": null,
        "rating": 4.6,
        "sold": 4506,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "ABC",
        "cluster": "Lainnya"
    },
    {
        "id": 112,
        "name": "Abc Sambal St Pk",
        "category": "harian",
        "img": "images/catalog/products/Abc Sambal St Pk.jpg",
        "price": 140000,
        "originalPrice": null,
        "rating": 4.6,
        "sold": 4364,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "ABC",
        "cluster": "Lainnya"
    },
    {
        "id": 113,
        "name": "Abc Sambal Terasi Sc",
        "category": "harian",
        "img": "images/catalog/products/Abc Sambal Terasi Sc.jpg",
        "price": 140000,
        "originalPrice": 168000,
        "rating": 4.6,
        "sold": 1559,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "ABC",
        "cluster": "Lainnya"
    },
    {
        "id": 114,
        "name": "Abc Sambal Tomat 275MI",
        "category": "harian",
        "img": "images/catalog/products/Abc Sambal Tomat 275MI.jpg",
        "price": 200000,
        "originalPrice": 240000,
        "rating": 4.6,
        "sold": 4570,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "ABC",
        "cluster": "Lainnya"
    },
    {
        "id": 115,
        "name": "Abc Saus Tomat 335Gr",
        "category": "harian",
        "img": "images/catalog/products/Abc Saus Tomat 335Gr.jpg",
        "price": 225000,
        "originalPrice": null,
        "rating": 4.8,
        "sold": 4904,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "ABC",
        "cluster": "Lainnya"
    },
    {
        "id": 116,
        "name": "Abc Terasi 3.8Gr",
        "category": "harian",
        "img": "images/catalog/products/Abc Terasi 3.8Gr.jpg",
        "price": 90000,
        "originalPrice": 108000,
        "rating": 4.6,
        "sold": 368,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "ABC",
        "cluster": "Lainnya"
    },
    {
        "id": 117,
        "name": "Bejo 12X30Pack",
        "category": "harian",
        "img": "images/catalog/products/Bejo 12X30Pack.jpg",
        "price": 125000,
        "originalPrice": null,
        "rating": 4.9,
        "sold": 185,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 118,
        "name": "Big Cola 6X3000MI",
        "category": "minuman",
        "img": "images/catalog/products/Big Cola 6X3000MI.jpg",
        "price": 245000,
        "originalPrice": null,
        "rating": 4.9,
        "sold": 4039,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 119,
        "name": "Big Lemon Flavor 6X3000MI",
        "category": "harian",
        "img": "images/catalog/products/Big Lemon Flavor 6X3000MI.jpg",
        "price": 190000,
        "originalPrice": null,
        "rating": 4.6,
        "sold": 1276,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 120,
        "name": "Big Strawberry Flavor 6X3000MI",
        "category": "harian",
        "img": "images/catalog/products/Big Strawberry Flavor 6X3000MI.jpg",
        "price": 250000,
        "originalPrice": null,
        "rating": 4.8,
        "sold": 4620,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 121,
        "name": "Blue Band Serbaguna 200G",
        "category": "harian",
        "img": "images/catalog/products/Blue Band Serbaguna 200G.jpg",
        "price": 85000,
        "originalPrice": null,
        "rating": 5.0,
        "sold": 4511,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 122,
        "name": "Bye Bye Fever Baby",
        "category": "harian",
        "img": "images/catalog/products/Bye Bye Fever Baby.jpg",
        "price": 110000,
        "originalPrice": null,
        "rating": 4.9,
        "sold": 846,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 123,
        "name": "Bye Bye Fever Kids",
        "category": "harian",
        "img": "images/catalog/products/Bye Bye Fever Kids.jpg",
        "price": 155000,
        "originalPrice": 186000,
        "rating": 4.6,
        "sold": 2287,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 124,
        "name": "Calbee Wings Snack Guribee Layers Cheese 30X65Gr",
        "category": "makanan",
        "img": "images/catalog/products/Calbee Wings Snack Guribee Layers Cheese 30X65Gr.jpg",
        "price": 165000,
        "originalPrice": 198000,
        "rating": 4.6,
        "sold": 4001,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 125,
        "name": "Casablanca Body Mist Abu Abu 100MI",
        "category": "harian",
        "img": "images/catalog/products/Casablanca Body Mist Abu Abu 100MI.jpg",
        "price": 65000,
        "originalPrice": null,
        "rating": 4.9,
        "sold": 3366,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 126,
        "name": "Casablanca Body Mist Biru 100MI",
        "category": "harian",
        "img": "images/catalog/products/Casablanca Body Mist Biru 100MI.jpg",
        "price": 120000,
        "originalPrice": null,
        "rating": 4.8,
        "sold": 2467,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 127,
        "name": "Casablanca Body Mist Biru Tua 100MI",
        "category": "harian",
        "img": "images/catalog/products/Casablanca Body Mist Biru Tua 100MI.jpg",
        "price": 90000,
        "originalPrice": 108000,
        "rating": 4.9,
        "sold": 2993,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 128,
        "name": "Casablanca Body Mist Hijau Tua 100MI",
        "category": "harian",
        "img": "images/catalog/products/Casablanca Body Mist Hijau Tua 100MI.jpg",
        "price": 150000,
        "originalPrice": 180000,
        "rating": 4.9,
        "sold": 273,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 129,
        "name": "Casablanca Body Mist Kuning 100MI",
        "category": "harian",
        "img": "images/catalog/products/Casablanca Body Mist Kuning 100MI.jpg",
        "price": 95000,
        "originalPrice": null,
        "rating": 4.6,
        "sold": 4646,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 130,
        "name": "Casablanca Body Mist Merah 100MI",
        "category": "harian",
        "img": "images/catalog/products/Casablanca Body Mist Merah 100MI.jpg",
        "price": 190000,
        "originalPrice": null,
        "rating": 4.7,
        "sold": 2821,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 131,
        "name": "Casablanca Body Mist Orange 100MI",
        "category": "harian",
        "img": "images/catalog/products/Casablanca Body Mist Orange 100MI.jpg",
        "price": 200000,
        "originalPrice": 240000,
        "rating": 4.9,
        "sold": 1885,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 132,
        "name": "Casablanca Body Mist Pink 100MI",
        "category": "harian",
        "img": "images/catalog/products/Casablanca Body Mist Pink 100MI.jpg",
        "price": 125000,
        "originalPrice": 150000,
        "rating": 4.9,
        "sold": 3429,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 133,
        "name": "Casablanca Body Mist Ungu 100MI",
        "category": "harian",
        "img": "images/catalog/products/Casablanca Body Mist Ungu 100MI.jpg",
        "price": 140000,
        "originalPrice": 168000,
        "rating": 4.7,
        "sold": 3457,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 134,
        "name": "Casablanca Halal Mist Night 100MI",
        "category": "harian",
        "img": "images/catalog/products/Casablanca Halal Mist Night 100MI.jpg",
        "price": 230000,
        "originalPrice": null,
        "rating": 4.8,
        "sold": 2680,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 145,
        "name": "Cincau Cap Panda 310MI",
        "category": "makanan",
        "img": "images/catalog/products/Cincau Cap Panda 310MI.jpg",
        "price": 80000,
        "originalPrice": 96000,
        "rating": 4.8,
        "sold": 3695,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 153,
        "name": "Doritos Snack Sambal Salsa (Salsa Chili) 55Gr",
        "category": "makanan",
        "img": "images/catalog/products/Doritos Snack Sambal Salsa (Salsa Chili) 55Gr.jpg",
        "price": 195000,
        "originalPrice": null,
        "rating": 4.8,
        "sold": 118,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 154,
        "name": "Dua Kelinci Tos Tos Korean Barbeque 140Gr",
        "category": "harian",
        "img": "images/catalog/products/Dua Kelinci Tos Tos Korean Barbeque 140Gr.jpg",
        "price": 115000,
        "originalPrice": 138000,
        "rating": 4.7,
        "sold": 1807,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 155,
        "name": "Dua Kelinci Tos Tos Nacho Cheese 140Gr",
        "category": "harian",
        "img": "images/catalog/products/Dua Kelinci Tos Tos Nacho Cheese 140Gr.jpg",
        "price": 215000,
        "originalPrice": null,
        "rating": 4.6,
        "sold": 1271,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 156,
        "name": "Dua Kelinci Tos Tos Roasted Corn 140Gr",
        "category": "harian",
        "img": "images/catalog/products/Dua Kelinci Tos Tos Roasted Corn 140Gr.jpg",
        "price": 245000,
        "originalPrice": null,
        "rating": 5.0,
        "sold": 1707,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 167,
        "name": "Esk Cg Amusing Vanilla 100MI Btl",
        "category": "harian",
        "img": "images/catalog/products/Esk Cg Amusing Vanilla 100MI Btl.jpg",
        "price": 70000,
        "originalPrice": null,
        "rating": 4.9,
        "sold": 3126,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 168,
        "name": "Esk Cg Glamorous Red 100MI Btl",
        "category": "harian",
        "img": "images/catalog/products/Esk Cg Glamorous Red 100MI Btl.jpg",
        "price": 230000,
        "originalPrice": null,
        "rating": 4.9,
        "sold": 999,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 169,
        "name": "Esk Kids Shm Cinder Btl 36X200MI",
        "category": "harian",
        "img": "images/catalog/products/Esk Kids Shm Cinder Btl 36X200MI.jpg",
        "price": 105000,
        "originalPrice": null,
        "rating": 5.0,
        "sold": 3216,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 170,
        "name": "Esk Kids Shm Minnie Btl 36X200MI",
        "category": "harian",
        "img": "images/catalog/products/Esk Kids Shm Minnie Btl 36X200MI.jpg",
        "price": 170000,
        "originalPrice": 204000,
        "rating": 4.5,
        "sold": 853,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 171,
        "name": "Eskulin Hjb B.Mist Pink Blossom Btl 36X125MI",
        "category": "harian",
        "img": "images/catalog/products/Eskulin Hjb B.Mist Pink Blossom Btl 36X125MI.jpg",
        "price": 180000,
        "originalPrice": 216000,
        "rating": 4.8,
        "sold": 2816,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 172,
        "name": "Far N Lovely",
        "category": "harian",
        "img": "images/catalog/products/Far N Lovely.jpg",
        "price": 155000,
        "originalPrice": 186000,
        "rating": 4.8,
        "sold": 882,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 173,
        "name": "Filma Margarin 200Gr",
        "category": "harian",
        "img": "images/catalog/products/Filma Margarin 200Gr.jpg",
        "price": 170000,
        "originalPrice": 204000,
        "rating": 5.0,
        "sold": 1695,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 174,
        "name": "Finna Uleg Sauce Green Chili 190Gr",
        "category": "harian",
        "img": "images/catalog/products/Finna Uleg Sauce Green Chili 190Gr.jpg",
        "price": 65000,
        "originalPrice": 78000,
        "rating": 4.7,
        "sold": 3343,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 175,
        "name": "Finna Uleg Sauce Kemiri (Candlenut) Flavour 180Gr",
        "category": "harian",
        "img": "images/catalog/products/Finna Uleg Sauce Kemiri (Candlenut) Flavour 180Gr.jpg",
        "price": 205000,
        "originalPrice": 246000,
        "rating": 4.9,
        "sold": 1159,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 176,
        "name": "Finna Uleg Sauce Rawit 190Gr",
        "category": "harian",
        "img": "images/catalog/products/Finna Uleg Sauce Rawit 190Gr.jpg",
        "price": 205000,
        "originalPrice": null,
        "rating": 4.6,
        "sold": 1636,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 177,
        "name": "Forvita Margarine 200Gr",
        "category": "harian",
        "img": "images/catalog/products/Forvita Margarine 200Gr.jpg",
        "price": 105000,
        "originalPrice": 126000,
        "rating": 4.9,
        "sold": 2134,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 178,
        "name": "Freshare Minyak Angin Aromatherapy Hot",
        "category": "harian",
        "img": "images/catalog/products/Freshare Minyak Angin Aromatherapy Hot.jpg",
        "price": 175000,
        "originalPrice": 210000,
        "rating": 4.8,
        "sold": 2077,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 179,
        "name": "Freshare Minyak Angin Teraphy 10MI",
        "category": "harian",
        "img": "images/catalog/products/Freshare Minyak Angin Teraphy 10MI.jpg",
        "price": 225000,
        "originalPrice": 270000,
        "rating": 5.0,
        "sold": 4473,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 180,
        "name": "Freshare Minyak Angin Teraphy Kayu Putih 10MI",
        "category": "harian",
        "img": "images/catalog/products/Freshare Minyak Angin Teraphy Kayu Putih 10MI.jpg",
        "price": 85000,
        "originalPrice": null,
        "rating": 4.6,
        "sold": 2989,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 193,
        "name": "Maya Sardines Chili Kecil 155Gr",
        "category": "harian",
        "img": "images/catalog/products/Maya Sardines Chili Kecil 155Gr.jpg",
        "price": 120000,
        "originalPrice": 144000,
        "rating": 4.8,
        "sold": 2030,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 207,
        "name": "Garuda Skippy Peanut Butter Mini Ball Snacks",
        "category": "makanan",
        "img": "images/catalog/products/Garuda Skippy Peanut Butter Mini Ball Snacks.jpg",
        "price": 225000,
        "originalPrice": 270000,
        "rating": 4.6,
        "sold": 1878,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 208,
        "name": "Maya Sardines Tomat Besar 425Gr",
        "category": "harian",
        "img": "images/catalog/products/Maya Sardines Tomat Besar 425Gr.jpg",
        "price": 180000,
        "originalPrice": null,
        "rating": 4.9,
        "sold": 2394,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 209,
        "name": "Gery Saluut Malkiist Chocolate - 30 Bag",
        "category": "minuman",
        "img": "images/catalog/products/Gery Saluut Malkiist Chocolate - 30 Bag.jpg",
        "price": 165000,
        "originalPrice": null,
        "rating": 4.8,
        "sold": 481,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 210,
        "name": "Gery Saluut Malkist Cheese - 30 Bag",
        "category": "harian",
        "img": "images/catalog/products/Gery Saluut Malkist Cheese - 30 Bag.jpg",
        "price": 50000,
        "originalPrice": 60000,
        "rating": 4.7,
        "sold": 582,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Mayora",
        "cluster": "Biskuit & Wafer"
    },
    {
        "id": 211,
        "name": "Glade 2 In 1 Lavender 350MI",
        "category": "harian",
        "img": "images/catalog/products/Glade 2 In 1 Lavender 350MI.jpg",
        "price": 185000,
        "originalPrice": null,
        "rating": 4.9,
        "sold": 2756,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 212,
        "name": "Glade Car Fresh Wild Berries Refill 70Gr",
        "category": "harian",
        "img": "images/catalog/products/Glade Car Fresh Wild Berries Refill 70Gr.jpg",
        "price": 125000,
        "originalPrice": 150000,
        "rating": 4.6,
        "sold": 1327,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 213,
        "name": "Glade Spa Airfreshner Elegant Vanilla & Oud Wood 225MI",
        "category": "harian",
        "img": "images/catalog/products/Glade Spa Airfreshner Elegant Vanilla & Oud Wood 225MI.jpg",
        "price": 145000,
        "originalPrice": 174000,
        "rating": 4.6,
        "sold": 2929,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 214,
        "name": "Good Day Cappucino 25Gr",
        "category": "harian",
        "img": "images/catalog/products/Good Day Cappucino 25Gr.jpg",
        "price": 155000,
        "originalPrice": 186000,
        "rating": 4.7,
        "sold": 3311,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 215,
        "name": "Good Day Coffeemix Original 20Gr X 12 X 30",
        "category": "minuman",
        "img": "images/catalog/products/Good Day Coffeemix Original 20Gr X 12 X 30.jpg",
        "price": 145000,
        "originalPrice": null,
        "rating": 4.7,
        "sold": 2677,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Kopi & Teh"
    },
    {
        "id": 216,
        "name": "Good Day Freeze Mocafrio 30Gr",
        "category": "harian",
        "img": "images/catalog/products/Good Day Freeze Mocafrio 30Gr.jpg",
        "price": 60000,
        "originalPrice": 72000,
        "rating": 4.9,
        "sold": 4066,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 217,
        "name": "Good Day Latte Butterscotch",
        "category": "harian",
        "img": "images/catalog/products/Good Day Latte Butterscotch.jpg",
        "price": 185000,
        "originalPrice": null,
        "rating": 4.8,
        "sold": 1584,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 218,
        "name": "Good Day Latte Original",
        "category": "harian",
        "img": "images/catalog/products/Good Day Latte Original.jpg",
        "price": 135000,
        "originalPrice": 162000,
        "rating": 4.6,
        "sold": 2644,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 220,
        "name": "Head & Shoulders Anti Bacterial (Biru)",
        "category": "harian",
        "img": "images/catalog/products/Head & Shoulders Anti Bacterial (Biru).jpg",
        "price": 235000,
        "originalPrice": 282000,
        "rating": 4.6,
        "sold": 245,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 221,
        "name": "Head & Shoulders Anti Hairfall (Orange)",
        "category": "harian",
        "img": "images/catalog/products/Head & Shoulders Anti Hairfall (Orange).jpg",
        "price": 90000,
        "originalPrice": null,
        "rating": 4.5,
        "sold": 590,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 222,
        "name": "Head & Shoulders Cool Mentol (Hijau)",
        "category": "harian",
        "img": "images/catalog/products/Head & Shoulders Cool Mentol (Hijau).jpg",
        "price": 140000,
        "originalPrice": 168000,
        "rating": 4.8,
        "sold": 3094,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 223,
        "name": "Head & Shoulders Itch-Care (Biru Tua)",
        "category": "harian",
        "img": "images/catalog/products/Head & Shoulders Itch-Care (Biru Tua).jpg",
        "price": 105000,
        "originalPrice": 126000,
        "rating": 4.8,
        "sold": 2178,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 224,
        "name": "Head & Shoulders Lemon Fresh (Kuning)",
        "category": "harian",
        "img": "images/catalog/products/Head & Shoulders Lemon Fresh (Kuning).jpg",
        "price": 80000,
        "originalPrice": null,
        "rating": 4.6,
        "sold": 147,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 225,
        "name": "Head & Shoulders Smooth & Silky (Merah)",
        "category": "harian",
        "img": "images/catalog/products/Head & Shoulders Smooth & Silky (Merah).jpg",
        "price": 90000,
        "originalPrice": 108000,
        "rating": 4.9,
        "sold": 465,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 226,
        "name": "Hello Panda Caramel 42Gr",
        "category": "makanan",
        "img": "images/catalog/products/Hello Panda Caramel 42Gr.jpg",
        "price": 230000,
        "originalPrice": 276000,
        "rating": 4.8,
        "sold": 480,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 227,
        "name": "Hello Panda Chocolate 42Gr",
        "category": "minuman",
        "img": "images/catalog/products/Hello Panda Chocolate 42Gr.jpg",
        "price": 75000,
        "originalPrice": 90000,
        "rating": 4.7,
        "sold": 3072,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 228,
        "name": "Hello Panda Cookies & Cream 42Gr",
        "category": "makanan",
        "img": "images/catalog/products/Hello Panda Cookies & Cream 42Gr.jpg",
        "price": 225000,
        "originalPrice": 270000,
        "rating": 4.8,
        "sold": 662,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 229,
        "name": "Hello Panda Double Choco 42Gr",
        "category": "makanan",
        "img": "images/catalog/products/Hello Panda Double Choco 42Gr.jpg",
        "price": 50000,
        "originalPrice": null,
        "rating": 4.5,
        "sold": 4687,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 230,
        "name": "Hello Panda Strawberry 42Gr",
        "category": "makanan",
        "img": "images/catalog/products/Hello Panda Strawberry 42Gr.jpg",
        "price": 115000,
        "originalPrice": null,
        "rating": 4.6,
        "sold": 98,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 233,
        "name": "Hs Smooth & Silky (Merah)",
        "category": "harian",
        "img": "images/catalog/products/Hs Smooth & Silky (Merah).jpg",
        "price": 85000,
        "originalPrice": 102000,
        "rating": 4.7,
        "sold": 1247,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 234,
        "name": "Hydro Coco 250MI",
        "category": "harian",
        "img": "images/catalog/products/Hydro Coco 250MI.jpg",
        "price": 145000,
        "originalPrice": 174000,
        "rating": 5.0,
        "sold": 797,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 235,
        "name": "Indomie Ayam Bawang 69Gr",
        "category": "makanan",
        "img": "images/catalog/products/Indomie Ayam Bawang 69Gr.jpg",
        "price": 200000,
        "originalPrice": null,
        "rating": 4.8,
        "sold": 4839,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Indofood",
        "cluster": "Mie Instan"
    },
    {
        "id": 236,
        "name": "Indomie Coto Makasar 80Gr",
        "category": "makanan",
        "img": "images/catalog/products/Indomie Coto Makasar 80Gr.jpg",
        "price": 250000,
        "originalPrice": 300000,
        "rating": 4.6,
        "sold": 4618,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Indofood",
        "cluster": "Mie Instan"
    },
    {
        "id": 237,
        "name": "Indomie Empal Gentong 75Gr",
        "category": "makanan",
        "img": "images/catalog/products/Indomie Empal Gentong 75Gr.jpg",
        "price": 55000,
        "originalPrice": 66000,
        "rating": 4.7,
        "sold": 4478,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Indofood",
        "cluster": "Mie Instan"
    },
    {
        "id": 238,
        "name": "Indomie Goreng Ayam Panggang Jumbo 127Gr",
        "category": "makanan",
        "img": "images/catalog/products/Indomie Goreng Ayam Panggang Jumbo 127Gr.jpg",
        "price": 185000,
        "originalPrice": 222000,
        "rating": 4.7,
        "sold": 549,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Indofood",
        "cluster": "Mie Instan"
    },
    {
        "id": 239,
        "name": "Indomie Goreng Cabe Ijo 90Gr",
        "category": "makanan",
        "img": "images/catalog/products/Indomie Goreng Cabe Ijo 90Gr.jpg",
        "price": 50000,
        "originalPrice": null,
        "rating": 4.7,
        "sold": 474,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Indofood",
        "cluster": "Mie Instan"
    },
    {
        "id": 240,
        "name": "Indomie Goreng Cakalang 75Gr",
        "category": "makanan",
        "img": "images/catalog/products/Indomie Goreng Cakalang 75Gr.jpg",
        "price": 195000,
        "originalPrice": 234000,
        "rating": 4.7,
        "sold": 250,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Indofood",
        "cluster": "Mie Instan"
    },
    {
        "id": 241,
        "name": "Indomie Goreng Rendang 91Gr",
        "category": "makanan",
        "img": "images/catalog/products/Indomie Goreng Rendang 91Gr.jpg",
        "price": 180000,
        "originalPrice": 216000,
        "rating": 4.8,
        "sold": 3768,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Indofood",
        "cluster": "Mie Instan"
    },
    {
        "id": 242,
        "name": "Indomie Goreng Rendang Jumbo 120Gr",
        "category": "makanan",
        "img": "images/catalog/products/Indomie Goreng Rendang Jumbo 120Gr.jpg",
        "price": 245000,
        "originalPrice": null,
        "rating": 4.9,
        "sold": 3934,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Indofood",
        "cluster": "Mie Instan"
    },
    {
        "id": 243,
        "name": "Indomie Goreng Special 85Gr",
        "category": "makanan",
        "img": "images/catalog/products/Indomie Goreng Special 85Gr.jpg",
        "price": 155000,
        "originalPrice": null,
        "rating": 4.9,
        "sold": 397,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Indofood",
        "cluster": "Mie Instan"
    },
    {
        "id": 244,
        "name": "Indomie Korean Ramyeon Fiery Chikin 94Gr",
        "category": "makanan",
        "img": "images/catalog/products/Indomie Korean Ramyeon Fiery Chikin 94Gr.jpg",
        "price": 220000,
        "originalPrice": null,
        "rating": 4.7,
        "sold": 88,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Indofood",
        "cluster": "Mie Instan"
    },
    {
        "id": 245,
        "name": "Indomie Korean Ramyeon K-Rose 85Gr",
        "category": "makanan",
        "img": "images/catalog/products/Indomie Korean Ramyeon K-Rose 85Gr.jpg",
        "price": 70000,
        "originalPrice": null,
        "rating": 4.5,
        "sold": 938,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Indofood",
        "cluster": "Mie Instan"
    },
    {
        "id": 246,
        "name": "Indomie Korean Spicy Ramyeon 83Gr",
        "category": "makanan",
        "img": "images/catalog/products/Indomie Korean Spicy Ramyeon 83Gr.jpg",
        "price": 90000,
        "originalPrice": 108000,
        "rating": 4.9,
        "sold": 1042,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Indofood",
        "cluster": "Mie Instan"
    },
    {
        "id": 247,
        "name": "Indomie Kuah Cakalang 75Gr",
        "category": "makanan",
        "img": "images/catalog/products/Indomie Kuah Cakalang 75Gr.jpg",
        "price": 235000,
        "originalPrice": 282000,
        "rating": 4.5,
        "sold": 4021,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Indofood",
        "cluster": "Mie Instan"
    },
    {
        "id": 248,
        "name": "Indomie Mie Kocok Bandung 75Gr",
        "category": "makanan",
        "img": "images/catalog/products/Indomie Mie Kocok Bandung 75Gr.jpg",
        "price": 205000,
        "originalPrice": 246000,
        "rating": 4.5,
        "sold": 4604,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Indofood",
        "cluster": "Mie Instan"
    },
    {
        "id": 249,
        "name": "Indomie Nyemek Bangladesh 85Gr",
        "category": "makanan",
        "img": "images/catalog/products/Indomie Nyemek Bangladesh 85Gr.jpg",
        "price": 155000,
        "originalPrice": null,
        "rating": 4.9,
        "sold": 1694,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Indofood",
        "cluster": "Mie Instan"
    },
    {
        "id": 250,
        "name": "Indomie Soto Mie 70Gr",
        "category": "makanan",
        "img": "images/catalog/products/Indomie Soto Mie 70Gr.jpg",
        "price": 130000,
        "originalPrice": null,
        "rating": 4.6,
        "sold": 4423,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Indofood",
        "cluster": "Mie Instan"
    },
    {
        "id": 251,
        "name": "Jf Sulfur 90Gr",
        "category": "harian",
        "img": "images/catalog/products/Jf Sulfur 90Gr.jpg",
        "price": 125000,
        "originalPrice": null,
        "rating": 5.0,
        "sold": 412,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 252,
        "name": "Johnson Baby Hair&Body Top To Toe Wash 100MI",
        "category": "harian",
        "img": "images/catalog/products/Johnson Baby Hair&Body Top To Toe Wash 100MI.jpg",
        "price": 85000,
        "originalPrice": 102000,
        "rating": 4.7,
        "sold": 4357,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 253,
        "name": "Johnson Baby Hair&Body Top To Toe Wash 200MI",
        "category": "harian",
        "img": "images/catalog/products/Johnson Baby Hair&Body Top To Toe Wash 200MI.jpg",
        "price": 75000,
        "originalPrice": null,
        "rating": 4.8,
        "sold": 301,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 254,
        "name": "Johnson Baby Oil 125MI",
        "category": "harian",
        "img": "images/catalog/products/Johnson Baby Oil 125MI.jpg",
        "price": 215000,
        "originalPrice": 258000,
        "rating": 4.8,
        "sold": 3863,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 255,
        "name": "Johnson Baby Oil Reguler 50MI",
        "category": "harian",
        "img": "images/catalog/products/Johnson Baby Oil Reguler 50MI.jpg",
        "price": 185000,
        "originalPrice": null,
        "rating": 4.5,
        "sold": 1684,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 256,
        "name": "Kapal Api Mix Sachet",
        "category": "harian",
        "img": "images/catalog/products/Kapal Api Mix Sachet.jpg",
        "price": 55000,
        "originalPrice": null,
        "rating": 5.0,
        "sold": 3492,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Kopi & Teh"
    },
    {
        "id": 257,
        "name": "Kecap Bango 1.525 Kg",
        "category": "harian",
        "img": "images/catalog/products/Kecap Bango 1.525 Kg.jpg",
        "price": 65000,
        "originalPrice": null,
        "rating": 4.7,
        "sold": 1292,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 258,
        "name": "Kecap Bango 25Gr",
        "category": "harian",
        "img": "images/catalog/products/Kecap Bango 25Gr.jpg",
        "price": 230000,
        "originalPrice": null,
        "rating": 4.8,
        "sold": 917,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 259,
        "name": "Kecap Bango 77Gr",
        "category": "harian",
        "img": "images/catalog/products/Kecap Bango 77Gr.jpg",
        "price": 140000,
        "originalPrice": null,
        "rating": 5.0,
        "sold": 159,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 260,
        "name": "Kecap Bango Botol 189Gr",
        "category": "harian",
        "img": "images/catalog/products/Kecap Bango Botol 189Gr.jpg",
        "price": 110000,
        "originalPrice": null,
        "rating": 4.9,
        "sold": 3178,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 261,
        "name": "Kecap Bango Botol 385Gr",
        "category": "harian",
        "img": "images/catalog/products/Kecap Bango Botol 385Gr.jpg",
        "price": 180000,
        "originalPrice": null,
        "rating": 4.5,
        "sold": 2660,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 262,
        "name": "Kecap Bango Botol 865Gr",
        "category": "harian",
        "img": "images/catalog/products/Kecap Bango Botol 865Gr.jpg",
        "price": 230000,
        "originalPrice": null,
        "rating": 4.5,
        "sold": 1025,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 263,
        "name": "Kecap Bango Refill 520MI",
        "category": "harian",
        "img": "images/catalog/products/Kecap Bango Refill 520MI.jpg",
        "price": 200000,
        "originalPrice": null,
        "rating": 4.8,
        "sold": 4805,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 264,
        "name": "Kecap Bango Refill 700MI",
        "category": "harian",
        "img": "images/catalog/products/Kecap Bango Refill 700MI.jpg",
        "price": 165000,
        "originalPrice": 198000,
        "rating": 4.5,
        "sold": 1038,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 265,
        "name": "Khong Guan Saltcheese 100Gr",
        "category": "makanan",
        "img": "images/catalog/products/Khong Guan Saltcheese 100Gr.jpg",
        "price": 100000,
        "originalPrice": null,
        "rating": 4.8,
        "sold": 2887,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Biskuit & Wafer"
    },
    {
        "id": 266,
        "name": "Khong Guan Ass Biscuit Red Mini 650Gr",
        "category": "makanan",
        "img": "images/catalog/products/Khong Guan Ass Biscuit Red Mini 650Gr.jpg",
        "price": 145000,
        "originalPrice": null,
        "rating": 4.7,
        "sold": 1740,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Biskuit & Wafer"
    },
    {
        "id": 267,
        "name": "Kispray Gold Reff 280MI",
        "category": "harian",
        "img": "images/catalog/products/Kispray Gold Reff 280MI.jpg",
        "price": 105000,
        "originalPrice": null,
        "rating": 4.9,
        "sold": 1008,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 268,
        "name": "Kispray Kasturi Pouch 280MI",
        "category": "harian",
        "img": "images/catalog/products/Kispray Kasturi Pouch 280MI.jpg",
        "price": 215000,
        "originalPrice": 258000,
        "rating": 4.6,
        "sold": 227,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 269,
        "name": "Kit Kat Rtd 24X220MI",
        "category": "harian",
        "img": "images/catalog/products/Kit Kat Rtd 24X220MI.jpg",
        "price": 65000,
        "originalPrice": 78000,
        "rating": 4.7,
        "sold": 924,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 270,
        "name": "Kodomo Pasta Gigi Melon 36X45Gr",
        "category": "harian",
        "img": "images/catalog/products/Kodomo Pasta Gigi Melon 36X45Gr.jpg",
        "price": 235000,
        "originalPrice": null,
        "rating": 4.9,
        "sold": 3466,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 271,
        "name": "Kratingdaeng 250MI",
        "category": "harian",
        "img": "images/catalog/products/Kratingdaeng 250MI.jpg",
        "price": 95000,
        "originalPrice": null,
        "rating": 4.9,
        "sold": 3130,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 272,
        "name": "Larutan Badak Jambu 320MI",
        "category": "harian",
        "img": "images/catalog/products/Larutan Badak Jambu 320MI.jpg",
        "price": 50000,
        "originalPrice": null,
        "rating": 4.6,
        "sold": 3950,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 273,
        "name": "Larutan Badak Lychee 320MI",
        "category": "harian",
        "img": "images/catalog/products/Larutan Badak Lychee 320MI.jpg",
        "price": 200000,
        "originalPrice": 240000,
        "rating": 4.9,
        "sold": 490,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 274,
        "name": "Larutan Cap Kaki 3 Anggur 320MI",
        "category": "harian",
        "img": "images/catalog/products/Larutan Cap Kaki 3 Anggur 320MI.jpg",
        "price": 230000,
        "originalPrice": 276000,
        "rating": 4.8,
        "sold": 2260,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 275,
        "name": "Larutan Cap Kaki 3 Jambu 320MI",
        "category": "harian",
        "img": "images/catalog/products/Larutan Cap Kaki 3 Jambu 320MI.jpg",
        "price": 125000,
        "originalPrice": 150000,
        "rating": 4.8,
        "sold": 852,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 276,
        "name": "Larutan Cap Kaki 3 Jeruk 320MI",
        "category": "harian",
        "img": "images/catalog/products/Larutan Cap Kaki 3 Jeruk 320MI.jpg",
        "price": 115000,
        "originalPrice": null,
        "rating": 4.9,
        "sold": 3065,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 277,
        "name": "Larutan Cap Kaki 3 Loci 320MI",
        "category": "harian",
        "img": "images/catalog/products/Larutan Cap Kaki 3 Loci 320MI.jpg",
        "price": 230000,
        "originalPrice": 276000,
        "rating": 4.5,
        "sold": 4392,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 278,
        "name": "Larutan Cap Kaki 3 Melon 320MI",
        "category": "harian",
        "img": "images/catalog/products/Larutan Cap Kaki 3 Melon 320MI.jpg",
        "price": 170000,
        "originalPrice": 204000,
        "rating": 4.8,
        "sold": 1090,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 279,
        "name": "Larutan Cap Kaki 3 Ori 500MI",
        "category": "harian",
        "img": "images/catalog/products/Larutan Cap Kaki 3 Ori 500MI.jpg",
        "price": 155000,
        "originalPrice": 186000,
        "rating": 4.7,
        "sold": 3265,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 280,
        "name": "Doritos Snack Jagung Bakar (Roasted Corn) 55Gr",
        "category": "makanan",
        "img": "images/catalog/products/Doritos Snack Jagung Bakar (Roasted Corn) 55Gr.jpg",
        "price": 250000,
        "originalPrice": null,
        "rating": 4.8,
        "sold": 2910,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 281,
        "name": "Larutan Penyegar Cap Kaki 3 200MI",
        "category": "harian",
        "img": "images/catalog/products/Larutan Penyegar Cap Kaki 3 200MI.jpg",
        "price": 140000,
        "originalPrice": null,
        "rating": 4.8,
        "sold": 3088,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 282,
        "name": "Laurier Active Day Wing 20S",
        "category": "harian",
        "img": "images/catalog/products/Laurier Active Day Wing 20S.jpg",
        "price": 195000,
        "originalPrice": 234000,
        "rating": 4.6,
        "sold": 146,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 283,
        "name": "Laurier Relax Night 30S",
        "category": "harian",
        "img": "images/catalog/products/Laurier Relax Night 30S.jpg",
        "price": 55000,
        "originalPrice": 66000,
        "rating": 4.7,
        "sold": 2410,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 284,
        "name": "Lays Seaweed 64Gr",
        "category": "makanan",
        "img": "images/catalog/products/Lays Seaweed 64Gr.jpg",
        "price": 200000,
        "originalPrice": 240000,
        "rating": 4.9,
        "sold": 4412,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Indofood",
        "cluster": "Lainnya"
    },
    {
        "id": 285,
        "name": "Lays Sweet Chili 64Gr",
        "category": "makanan",
        "img": "images/catalog/products/Lays Sweet Chili 64Gr.jpg",
        "price": 80000,
        "originalPrice": 96000,
        "rating": 4.5,
        "sold": 2558,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Indofood",
        "cluster": "Lainnya"
    },
    {
        "id": 286,
        "name": "Lays Wavy Fried Chicken 64Gr",
        "category": "makanan",
        "img": "images/catalog/products/Lays Wavy Fried Chicken 64Gr.jpg",
        "price": 135000,
        "originalPrice": null,
        "rating": 4.6,
        "sold": 4270,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Indofood",
        "cluster": "Lainnya"
    },
    {
        "id": 287,
        "name": "Listerine Mw Fresh Burst 250MI",
        "category": "harian",
        "img": "images/catalog/products/Listerine Mw Fresh Burst 250MI.jpg",
        "price": 115000,
        "originalPrice": null,
        "rating": 4.7,
        "sold": 1421,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 288,
        "name": "Listerine Mw Fresh Burst 500MI",
        "category": "harian",
        "img": "images/catalog/products/Listerine Mw Fresh Burst 500MI.jpg",
        "price": 210000,
        "originalPrice": null,
        "rating": 4.8,
        "sold": 4874,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 289,
        "name": "Listerine Mw Fresh Citrus 250MI",
        "category": "harian",
        "img": "images/catalog/products/Listerine Mw Fresh Citrus 250MI.jpg",
        "price": 60000,
        "originalPrice": null,
        "rating": 4.7,
        "sold": 263,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 290,
        "name": "Listerine Mw Original 250MI",
        "category": "harian",
        "img": "images/catalog/products/Listerine Mw Original 250MI.jpg",
        "price": 185000,
        "originalPrice": null,
        "rating": 4.9,
        "sold": 551,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 291,
        "name": "Listerine Mw Original 500MI",
        "category": "harian",
        "img": "images/catalog/products/Listerine Mw Original 500MI.jpg",
        "price": 200000,
        "originalPrice": 240000,
        "rating": 4.6,
        "sold": 790,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 292,
        "name": "Listerine Mw Zero 250MI",
        "category": "harian",
        "img": "images/catalog/products/Listerine Mw Zero 250MI.jpg",
        "price": 180000,
        "originalPrice": null,
        "rating": 4.5,
        "sold": 1326,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 293,
        "name": "Listerine Mw Zero 500MI",
        "category": "harian",
        "img": "images/catalog/products/Listerine Mw Zero 500MI.jpg",
        "price": 175000,
        "originalPrice": 210000,
        "rating": 4.8,
        "sold": 3646,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 294,
        "name": "Lovillea Eau De Pafrum (Hijab Mood)-Delight Peony 100Mlx24",
        "category": "harian",
        "img": "images/catalog/products/Lovillea Eau De Pafrum (Hijab Mood)-Delight Peony 100Mlx24.jpg",
        "price": 185000,
        "originalPrice": 222000,
        "rating": 4.8,
        "sold": 4513,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 295,
        "name": "Lovillea Eau De Pafrum (Hijab Mood)-Lively Orange 100Mlx24",
        "category": "harian",
        "img": "images/catalog/products/Lovillea Eau De Pafrum (Hijab Mood)-Lively Orange 100Mlx24.jpg",
        "price": 210000,
        "originalPrice": null,
        "rating": 4.6,
        "sold": 1736,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 296,
        "name": "Lovillea Eau De Pafrum-Blooming Rose 24X100MI",
        "category": "harian",
        "img": "images/catalog/products/Lovillea Eau De Pafrum-Blooming Rose 24X100MI.jpg",
        "price": 115000,
        "originalPrice": null,
        "rating": 4.9,
        "sold": 3801,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 297,
        "name": "Lovillea Eau De Pafrum-Classy Freesia (O) 100Mlx24",
        "category": "harian",
        "img": "images/catalog/products/Lovillea Eau De Pafrum-Classy Freesia (O) 100Mlx24.jpg",
        "price": 165000,
        "originalPrice": null,
        "rating": 4.7,
        "sold": 3920,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 298,
        "name": "Lovillea Eau De Pafrum-Enchanting Lily 100Mlx24",
        "category": "harian",
        "img": "images/catalog/products/Lovillea Eau De Pafrum-Enchanting Lily 100Mlx24.jpg",
        "price": 190000,
        "originalPrice": null,
        "rating": 4.8,
        "sold": 4804,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 299,
        "name": "Lovillea Happy Hype Parfum Body Mist Catchin Sunshine 100 MI X 72",
        "category": "harian",
        "img": "images/catalog/products/Lovillea Happy Hype Parfum Body Mist Catchin Sunshine 100 MI X 72.jpg",
        "price": 60000,
        "originalPrice": 72000,
        "rating": 4.7,
        "sold": 4858,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 300,
        "name": "Lovillea Happy Hype Parfum Body Mist Chillin Sunday 100 MI X 72",
        "category": "harian",
        "img": "images/catalog/products/Lovillea Happy Hype Parfum Body Mist Chillin Sunday 100 MI X 72.jpg",
        "price": 130000,
        "originalPrice": 156000,
        "rating": 4.9,
        "sold": 2288,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 301,
        "name": "Lovillea Happy Hype Parfum Body Mist Poppin Party 100 MI X 72",
        "category": "harian",
        "img": "images/catalog/products/Lovillea Happy Hype Parfum Body Mist Poppin Party 100 MI X 72.jpg",
        "price": 60000,
        "originalPrice": 72000,
        "rating": 4.5,
        "sold": 1693,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 302,
        "name": "Lovillea Hijab Mood Eau De Parfum Joyful Berry 100Mlx24",
        "category": "harian",
        "img": "images/catalog/products/Lovillea Hijab Mood Eau De Parfum Joyful Berry 100Mlx24.jpg",
        "price": 205000,
        "originalPrice": 246000,
        "rating": 4.5,
        "sold": 1024,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 303,
        "name": "Lovillea Lippy Balm Blushy Red 10 Gr X 48",
        "category": "harian",
        "img": "images/catalog/products/Lovillea Lippy Balm Blushy Red 10 Gr X 48.jpg",
        "price": 210000,
        "originalPrice": null,
        "rating": 4.8,
        "sold": 4286,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 305,
        "name": "Lovillea Lippy Balm Rose Pink 10 Gr X 48",
        "category": "harian",
        "img": "images/catalog/products/Lovillea Lippy Balm Rose Pink 10 Gr X 48.jpg",
        "price": 105000,
        "originalPrice": null,
        "rating": 4.5,
        "sold": 3115,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 306,
        "name": "Lovillea Lippy Balm Sunny Coral 10 Gr X 48",
        "category": "harian",
        "img": "images/catalog/products/Lovillea Lippy Balm Sunny Coral 10 Gr X 48.jpg",
        "price": 210000,
        "originalPrice": 252000,
        "rating": 4.8,
        "sold": 3025,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 307,
        "name": "Lovillea Love Language Eau De Parfum Precious Gift 100 MI X 4 X12",
        "category": "harian",
        "img": "images/catalog/products/Lovillea Love Language Eau De Parfum Precious Gift 100 MI X 4 X12.jpg",
        "price": 75000,
        "originalPrice": 90000,
        "rating": 5.0,
        "sold": 2392,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 308,
        "name": "Lovillea Love Language Eau De Parfum Sincere Attention 100 MI X 4 X12",
        "category": "harian",
        "img": "images/catalog/products/Lovillea Love Language Eau De Parfum Sincere Attention 100 MI X 4 X12.jpg",
        "price": 95000,
        "originalPrice": null,
        "rating": 4.6,
        "sold": 3738,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 309,
        "name": "Lovillea Love Language Eau De Parfum Special Moment 100 MI X 4 X12",
        "category": "harian",
        "img": "images/catalog/products/Lovillea Love Language Eau De Parfum Special Moment 100 MI X 4 X12.jpg",
        "price": 110000,
        "originalPrice": 132000,
        "rating": 5.0,
        "sold": 4000,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 310,
        "name": "Lovillea Love Language Eau De Parfum Sweet Talk 100 MI X 4 X12",
        "category": "harian",
        "img": "images/catalog/products/Lovillea Love Language Eau De Parfum Sweet Talk 100 MI X 4 X12.jpg",
        "price": 235000,
        "originalPrice": null,
        "rating": 4.5,
        "sold": 2709,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 311,
        "name": "Lovillea Love Language Eau De Parfum Warm Hug 100 MI X 4 X12",
        "category": "harian",
        "img": "images/catalog/products/Lovillea Love Language Eau De Parfum Warm Hug 100 MI X 4 X12.jpg",
        "price": 180000,
        "originalPrice": 216000,
        "rating": 4.6,
        "sold": 682,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 312,
        "name": "Lovillea Parfum Body Mist Freshy Park 100MI X 6 X 12",
        "category": "harian",
        "img": "images/catalog/products/Lovillea Parfum Body Mist Freshy Park 100MI X 6 X 12.jpg",
        "price": 175000,
        "originalPrice": null,
        "rating": 4.8,
        "sold": 2541,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 313,
        "name": "Lovillea Parfum Body Mist Fruity Movie 100MI X 6 X 12",
        "category": "harian",
        "img": "images/catalog/products/Lovillea Parfum Body Mist Fruity Movie 100MI X 6 X 12.jpg",
        "price": 210000,
        "originalPrice": 252000,
        "rating": 4.6,
        "sold": 1094,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 314,
        "name": "Lovillea Parfum Body Mist Vanilla Caf 100MI X 6 X 12",
        "category": "harian",
        "img": "images/catalog/products/Lovillea Parfum Body Mist Vanilla Caf 100MI X 6 X 12.jpg",
        "price": 85000,
        "originalPrice": null,
        "rating": 4.8,
        "sold": 2737,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 315,
        "name": "Lovillea Parfum Body Mist Vanilla Caf 100MI X 6 X 12",
        "category": "harian",
        "img": "images/catalog/products/Lovillea Parfum Body Mist Vanilla Caf 100MI X 6 X 12.jpg",
        "price": 150000,
        "originalPrice": 180000,
        "rating": 4.8,
        "sold": 3066,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 316,
        "name": "Lucido-L Serum Boost Hair Fragrance Floral Cascade 100 MI X 4 X 12",
        "category": "harian",
        "img": "images/catalog/products/Lucido-L Serum Boost Hair Fragrance Floral Cascade 100 MI X 4 X 12.jpg",
        "price": 200000,
        "originalPrice": null,
        "rating": 4.6,
        "sold": 1850,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 317,
        "name": "Lucido-L Serum Boost Hair Fragrance Frosty Flower 100 MI X 4 X 12",
        "category": "harian",
        "img": "images/catalog/products/Lucido-L Serum Boost Hair Fragrance Frosty Flower 100 MI X 4 X 12.jpg",
        "price": 195000,
        "originalPrice": null,
        "rating": 4.6,
        "sold": 2035,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 318,
        "name": "Lucido-L Serum Boost Hair Fragrance Twilight Bloom 100 MI X 4 X 12",
        "category": "harian",
        "img": "images/catalog/products/Lucido-L Serum Boost Hair Fragrance Twilight Bloom 100 MI X 4 X 12.jpg",
        "price": 240000,
        "originalPrice": null,
        "rating": 4.9,
        "sold": 1284,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 319,
        "name": "Lucido-L Serum Boost Hair Oil Keratin 50 MI X 2 X 12",
        "category": "harian",
        "img": "images/catalog/products/Lucido-L Serum Boost Hair Oil Keratin 50 MI X 2 X 12.jpg",
        "price": 155000,
        "originalPrice": 186000,
        "rating": 4.7,
        "sold": 761,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 320,
        "name": "Lux Bodywash Pink Soft Kiss 36X100MI",
        "category": "harian",
        "img": "images/catalog/products/Lux Bodywash Pink Soft Kiss 36X100MI.jpg",
        "price": 220000,
        "originalPrice": null,
        "rating": 4.7,
        "sold": 3808,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Unilever",
        "cluster": "Perawatan Tubuh"
    },
    {
        "id": 321,
        "name": "M.Kids Spr Batman Btl 36X80+20MI",
        "category": "harian",
        "img": "images/catalog/products/M.Kids Spr Batman Btl 36X80+20MI.jpg",
        "price": 95000,
        "originalPrice": 114000,
        "rating": 4.7,
        "sold": 1777,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 322,
        "name": "M.Kids Spr Ben10 Btl 36X80+20MI",
        "category": "harian",
        "img": "images/catalog/products/M.Kids Spr Ben10 Btl 36X80+20MI.jpg",
        "price": 50000,
        "originalPrice": 60000,
        "rating": 4.7,
        "sold": 2842,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 323,
        "name": "M.Kids Spr C.America Btl 36X80+20MI",
        "category": "harian",
        "img": "images/catalog/products/M.Kids Spr C.America Btl 36X80+20MI.jpg",
        "price": 125000,
        "originalPrice": null,
        "rating": 4.9,
        "sold": 3729,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 324,
        "name": "M.Kids Spr Spiderman Btl 36X80+20MI",
        "category": "harian",
        "img": "images/catalog/products/M.Kids Spr Spiderman Btl 36X80+20MI.jpg",
        "price": 50000,
        "originalPrice": null,
        "rating": 4.7,
        "sold": 4310,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 325,
        "name": "M.Kids Spr Superman Btl 36X80+20MI",
        "category": "harian",
        "img": "images/catalog/products/M.Kids Spr Superman Btl 36X80+20MI.jpg",
        "price": 105000,
        "originalPrice": 126000,
        "rating": 4.9,
        "sold": 4130,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 326,
        "name": "Maxicorn Snack Barbeque 140Gr",
        "category": "makanan",
        "img": "images/catalog/products/Maxicorn Snack Barbeque 140Gr.jpg",
        "price": 75000,
        "originalPrice": null,
        "rating": 4.7,
        "sold": 98,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 327,
        "name": "Maxicorn Snack Nacho Cheese 140Gr",
        "category": "makanan",
        "img": "images/catalog/products/Maxicorn Snack Nacho Cheese 140Gr.jpg",
        "price": 160000,
        "originalPrice": 192000,
        "rating": 4.9,
        "sold": 397,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 328,
        "name": "Maxicorn Snack Roasted Corn 140Gr",
        "category": "makanan",
        "img": "images/catalog/products/Maxicorn Snack Roasted Corn 140Gr.jpg",
        "price": 230000,
        "originalPrice": null,
        "rating": 4.8,
        "sold": 2052,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 329,
        "name": "Maya Sardines Chili Besar 425Gr",
        "category": "harian",
        "img": "images/catalog/products/Maya Sardines Chili Besar 425Gr.jpg",
        "price": 60000,
        "originalPrice": null,
        "rating": 4.7,
        "sold": 3290,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 330,
        "name": "Maya Sardines Tomat Kecil 155Gr",
        "category": "harian",
        "img": "images/catalog/products/Maya Sardines Tomat Kecil 155Gr.jpg",
        "price": 245000,
        "originalPrice": null,
        "rating": 5.0,
        "sold": 2349,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 331,
        "name": "Mentos Grape Roll 37Gr",
        "category": "harian",
        "img": "images/catalog/products/Mentos Grape Roll 37Gr.jpg",
        "price": 80000,
        "originalPrice": 96000,
        "rating": 4.7,
        "sold": 3479,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 332,
        "name": "Mentos Mint Roll 37Gr",
        "category": "harian",
        "img": "images/catalog/products/Mentos Mint Roll 37Gr.jpg",
        "price": 75000,
        "originalPrice": null,
        "rating": 4.6,
        "sold": 150,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 333,
        "name": "Mentos Rainbow Roll 37Gr",
        "category": "harian",
        "img": "images/catalog/products/Mentos Rainbow Roll 37Gr.jpg",
        "price": 220000,
        "originalPrice": 264000,
        "rating": 4.7,
        "sold": 2183,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 334,
        "name": "Mentos Roll Feeling Berry Good 8X24X37G",
        "category": "harian",
        "img": "images/catalog/products/Mentos Roll Feeling Berry Good 8X24X37G.jpg",
        "price": 250000,
        "originalPrice": 300000,
        "rating": 4.8,
        "sold": 166,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 335,
        "name": "Mie Sedaap Ayam Bawang Bag 5",
        "category": "makanan",
        "img": "images/catalog/products/Mie Sedaap Ayam Bawang Bag 5.jpg",
        "price": 90000,
        "originalPrice": 108000,
        "rating": 4.8,
        "sold": 3878,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Wings",
        "cluster": "Mie Instan"
    },
    {
        "id": 336,
        "name": "Mie Sedaap Cup Goreng 12X81Gr",
        "category": "makanan",
        "img": "images/catalog/products/Mie Sedaap Cup Goreng 12X81Gr.jpg",
        "price": 210000,
        "originalPrice": 252000,
        "rating": 4.6,
        "sold": 944,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Wings",
        "cluster": "Mie Instan"
    },
    {
        "id": 337,
        "name": "Mie Sedaap Hakata Chicken 60Pc X 88Gr",
        "category": "makanan",
        "img": "images/catalog/products/Mie Sedaap Hakata Chicken 60Pc X 88Gr.jpg",
        "price": 200000,
        "originalPrice": 240000,
        "rating": 4.6,
        "sold": 2894,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Wings",
        "cluster": "Mie Instan"
    },
    {
        "id": 338,
        "name": "Minyak Goreng Bimoli 2L",
        "category": "harian",
        "img": "images/catalog/products/Minyak Goreng Bimoli 2L.jpg",
        "price": 190000,
        "originalPrice": null,
        "rating": 4.9,
        "sold": 960,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 339,
        "name": "Minyak Goreng Bimoli 5L",
        "category": "harian",
        "img": "images/catalog/products/Minyak Goreng Bimoli 5L.jpg",
        "price": 185000,
        "originalPrice": null,
        "rating": 4.7,
        "sold": 2249,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 340,
        "name": "Minyak Goreng Sania 2L",
        "category": "harian",
        "img": "images/catalog/products/Minyak Goreng Sania 2L.jpg",
        "price": 175000,
        "originalPrice": null,
        "rating": 4.6,
        "sold": 3304,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 341,
        "name": "Minyak Goreng Sunco 2L",
        "category": "harian",
        "img": "images/catalog/products/Minyak Goreng Sunco 2L.jpg",
        "price": 60000,
        "originalPrice": 72000,
        "rating": 4.9,
        "sold": 93,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 342,
        "name": "Neo Coffee Carramel Machiato (Bag) 20X9Sx20Gr",
        "category": "minuman",
        "img": "images/catalog/products/Neo Coffee Carramel Machiato (Bag) 20X9Sx20Gr.jpg",
        "price": 225000,
        "originalPrice": 270000,
        "rating": 4.6,
        "sold": 3935,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Kopi & Teh"
    },
    {
        "id": 343,
        "name": "Neo Coffee Moccachino (Bag) 20X9Sx20Gr",
        "category": "minuman",
        "img": "images/catalog/products/Neo Coffee Moccachino (Bag) 20X9Sx20Gr.jpg",
        "price": 195000,
        "originalPrice": 234000,
        "rating": 4.5,
        "sold": 1520,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Kopi & Teh"
    },
    {
        "id": 344,
        "name": "Neo Coffee Tiramisu 3ln1 20X9Sx20Gr",
        "category": "minuman",
        "img": "images/catalog/products/Neo Coffee Tiramisu 3ln1 20X9Sx20Gr.jpg",
        "price": 225000,
        "originalPrice": 270000,
        "rating": 4.9,
        "sold": 4443,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Kopi & Teh"
    },
    {
        "id": 345,
        "name": "Nescafe 3 In 1 Original 525Gr",
        "category": "minuman",
        "img": "images/catalog/products/Nescafe 3 In 1 Original 525Gr.jpg",
        "price": 135000,
        "originalPrice": 162000,
        "rating": 4.9,
        "sold": 3073,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Nestle",
        "cluster": "Kopi & Teh"
    },
    {
        "id": 346,
        "name": "Nestle Combo Pack Honey 32Gr",
        "category": "harian",
        "img": "images/catalog/products/Nestle Combo Pack Honey 32Gr.jpg",
        "price": 240000,
        "originalPrice": null,
        "rating": 4.6,
        "sold": 4188,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Nestle",
        "cluster": "Lainnya"
    },
    {
        "id": 347,
        "name": "Nestle Combo Pack Koko Crunch",
        "category": "harian",
        "img": "images/catalog/products/Nestle Combo Pack Koko Crunch.jpg",
        "price": 80000,
        "originalPrice": null,
        "rating": 4.7,
        "sold": 4229,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Nestle",
        "cluster": "Lainnya"
    },
    {
        "id": 348,
        "name": "Nestle Combo Pack Koko Krunch 32Gr",
        "category": "harian",
        "img": "images/catalog/products/Nestle Combo Pack Koko Krunch 32Gr.jpg",
        "price": 140000,
        "originalPrice": null,
        "rating": 4.6,
        "sold": 2138,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Nestle",
        "cluster": "Lainnya"
    },
    {
        "id": 349,
        "name": "Nissin Butter Coconut Biscuits",
        "category": "makanan",
        "img": "images/catalog/products/Nissin Butter Coconut Biscuits.jpg",
        "price": 245000,
        "originalPrice": null,
        "rating": 4.7,
        "sold": 3767,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Biskuit & Wafer"
    },
    {
        "id": 350,
        "name": "Oatside Barista Blend 1000MI",
        "category": "harian",
        "img": "images/catalog/products/Oatside Barista Blend 1000MI.jpg",
        "price": 55000,
        "originalPrice": 66000,
        "rating": 4.9,
        "sold": 3934,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 352,
        "name": "Oreo Peanut Butter 110.4Gr",
        "category": "makanan",
        "img": "images/catalog/products/Oreo Peanut Butter 110.4Gr.jpg",
        "price": 235000,
        "originalPrice": 282000,
        "rating": 4.7,
        "sold": 4422,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Mondelez",
        "cluster": "Biskuit & Wafer"
    },
    {
        "id": 353,
        "name": "Oreo Sandwich Strawberry 110.4Gr",
        "category": "makanan",
        "img": "images/catalog/products/Oreo Sandwich Strawberry 110.4Gr.jpg",
        "price": 65000,
        "originalPrice": null,
        "rating": 4.8,
        "sold": 1543,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Mondelez",
        "cluster": "Biskuit & Wafer"
    },
    {
        "id": 354,
        "name": "Oreo Sandwich Vanila Cream 110.4Gr",
        "category": "makanan",
        "img": "images/catalog/products/Oreo Sandwich Vanila Cream 110.4Gr.jpg",
        "price": 170000,
        "originalPrice": 204000,
        "rating": 4.7,
        "sold": 4595,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Mondelez",
        "cluster": "Biskuit & Wafer"
    },
    {
        "id": 355,
        "name": "Ovale Fac Lot Anti Acne Btl 36X200MI",
        "category": "harian",
        "img": "images/catalog/products/Ovale Fac Lot Anti Acne Btl 36X200MI.jpg",
        "price": 195000,
        "originalPrice": 234000,
        "rating": 4.9,
        "sold": 241,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Perawatan Tubuh"
    },
    {
        "id": 356,
        "name": "Ovale Fac Lot P.Lumi Yambean 100MI Btl",
        "category": "harian",
        "img": "images/catalog/products/Ovale Fac Lot P.Lumi Yambean 100MI Btl.jpg",
        "price": 200000,
        "originalPrice": 240000,
        "rating": 4.6,
        "sold": 2288,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Perawatan Tubuh"
    },
    {
        "id": 357,
        "name": "Ovale Fac Lot P.Lumi Yambean 200MI Btl",
        "category": "harian",
        "img": "images/catalog/products/Ovale Fac Lot P.Lumi Yambean 200MI Btl.jpg",
        "price": 200000,
        "originalPrice": 240000,
        "rating": 4.6,
        "sold": 3997,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Perawatan Tubuh"
    },
    {
        "id": 358,
        "name": "Palmia Margarine 200Gr",
        "category": "harian",
        "img": "images/catalog/products/Palmia Margarine 200Gr.jpg",
        "price": 210000,
        "originalPrice": 252000,
        "rating": 4.8,
        "sold": 2217,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 359,
        "name": "Pantene Conditioner Rambut",
        "category": "rt",
        "img": "images/catalog/products/Pantene Conditioner Rambut.jpg",
        "price": 90000,
        "originalPrice": null,
        "rating": 4.7,
        "sold": 4474,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 360,
        "name": "Pantene Conditioner Rambut Rontok (Pink)",
        "category": "rt",
        "img": "images/catalog/products/Pantene Conditioner Rambut Rontok (Pink).jpg",
        "price": 165000,
        "originalPrice": 198000,
        "rating": 4.6,
        "sold": 1650,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 361,
        "name": "Qtlea Bbq 175Gr",
        "category": "harian",
        "img": "images/catalog/products/Qtlea Bbq 175Gr.jpg",
        "price": 70000,
        "originalPrice": 84000,
        "rating": 4.8,
        "sold": 2306,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 365,
        "name": "Pop Mie Cup Dower 75Gr",
        "category": "makanan",
        "img": "images/catalog/products/Pop Mie Cup Dower 75Gr.jpg",
        "price": 95000,
        "originalPrice": 114000,
        "rating": 4.9,
        "sold": 1771,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Indofood",
        "cluster": "Mie Instan"
    },
    {
        "id": 366,
        "name": "Pop Mie Korean Ramyeon Fiery Chikin 75Gr",
        "category": "makanan",
        "img": "images/catalog/products/Pop Mie Korean Ramyeon Fiery Chikin 75Gr.jpg",
        "price": 215000,
        "originalPrice": 258000,
        "rating": 4.6,
        "sold": 4808,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Indofood",
        "cluster": "Mie Instan"
    },
    {
        "id": 367,
        "name": "Pop Mie Mi Instan Cup - Pedes Gledeek 75Gr",
        "category": "makanan",
        "img": "images/catalog/products/Pop Mie Mi Instan Cup - Pedes Gledeek 75Gr.jpg",
        "price": 240000,
        "originalPrice": null,
        "rating": 4.8,
        "sold": 711,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Indofood",
        "cluster": "Mie Instan"
    },
    {
        "id": 368,
        "name": "Pop Mie Rasa Ayam Bawang New Cup 75Gr",
        "category": "makanan",
        "img": "images/catalog/products/Pop Mie Rasa Ayam Bawang New Cup 75Gr.jpg",
        "price": 65000,
        "originalPrice": null,
        "rating": 4.6,
        "sold": 4860,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Indofood",
        "cluster": "Mie Instan"
    },
    {
        "id": 369,
        "name": "Pop Mie Rasa Ayam New Cup 75Gr",
        "category": "makanan",
        "img": "images/catalog/products/Pop Mie Rasa Ayam New Cup 75Gr.jpg",
        "price": 170000,
        "originalPrice": null,
        "rating": 4.7,
        "sold": 2486,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Indofood",
        "cluster": "Mie Instan"
    },
    {
        "id": 370,
        "name": "Pop Mie Rasa Baso New Cup 75Gr",
        "category": "makanan",
        "img": "images/catalog/products/Pop Mie Rasa Baso New Cup 75Gr.jpg",
        "price": 225000,
        "originalPrice": 270000,
        "rating": 4.9,
        "sold": 1225,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Indofood",
        "cluster": "Mie Instan"
    },
    {
        "id": 371,
        "name": "Pop Mie Rasa Kari Ayam 75Gr",
        "category": "makanan",
        "img": "images/catalog/products/Pop Mie Rasa Kari Ayam 75Gr.jpg",
        "price": 245000,
        "originalPrice": 294000,
        "rating": 4.9,
        "sold": 810,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Indofood",
        "cluster": "Mie Instan"
    },
    {
        "id": 372,
        "name": "Pop Mie Rasa Soto Ayam 75Gr",
        "category": "makanan",
        "img": "images/catalog/products/Pop Mie Rasa Soto Ayam 75Gr.jpg",
        "price": 160000,
        "originalPrice": 192000,
        "rating": 4.9,
        "sold": 28,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Indofood",
        "cluster": "Mie Instan"
    },
    {
        "id": 373,
        "name": "Pop Spageti Instant Bolognese 40X84Gr",
        "category": "harian",
        "img": "images/catalog/products/Pop Spageti Instant Bolognese 40X84Gr.jpg",
        "price": 50000,
        "originalPrice": 60000,
        "rating": 4.7,
        "sold": 3969,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 374,
        "name": "Pop Spageti Instant Carbonara 40X84Gr",
        "category": "harian",
        "img": "images/catalog/products/Pop Spageti Instant Carbonara 40X84Gr.jpg",
        "price": 195000,
        "originalPrice": 234000,
        "rating": 4.7,
        "sold": 2851,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 375,
        "name": "Pucelle De Luxe Body Spray Azure 150 MI X 48",
        "category": "harian",
        "img": "images/catalog/products/Pucelle De Luxe Body Spray Azure 150 MI X 48.jpg",
        "price": 135000,
        "originalPrice": 162000,
        "rating": 4.7,
        "sold": 3893,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Unilever",
        "cluster": "Perawatan Tubuh"
    },
    {
        "id": 376,
        "name": "Pucelle De Luxe Body Spray Dainity 150 MI X 48",
        "category": "harian",
        "img": "images/catalog/products/Pucelle De Luxe Body Spray Dainity 150 MI X 48.jpg",
        "price": 250000,
        "originalPrice": 300000,
        "rating": 4.6,
        "sold": 2487,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Unilever",
        "cluster": "Perawatan Tubuh"
    },
    {
        "id": 377,
        "name": "Pucelle De Luxe Body Spray Finesse 150 MI X 48",
        "category": "harian",
        "img": "images/catalog/products/Pucelle De Luxe Body Spray Finesse 150 MI X 48.jpg",
        "price": 195000,
        "originalPrice": null,
        "rating": 4.7,
        "sold": 408,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Unilever",
        "cluster": "Perawatan Tubuh"
    },
    {
        "id": 378,
        "name": "Pucelle De Luxe Body Spray Glitzy 150 MI X 48",
        "category": "harian",
        "img": "images/catalog/products/Pucelle De Luxe Body Spray Glitzy 150 MI X 48.jpg",
        "price": 225000,
        "originalPrice": null,
        "rating": 4.8,
        "sold": 704,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Unilever",
        "cluster": "Perawatan Tubuh"
    },
    {
        "id": 379,
        "name": "Pucelle De Luxe Body Spray Victress 150 MI X 48",
        "category": "harian",
        "img": "images/catalog/products/Pucelle De Luxe Body Spray Victress 150 MI X 48.jpg",
        "price": 70000,
        "originalPrice": 84000,
        "rating": 4.6,
        "sold": 2373,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Unilever",
        "cluster": "Perawatan Tubuh"
    },
    {
        "id": 380,
        "name": "Pucelle Eau De Luxe Eau De Toilette Azure 100 MI X 24",
        "category": "harian",
        "img": "images/catalog/products/Pucelle Eau De Luxe Eau De Toilette Azure 100 MI X 24.jpg",
        "price": 80000,
        "originalPrice": null,
        "rating": 4.6,
        "sold": 3917,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Unilever",
        "cluster": "Perawatan Tubuh"
    },
    {
        "id": 381,
        "name": "Pucelle Eau De Luxe Eau De Toilette Dainity 100 MI X 24",
        "category": "harian",
        "img": "images/catalog/products/Pucelle Eau De Luxe Eau De Toilette Dainity 100 MI X 24.jpg",
        "price": 250000,
        "originalPrice": 300000,
        "rating": 4.6,
        "sold": 2696,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Unilever",
        "cluster": "Perawatan Tubuh"
    },
    {
        "id": 382,
        "name": "Pucelle Eau De Luxe Eau De Toilette Dubai Elegance 100 MI X 24",
        "category": "harian",
        "img": "images/catalog/products/Pucelle Eau De Luxe Eau De Toilette Dubai Elegance 100 MI X 24.jpg",
        "price": 130000,
        "originalPrice": 156000,
        "rating": 4.6,
        "sold": 992,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Unilever",
        "cluster": "Perawatan Tubuh"
    },
    {
        "id": 383,
        "name": "Pucelle Eau De Luxe Eau De Toilette Finesse 100 MI X 24",
        "category": "harian",
        "img": "images/catalog/products/Pucelle Eau De Luxe Eau De Toilette Finesse 100 MI X 24.jpg",
        "price": 135000,
        "originalPrice": 162000,
        "rating": 4.9,
        "sold": 3120,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Unilever",
        "cluster": "Perawatan Tubuh"
    },
    {
        "id": 384,
        "name": "Pucelle Eau De Luxe Eau De Toilette Glitzy 100 MI X 24",
        "category": "harian",
        "img": "images/catalog/products/Pucelle Eau De Luxe Eau De Toilette Glitzy 100 MI X 24.jpg",
        "price": 75000,
        "originalPrice": null,
        "rating": 4.5,
        "sold": 174,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Unilever",
        "cluster": "Perawatan Tubuh"
    },
    {
        "id": 385,
        "name": "Pucelle Eau De Luxe Eau De Toilette London Serenade 100 MI X 24",
        "category": "harian",
        "img": "images/catalog/products/Pucelle Eau De Luxe Eau De Toilette London Serenade 100 MI X 24.jpg",
        "price": 60000,
        "originalPrice": 72000,
        "rating": 4.7,
        "sold": 945,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Unilever",
        "cluster": "Perawatan Tubuh"
    },
    {
        "id": 386,
        "name": "Pucelle Eau De Luxe Eau De Toilette Lucent 100 MI X 24",
        "category": "harian",
        "img": "images/catalog/products/Pucelle Eau De Luxe Eau De Toilette Lucent 100 MI X 24.jpg",
        "price": 110000,
        "originalPrice": null,
        "rating": 4.9,
        "sold": 4114,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Unilever",
        "cluster": "Perawatan Tubuh"
    },
    {
        "id": 387,
        "name": "Pucelle Eau De Luxe Eau De Toilette New York Midnight 100 MI X 24",
        "category": "harian",
        "img": "images/catalog/products/Pucelle Eau De Luxe Eau De Toilette New York Midnight 100 MI X 24.jpg",
        "price": 185000,
        "originalPrice": null,
        "rating": 4.9,
        "sold": 2560,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Unilever",
        "cluster": "Perawatan Tubuh"
    },
    {
        "id": 388,
        "name": "Pucelle Eau De Luxe Eau De Toilette Paris Romantic 100 MI X 24",
        "category": "harian",
        "img": "images/catalog/products/Pucelle Eau De Luxe Eau De Toilette Paris Romantic 100 MI X 24.jpg",
        "price": 125000,
        "originalPrice": null,
        "rating": 4.8,
        "sold": 670,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Unilever",
        "cluster": "Perawatan Tubuh"
    },
    {
        "id": 389,
        "name": "Pucelle Eau De Luxe Eau De Toilette Seoul Rhythm 100 MI X 24",
        "category": "harian",
        "img": "images/catalog/products/Pucelle Eau De Luxe Eau De Toilette Seoul Rhythm 100 MI X 24.jpg",
        "price": 120000,
        "originalPrice": 144000,
        "rating": 4.6,
        "sold": 1247,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Unilever",
        "cluster": "Perawatan Tubuh"
    },
    {
        "id": 390,
        "name": "Pucelle Eau De Luxe Eau De Toilette Tokyo Delight 100 MI X 24",
        "category": "harian",
        "img": "images/catalog/products/Pucelle Eau De Luxe Eau De Toilette Tokyo Delight 100 MI X 24.jpg",
        "price": 245000,
        "originalPrice": 294000,
        "rating": 4.8,
        "sold": 3297,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Unilever",
        "cluster": "Perawatan Tubuh"
    },
    {
        "id": 391,
        "name": "Pucelle Eau De Luxe Eau De Toilette Victress 100 MI X 24",
        "category": "harian",
        "img": "images/catalog/products/Pucelle Eau De Luxe Eau De Toilette Victress 100 MI X 24.jpg",
        "price": 90000,
        "originalPrice": 108000,
        "rating": 4.8,
        "sold": 21,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Unilever",
        "cluster": "Perawatan Tubuh"
    },
    {
        "id": 392,
        "name": "Pucelle Eau De Luxe Parfum The Alpha 50 MI X 48",
        "category": "harian",
        "img": "images/catalog/products/Pucelle Eau De Luxe Parfum The Alpha 50 MI X 48.jpg",
        "price": 180000,
        "originalPrice": null,
        "rating": 4.7,
        "sold": 2329,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Unilever",
        "cluster": "Perawatan Tubuh"
    },
    {
        "id": 393,
        "name": "Pucelle Eau De Luxe Parfum The Beta 50 MI X 48",
        "category": "harian",
        "img": "images/catalog/products/Pucelle Eau De Luxe Parfum The Beta 50 MI X 48.jpg",
        "price": 75000,
        "originalPrice": 90000,
        "rating": 4.6,
        "sold": 2272,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Unilever",
        "cluster": "Perawatan Tubuh"
    },
    {
        "id": 394,
        "name": "Pucelle Eau De Luxe Parfum The Dazzler 50 MI X 48",
        "category": "harian",
        "img": "images/catalog/products/Pucelle Eau De Luxe Parfum The Dazzler 50 MI X 48.jpg",
        "price": 205000,
        "originalPrice": null,
        "rating": 4.8,
        "sold": 2201,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Unilever",
        "cluster": "Perawatan Tubuh"
    },
    {
        "id": 395,
        "name": "Pucelle Eau De Luxe Parfum The Goddess 50 MI X 48",
        "category": "harian",
        "img": "images/catalog/products/Pucelle Eau De Luxe Parfum The Goddess 50 MI X 48.jpg",
        "price": 65000,
        "originalPrice": 78000,
        "rating": 4.7,
        "sold": 4000,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Unilever",
        "cluster": "Perawatan Tubuh"
    },
    {
        "id": 396,
        "name": "Pucelle Eau De Luxe Parfum The Sigma 50 MI X 48",
        "category": "harian",
        "img": "images/catalog/products/Pucelle Eau De Luxe Parfum The Sigma 50 MI X 48.jpg",
        "price": 115000,
        "originalPrice": null,
        "rating": 4.7,
        "sold": 1126,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Unilever",
        "cluster": "Perawatan Tubuh"
    },
    {
        "id": 397,
        "name": "Pucelle Eau De Luxe Parfum The Stunner 50 MI X 48",
        "category": "harian",
        "img": "images/catalog/products/Pucelle Eau De Luxe Parfum The Stunner 50 MI X 48.jpg",
        "price": 175000,
        "originalPrice": 210000,
        "rating": 4.6,
        "sold": 4824,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Unilever",
        "cluster": "Perawatan Tubuh"
    },
    {
        "id": 398,
        "name": "Pucelle Mist Cologne Beautiful Vibes 72Pcsx75MI",
        "category": "harian",
        "img": "images/catalog/products/Pucelle Mist Cologne Beautiful Vibes 72Pcsx75MI.jpg",
        "price": 190000,
        "originalPrice": 228000,
        "rating": 4.9,
        "sold": 3972,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Perawatan Tubuh"
    },
    {
        "id": 399,
        "name": "Pucelle Mist Cologne Blooming Blossom 72Pcsx75MI",
        "category": "harian",
        "img": "images/catalog/products/Pucelle Mist Cologne Blooming Blossom 72Pcsx75MI.jpg",
        "price": 235000,
        "originalPrice": 282000,
        "rating": 5.0,
        "sold": 2695,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Perawatan Tubuh"
    },
    {
        "id": 400,
        "name": "Pucelle Mist Cologne Perpect Getaway 72Pcsx75MI",
        "category": "harian",
        "img": "images/catalog/products/Pucelle Mist Cologne Perpect Getaway 72Pcsx75MI.jpg",
        "price": 235000,
        "originalPrice": null,
        "rating": 4.5,
        "sold": 4765,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Perawatan Tubuh"
    },
    {
        "id": 401,
        "name": "Pucelle Mist Cologne-Jolly Rhythm (Purple) 72Pcsx75MI",
        "category": "harian",
        "img": "images/catalog/products/Pucelle Mist Cologne-Jolly Rhythm (Purple) 72Pcsx75MI.jpg",
        "price": 225000,
        "originalPrice": null,
        "rating": 4.8,
        "sold": 1984,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Perawatan Tubuh"
    },
    {
        "id": 402,
        "name": "Pucelle Mist Cologne-Sparkling Love (Pink) 48Pcsx150MI",
        "category": "harian",
        "img": "images/catalog/products/Pucelle Mist Cologne-Sparkling Love (Pink) 48Pcsx150MI.jpg",
        "price": 165000,
        "originalPrice": 198000,
        "rating": 4.8,
        "sold": 3456,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Perawatan Tubuh"
    },
    {
        "id": 403,
        "name": "Pucelle Mist Cologne-Sparkling Love (Pink) 72Pcsx75MI",
        "category": "harian",
        "img": "images/catalog/products/Pucelle Mist Cologne-Sparkling Love (Pink) 72Pcsx75MI.jpg",
        "price": 175000,
        "originalPrice": 210000,
        "rating": 4.9,
        "sold": 883,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Perawatan Tubuh"
    },
    {
        "id": 404,
        "name": "Pucelle Mist Cologne-Wavy Ocean (Blue) 48Pcsx150MI",
        "category": "harian",
        "img": "images/catalog/products/Pucelle Mist Cologne-Wavy Ocean (Blue) 48Pcsx150MI.jpg",
        "price": 80000,
        "originalPrice": 96000,
        "rating": 4.8,
        "sold": 4723,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Perawatan Tubuh"
    },
    {
        "id": 405,
        "name": "Pucelle Mist Cologne-Wavy Ocean (Blue) 72Pcsx75MI",
        "category": "harian",
        "img": "images/catalog/products/Pucelle Mist Cologne-Wavy Ocean (Blue) 72Pcsx75MI.jpg",
        "price": 75000,
        "originalPrice": 90000,
        "rating": 4.6,
        "sold": 2289,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Perawatan Tubuh"
    },
    {
        "id": 406,
        "name": "Qtela Balado 175Gr",
        "category": "makanan",
        "img": "images/catalog/products/Qtela Balado 175Gr.jpg",
        "price": 230000,
        "originalPrice": null,
        "rating": 4.5,
        "sold": 4315,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Indofood",
        "cluster": "Lainnya"
    },
    {
        "id": 407,
        "name": "Qtela Balado 60Gr",
        "category": "makanan",
        "img": "images/catalog/products/Qtela Balado 60Gr.jpg",
        "price": 185000,
        "originalPrice": 222000,
        "rating": 4.6,
        "sold": 194,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Indofood",
        "cluster": "Lainnya"
    },
    {
        "id": 408,
        "name": "Qtela Bbq 60Gr",
        "category": "makanan",
        "img": "images/catalog/products/Qtela Bbq 60Gr.jpg",
        "price": 75000,
        "originalPrice": 90000,
        "rating": 5.0,
        "sold": 202,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Indofood",
        "cluster": "Lainnya"
    },
    {
        "id": 409,
        "name": "Qtela Ori 175Gr",
        "category": "makanan",
        "img": "images/catalog/products/Qtela Ori 175Gr.jpg",
        "price": 125000,
        "originalPrice": 150000,
        "rating": 4.5,
        "sold": 314,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Indofood",
        "cluster": "Lainnya"
    },
    {
        "id": 410,
        "name": "Qtela Original 60Gr",
        "category": "makanan",
        "img": "images/catalog/products/Qtela Original 60Gr.jpg",
        "price": 250000,
        "originalPrice": null,
        "rating": 4.8,
        "sold": 4767,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Indofood",
        "cluster": "Lainnya"
    },
    {
        "id": 411,
        "name": "Rejoice 3In1 Korean",
        "category": "rt",
        "img": "images/catalog/products/Rejoice 3In1 Korean.jpg",
        "price": 115000,
        "originalPrice": 138000,
        "rating": 4.9,
        "sold": 769,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 412,
        "name": "Rejoice Conditioner Rich",
        "category": "rt",
        "img": "images/catalog/products/Rejoice Conditioner Rich.jpg",
        "price": 165000,
        "originalPrice": null,
        "rating": 4.7,
        "sold": 84,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 413,
        "name": "Rejoice Hijab Anti Dandruff",
        "category": "rt",
        "img": "images/catalog/products/Rejoice Hijab Anti Dandruff.jpg",
        "price": 110000,
        "originalPrice": null,
        "rating": 4.9,
        "sold": 1875,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 414,
        "name": "Rejoice Rich (Orange)",
        "category": "rt",
        "img": "images/catalog/products/Rejoice Rich (Orange).jpg",
        "price": 125000,
        "originalPrice": null,
        "rating": 4.9,
        "sold": 4403,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 415,
        "name": "Rejoiche 3In1 Hijab",
        "category": "harian",
        "img": "images/catalog/products/Rejoiche 3In1 Hijab.jpg",
        "price": 160000,
        "originalPrice": 192000,
        "rating": 4.8,
        "sold": 1907,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 416,
        "name": "Resik V Godokan Sirih Btl 36X100MI",
        "category": "harian",
        "img": "images/catalog/products/Resik V Godokan Sirih Btl 36X100MI.jpg",
        "price": 220000,
        "originalPrice": null,
        "rating": 4.8,
        "sold": 1177,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Perawatan Tubuh"
    },
    {
        "id": 417,
        "name": "Resik V Mjk Btl 36X200MI",
        "category": "harian",
        "img": "images/catalog/products/Resik V Mjk Btl 36X200MI.jpg",
        "price": 150000,
        "originalPrice": 180000,
        "rating": 4.8,
        "sold": 384,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Perawatan Tubuh"
    },
    {
        "id": 418,
        "name": "Resik V Mjk Btl 36X90MI",
        "category": "harian",
        "img": "images/catalog/products/Resik V Mjk Btl 36X90MI.jpg",
        "price": 135000,
        "originalPrice": null,
        "rating": 4.9,
        "sold": 2244,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Perawatan Tubuh"
    },
    {
        "id": 422,
        "name": "Royco Ayam 220Gr",
        "category": "harian",
        "img": "images/catalog/products/Royco Ayam 220Gr.jpg",
        "price": 185000,
        "originalPrice": 222000,
        "rating": 4.7,
        "sold": 3164,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Unilever",
        "cluster": "Lainnya"
    },
    {
        "id": 423,
        "name": "Royco Ayam 94Gr",
        "category": "harian",
        "img": "images/catalog/products/Royco Ayam 94Gr.jpg",
        "price": 235000,
        "originalPrice": 282000,
        "rating": 4.7,
        "sold": 3111,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Unilever",
        "cluster": "Lainnya"
    },
    {
        "id": 424,
        "name": "Royco Sapi 220Gr",
        "category": "harian",
        "img": "images/catalog/products/Royco Sapi 220Gr.jpg",
        "price": 70000,
        "originalPrice": null,
        "rating": 4.9,
        "sold": 383,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Unilever",
        "cluster": "Lainnya"
    },
    {
        "id": 425,
        "name": "Royco Sapi 94Gr",
        "category": "harian",
        "img": "images/catalog/products/Royco Sapi 94Gr.jpg",
        "price": 65000,
        "originalPrice": 78000,
        "rating": 4.5,
        "sold": 1020,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Unilever",
        "cluster": "Lainnya"
    },
    {
        "id": 426,
        "name": "Salonpas Koyo Hot Pereda Nyeri 5X2",
        "category": "harian",
        "img": "images/catalog/products/Salonpas Koyo Hot Pereda Nyeri 5X2.jpg",
        "price": 200000,
        "originalPrice": 240000,
        "rating": 4.6,
        "sold": 4876,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 427,
        "name": "Salonpas Koyo Pereda Nyeri 5X2",
        "category": "harian",
        "img": "images/catalog/products/Salonpas Koyo Pereda Nyeri 5X2.jpg",
        "price": 180000,
        "originalPrice": null,
        "rating": 4.5,
        "sold": 91,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 428,
        "name": "Sarden Abc 425G",
        "category": "harian",
        "img": "images/catalog/products/Sarden Abc 425G.jpg",
        "price": 170000,
        "originalPrice": 204000,
        "rating": 4.8,
        "sold": 2661,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "ABC",
        "cluster": "Lainnya"
    },
    {
        "id": 429,
        "name": "Sasa Msg 1Kg",
        "category": "harian",
        "img": "images/catalog/products/Sasa Msg 1Kg.jpg",
        "price": 150000,
        "originalPrice": 180000,
        "rating": 4.9,
        "sold": 341,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 430,
        "name": "Sedaap Mie Ayam Bawang 86Gr",
        "category": "makanan",
        "img": "images/catalog/products/Sedaap Mie Ayam Bawang 86Gr.jpg",
        "price": 110000,
        "originalPrice": 132000,
        "rating": 4.9,
        "sold": 4199,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Wings",
        "cluster": "Mie Instan"
    },
    {
        "id": 431,
        "name": "Sedaap Mie Ayam Spesial 86Gr",
        "category": "makanan",
        "img": "images/catalog/products/Sedaap Mie Ayam Spesial 86Gr.jpg",
        "price": 80000,
        "originalPrice": 96000,
        "rating": 4.7,
        "sold": 512,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Wings",
        "cluster": "Mie Instan"
    },
    {
        "id": 432,
        "name": "Sedaap Mie Baso Spesial 83Gr",
        "category": "makanan",
        "img": "images/catalog/products/Sedaap Mie Baso Spesial 83Gr.jpg",
        "price": 235000,
        "originalPrice": 282000,
        "rating": 4.8,
        "sold": 2271,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Wings",
        "cluster": "Mie Instan"
    },
    {
        "id": 433,
        "name": "Sedaap Mie Goreng 90Gr",
        "category": "makanan",
        "img": "images/catalog/products/Sedaap Mie Goreng 90Gr.jpg",
        "price": 145000,
        "originalPrice": null,
        "rating": 4.6,
        "sold": 22,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Wings",
        "cluster": "Mie Instan"
    },
    {
        "id": 434,
        "name": "Sedaap Mie Goreng Isi 5 Bag 90Gr 8 X 5 X 90 Gr",
        "category": "makanan",
        "img": "images/catalog/products/Sedaap Mie Goreng Isi 5 Bag 90Gr 8 X 5 X 90 Gr.jpg",
        "price": 50000,
        "originalPrice": null,
        "rating": 4.7,
        "sold": 3796,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Wings",
        "cluster": "Mie Instan"
    },
    {
        "id": 435,
        "name": "Sedaap Mie Kari Ayam 86Gr",
        "category": "makanan",
        "img": "images/catalog/products/Sedaap Mie Kari Ayam 86Gr.jpg",
        "price": 175000,
        "originalPrice": 210000,
        "rating": 4.8,
        "sold": 4506,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Wings",
        "cluster": "Mie Instan"
    },
    {
        "id": 436,
        "name": "Sedaap Mie Soto 90Gr",
        "category": "makanan",
        "img": "images/catalog/products/Sedaap Mie Soto 90Gr.jpg",
        "price": 240000,
        "originalPrice": 288000,
        "rating": 4.6,
        "sold": 2414,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Wings",
        "cluster": "Mie Instan"
    },
    {
        "id": 437,
        "name": "Sedaap Mie Soto Isi 5 5X8X75 Gr",
        "category": "makanan",
        "img": "images/catalog/products/Sedaap Mie Soto Isi 5 5X8X75 Gr.jpg",
        "price": 200000,
        "originalPrice": 240000,
        "rating": 4.6,
        "sold": 1883,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Wings",
        "cluster": "Mie Instan"
    },
    {
        "id": 438,
        "name": "Sedaap Selero Padang 86Gr",
        "category": "makanan",
        "img": "images/catalog/products/Sedaap Selero Padang 86Gr.jpg",
        "price": 225000,
        "originalPrice": null,
        "rating": 4.9,
        "sold": 962,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Wings",
        "cluster": "Mie Instan"
    },
    {
        "id": 439,
        "name": "Sedaap Singapore Spice Laksa 83Gr",
        "category": "makanan",
        "img": "images/catalog/products/Sedaap Singapore Spice Laksa 83Gr.jpg",
        "price": 105000,
        "originalPrice": 126000,
        "rating": 4.7,
        "sold": 2355,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Wings",
        "cluster": "Mie Instan"
    },
    {
        "id": 440,
        "name": "Sensodyne Tp Repair & Protect 100Gr",
        "category": "harian",
        "img": "images/catalog/products/Sensodyne Tp Repair & Protect 100Gr.jpg",
        "price": 160000,
        "originalPrice": null,
        "rating": 4.7,
        "sold": 2858,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 442,
        "name": "Sirup Marjan Bondoun Cocopandan",
        "category": "minuman",
        "img": "images/catalog/products/Sirup Marjan Bondoun Cocopandan.jpg",
        "price": 130000,
        "originalPrice": 156000,
        "rating": 4.7,
        "sold": 997,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Marjan",
        "cluster": "Lainnya"
    },
    {
        "id": 443,
        "name": "Sirup Marjan Bondoun Melon",
        "category": "minuman",
        "img": "images/catalog/products/Sirup Marjan Bondoun Melon.jpg",
        "price": 225000,
        "originalPrice": 270000,
        "rating": 4.8,
        "sold": 3297,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Marjan",
        "cluster": "Lainnya"
    },
    {
        "id": 444,
        "name": "Soklin Liquid Botol Sakura 1L",
        "category": "rt",
        "img": "images/catalog/products/Soklin Liquid Botol Sakura 1L.jpg",
        "price": 110000,
        "originalPrice": null,
        "rating": 4.8,
        "sold": 384,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Wings",
        "cluster": "Pembersih Rumah"
    },
    {
        "id": 445,
        "name": "Soklin Liquid Botol Violet 1L",
        "category": "rt",
        "img": "images/catalog/products/Soklin Liquid Botol Violet 1L.jpg",
        "price": 50000,
        "originalPrice": null,
        "rating": 4.8,
        "sold": 2216,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Wings",
        "cluster": "Pembersih Rumah"
    },
    {
        "id": 447,
        "name": "Soklin Liquid Soft Pink 1L",
        "category": "rt",
        "img": "images/catalog/products/Soklin Liquid Soft Pink 1L.jpg",
        "price": 215000,
        "originalPrice": null,
        "rating": 4.5,
        "sold": 4766,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Wings",
        "cluster": "Pembersih Rumah"
    },
    {
        "id": 448,
        "name": "Sprite Zero Sugar Lemon Lime (24 X 250MI)",
        "category": "minuman",
        "img": "images/catalog/products/Sprite Zero Sugar Lemon Lime (24 X 250MI).jpg",
        "price": 205000,
        "originalPrice": 246000,
        "rating": 4.7,
        "sold": 2749,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 449,
        "name": "Starbucks Doubleshot Caramel Latte 220MI",
        "category": "minuman",
        "img": "images/catalog/products/Starbucks Doubleshot Caramel Latte 220MI.jpg",
        "price": 105000,
        "originalPrice": 126000,
        "rating": 4.6,
        "sold": 3994,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 450,
        "name": "Starbucks Doubleshot Espresso Caramel Latte 220MI X 24",
        "category": "minuman",
        "img": "images/catalog/products/Starbucks Doubleshot Espresso Caramel Latte 220MI X 24.jpg",
        "price": 95000,
        "originalPrice": 114000,
        "rating": 4.9,
        "sold": 844,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 451,
        "name": "Starbucks Doubleshot Espresso Latte 220MI",
        "category": "minuman",
        "img": "images/catalog/products/Starbucks Doubleshot Espresso Latte 220MI.jpg",
        "price": 240000,
        "originalPrice": 288000,
        "rating": 5.0,
        "sold": 3161,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 452,
        "name": "Starbucks Doubleshot Espresso Latte 220MI X 24",
        "category": "minuman",
        "img": "images/catalog/products/Starbucks Doubleshot Espresso Latte 220MI X 24.jpg",
        "price": 95000,
        "originalPrice": 114000,
        "rating": 4.8,
        "sold": 463,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 453,
        "name": "Sukro Oven Garlic",
        "category": "makanan",
        "img": "images/catalog/products/Sukro Oven Garlic.jpg",
        "price": 115000,
        "originalPrice": 138000,
        "rating": 4.7,
        "sold": 1173,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 454,
        "name": "Sukro Oven Jagung Bakar (Roasted Corn)",
        "category": "makanan",
        "img": "images/catalog/products/Sukro Oven Jagung Bakar (Roasted Corn).jpg",
        "price": 180000,
        "originalPrice": 216000,
        "rating": 4.9,
        "sold": 2964,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 455,
        "name": "Sukro Oven Spicy",
        "category": "makanan",
        "img": "images/catalog/products/Sukro Oven Spicy.jpg",
        "price": 155000,
        "originalPrice": null,
        "rating": 4.9,
        "sold": 4816,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 456,
        "name": "Sukro Peanuts Barbeque 95Gr",
        "category": "makanan",
        "img": "images/catalog/products/Sukro Peanuts Barbeque 95Gr.jpg",
        "price": 65000,
        "originalPrice": null,
        "rating": 4.9,
        "sold": 1402,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 457,
        "name": "Sukro Peanuts Coconut 95Gr",
        "category": "makanan",
        "img": "images/catalog/products/Sukro Peanuts Coconut 95Gr.jpg",
        "price": 60000,
        "originalPrice": 72000,
        "rating": 4.7,
        "sold": 1900,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 458,
        "name": "Sukro Peanuts Kribo 95Gr",
        "category": "makanan",
        "img": "images/catalog/products/Sukro Peanuts Kribo 95Gr.jpg",
        "price": 50000,
        "originalPrice": 60000,
        "rating": 4.6,
        "sold": 2103,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 459,
        "name": "Sukro Peanuts Original 95Gr",
        "category": "makanan",
        "img": "images/catalog/products/Sukro Peanuts Original 95Gr.jpg",
        "price": 205000,
        "originalPrice": 246000,
        "rating": 5.0,
        "sold": 1606,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 464,
        "name": "Tancho Hair Dye 48X80Gr",
        "category": "harian",
        "img": "images/catalog/products/Tancho Hair Dye 48X80Gr.jpg",
        "price": 235000,
        "originalPrice": 282000,
        "rating": 4.9,
        "sold": 2707,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 465,
        "name": "Tancho Hair Dye S 40Grx48",
        "category": "harian",
        "img": "images/catalog/products/Tancho Hair Dye S 40Grx48.jpg",
        "price": 60000,
        "originalPrice": 72000,
        "rating": 4.7,
        "sold": 205,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 466,
        "name": "Top - Mokachinno Double Shot 20 X 198Gr",
        "category": "harian",
        "img": "images/catalog/products/Top - Mokachinno Double Shot 20 X 198Gr.jpg",
        "price": 185000,
        "originalPrice": 222000,
        "rating": 4.6,
        "sold": 4698,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 467,
        "name": "Top Coffee Cappuccino 20Bagx6Sx25Gr",
        "category": "minuman",
        "img": "images/catalog/products/Top Coffee Cappuccino 20Bagx6Sx25Gr.jpg",
        "price": 235000,
        "originalPrice": 282000,
        "rating": 4.6,
        "sold": 1238,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Mayora",
        "cluster": "Kopi & Teh"
    },
    {
        "id": 475,
        "name": "Vixal Cleaner Porselen Blue 360MI",
        "category": "rt",
        "img": "images/catalog/products/Vixal Cleaner Porselen Blue 360MI.jpg",
        "price": 70000,
        "originalPrice": 84000,
        "rating": 4.9,
        "sold": 1104,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Wings",
        "cluster": "Pembersih Rumah"
    },
    {
        "id": 476,
        "name": "Welmove 5S",
        "category": "harian",
        "img": "images/catalog/products/Welmove 5S.jpg",
        "price": 240000,
        "originalPrice": null,
        "rating": 4.6,
        "sold": 3529,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 477,
        "name": "Windex Freshpump 500MI",
        "category": "rt",
        "img": "images/catalog/products/Windex Freshpump 500MI.jpg",
        "price": 215000,
        "originalPrice": null,
        "rating": 4.9,
        "sold": 3298,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Pembersih Rumah"
    },
    {
        "id": 478,
        "name": "Windex Liquid Fresh Pump 500MI",
        "category": "rt",
        "img": "images/catalog/products/Windex Liquid Fresh Pump 500MI.jpg",
        "price": 210000,
        "originalPrice": null,
        "rating": 4.7,
        "sold": 782,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Pembersih Rumah"
    },
    {
        "id": 479,
        "name": "Windex Liquid Lemon Pump 500MI",
        "category": "rt",
        "img": "images/catalog/products/Windex Liquid Lemon Pump 500MI.jpg",
        "price": 160000,
        "originalPrice": 192000,
        "rating": 4.8,
        "sold": 2370,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Pembersih Rumah"
    },
    {
        "id": 480,
        "name": "Wow Spaghetti Bolognese 76G",
        "category": "makanan",
        "img": "images/catalog/products/Wow Spaghetti Bolognese 76G.jpg",
        "price": 120000,
        "originalPrice": 144000,
        "rating": 4.9,
        "sold": 3331,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Mie Instan"
    },
    {
        "id": 481,
        "name": "Wow Spaghetti Carbonara 80G",
        "category": "makanan",
        "img": "images/catalog/products/Wow Spaghetti Carbonara 80G.jpg",
        "price": 150000,
        "originalPrice": 180000,
        "rating": 4.9,
        "sold": 4719,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Mie Instan"
    },
    {
        "id": 570,
        "name": "Daia Powder Detergent White 800Grx12",
        "category": "rt",
        "img": "images/catalog/products/daia-powder-detergent-white-800grx12.jpg",
        "price": 240000,
        "originalPrice": null,
        "rating": 4.9,
        "sold": 2728,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Wings",
        "cluster": "Pembersih Rumah"
    },
    {
        "id": 571,
        "name": "Daia Powder Detergent White 245Grx24",
        "category": "rt",
        "img": "images/catalog/products/daia-powder-detergent-white-245grx24.jpg",
        "price": 140000,
        "originalPrice": 168000,
        "rating": 4.9,
        "sold": 1680,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Wings",
        "cluster": "Pembersih Rumah"
    },
    {
        "id": 574,
        "name": "Mama Lemon Dishwashing Liquid Jeruk Nipis 750Mlx12",
        "category": "rt",
        "img": "images/catalog/products/mama-lemon-dishwashing-liquid-jeruk-nipis-750mlx12.jpg",
        "price": 115000,
        "originalPrice": null,
        "rating": 4.7,
        "sold": 1706,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Wings",
        "cluster": "Pembersih Rumah"
    },
    {
        "id": 575,
        "name": "Mama Lemon Ekstrak Jeruk Nipis 680MI",
        "category": "rt",
        "img": "images/catalog/products/mama-lemon-ekstrak-jeruk-nipis-680mi.jpg",
        "price": 70000,
        "originalPrice": null,
        "rating": 4.5,
        "sold": 725,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Wings",
        "cluster": "Pembersih Rumah"
    },
    {
        "id": 577,
        "name": "Mama Lime Charcoal Pouch 680 MI X 12",
        "category": "rt",
        "img": "images/catalog/products/mama-lime-charcoal-pouch-680-mi-x-12.jpg",
        "price": 240000,
        "originalPrice": 288000,
        "rating": 4.7,
        "sold": 1617,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Wings",
        "cluster": "Pembersih Rumah"
    },
    {
        "id": 578,
        "name": "Mama Lime Pouch 680MI X12",
        "category": "rt",
        "img": "images/catalog/products/mama-lime-pouch-680mi-x12.jpg",
        "price": 115000,
        "originalPrice": null,
        "rating": 4.7,
        "sold": 324,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Wings",
        "cluster": "Pembersih Rumah"
    },
    {
        "id": 580,
        "name": "Mamalime 750Ml X 12",
        "category": "harian",
        "img": "images/catalog/products/mamalime-750ml-x-12.jpg",
        "price": 170000,
        "originalPrice": null,
        "rating": 4.7,
        "sold": 3586,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Lainnya"
    },
    {
        "id": 581,
        "name": "Baygon Flower 675Ml",
        "category": "rt",
        "img": "images/catalog/products/baygon-flower-675ml.jpg",
        "price": 105000,
        "originalPrice": null,
        "rating": 4.8,
        "sold": 4114,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Pembersih Rumah"
    },
    {
        "id": 582,
        "name": "Baygon Coil Standart Green 8Hrs",
        "category": "rt",
        "img": "images/catalog/products/baygon-coil-standart-green-8hrs.jpg",
        "price": 50000,
        "originalPrice": null,
        "rating": 4.7,
        "sold": 3223,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Pembersih Rumah"
    },
    {
        "id": 635,
        "name": "Gatsby Water Gloss Hyper Solid 24X100Gr",
        "category": "minuman",
        "img": "images/catalog/products/gatsby-water-gloss-hyper-solid-24x100gr.jpg",
        "price": 235000,
        "originalPrice": null,
        "rating": 4.7,
        "sold": 934,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15",
        "brand": "Lainnya",
        "cluster": "Perawatan Tubuh"
    }
];

const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
};

const formatSold = (num) => {
    return num >= 1000 ? (num / 1000).toFixed(1).replace('.0', '') + 'RB' : num;
};

const categoryLabels = {
    'minuman': 'Aneka Minuman',
    'makanan': 'Makanan & Snack',
    'rt': 'Kebutuhan Rumah Tangga',
    'harian': 'Kebutuhan Lainnya'
};


// State Variables untuk Filter & Pagination
let currentCategoryFilters = [];
let currentBrandFilters = [];
let currentCluster = "All";
let currentRatingFilter = false;
let currentSearch = "";
let currentSort = "relevan";
let currentPage = 1;
const itemsPerPage = 20;

// DOM Elements
const grid = document.getElementById('ecommerceGrid');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const categoryCheckboxes = document.querySelectorAll('.filter-category');
const ratingCheckbox = document.querySelector('.filter-rating');
const resetBtn = document.getElementById('resetFilter');
const productCountSpan = document.getElementById('productCount');
const paginationContainer = document.getElementById('paginationContainer');


// Debounce function
function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

// Fungsi Menggambar Pagination
function renderPagination(totalItems) {
    if (!paginationContainer) return;
    paginationContainer.innerHTML = '';

    const totalPages = Math.ceil(totalItems / itemsPerPage);
    if (totalPages <= 1) return;

    const maxVisibleButtons = 5;
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + maxVisibleButtons - 1);

    if (endPage - startPage < maxVisibleButtons - 1) {
        startPage = Math.max(1, endPage - maxVisibleButtons + 1);
    }

    // Prev Button
    const prevBtn = document.createElement('button');
    prevBtn.className = 'page-btn';
    if (currentPage === 1) prevBtn.classList.add('disabled');
    prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
    prevBtn.onclick = () => { if (currentPage > 1) { currentPage--; applyFilters(true); } };
    paginationContainer.appendChild(prevBtn);

    // Page Numbers
    for (let i = startPage; i <= endPage; i++) {
        const btn = document.createElement('button');
        btn.className = 'page-btn';
        if (i === currentPage) btn.classList.add('active');
        btn.innerText = i;
        btn.onclick = () => { currentPage = i; applyFilters(true); };
        paginationContainer.appendChild(btn);
    }

    // Next Button
    const nextBtn = document.createElement('button');
    nextBtn.className = 'page-btn';
    if (currentPage === totalPages) nextBtn.classList.add('disabled');
    nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
    nextBtn.onclick = () => { if (currentPage < totalPages) { currentPage++; applyFilters(true); } };
    paginationContainer.appendChild(nextBtn);
}

// Fungsi Menampilkan Skeleton
function renderSkeletons() {
    if (!grid) return;
    grid.innerHTML = '';
    for (let i = 0; i < 8; i++) {
        const skel = document.createElement('div');
        skel.className = 'skeleton-card';
        skel.innerHTML = `
            <div class="skeleton skeleton-img"></div>
            <div class="skeleton skeleton-text"></div>
            <div class="skeleton skeleton-text-sm"></div>
        `;
        grid.appendChild(skel);
    }
}

// Fungsi Inisialisasi Brand List di Sidebar
function initBrandFilter() {
    const brandListContainer = document.getElementById('brandList');
    if (!brandListContainer) return;

    const brands = [...new Set(ecommerceProducts.map(p => p.brand))].sort();
    
    brandListContainer.innerHTML = brands.map(brand => `
        <label class="custom-checkbox">
            <input type="checkbox" value="${brand}" class="filter-brand">
            ${brand}
        </label>
    `).join('');

    // Add listeners to new brand checkboxes
    document.querySelectorAll('.filter-brand').forEach(cb => {
        cb.addEventListener('change', () => {
            currentBrandFilters = Array.from(document.querySelectorAll('.filter-brand'))
                .filter(i => i.checked)
                .map(i => i.value);
            applyFilters();
        });
    });
}

// Fungsi Utama: Menggambar Kartu Produk
function renderEcommerce(items, totalCount) {
    if (!grid) return;
    grid.innerHTML = '';

    if (totalCount === 0) {
        grid.innerHTML = `<div class="empty-state" style="grid-column: 1/-1; text-align: center; padding: 50px;">
            <i class="fas fa-search" style="font-size: 3rem; color: #ddd; margin-bottom: 20px;"></i>
            <p style="color: var(--muted);">Maaf, barang yang Anda cari tidak ditemukan.</p>
        </div>`;
        if (productCountSpan) productCountSpan.innerText = `Menampilkan 0 produk`;
        return;
    }

    if (productCountSpan) productCountSpan.innerText = `Menampilkan ${totalCount} produk (Halaman ${currentPage})`;


    const fragment = document.createDocumentFragment();
    items.forEach(prod => {
        let badgeHtml = '';
        if (prod.originalPrice || prod.price < 150000) { // Contoh logika promo
            badgeHtml = `<div class="prod-badge">Promo</div>`;
        }

        const waMessage = encodeURIComponent(`Halo KOBOI, saya berminat memesan: ${prod.name} (${prod.sku})`);
        const waUrl = `https://wa.me/6285774444805?text=${waMessage}`;
        const catLabel = categoryLabels[prod.category] || 'Umum';

        const card = document.createElement('div');
        card.className = 'ecommerce-card';
        card.innerHTML = `
            ${badgeHtml}
            <div class="img-wrapper">
                <img src="${prod.img}" alt="${prod.name}" loading="lazy" onerror="this.src='https://placehold.co/400x400/F3F4F6/FF7A00?text=${encodeURIComponent(prod.name)}'">
            </div>
            <div class="card-body">
                <span class="prod-category">${catLabel}</span>
                <h3 class="prod-name" title="${prod.name}">${prod.name}</h3>
            </div>
            <div class="card-footer">
                <a href="${waUrl}" target="_blank" class="btn-buy">
                    <i class="fab fa-whatsapp"></i> Chat Admin
                </a>
            </div>
        `;

        fragment.appendChild(card);
    });

    grid.appendChild(fragment);
}



// Logika Aplikasi Saringan & Urutan
function applyFilters(keepPage = false) {
    if (!keepPage) currentPage = 1;

    let filtered = ecommerceProducts.filter(p => {
        // Filter Category
        if (currentCategoryFilters.length > 0) {
            if (!currentCategoryFilters.includes(p.category)) return false;
        }

        // Filter Brand
        if (currentBrandFilters.length > 0) {
            if (!currentBrandFilters.includes(p.brand)) return false;
        }

        // Filter Cluster
        if (currentCluster !== "All") {
            if (p.cluster !== currentCluster) return false;
        }

        // Filter Search
        if (currentSearch) {
            const searchLower = currentSearch.toLowerCase();
            const matchesName = p.name ? p.name.toLowerCase().includes(searchLower) : false;
            const matchesSku = p.sku ? p.sku.toLowerCase().includes(searchLower) : false;
            if (!matchesName && !matchesSku) return false;
        }

        return true;
    });

    // Sorting Logic
    if (currentSort === 'terbaru') {
        filtered.sort((a, b) => b.id - a.id);
    }

    const totalCount = filtered.length;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedItems = filtered.slice(startIndex, startIndex + itemsPerPage);

    // Render logic (Removed artificial delay for instant updates)
    renderEcommerce(paginatedItems, totalCount);
    renderPagination(totalCount);

    if (keepPage) {
        window.scrollTo({ top: grid.offsetTop - 100, behavior: 'smooth' });
    }
}

// Event Listeners
if (grid) {
    categoryCheckboxes.forEach(cb => {
        cb.addEventListener('change', () => {
            if (cb.checked) {
                currentCategoryFilters.push(cb.value);
            } else {
                currentCategoryFilters = currentCategoryFilters.filter(v => v !== cb.value);
            }
            applyFilters();
        });
    });



    if (searchInput) {
        const processSearch = debounce((e) => {
            currentSearch = e.target.value.toLowerCase();
            applyFilters();
        }, 300);
        searchInput.addEventListener('input', processSearch);
    }

    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            applyFilters();
        });
    }

    // Reset Logic Extended
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            document.querySelectorAll('.filter-category, .filter-brand').forEach(cb => cb.checked = false);
            document.querySelectorAll('.cluster-pill').forEach(p => p.classList.remove('active'));
            document.querySelector('.cluster-pill[data-cluster="All"]').classList.add('active');
            
            if (searchInput) searchInput.value = '';
            if (sortSelect) sortSelect.value = 'relevan';

            currentCategoryFilters = [];
            currentBrandFilters = [];
            currentCluster = "All";
            currentSearch = "";
            currentSort = "relevan";
            currentPage = 1;

            applyFilters();
        });
    }

    // Cluster Pills Listeners
    document.querySelectorAll('.cluster-pill').forEach(pill => {
        pill.addEventListener('click', () => {
            document.querySelectorAll('.cluster-pill').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            currentCluster = pill.getAttribute('data-cluster');
            applyFilters();
        });
    });

    // Inisialisasi awal
    if (grid) {
        initBrandFilter();
        applyFilters();
    }
}

// Katalog Carousel Logic
const carouselItems = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.nav-dot');
const prevBtn = document.getElementById('prevSlide');
const nextBtn = document.getElementById('nextSlide');
let currentSlide = 0;
let carouselInterval;

function showSlide(index) {
    if (carouselItems.length === 0) return;
    
    // Reset active classes
    carouselItems.forEach(item => item.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Set new active slide
    currentSlide = (index + carouselItems.length) % carouselItems.length;
    carouselItems[currentSlide].classList.add('active');
    if (dots[currentSlide]) dots[currentSlide].classList.add('active');
}

function nextSlideFunc() {
    showSlide(currentSlide + 1);
}

function prevSlideFunc() {
    showSlide(currentSlide - 1);
}

function startCarousel() {
    stopCarousel();
    carouselInterval = setInterval(nextSlideFunc, 6000);
}

function stopCarousel() {
    if (carouselInterval) clearInterval(carouselInterval);
}

if (nextBtn) nextBtn.addEventListener('click', () => {
    nextSlideFunc();
    startCarousel(); // Reset timer
});

if (prevBtn) prevBtn.addEventListener('click', () => {
    prevSlideFunc();
    startCarousel(); // Reset timer
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
        startCarousel(); // Reset timer
    });
});

// Start the carousel if elements exist
if (carouselItems.length > 0) {
    startCarousel();
}

// Cookie Consent Logic
function initCookieConsent() {
    if (document.getElementById('cookieConsentBanner')) return;

    const cookieConsent = document.createElement('div');
    cookieConsent.id = 'cookieConsentBanner';
    cookieConsent.className = 'cookie-consent';
    cookieConsent.innerHTML = `
        <div class="cookie-content">
            <i class="fas fa-cookie-bite"></i>
            <p>Website kami menggunakan cookie untuk meningkatkan pengalaman Anda dan menganalisis trafik kami. Dengan klik "Setuju", Anda menyetujui penggunaan cookie kami.</p>
        </div>
        <div class="cookie-btns">
            <button class="btn-cookie-decline" id="cookieDecline">Tolak</button>
            <button class="btn-cookie-accept" id="cookieAccept">Setuju</button>
        </div>
    `;
    document.body.appendChild(cookieConsent);

    const acceptBtn = document.getElementById('cookieAccept');
    const declineBtn = document.getElementById('cookieDecline');

    if (!localStorage.getItem('cookieConsent')) {
        setTimeout(() => {
            cookieConsent.classList.add('show');
        }, 2000);
    }

    acceptBtn.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.setItem('cookieConsent', 'accepted');
        cookieConsent.classList.remove('show');
        setTimeout(() => cookieConsent.remove(), 600);
    });

    declineBtn.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.setItem('cookieConsent', 'declined');
        cookieConsent.classList.remove('show');
        setTimeout(() => cookieConsent.remove(), 600);
    });
}

// Start Cookie Consent
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCookieConsent);
} else {
    initCookieConsent();
}
