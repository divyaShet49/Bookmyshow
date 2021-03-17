import { Module } from '@nestjs/common';
import { TheaterService } from './theater.service';
import { TheaterResolver } from './theater.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Theater, TheaterSchema } from './theater.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Theater.name, schema: TheaterSchema }])
  ],
  providers: [TheaterResolver, TheaterService],
  exports: [TheaterService]
})
export class TheaterModule { }
