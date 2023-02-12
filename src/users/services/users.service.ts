import { Injectable, NotFoundException } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductsService } from 'src/products/services/products.service';
import { CreateUserDto, UpdateUserDto } from '../dtos/users.dtos';
// import { CreateUserDto, UpdateUserDto } from '../dtos/userModel.dtos';
import { User } from '../entities/user.entety';

@Injectable()
export class userService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private productsService: ProductsService,
  ) {}

  findAll() {
    //solo ej
    // const apiKey = this.configService.get('API_KEY');
    // const dbName = this.configService.get('DATABASE_NAME');
    // console.log(apiKey, dbName);
    return this.userModel.find().exec();
  }
  findOne(id: string) {
    const user = this.userModel.findById(id);
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
  }
  create(data: CreateUserDto) {
    const newUser = new this.userModel(data);
    return newUser.save();
  }
  // create(payload: CreateUserDto) {
  //   const newUser = {
  //     ...payload,
  //   };
  //   this.userModel.create(newUser);
  //   return newUser;
  // }
  delete(id: string) {
    const index = this.userModel.findByIdAndDelete(id).exec();
    if (!index) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return { message: `User ${id} has been deleted ` };
  }
  update(id: string, changes: UpdateUserDto) {
    const user = this.userModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
  }
  // update(id: number, payload: UpdateUserDto) {
  //   const user = this.userModel.findByIdAndUpdate(id, payload);
  //   return user;
  //   // this.userModel[index] = {
  //   //   ...find,
  //   //   ...payload,
  //   // };
  // }
  async getOrderByUser(id: string) {
    const user = this.findOne(id);
    return {
      date: new Date(),
      user,
      products: await this.productsService.findAll(),
    };
  }
}
