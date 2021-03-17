import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';
import { BaseService } from 'src/commons/base.service';
import { MovieInput } from './movie.input';
import { MovieModule } from './movie.module';
import { Movie, MovieDocument, MovieSchema } from './movie.schema';

@Injectable()
// export class MovieService {
//   constructor(
//     @InjectModel('Movie')
//     private model: Model<MovieDocument>
//   ) { }


//   async create(input: MovieInput): Promise<MovieDocument> {
//     const createMovie = new this.model(input);
//     var results;
//     results = await createMovie.save();
//     return results;
//   }

//   async findAll(): Promise<MovieDocument[]> {
//     return await this.model.find();
//   }

//   // findOne(id: number) {
//   //   return `This action returns a #${id} movie`;
//   // }

//   // update(id: number, updateMovieInput: UpdateMovieInput) {
//   //   return `This action updates a #${id} movie`;
//   // }

//   // remove(id: number) {
//   //   return `This action removes a #${id} movie`;
//   // }
// }



export class MovieService extends BaseService<MovieDocument>{
  constructor(
    @InjectModel(Movie.name)
    private readonly movieModel: Model<MovieDocument>) {
    super(movieModel);
  }
}
