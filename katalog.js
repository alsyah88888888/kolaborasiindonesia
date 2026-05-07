// DATA TERFILTER (Hanya Produk dengan Foto)
const ecommerceProducts = [
    {
        "id": 1,
        "sku": "CHOLATOS-073",
        "name": "Chocolatos Drink Creamy Chocolate 24Gr",
        "category": "minuman",
        "img": "images/catalog/products/chocolatos-drink-creamy-chocolate-24gr.jpg",
        "price": 164000,
        "stock": 383,
        "rating": 4.7,
        "sold": 522,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 2,
        "sku": "ULTRA-663",
        "name": "Ultra Milk Uht Caramel 200MI",
        "category": "minuman",
        "img": "images/catalog/products/ultra-milk-uht-caramel-200mi.jpg",
        "price": 147000,
        "stock": 124,
        "rating": 4.7,
        "sold": 630,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 3,
        "sku": "ULTRA-662",
        "name": "Ultra Milk Plain 1000MI",
        "category": "minuman",
        "img": "images/catalog/products/ultra-milk-plain-1000mi.jpg",
        "price": 209000,
        "stock": 447,
        "rating": 4.7,
        "sold": 126,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 4,
        "sku": "TEH-659",
        "name": "Teh Pucuk 500MI",
        "category": "minuman",
        "img": "images/catalog/products/teh-pucuk-500mi.jpg",
        "price": 226000,
        "stock": 170,
        "rating": 4.6,
        "sold": 1063,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 5,
        "sku": "TEH-658",
        "name": "Teh Kotak 300MI",
        "category": "minuman",
        "img": "images/catalog/products/teh-kotak-300mi.jpg",
        "price": 162000,
        "stock": 228,
        "rating": 4.8,
        "sold": 1760,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 6,
        "sku": "TEH-657",
        "name": "Teh Botol Sosro Original 24X450MI",
        "category": "minuman",
        "img": "images/catalog/products/teh-botol-sosro-original-24x450mi.jpg",
        "price": 117000,
        "stock": 403,
        "rating": 4.8,
        "sold": 133,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 7,
        "sku": "SPRITE-638",
        "name": "Sprite Soft Drink (24 Cans X 250 MI)",
        "category": "minuman",
        "img": "images/catalog/products/sprite-soft-drink-24-cans-x-250-mi.jpg",
        "price": 148000,
        "stock": 480,
        "rating": 4.7,
        "sold": 1582,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 8,
        "sku": "SPRITE-637",
        "name": "Sprite Soft Drink (12 Bottles X 250 MI)",
        "category": "minuman",
        "img": "images/catalog/products/sprite-soft-drink-12-bottles-x-250-mi.jpg",
        "price": 128000,
        "stock": 418,
        "rating": 4.8,
        "sold": 1768,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 9,
        "sku": "SARIWANGI-608",
        "name": "Sariwangi Tea Asli 48 X 25S X 1.85Gr",
        "category": "harian",
        "img": "images/catalog/products/sariwangi-tea-asli-48-x-25s-x-1-85gr.jpg",
        "price": 206000,
        "stock": 22,
        "rating": 4.6,
        "sold": 1236,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 10,
        "sku": "OATSIDE-518",
        "name": "Oatside Oat Milk Coffee Caps",
        "category": "harian",
        "img": "images/catalog/products/oatside-oat-milk-coffee-caps.jpg",
        "price": 222000,
        "stock": 309,
        "rating": 4.5,
        "sold": 1910,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 11,
        "sku": "OATSIDE-517",
        "name": "Oatside Oat Milk Chocolate Caps",
        "category": "harian",
        "img": "images/catalog/products/oatside-oat-milk-chocolate-caps.jpg",
        "price": 103000,
        "stock": 256,
        "rating": 4.9,
        "sold": 546,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 12,
        "sku": "OATSIDE-516",
        "name": "Oatside Oat Milk Barista Blend Caps",
        "category": "harian",
        "img": "images/catalog/products/oatside-oat-milk-barista-blend-caps.jpg",
        "price": 198000,
        "stock": 203,
        "rating": 4.7,
        "sold": 941,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 13,
        "sku": "OATSIDE-515",
        "name": "Oatside Milk Plain Barista Straw 200MI",
        "category": "harian",
        "img": "images/catalog/products/oatside-milk-plain-barista-straw-200mi.jpg",
        "price": 161000,
        "stock": 146,
        "rating": 4.9,
        "sold": 993,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 14,
        "sku": "OATSIDE-514",
        "name": "Oatside Milk Chocolate Straw 200MI",
        "category": "harian",
        "img": "images/catalog/products/oatside-milk-chocolate-straw-200mi.jpg",
        "price": 123000,
        "stock": 345,
        "rating": 5.0,
        "sold": 295,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 15,
        "sku": "NESCAFE-503",
        "name": "Nescafe Kopi Classic 10X(60X2Gr)",
        "category": "harian",
        "img": "images/catalog/products/nescafe-kopi-classic-10x-60x2gr.jpg",
        "price": 159000,
        "stock": 74,
        "rating": 4.7,
        "sold": 1627,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 16,
        "sku": "NESCAFE-502",
        "name": "Nescafe Kit Kat Drink Latte 220MI",
        "category": "harian",
        "img": "images/catalog/products/nescafe-kit-kat-drink-latte-220mi.jpg",
        "price": 246000,
        "stock": 440,
        "rating": 4.7,
        "sold": 879,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 17,
        "sku": "NESCAFE-500",
        "name": "Nescafe Coffee Ready To Drink Caramel Macchiato 220MI",
        "category": "harian",
        "img": "images/catalog/products/nescafe-coffee-ready-to-drink-caramel-macchiato-220mi.jpg",
        "price": 226000,
        "stock": 449,
        "rating": 4.9,
        "sold": 540,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 18,
        "sku": "NESCAFE-499",
        "name": "Nescafe Coffee Ready To Drink Cappuccino 220MI",
        "category": "harian",
        "img": "images/catalog/products/nescafe-coffee-ready-to-drink-cappuccino-220mi.jpg",
        "price": 102000,
        "stock": 349,
        "rating": 4.8,
        "sold": 1236,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 19,
        "sku": "NESCAFE-498",
        "name": "Nescafe Coffee Ready To Drink Black 220MI",
        "category": "harian",
        "img": "images/catalog/products/nescafe-coffee-ready-to-drink-black-220mi.jpg",
        "price": 226000,
        "stock": 141,
        "rating": 4.9,
        "sold": 1737,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 20,
        "sku": "MILO-489",
        "name": "Milo Uht Milk 36X110MI",
        "category": "harian",
        "img": "images/catalog/products/milo-uht-milk-36x110mi.jpg",
        "price": 199000,
        "stock": 27,
        "rating": 4.6,
        "sold": 927,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 21,
        "sku": "DOWNY-130",
        "name": "Downy 1000 Milky Touch Baby (Putih)",
        "category": "rt",
        "img": "images/catalog/products/downy-1000-milky-touch-baby-putih.jpg",
        "price": 195000,
        "stock": 136,
        "rating": 4.8,
        "sold": 1532,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 22,
        "sku": "KOPI-397",
        "name": "Kopi Top Susu Gula Aren (3In1) 20 X 6 X 27 G",
        "category": "harian",
        "img": "images/catalog/products/kopi-top-susu-gula-aren-3in1-20-x-6-x-27-g.jpg",
        "price": 175000,
        "stock": 473,
        "rating": 4.5,
        "sold": 886,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 23,
        "sku": "KOPI-395",
        "name": "Kopi Top Gula Aren Pack 20 X 6 X 22 G",
        "category": "harian",
        "img": "images/catalog/products/kopi-top-gula-aren-pack-20-x-6-x-22-g.jpg",
        "price": 155000,
        "stock": 128,
        "rating": 4.9,
        "sold": 1466,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 24,
        "sku": "KOPI-394",
        "name": "Kopi Top Capuccino 25Gr Bag 10",
        "category": "harian",
        "img": "images/catalog/products/kopi-top-capuccino-25gr-bag-10.jpg",
        "price": 156000,
        "stock": 90,
        "rating": 4.5,
        "sold": 843,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 25,
        "sku": "KOPI-393",
        "name": "Kopi Top Cappuccino Pack 20 X 6 X 25 Gr",
        "category": "harian",
        "img": "images/catalog/products/kopi-top-cappuccino-pack-20-x-6-x-25-gr.jpg",
        "price": 242000,
        "stock": 421,
        "rating": 4.8,
        "sold": 1642,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 26,
        "sku": "KOPI-392",
        "name": "Kopi Neo Tiramisu 20G Pack20",
        "category": "harian",
        "img": "images/catalog/products/kopi-neo-tiramisu-20g-pack20.jpg",
        "price": 230000,
        "stock": 125,
        "rating": 5.0,
        "sold": 1659,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 27,
        "sku": "KOPI-391",
        "name": "Kopi Neo Moccachino 20G Pack20",
        "category": "harian",
        "img": "images/catalog/products/kopi-neo-moccachino-20g-pack20.jpg",
        "price": 100000,
        "stock": 342,
        "rating": 4.9,
        "sold": 1443,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 28,
        "sku": "KOPI-390",
        "name": "Kopi Kapal Api Spesial Mix Bag 6X20X23Gr",
        "category": "harian",
        "img": "images/catalog/products/kopi-kapal-api-spesial-mix-bag-6x20x23gr.jpg",
        "price": 221000,
        "stock": 158,
        "rating": 4.7,
        "sold": 1762,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 29,
        "sku": "KOPI-389",
        "name": "Kopi Kapal Api Spesial 165Gr",
        "category": "harian",
        "img": "images/catalog/products/kopi-kapal-api-spesial-165gr.jpg",
        "price": 110000,
        "stock": 395,
        "rating": 5.0,
        "sold": 990,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 30,
        "sku": "KOPI-388",
        "name": "Kopi Abc Susu Bag",
        "category": "harian",
        "img": "images/catalog/products/kopi-abc-susu-bag.jpg",
        "price": 198000,
        "stock": 183,
        "rating": 4.8,
        "sold": 1516,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 31,
        "sku": "HELLO-339",
        "name": "Hello Panda Milk Vanilla 42Gr",
        "category": "makanan",
        "img": "images/catalog/products/hello-panda-milk-vanilla-42gr.jpg",
        "price": 149000,
        "stock": 138,
        "rating": 4.7,
        "sold": 1236,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 32,
        "sku": "FANTA-187",
        "name": "Fanta Strawberry Soft Drink (24 Cans X 250 MI)",
        "category": "harian",
        "img": "images/catalog/products/fanta-strawberry-soft-drink-24-cans-x-250-mi.jpg",
        "price": 106000,
        "stock": 179,
        "rating": 4.6,
        "sold": 1141,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 33,
        "sku": "FANTA-186",
        "name": "Fanta Strawberry Soft Drink (12 Bottles X 250 MI)",
        "category": "harian",
        "img": "images/catalog/products/fanta-strawberry-soft-drink-12-bottles-x-250-mi.jpg",
        "price": 154000,
        "stock": 388,
        "rating": 4.8,
        "sold": 1332,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 34,
        "sku": "CHOLCOLATOS-072",
        "name": "Chocolatos Chocolate Drink 27Gra",
        "category": "harian",
        "img": "images/catalog/products/chocolatos-chocolate-drink-27gra.jpg",
        "price": 142000,
        "stock": 347,
        "rating": 4.7,
        "sold": 656,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 35,
        "sku": "CHOLCOLATOS-074",
        "name": "Chocolatos Matcha Drink 24Gr",
        "category": "harian",
        "img": "images/catalog/products/chocolatos-matcha-drink-24gr.jpg",
        "price": 132000,
        "stock": 303,
        "rating": 4.7,
        "sold": 1400,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 36,
        "sku": "PIKOPI-540",
        "name": "Pikopi 3ln1 Coffeemix Bag",
        "category": "harian",
        "img": "images/catalog/products/pikopi-3ln1-coffeemix-bag.jpg",
        "price": 214000,
        "stock": 52,
        "rating": 4.9,
        "sold": 333,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 37,
        "sku": "COCA-081",
        "name": "Coca Cola Soft Drink (12 Bottles X 250 MI)",
        "category": "harian",
        "img": "images/catalog/products/coca-cola-soft-drink-12-bottles-x-250-mi.jpg",
        "price": 236000,
        "stock": 164,
        "rating": 4.9,
        "sold": 987,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 38,
        "sku": "COCA-082",
        "name": "Coca Cola Soft Drink (24 Cans X 250 MI)",
        "category": "harian",
        "img": "images/catalog/products/coca-cola-soft-drink-24-cans-x-250-mi.jpg",
        "price": 243000,
        "stock": 413,
        "rating": 4.6,
        "sold": 929,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 39,
        "sku": "COCA-083",
        "name": "Coca Cola Zero Soft Drink (24 Cans X 250 MI)",
        "category": "harian",
        "img": "images/catalog/products/coca-cola-zero-soft-drink-24-cans-x-250-mi.jpg",
        "price": 187000,
        "stock": 337,
        "rating": 4.9,
        "sold": 1033,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 40,
        "sku": "ZODA-691",
        "name": "Zoda Groovy Air Soda 250MI",
        "category": "harian",
        "img": "images/catalog/products/zoda-groovy-air-soda-250mi.jpg",
        "price": 214000,
        "stock": 344,
        "rating": 4.6,
        "sold": 625,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 41,
        "sku": "ULTRA-666",
        "name": "Ultra Milk Uht Taro 200MI",
        "category": "harian",
        "img": "images/catalog/products/ultra-milk-uht-taro-200mi.jpg",
        "price": 152000,
        "stock": 304,
        "rating": 4.6,
        "sold": 912,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 42,
        "sku": "ULTRA-665",
        "name": "Ultra Milk Uht Strawberry 200MI",
        "category": "harian",
        "img": "images/catalog/products/ultra-milk-uht-strawberry-200mi.jpg",
        "price": 220000,
        "stock": 128,
        "rating": 5.0,
        "sold": 678,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 43,
        "sku": "ULTRA-664",
        "name": "Ultra Milk Uht Chocolate 200MI",
        "category": "harian",
        "img": "images/catalog/products/ultra-milk-uht-chocolate-200mi.jpg",
        "price": 173000,
        "stock": 320,
        "rating": 4.9,
        "sold": 96,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 44,
        "sku": "MILO-487",
        "name": "Milo Active Original Go 220MI",
        "category": "harian",
        "img": "images/catalog/products/milo-active-original-go-220mi.jpg",
        "price": 206000,
        "stock": 410,
        "rating": 4.9,
        "sold": 1786,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 45,
        "sku": "KOPI-166",
        "name": "Kapal Api Spesial Mix Bag 12x10x24gr",
        "category": "harian",
        "img": "images/catalog/products/kapal-api-spesial-mix-bag-12x10x24gr.jpg",
        "price": 194000,
        "stock": 134,
        "rating": 4.6,
        "sold": 160,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 46,
        "sku": "YOUC1000-115",
        "name": "YOU C 1000 Orange Water 500ML",
        "category": "harian",
        "img": "images/catalog/products/you-c-1000-orange-water-500ml.jpg",
        "price": 154000,
        "stock": 87,
        "rating": 4.6,
        "sold": 789,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 47,
        "sku": "MILO-488",
        "name": "Milo Cube Pouch 20X25X2.7Gr",
        "category": "harian",
        "img": "images/catalog/products/milo-cube-pouch-20x25x2-7gr.jpg",
        "price": 122000,
        "stock": 273,
        "rating": 4.5,
        "sold": 813,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 48,
        "sku": "MAR-002",
        "name": "MARJAN SIRUP LYCHEE 460ML",
        "category": "harian",
        "img": "images/catalog/products/marjan-sirup-lychee-460ml.jpg",
        "price": 127000,
        "stock": 81,
        "rating": 4.7,
        "sold": 601,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 49,
        "sku": "MILO-486",
        "name": "Milo Actigen E Uht180MI",
        "category": "harian",
        "img": "images/catalog/products/milo-actigen-e-uht180mi.jpg",
        "price": 230000,
        "stock": 59,
        "rating": 4.6,
        "sold": 1296,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 50,
        "sku": "NES-090",
        "name": "NESCAFE ICE COFFEE ORIGINAL 24x220ML",
        "category": "harian",
        "img": "images/catalog/products/nescafe-ice-coffee-original-24x220ml.jpg",
        "price": 136000,
        "stock": 490,
        "rating": 4.6,
        "sold": 1267,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 51,
        "sku": "MAR-001",
        "name": "MARJAN SIRUP ORANGE 460ML",
        "category": "harian",
        "img": "images/catalog/products/marjan-sirup-orange-460ml.jpg",
        "price": 130000,
        "stock": 399,
        "rating": 4.9,
        "sold": 1721,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 52,
        "sku": "KHONG-192",
        "name": "Khonguan Kogen Wafer Stick Strawberry",
        "category": "makanan",
        "img": "images/catalog/products/khonguan-kogen-wafer-stick-strawberry.jpg",
        "price": 149000,
        "stock": 235,
        "rating": 4.9,
        "sold": 1257,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 53,
        "sku": "DANCOW-111",
        "name": "DANCOW FORTIGO CHOCOLATE SCHT 10x38gr",
        "category": "harian",
        "img": "images/catalog/products/dancow-fortigo-chocolate-scht-10x38gr.jpg",
        "price": 249000,
        "stock": 199,
        "rating": 4.6,
        "sold": 782,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 54,
        "sku": "POC-003",
        "name": "POCARI ION WATER 24x350ML",
        "category": "harian",
        "img": "images/catalog/products/pocari-ion-water-24x350ml.jpg",
        "price": 241000,
        "stock": 145,
        "rating": 5.0,
        "sold": 1300,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 55,
        "sku": "POC-002",
        "name": "POCARI ION WATER 6x2000ML",
        "category": "harian",
        "img": "images/catalog/products/pocari-ion-water-6x2000ml.jpg",
        "price": 183000,
        "stock": 154,
        "rating": 4.8,
        "sold": 621,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 56,
        "sku": "POC-001",
        "name": "POCARI ION WATER 24x500ML",
        "category": "harian",
        "img": "images/catalog/products/pocari-ion-water-24x500ml.jpg",
        "price": 242000,
        "stock": 130,
        "rating": 4.7,
        "sold": 838,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 57,
        "sku": "NES-100",
        "name": "NESCAFE Caramel Macchiato 24x220ml",
        "category": "harian",
        "img": "images/catalog/products/nescafe-caramel-macchiato-24x220ml.jpg",
        "price": 209000,
        "stock": 97,
        "rating": 4.7,
        "sold": 555,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 58,
        "sku": "NES-098",
        "name": "Nescafe Ice Coffee Mocha 240ml",
        "category": "harian",
        "img": "images/catalog/products/nescafe-ice-coffee-mocha-240ml.jpg",
        "price": 101000,
        "stock": 96,
        "rating": 4.8,
        "sold": 1722,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 59,
        "sku": "CHILD-002",
        "name": "CHILKID MADU 780GR",
        "category": "harian",
        "img": "images/catalog/products/chilkid-madu-780gr.jpg",
        "price": 246000,
        "stock": 71,
        "rating": 4.9,
        "sold": 1993,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 60,
        "sku": "CHILKID-001",
        "name": "CHILKID VANILA 780GR",
        "category": "harian",
        "img": "images/catalog/products/chilkid-vanila-780gr.jpg",
        "price": 247000,
        "stock": 62,
        "rating": 4.9,
        "sold": 1707,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 61,
        "sku": "MIL-001",
        "name": "Milo Activ-Go Healthy Drink Can 220 ml",
        "category": "harian",
        "img": "images/catalog/products/milo-activ-go-healthy-drink-can-220-ml.jpg",
        "price": 118000,
        "stock": 312,
        "rating": 4.8,
        "sold": 1157,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 62,
        "sku": "NES-001",
        "name": "Nescafe Ice Coffee Latte Can 220 ml",
        "category": "harian",
        "img": "images/catalog/products/nescafe-ice-coffee-latte-can-220-ml.jpg",
        "price": 206000,
        "stock": 31,
        "rating": 4.8,
        "sold": 643,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 63,
        "sku": "COCA1500ML",
        "name": "Coca-Cola 1500 ML (1.5 LITER)",
        "category": "harian",
        "img": "images/catalog/products/coca-cola-1500-ml-1-5-liter.jpg",
        "price": 223000,
        "stock": 446,
        "rating": 4.9,
        "sold": 1609,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 64,
        "sku": "NU-511",
        "name": "Nu Green Tea Royal Jasmine 450MI",
        "category": "harian",
        "img": "images/catalog/products/nu-green-tea-royal-jasmine-450mi.jpg",
        "price": 238000,
        "stock": 250,
        "rating": 4.8,
        "sold": 988,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 65,
        "sku": "DANCOW-110",
        "name": "Dan cow instant fortigro sachet 27 gr x 16 x 10 pcs",
        "category": "harian",
        "img": "images/catalog/products/dan-cow-instant-fortigro-sachet-27-gr-x-16-x-10-pcs.jpg",
        "price": 201000,
        "stock": 345,
        "rating": 4.6,
        "sold": 1901,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 66,
        "sku": "FRISIAN-111",
        "name": "FRISIAN FLAG VANILLA 120x37gr",
        "category": "harian",
        "img": "images/catalog/products/frisian-flag-vanilla-120x37gr.jpg",
        "price": 148000,
        "stock": 378,
        "rating": 4.9,
        "sold": 1392,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 67,
        "sku": "NES-198",
        "name": "NESCAF\u00c9 CLASSIC KOPI INSTANT SACHET 17.5GR",
        "category": "harian",
        "img": "images/catalog/products/nescaf-classic-kopi-instant-sachet-17-5gr.jpg",
        "price": 106000,
        "stock": 73,
        "rating": 4.5,
        "sold": 1184,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 68,
        "sku": "SARI-955",
        "name": "SariWangi Teh Celup Asli TB 50",
        "category": "harian",
        "img": "images/catalog/products/sariwangi-teh-celup-asli-tb-50.jpg",
        "price": 179000,
        "stock": 239,
        "rating": 4.8,
        "sold": 1900,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 69,
        "sku": "MAR-182",
        "name": "MARJAN SIRUP COCOPANDAN 460ML",
        "category": "harian",
        "img": "images/catalog/products/marjan-sirup-cocopandan-460ml.jpg",
        "price": 238000,
        "stock": 223,
        "rating": 4.7,
        "sold": 546,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 70,
        "sku": "MAR-008",
        "name": "MARJAN SIRUP SIRSAK 460ML",
        "category": "harian",
        "img": "images/catalog/products/marjan-sirup-sirsak-460ml.jpg",
        "price": 188000,
        "stock": 347,
        "rating": 5.0,
        "sold": 298,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 71,
        "sku": "ESTLE-508",
        "name": "Nestle Combo Pack Milo Ball 32Gr",
        "category": "harian",
        "img": "images/catalog/products/nestle-combo-pack-milo-ball-32gr.jpg",
        "price": 100000,
        "stock": 17,
        "rating": 4.6,
        "sold": 405,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 72,
        "sku": "REXONA-112",
        "name": "Rexona Women Powder Dry Stick Deodorant 40 ml",
        "category": "harian",
        "img": "images/catalog/products/rexona-women-powder-dry-stick-deodorant-40-ml.jpg",
        "price": 230000,
        "stock": 359,
        "rating": 4.6,
        "sold": 1914,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 73,
        "sku": "REXONA-111",
        "name": "Rexona Free Spirit (Antiperspirant Deodoran Roll On) 50ml",
        "category": "harian",
        "img": "images/catalog/products/rexona-free-spirit-antiperspirant-deodoran-roll-on-50ml.jpg",
        "price": 206000,
        "stock": 276,
        "rating": 4.7,
        "sold": 465,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 74,
        "sku": "REXONA-110",
        "name": "REXONA SHOWER CLEAN 50ML",
        "category": "harian",
        "img": "images/catalog/products/rexona-shower-clean-50ml.jpg",
        "price": 243000,
        "stock": 412,
        "rating": 5.0,
        "sold": 1529,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 75,
        "sku": "REXONA-113",
        "name": "Rexona Women Whitening Spray Anti-perspirant 45ml",
        "category": "harian",
        "img": "images/catalog/products/rexona-women-whitening-spray-anti-perspirant-45ml.jpg",
        "price": 146000,
        "stock": 16,
        "rating": 4.7,
        "sold": 938,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 76,
        "sku": "LARUTAN-407",
        "name": "Larutan Cap Kaki 3 Strawberry 320MI",
        "category": "harian",
        "img": "images/catalog/products/larutan-cap-kaki-3-strawberry-320mi.jpg",
        "price": 249000,
        "stock": 292,
        "rating": 4.6,
        "sold": 343,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 77,
        "sku": "LAYS-412",
        "name": "Lays Seaweed 64Gr",
        "category": "makanan",
        "img": "images/catalog/products/lays-seaweed-64gr.jpg",
        "price": 130000,
        "stock": 290,
        "rating": 4.6,
        "sold": 1651,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 79,
        "sku": "HOMDAIA-100",
        "name": "Daia Powder Detergent White 800Grx12",
        "category": "rt",
        "img": "images/catalog/products/daia-powder-detergent-white-800grx12.jpg",
        "price": 137000,
        "stock": 72,
        "rating": 4.8,
        "sold": 773,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 80,
        "sku": "HOMDAIA-099",
        "name": "Daia Powder Detergent White 245Grx24",
        "category": "rt",
        "img": "images/catalog/products/daia-powder-detergent-white-245grx24.jpg",
        "price": 130000,
        "stock": 36,
        "rating": 4.8,
        "sold": 454,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 81,
        "sku": "HOMMAMA-461",
        "name": "Mama Lemon Dishwashing Liquid Jeruk Nipis 750Mlx12",
        "category": "rt",
        "img": "images/catalog/products/mama-lemon-dishwashing-liquid-jeruk-nipis-750mlx12.jpg",
        "price": 223000,
        "stock": 93,
        "rating": 4.6,
        "sold": 1161,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 82,
        "sku": "HOMMAMA-462",
        "name": "Mama Lemon Ekstrak Jeruk Nipis 680MI",
        "category": "rt",
        "img": "images/catalog/products/mama-lemon-ekstrak-jeruk-nipis-680mi.jpg",
        "price": 172000,
        "stock": 481,
        "rating": 4.8,
        "sold": 151,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 83,
        "sku": "HOMMAMA-464",
        "name": "Mama Lime Charcoal Pouch 680 MI X 12",
        "category": "rt",
        "img": "images/catalog/products/mama-lime-charcoal-pouch-680-mi-x-12.jpg",
        "price": 126000,
        "stock": 362,
        "rating": 5.0,
        "sold": 1492,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 84,
        "sku": "HOMMAMA-465",
        "name": "Mama Lime Pouch 680MI X12",
        "category": "rt",
        "img": "images/catalog/products/mama-lime-pouch-680mi-x12.jpg",
        "price": 168000,
        "stock": 77,
        "rating": 4.5,
        "sold": 1383,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 85,
        "sku": "HOMMAMALIME-467",
        "name": "Mamalime 750Ml X 12",
        "category": "rt",
        "img": "images/catalog/products/mamalime-750ml-x-12.jpg",
        "price": 249000,
        "stock": 373,
        "rating": 4.9,
        "sold": 656,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 86,
        "sku": "HOMBAYGON-033",
        "name": "Baygon Flower 675Ml",
        "category": "rt",
        "img": "images/catalog/products/baygon-flower-675ml.jpg",
        "price": 141000,
        "stock": 244,
        "rating": 4.9,
        "sold": 1393,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 87,
        "sku": "HOMBAYGON-032",
        "name": "Baygon Coil Standart Green 8Hrs",
        "category": "rt",
        "img": "images/catalog/products/baygon-coil-standart-green-8hrs.jpg",
        "price": 113000,
        "stock": 258,
        "rating": 4.6,
        "sold": 835,
        "location": "Gudang Utama",
        "dateAdded": "2024-04-15"
    },
    {
        "id": 90,
        "sku": "BAYGON-001",
        "name": "Baygon Aerosol Yellow 600Ml",
        "category": "rt",
        "img": "images/catalog/products/baygon-yellow-600ml.jpg",
        "price": 38500,
        "stock": 95,
        "rating": 4.9,
        "sold": 540,
        "location": "Gudang Utama",
        "dateAdded": "2024-05-07"
    },
    {
        "id": 91,
        "sku": "NU-512",
        "name": "Nu Green Tea Honey 450MI",
        "category": "minuman",
        "img": "images/catalog/products/Nu Green Tea Honey 450MI.jpg",
        "price": 125000,
        "stock": 180,
        "rating": 4.8,
        "sold": 920,
        "location": "Gudang Utama",
        "dateAdded": "2024-05-07"
    },
    {
        "id": 92,
        "sku": "KITKAT-504",
        "name": "Kit Kat Chocolate Drink 220MI",
        "category": "minuman",
        "img": "images/catalog/products/kit-kat-chocolate-drink-220mi.jpg",
        "price": 245000,
        "stock": 120,
        "rating": 4.7,
        "sold": 410,
        "location": "Gudang Utama",
        "dateAdded": "2024-05-07"
    },
    {
        "id": 93,
        "sku": "SPRITE-639",
        "name": "Sprite Soft Drink PET 1500 ML",
        "category": "minuman",
        "img": "images/catalog/products/sprite-soft-drink-pet-1500-ml.jpg.jpg",
        "price": 14500,
        "stock": 85,
        "rating": 4.8,
        "sold": 150,
        "location": "Gudang Utama",
        "dateAdded": "2024-05-07"
    },
    {
        "id": 94,
        "sku": "TOP-398",
        "name": "Kopi Top Susu Gula Aren 6in3 20 x 6 x 27 G",
        "category": "minuman",
        "img": "images/catalog/products/kopi-top-susu-gula-aren-6in3-20-x-6-x-27-g.jpg",
        "price": 178000,
        "stock": 110,
        "rating": 4.9,
        "sold": 230,
        "location": "Gudang Utama",
        "dateAdded": "2024-05-07"
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
                <div class="prod-meta">
                    <span class="stock-status"><i class="fas fa-check-circle"></i> Stok Tersedia</span>
                    <span class="prod-location">${prod.location}</span>
                </div>
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
        if (currentCategoryFilters.length > 0 && !currentCategoryFilters.includes(p.category)) return false;

        if (currentSearch) {
            const searchLower = currentSearch.toLowerCase();
            const matchesName = p.name ? p.name.toLowerCase().includes(searchLower) : false;
            const matchesSku = p.sku ? p.sku.toLowerCase().includes(searchLower) : false;
            if (!matchesName && !matchesSku) return false;
        }


        return true;
    });

    renderSkeletons();

    setTimeout(() => {
        const totalCount = filtered.length;
        const startIndex = (currentPage - 1) * itemsPerPage;
        const paginatedItems = filtered.slice(startIndex, startIndex + itemsPerPage);

        renderEcommerce(paginatedItems, totalCount);
        renderPagination(totalCount);

        if (keepPage) {
            window.scrollTo({ top: grid.offsetTop - 100, behavior: 'smooth' });
        }
    }, 400); // Artificial delay for skeleton effect
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

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            // Reset Checkboxes
            categoryCheckboxes.forEach(cb => cb.checked = false);

            // Reset Inputs
            if (searchInput) searchInput.value = '';
            if (sortSelect) sortSelect.value = 'relevan';

            // Reset State
            currentCategoryFilters = [];
            currentSearch = "";
            currentSort = "relevan";
            currentPage = 1;

            applyFilters();
        });
    }

    // Inisialisasi awal hanya jika berada di halaman katalog
    if (grid) {
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
