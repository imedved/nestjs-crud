import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsDefined, IsString, MaxLength, MinLength } from 'class-validator';

@Entity()
export class Crop {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsDefined({ always: true })
  @IsString({ always: true })
  name: string;

  @Column()
  @IsDefined({ always: true })
  @IsString({ always: true })
  @MaxLength(255, { always: true })
  description: string;

}
