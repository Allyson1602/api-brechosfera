import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LocationMapService } from './location-map.service';
import { LocationMap } from './entities/location-map.entity';
import { CreateLocationMapInput } from './dto/create-location-map.input';
import { UpdateLocationMapInput } from './dto/update-location-map.input';

@Resolver(() => LocationMap)
export class LocationMapResolver {
  constructor(private readonly locationMapService: LocationMapService) {}

  @Mutation(() => LocationMap)
  createLocationMap(
    @Args('createLocationMapInput')
    createLocationMapInput: CreateLocationMapInput,
  ) {
    return this.locationMapService.create(createLocationMapInput);
  }

  @Query(() => [LocationMap])
  findAll() {
    return this.locationMapService.findAll();
  }

  @Query(() => LocationMap)
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.locationMapService.findOne(id);
  }

  @Mutation(() => LocationMap)
  updateLocationMap(
    @Args('updateLocationMapInput')
    updateLocationMapInput: UpdateLocationMapInput,
  ) {
    return this.locationMapService.update(
      updateLocationMapInput.id,
      updateLocationMapInput,
    );
  }

  @Mutation(() => LocationMap)
  removeLocationMap(@Args('id', { type: () => Int }) id: number) {
    return this.locationMapService.remove(id);
  }
}
