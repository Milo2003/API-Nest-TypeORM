import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brands.dtos';
import { Brand } from '../entities/brand.entety';

@Injectable()
export class BrandService {
  private counterId = 1;
  private brandModel: Brand[];
  // constructor(@InjectModel(Brand.name) private brandModel: Model<Brand>) {}
  // private brands: Brand[] = [];

  findAll() {
    return this.brandModel;
  }
  async findOne(id: number) {
    const product = await this.brandModel.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }
  create(data: CreateBrandDto) {
    // const newBrand = new this.brandModel(data);
    // return newBrand.save();
  }
  delete(id: string) {
    // const brand = this.brandModel.findByIdAndDelete(id);
    // if (!brand) {
    //   throw new NotFoundException(`Product #${id} not found`);
    // }
    // return { message: `The brand ${id} has been deleted successfuly` };
  }
  async update(id: string, changes: UpdateBrandDto) {
    // const brand = await this.brandModel
    //   .findByIdAndUpdate(id, { $set: changes }, { new: true })
    //   .exec();
    // if (!brand) {
    //   throw new NotFoundException(`Brand #${id} not found`);
    // }
    // return brand;
  }
}
