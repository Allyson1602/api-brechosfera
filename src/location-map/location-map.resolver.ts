import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ObjectType,
  Field,
} from '@nestjs/graphql';
import { LocationMapService } from './location-map.service';
import { LocationMap } from './entities/location-map.entity';
import { CreateLocationMapInput } from './dto/create-location-map.input';
import { UpdateLocationMapInput } from './dto/update-location-map.input';

@ObjectType()
export class ResponseMessage {
  @Field()
  message: string;
}

@Resolver(() => ResponseMessage)
export class LocationMapResolver {
  constructor(private readonly locationMapService: LocationMapService) {}

  @Mutation(() => LocationMap)
  createLocationMap(
    @Args('createLocationMapInput')
    createLocationMapInput: CreateLocationMapInput,
  ) {
    return this.locationMapService.create(createLocationMapInput);
  }

  @Query(() => [LocationMap], { name: 'locationMap' })
  findAll() {
    return this.locationMapService.findAll();
  }

  @Query(() => LocationMap, { name: 'locationMap' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.locationMapService.findOne(id);
  }

  @Mutation(() => ResponseMessage)
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
