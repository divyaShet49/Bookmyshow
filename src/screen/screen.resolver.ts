import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TheaterInput } from 'src/theater/theater.input';
import { ScreenInput } from './screen.input';
import { TheaterScreen } from './screen.schema';
import { ScreenService } from './screen.service';

@Resolver('TheaterScreen')
export class ScreenResolver {
  constructor(private readonly screenService: ScreenService) { }

  @Mutation(() => TheaterScreen)
  async createScreen(@Args({ name: 'input' }) input: ScreenInput) {
    console.log(input);
    return await this.screenService.create(input);
  }

  @Query(() => [TheaterScreen])
  async screens() {
    return await this.screenService.getAll();
  }



}
