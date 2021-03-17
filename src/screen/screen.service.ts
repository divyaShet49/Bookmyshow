import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BaseService } from 'src/commons/base.service';
import { TheaterScreen, ScreenDocument } from './screen.schema';
import { Model } from "mongoose";

@Injectable()
export class ScreenService extends BaseService<ScreenDocument>{
    constructor(
        @InjectModel(TheaterScreen.name)
        private readonly screenModel: Model<ScreenDocument>) {
        super(screenModel);
    }
}
