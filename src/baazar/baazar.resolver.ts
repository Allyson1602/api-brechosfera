import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BaazarService } from './baazar.service';
import { Baazar } from './entities/baazar.entity';
import { CreateBaazarInput } from './dto/create-baazar.input';
import { UpdateBaazarInput } from './dto/update-baazar.input';

@Resolver(() => Baazar)
export class BaazarResolver {
  constructor(private readonly baazarService: BaazarService) {}

  @Mutation(() => Baazar)
  createBaazar(
    @Args('createBaazarInput') createBaazarInput: CreateBaazarInput,
  ) {
    return this.baazarService.create(createBaazarInput);
  }

  @Query(() => [Baazar], { name: 'findAllBaazars' })
  findAll() {
    return this.baazarService.findAll();
  }

  @Query(() => Baazar, { name: 'baazar' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.baazarService.findOne(id);
  }

  @Mutation(() => Baazar)
  updateBaazar(
    @Args('updateBaazarInput') updateBaazarInput: UpdateBaazarInput,
  ) {
    return this.baazarService.update(updateBaazarInput.id, updateBaazarInput);
  }

  @Mutation(() => Baazar)
  removeBaazar(@Args('id', { type: () => Int }) id: number) {
    return this.baazarService.remove(id);
  }
}
