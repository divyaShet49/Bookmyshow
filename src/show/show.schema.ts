import { Field, ID, ObjectType } from "@nestjs/graphql";
import { TypeMapperSevice } from "@nestjs/graphql/dist/schema-builder/services/type-mapper.service";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types, Schema as MongooseSchema } from "mongoose";
import { ShowSlot, ShowSlotDocument, ShowSlotSchema } from "src/commons/showSlot.type";
import { Movie, MovieDocument } from "src/movie/movie.schema";
import { ScreenDocument, TheaterScreen } from "src/screen/screen.schema";
import { Theater, TheaterDocument } from "src/theater/theater.schema";
import { Document } from "mongoose";

@ObjectType()
@Schema()
export class Show {
    @Field(() => ID)
    id: Types.ObjectId;

    @Field(() => Theater)
    @Prop(({ required: true, type: MongooseSchema.Types.ObjectID, ref: Theater.name, autopopulate: true }))
    theater: TheaterDocument;

    @Field(() => Movie)
    @Prop(({ required: true, type: MongooseSchema.Types.ObjectID, ref: Movie.name, autopopulate: true }))
    movie: MovieDocument;

    @Field()
    @Prop()
    date: string;

    @Field(() => [ShowSlot])
    @Prop({ type: [ShowSlotSchema] })
    showSlot: Types.DocumentArray<ShowSlotDocument>;
    // @Field(type => ShowSlot)
    // @Prop({ type: ShowSlotSchema })
    // showSlot: ShowSlotDocument;

    @Field()
    @Prop()
    calculatedPrice: string;
}

export interface ShowDocument extends Document {
    theater: TheaterDocument | Theater['id'];
    movie: MovieDocument | Movie['id'];
    date: string;
    showSlot: Types.DocumentArray<ShowSlotDocument> | ShowSlot['id'][];
    // showSlot: ShowSlotDocument | ShowSlot['id'];
    calculatedPrice: string;
}

export interface ShowPopulatedDocument extends ShowDocument {
    theater: TheaterDocument;
    movie: MovieDocument;
    showSlot: Types.DocumentArray<ShowSlotDocument>;
    // showSlot: ShowSlotDocument;
}


export const ShowSchema = SchemaFactory.createForClass(Show);
