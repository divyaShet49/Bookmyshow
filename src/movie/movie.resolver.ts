import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { MovieInput } from './movie.input';
import { Movie } from './movie.schema';
import { MovieService } from './movie.service';
import { Types } from "mongoose";

@Resolver('Movie')
export class MovieResolver {
  constructor(private readonly movieService: MovieService) { }


  @Query(() => [Movie])
  async movies() {
    return await this.movieService.getAll();
  }

  @Query(() => Movie)
  async movie(@Args({ name: 'id', type: () => ID }) id: Types.ObjectId) {
    return await this.movieService.getById(id);
  }

  @Mutation(() => Movie)
  async createMovie(@Args({ name: 'input' }) input: MovieInput) {
    console.log(input);
    return await this.movieService.create(input);
  }

  // @Mutation(() => Movie)
  // async createMovie(@Args({ name: 'input' }) input: MovieInput) {
  //   const movie = await this.movieService.create(input);
  //   return movie;
  // }

  // @Query(() => [Movie])
  // async movies() {
  //   return await this.movieService.findAll();
  // }

  // @Query('movie')
  // findOne(@Args('id') id: number) {
  //   return this.movieService.findOne(id);
  // }

  // @Mutation('updateMovie')
  // update(@Args('updateMovieInput') updateMovieInput: UpdateMovieInput) {
  //   return this.movieService.update(updateMovieInput.id, updateMovieInput);
  // }

  // @Mutation('removeMovie')
  // remove(@Args('id') id: number) {
  //   return this.movieService.remove(id);
  // }
}
