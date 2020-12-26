
export class ProducInfo {
    InfoDetailsPrimary: string;
    InfoDetailsSecondary: string;
    InfoDetails: string;
    Price:string;
}

export class ImagesUrl {
    ImageUrl: string;
}

export class Product {
    ProductId:string;
    ProductName: string;
    ProducInfo: ProducInfo;
    ImagesUrl: ImagesUrl[];
    CardImage:ImagesUrl;
    Price : string;
}

export class Products {
    Products: Product[];
}
