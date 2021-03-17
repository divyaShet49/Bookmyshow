import { Module } from '@nestjs/common';
import { ShowService } from './show.service';
import { ShowResolver } from './show.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Show, ShowSchema } from './show.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Show.name, schema: ShowSchema }])],
  providers: [ShowResolver, ShowService],
  exports: [ShowService]
})
export class ShowModule { }
