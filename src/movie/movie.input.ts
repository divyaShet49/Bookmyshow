import { Field, InputType, Int } from "@nestjs/graphql";
import { GENERE_TYPES, LANGUAGE } from "src/commons/constants";

@InputType()
export class MovieInput {
    @Field()
    readonly name: string

    @Field(() => GENERE_TYPES)
    readonly genere: GENERE_TYPES

    @Field(() => LANGUAGE)
    readonly language: LANGUAGE

    @Field(() => Int)
    readonly rating: number

    @Field(() => Int)
    readonly price: number
}