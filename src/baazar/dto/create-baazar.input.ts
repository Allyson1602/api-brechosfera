import { Field, Float, InputType } from '@nestjs/graphql';
import { baazarItemType } from 'src/enums/BaazarItemType';
import { CreateLocationMapInput } from 'src/location-map/dto/create-location-map.input';
import { Column } from 'typeorm';

@InputType()
export class CreateBaazarInput {
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

  @Field(() => CreateLocationMapInput)
  locationMap: CreateLocationMapInput;
}
