import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class ScreenInput {
    @Field(() => Int)
    totalSeats: number;

    @Field(() => Int, { nullable: true })
    seatsOccupied: number;

    @Field(() => Int, { nullable: true })
    emptySeats: number;
}