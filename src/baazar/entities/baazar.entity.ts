import { Field, Float, ObjectType } from '@nestjs/graphql';
import { baazarItemType } from 'src/enums/BaazarItemType';
import { LocationMap } from 'src/location-map/entities/location-map.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'baazar' })
export class Baazar {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  logoImage: string;

  @Field(() => [String])
  @Column('simple-array')
  images: string[];

  @Field(() => [baazarItemType])
  @Column('simple-array')
  itemsType: baazarItemType[];

  @Field(() => Float)
  @Column('float')
  averagePrice: number;

  @Field(() => Float)
  @Column('float')
  evaluation: number;

  @Field(() => [String])
  @Column('simple-array')
  openingHours: string[];

  @Field(() => LocationMap)
  @OneToOne(() => LocationMap, (locationMap) => locationMap.baazar, {
    cascade: true,
  })
  locationMap: LocationMap;
}
