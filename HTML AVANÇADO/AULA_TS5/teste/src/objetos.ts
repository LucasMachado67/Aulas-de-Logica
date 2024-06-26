
export interface Costomer{
    id:string,
    name:string,
    age:Number
};


export interface Produto{
    id: string,
    title: string,
    price: number,
    description: string,
    category: string,
    image:string,
    rating:{
        rate:number,
        count:number
    }
}

//export serve para dar import em outros arquivos


export interface Usuario{
    id:number,
    email:string,
    username:string,
    password:string,
    name:{
        firstname:String,
        lastname:string
    },
    phone:string
    address:{
        city:string,
        street:string,
        number:number,
        zipcode:string,
        geolocation:{
            lat:string,
            long:string
        }
    }
}
