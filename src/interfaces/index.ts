

export interface ProductInterface  {
    _id?: string,
    title: string,
    price: string,
    discount: string,
    starts: string,
    description: string,
    image: string,
    cantidad?: number,
    __v?: number | string,
}

export interface User {
        id?: number,
        image: string,
        name: string,
        comment: string,
        stars: number,
}


export interface CartInterface {
    products: ProductInterface[] | [],
    total: number 
}