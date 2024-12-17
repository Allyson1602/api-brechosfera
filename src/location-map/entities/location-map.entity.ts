import { ObjectType, Field, Float, Int } from '@nestjs/graphql';

@ObjectType()
export class LocationMap {
  @Field(() => Int)
  id: number;

  @Field(() => Float, { description: 'latitude' })
  latitude: number;

  @Field(() => Float, { description: 'longitude' })
  longitude: number;
}
