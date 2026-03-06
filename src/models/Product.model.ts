import { Table,Column,Model,DataType,Default } from "sequelize-typescript";

@Table({
    tableName: 'Products'
})

class Product extends Model{
    //id por defecto
    //name
    //price
    //Quantity
    // availability
    @Column({
        type:DataType.STRING(100)
    })
    name:string
    @Column({
        type:DataType.FLOAT
    })
    price:number
     @Column({
        type:DataType.INTEGER
    })
    quantity:number
     @Default(true)
     @Column({
        type:DataType.BOOLEAN
    })
    availability:boolean

}

export default Product;