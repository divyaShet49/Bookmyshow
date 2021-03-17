import { Field, ID, InputType } from "@nestjs/graphql";
import { Types } from "mongoose";

@InputType()
export class TheaterInput {

    @Field()
    name: string;

    @Field()
    location: string;


    @Field(() => [ID])
    movies: Types.ObjectId[];

    @Field(() => [ID])
    screens: Types.ObjectId[];
}