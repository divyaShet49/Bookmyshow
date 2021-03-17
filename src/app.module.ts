import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieModule } from './movie/movie.module';
import { TheaterModule } from './theater/theater.module';
import { ScreenModule } from './screen/screen.module';
import { ShowModule } from './show/show.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      "mongodb+srv://root:root@cluster0.bstun.mongodb.net/bookmyshow?retryWrites=true&w=majority",
      {
        connectionFactory: (connection) => {
          connection.plugin(
            require('mongoose-autopopulate')
          );
          return connection;
        },
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        bufferCommands: false,
        bufferMaxEntries: 0
      }
    ),
    GraphQLModule.forRoot(
      {
        autoSchemaFile: true,
        context: ({ req }) => ({ req }),
        // playground:false,
        // debug:false,

      }
    ),
    MovieModule,
    TheaterModule,
    ScreenModule,
    ShowModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
