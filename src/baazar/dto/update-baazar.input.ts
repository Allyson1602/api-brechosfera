import { CreateBaazarInput } from './create-baazar.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBaazarInput extends PartialType(CreateBaazarInput) {
  @Field(() => Int)
  id: number;
}
