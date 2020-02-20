
import  {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Photo{
    @PrimaryGeneratedColumn()
    photo_id: number;

    @Column()    
    potho_name: string;

    @Column()
    photo_desc: string;

    @Column() 
    photo_fm: string;

    @Column()
    potho_view: string;

    @Column()
    photo_pub: string;
}