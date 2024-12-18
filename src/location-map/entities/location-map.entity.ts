import { ObjectType, Field, Float, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'location_map' })
export class LocationMap {
  @PrimaryGeneratedColumn({ name: 'id' })
  @Field(() => Int)
  id: number;

  @Column('float')
  @Field(() => Float, { description: 'latitude' })
  latitude: number;

  @Column('float')
  @Field(() => Float, { description: 'longitude' })
  longitude: number;
}
