import { Field, ID, ObjectType } from "@nestjs/graphql";
import { TypeMapperSevice } from "@nestjs/graphql/dist/schema-builder/services/type-mapper.service";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema, Types } from "mongoose";
import { Movie, MovieDocument } from "src/movie/movie.schema";
import { ScreenDocument, TheaterScreen } from "src/screen/screen.schema";


@ObjectType()
@Schema()
export class Theater {
    @Field(() => ID)
    id: Types.ObjectId;

    @Field()
    @Prop()
    name: string;

    @Field()
    @Prop()
    location: string;

    @Field(type => [Movie])
    @Prop({
        type: [{ ref: Movie.name, type: MongooseSchema.Types.ObjectId }],
        autopopulate: true,
    })
    movies: Types.DocumentArray<MovieDocument>;

    @Field(() => [TheaterScreen])
    @Prop({
        type: [{ ref: TheaterScreen.name, type: MongooseSchema.Types.ObjectId }],
        autopopulate: true
    })
    screens: Types.DocumentArray<ScreenDocument>;
}

export interface TheaterDocument extends Document {
    name: string;
    location: string;
    movies: Types.DocumentArray<MovieDocument> | Movie['id'][];
    screens: Types.DocumentArray<ScreenDocument> | TheaterScreen['id'][];
}

export interface TheaterPopulatedDocument extends TheaterDocument {
    movies: Types.DocumentArray<MovieDocument>;
    screens: Types.DocumentArray<ScreenDocument>;
}

export const TheaterSchema = SchemaFactory.createForClass(Theater);