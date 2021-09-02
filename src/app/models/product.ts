export class Product {
    id:number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;

    constructor(id=0, name='', description='', price=0, imageUrl="https://blog.beforward.jp/wp-content/uploads/2015/12/image1.jpg")
    {
        this.id=id
        this.name=name
        this.description=description
        this.price=price
        this.imageUrl=imageUrl

    }
}
