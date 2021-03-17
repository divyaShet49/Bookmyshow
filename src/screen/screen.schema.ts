import { Field, ID, Int, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types, Document } from "mongoose";

@ObjectType()
@Schema()
export class TheaterScreen {
    @Field(() => ID)
    id: Types.ObjectId;

    @Field(() => Int)
    @Prop()
    totalSeats: string;

    @Field(() => Int, { nullable: true })
    @Prop({ required: false })
    seatsOccupied: string;

    @Field(() => Int, { nullable: true })
    @Prop({ required: false })
    emptySeats: string;

}


export interface ScreenDocument extends Document {
    totalSeats: number;
    seatsOccupied: number;
    emptySeats: number;
}





export const ScreenSchema = SchemaFactory.createForClass(TheaterScreen);