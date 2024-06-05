const initialState = {
  productsItems: [
    {
      id: 1,
      title: "Solid Gold Petite Micropave",
      description:
        "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      price: 168,
      rating: 4.2,
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    },
    {
      id: 2,
      title: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
      description:
        "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
      price: 64,
      rating: 4.8,
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    },
    {
      id: 3,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      price: 110,
      rating: 4,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      id: 4,
      title: "Mens Casual Premium Slim Fit T-Shirts",
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      price: 22.5,
      rating: 5,
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
      id: 5,
      title: "Mens Casual Slim Fit",
      description:
        "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      price: 15.99,
      rating: 4.1,
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    },
    {
      id: 6,
      title: "DANVOUY Womens T Shirt Casual Cotton Short",
      description:
        "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
      price: 12.99,
      rating: 4.7,
      image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    },
    {
      id: 7,
      title: "Opna Women's Short Sleeve Moisture",
      description:
        "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
      price: 7.95,
      rating: 3.6,
      image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    },
    {
      id: 8,
      title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      description:
        "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
      price: 109,
      rating: 4.3,
      image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    },
  ],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return state;
    default:
      return state;
  }
};

export default productsReducer;
