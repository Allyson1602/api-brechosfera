import { InputType, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateLocationMapInput {
  @Field(() => Float, { description: 'latitude' })
  latitude: number;

  @Field(() => Float, { description: 'longitude' })
  longitude: number;
}
