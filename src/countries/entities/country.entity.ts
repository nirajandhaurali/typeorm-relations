import { City } from "src/cities/entities/city.entity";
import { Leader } from "src/leaders/entities/leader.entity";
import { Column, Entity, PrimaryGeneratedColumn,OneToOne, OneToMany } from "typeorm";

@Entity({name:'countries'})
export class Country {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({unique:true})
    name:string;

    @OneToOne(()=> Leader,(leader)=> leader.country)
    leader: Leader;

    @OneToMany(()=> City,(city)=> city.country)
    city:City[]
}
