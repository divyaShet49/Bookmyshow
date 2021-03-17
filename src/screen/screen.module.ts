import { Module } from '@nestjs/common';
import { ScreenService } from './screen.service';
import { ScreenResolver } from './screen.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { TheaterScreen, ScreenSchema } from './screen.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: TheaterScreen.name, schema: ScreenSchema }])],

  providers: [ScreenResolver, ScreenService],
  exports: [ScreenService]
})
export class ScreenModule { }
