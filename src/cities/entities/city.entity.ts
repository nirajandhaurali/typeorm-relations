import { Country } from "src/countries/entities/country.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'cities'})
export class City {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column({type: 'text', nullable:true})
    description: string;

    @Column({name:'country_id'})
    countryId:number;

    @ManyToOne(()=> Country,(country)=> country.city)
    @JoinColumn({name: 'country_id'})
    country:Country


}
