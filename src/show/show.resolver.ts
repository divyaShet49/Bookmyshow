
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ShowInput } from './show.input';
import { Show, ShowDocument, ShowPopulatedDocument } from './show.schema';
import { ShowService } from './show.service';

@Resolver('Show')
export class ShowResolver {
  constructor(private readonly showService: ShowService) { }

  @Query(() => [Show])
  async shows() {
    // console.log(await this.showService.getAll());
    const shows: ShowPopulatedDocument[] = await this.showService.getAll();
    console.log("shows are", shows);
    console.log("showslot are", shows[0].showSlot[0].screen);
    return shows;
  }

  @Mutation(() => Show)
  async createShow(@Args({ name: "input" }) input: ShowInput) {
    console.log("input", input);
    return await this.showService.create(input);
  }

}
