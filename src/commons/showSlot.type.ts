import { Field, ID, InputType, Int, ObjectType } from "@nestjs/graphql";
import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ScreenDocument, TheaterScreen } from "src/screen/screen.schema";
import { Schema as MongooseSchema, Document, Types } from "mongoose";
import { ScreenInput } from "src/screen/screen.input";

@ObjectType()
@Schema()
export class ShowSlot {
    @Field(() => ID)
    id: Types.ObjectId;

    @Field(() => TheaterScreen)
    @Prop(
        {
            ref: TheaterScreen.name,
            type: MongooseSchema.Types.ObjectId,
            autopopulate: true,
        }
    )
    screen: ScreenDocument;

    @Field(() => Int)
    @Prop()
    startTime: number;

    @Field(() => Int)
    @Prop()
    endTime: number;
}

@InputType()
export class ShowSlotInput {
    @Field(() => ID)
    screen: Types.ObjectId;

    @Field(() => Int)
    @Prop()
    startTime: number;

    @Field(() => Int)
    @Prop()
    endTime: number;
}

export interface ShowSlotDocument extends Document {
    screen: ScreenDocument | TheaterScreen['id'];
    startTime: number;
    endTime: number;
}

export interface ShowSlotPopulatedDocument extends ShowSlotDocument {
    screen: ScreenDocument;
}


export const ShowSlotSchema = SchemaFactory.createForClass(ShowSlot);