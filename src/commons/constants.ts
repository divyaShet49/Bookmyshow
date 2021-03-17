import { registerEnumType } from "@nestjs/graphql";


export enum GENERE_TYPES {
    Romantic = 'Romantic',
    Commedy = 'Commedy',
    Drama = 'Drama',
    Action = 'Action',
    Fictional = 'Fictional',
    Animated = 'Animated'
}

registerEnumType(GENERE_TYPES, {
    name: "GenereTypes",
    description: "Types of generes in movie"
});


export enum LANGUAGE {
    English = 'English',
    Hindi = 'Hindi',
    Marathi = 'Marathi'
}

registerEnumType(LANGUAGE, {
    name: "Languages",
    description: "Movie languages"
})