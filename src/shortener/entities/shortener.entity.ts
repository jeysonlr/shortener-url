import { IsNotEmpty, IsString } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

/**
 * @author Jeyson Luiz Romualdo
 * @export
 * @class ShortenerEntity
 */
@Entity({ name: 'urls', schema: 'public' })
export class ShortenerEntity {
    @PrimaryGeneratedColumn({ name: 'urlId', type: 'integer' })
    urlId: number;

    @IsNotEmpty()
    @IsString()
    @Column('varchar')
    url: string;

    @IsNotEmpty()
    @IsString()
    @Column('varchar')
    shorted_url: string;

    @CreateDateColumn({ type: 'timestamp' })
    expires_in: Date;

    @CreateDateColumn({ type: 'timestamp' })
    createAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updateAt: Date;
}
