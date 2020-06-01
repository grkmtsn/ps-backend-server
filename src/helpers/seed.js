import { Product } from '../models';

export const createProducts = async () => {
    const iphoneXS = new Product({
        title: "APPLE iPhone XS Max 256GB Akıllı Telefon Gold",
        description: "Apple iPhone XS Max Cep Telefonu",
        pricing: [
            {date: new Date(), price: 9200.00},
            {date: new Date(new Date().setDate(new Date().getDate() - 1)) , price: 7200.00},
            {date: new Date(new Date().setDate(new Date().getDate() - 5 )), price: 9800.00},
            {date:new Date(new Date().setDate(new Date().getDate() - 2 )) , price: 8800.00},
            {date:new Date(new Date().setDate(new Date().getDate() - 23 )) , price: 5800.00},
            {date:new Date(new Date().setDate(new Date().getDate() - 12 )) , price: 7300.00},
            {date:new Date(new Date().setDate(new Date().getDate() - 6 )) , price: 9600.00},
            {date:new Date(new Date().setDate(new Date().getDate() - 9 )) , price: 7000.00},
        ],
        images: [
            {
                src: "https://mcdn01.gittigidiyor.net/55989/tn50/559890782_tn50_0.jpg",
                isCover: true,
            },
            {
                src: "https://mcdn01.gittigidiyor.net/55989/tn50/559890782_tn50_1.jpg",
                isCover: false,
            },
        ],
        ratimg: 4,
        shipping: {
            package: {
                weight: 12,
                height: 12,
                depth: 12,
            },
            cargo: {
                free: true,
                instantly: true
            }
        },
        isFavorite: false
    });

    const samsungA9 = new Product({
        title: "Samsung Galaxy A9 128GB (Petrol Mavisi) SM-A920F",
        description: "Samsung Galaxy A9 (2018) Cep Telefonu",
        pricing: [
            {date: new Date(), price: 2499.00},
            {date: new Date(new Date().setDate(new Date().getDate() - 1 )), price: 2799.00},
            {date: new Date(new Date().setDate(new Date().getDate() - 3 )), price: 2399.00},
            {date: new Date(new Date().setDate(new Date().getDate() - 4 )), price: 2899.00},
        ],
        images: [
            {
                src: "https://mcdn01.gittigidiyor.net/46565/tn50/465650991_tn50_0.jpg",
                isCover: true,
            },
            {
                src: "https://mcdn01.gittigidiyor.net/46565/tn50/465650991_tn50_1.jpg",
                isCover: false,
            },
        ],
        rating: 5,        
        shipping: {
            package: {
                weight: 10,
                height: 10,
                depth: 10,
            },
            cargo: {
                free: false,
                instantly: false
            }
        },
        isFavorite: false
    });

    const vestelVenus = new Product({
        title: "VENUS E5 32 GB GECE MAVİSİ-SİYAH (VESTEL TÜRKİYE GARANTİLİ)",
        description: "Vestel Venus E5 Cep Telefonu",
        pricing: [
            {date: new Date(), price: 979.00},
            {date: new Date(new Date().setDate(new Date().getDate() - 2 )), price: 879.00},
            {date: new Date(new Date().setDate(new Date().getDate() - 4 )), price: 969.00},
            {date: new Date(new Date().setDate(new Date().getDate() - 7 )), price: 779.00},
        ],
        images: [
            {
                src: "https://mcdn01.gittigidiyor.net/54399/tn50/543994972_tn50_R_399077_0.jpg",
                isCover: true,
            },
            {
                src: "https://mcdn01.gittigidiyor.net/54399/tn50/543994972_tn50_R_399093_0.jpg",
                isCover: false,
            },
        ],
        rating: 3,
        shipping: {
            package: {
                weight: 13,
                height: 12,
                depth: 11,
            },
            cargo: {
                free: true,
                instantly: false
            }
        },
        isFavorite: false
    });

    const casperVIA = new Product({
        title: "Casper VIA E3 Smartphone 32Gb Mavi Akıllı Telefon",
        description: "Casper VIA E3 Cep Telefonu",
        pricing: [
            {date: new Date(), price: 1079.00},
            {date: new Date(new Date().setDate(new Date().getDate() - 3 )), price: 1019.00},
            {date: new Date(new Date().setDate(new Date().getDate() - 4 )), price: 969.00},
            {date: new Date(new Date().setDate(new Date().getDate() - 9 )), price: 1029.00},
        ],
        images: [
            {
                src: "https://mcdn01.gittigidiyor.net/55732/tn50/557320407_tn50_0.jpg",
                isCover: true,
            }
        ],
        rating: 4,
        shipping: {
            package: {
                weight: 10,
                height: 14,
                depth: 15,
            },
            cargo: {
                free: false,
                instantly: false
            }
        },
        isFavorite: false
    });

    try {
        await iphoneXS.save();
        await samsungA9.save();
        await vestelVenus.save();
        await casperVIA.save();
    } catch (error) {
        console.log(error);
    }
};