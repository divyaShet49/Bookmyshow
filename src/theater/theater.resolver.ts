import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { TheaterService } from './theater.service';
import { Theater, TheaterPopulatedDocument } from './theater.schema';
import { TheaterInput } from './theater.input';
import { Types } from "mongoose";
import { ArgsFactory } from '@nestjs/graphql/dist/schema-builder/factories/args.factory';

@Resolver('Theater')
export class TheaterResolver {
  constructor(private readonly theaterService: TheaterService) { }

  @Query(() => [Theater])
  async theaters() {
    console.log("hello world");

    return await this.theaterService.getAll();
  }

  @Query(() => Theater)
  async theater(@Args({ name: 'id', type: () => ID }) id: Types.ObjectId) {
    return await this.theaterService.getById(id);
  }

  @Mutation(() => Theater)
  async createTheater(@Args({ name: 'input' }) input: TheaterInput) {

    const result = await this.theaterService.create(input);
    return result;
  }

  @Mutation(() => Theater)
  async updateTheater(
    @Args('id', { type: () => ID }) id: string,
    @Args({ name: 'input' }) input: TheaterInput): Promise<TheaterPopulatedDocument> {
    const update = await this.theaterService.updateById(id, input as any);
    return update;
  }

  // @Query(() => [Theater])
  // async Theaters() {
  //   await this.theaterService.findAll();
  // }

  // @Mutation(() => Theater)
  // async createTheater(@Args({ name: 'input' }) input: TheaterInput) {
  //   console.log("created thaeter as ", input);
  //   await this.theaterService.create(input);
  // }
}
