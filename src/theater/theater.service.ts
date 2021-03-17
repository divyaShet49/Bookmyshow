import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from 'src/commons/base.service';
import { Theater, TheaterDocument, TheaterPopulatedDocument } from './theater.schema';

@Injectable()
export class TheaterService extends BaseService<TheaterDocument, TheaterPopulatedDocument>{
  constructor(
    @InjectModel(Theater.name)
    private readonly theaterModel: Model<TheaterDocument>) {
    super(theaterModel);
  }
}
