import { CreateLocationMapInput } from './create-location-map.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLocationMapInput extends PartialType(
  CreateLocationMapInput,
) {
  @Field(() => Int)
  id: number;
}
