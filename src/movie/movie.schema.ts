import { Field, ID, Int, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Schema as MongooseSchema, Document, Types } from "mongoose";
import { GENERE_TYPES, LANGUAGE } from "src/commons/constants";

@ObjectType()
@Schema()
export class Movie {
    @Field(() => ID)
    id: Types.ObjectId;

    @Prop()
    @Field()
    name: string;

    @Prop({ type: String, default: GENERE_TYPES.Drama, enum: Object.keys(GENERE_TYPES).map(k => GENERE_TYPES[k]) })
    @Field(() => GENERE_TYPES)
    genere: string;

    @Prop({ type: String, enum: Object.keys(LANGUAGE).map(k => LANGUAGE[k]) })
    @Field(() => LANGUAGE)
    language: string;

    @Prop({ min: 0, max: 5 })
    @Field(() => Int)
    rating: number;

    @Prop({ required: false })
    @Field(() => Int)
    price: number;

}


export interface MovieDocument extends Document {
    name: string;
    genere: string;
    language: string;
    rating: number;
    price: number;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);