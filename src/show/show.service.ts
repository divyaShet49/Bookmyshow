import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from 'src/commons/base.service';
import { Show, ShowDocument, ShowPopulatedDocument } from './show.schema';

@Injectable()
export class ShowService extends BaseService<ShowDocument, ShowPopulatedDocument>{
    constructor(
        @InjectModel(Show.name)
        private readonly showModel: Model<ShowDocument>) {
        super(showModel);
    }
}
