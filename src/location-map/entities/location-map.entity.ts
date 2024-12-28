import { ObjectType, Field, Float, Int } from '@nestjs/graphql';
import { Baazar } from 'src/baazar/entities/baazar.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'location_map' })
export class LocationMap {
  @Field(() => Int)
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Field(() => Float, { description: 'latitude' })
  @Column('float')
  latitude: number;

  @Field(() => Float, { description: 'longitude' })
  @Column('float')
  longitude: number;

  @Field(() => Baazar)
  @OneToOne(() => Baazar, (baazar) => baazar.locationMap, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  @JoinColumn()
  baazar: Baazar;
}
