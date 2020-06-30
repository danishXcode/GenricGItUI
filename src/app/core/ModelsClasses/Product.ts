export class ProducInfo {
    InfoDetailsPrimary: string;
    InfoDetailsSecondary: string;
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
}

export class Products {
    Products: Product[];
}