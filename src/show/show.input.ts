import { Field, ID, InputType } from "@nestjs/graphql";
import { ShowSlot, ShowSlotDocument, ShowSlotInput } from "src/commons/showSlot.type";
import { Movie, MovieDocument } from "src/movie/movie.schema";
import { ScreenDocument, TheaterScreen } from "src/screen/screen.schema";
import { Theater, TheaterDocument } from "src/theater/theater.schema";
import { Types } from "mongoose";

@InputType()
export class ShowInput {

    @Field(() => ID)
    theater: Types.ObjectId;

    @Field(() => ID)
    movie: Types.ObjectId;

    @Field()
    date: string;

    @Field(() => [ShowSlotInput])
    showSlot: ShowSlotInput[];
    // @Field(() => ShowSlotInput)
    // showSlot: ShowSlotInput;

    @Field()
    calculatedPrice: string;
}

