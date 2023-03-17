import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, FindOptionsWhere, In, Repository } from 'typeorm';

import {
  CreateProductDto,
  FilterProductDto,
  UpdateProductDto,
} from '../dtos/products.dtos';
import { Brand } from '../entities/brand.entety';
import { Category } from '../entities/category.entety';
import { Product } from '../entities/product.entety';
@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product, 'postgres')
    private productRepo: Repository<Product>,
    @InjectRepository(Brand, 'postgres') private brandRepo: Repository<Brand>,
    @InjectRepository(Category, 'postgres')
    private categoryRepo: Repository<Category>,
  ) {}
  findAll(params?: FilterProductDto) {
    if (params) {
      const where: FindOptionsWhere<Product> = {};
      const { limit, offset } = params;
      const { minPrice, maxPrice } = params;
      if (minPrice && maxPrice) {
        where.price = Between(minPrice, maxPrice);
      }
      return this.productRepo.find({
        relations: ['brand'],
        where,
        take: limit,
        skip: offset,
      });
    }
    return this.productRepo.find({
      relations: ['brand'],
    });
  }
  async findOne(id: number) {
    const product = await this.productRepo.findOne({
      where: { id },
      relations: ['brand', 'categories'],
    });
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }
  async create(data: CreateProductDto) {
    // const product = new Product();
    // product.name = data.name;
    // product.description = data.description;
    // product.price = data.price;
    // product.stock = data.stock;
    // product.image = data.image;
    // return this.productRepo.save(product);
    const product = this.productRepo.create(data);
    product.brand = await this.brandRepo.findOneBy({ id: data.brandId });
    const categories = await this.categoryRepo.findBy({
      id: In(data.categoriesIds),
    });
    product.categories = categories;
    return this.productRepo.save(product);
  }
  async update(id: number, changes: UpdateProductDto) {
    const product = await this.productRepo.findOneBy({ id });
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    if (changes.brandId) {
      const brand = await this.brandRepo.findOneBy({ id: changes.brandId });
      if (!brand) {
        throw new NotFoundException(`Brand #${changes.brandId} not found`);
      }
      product.brand = brand;
    }
    if (changes.categoriesIds) {
      const categories = await this.categoryRepo.findBy({
        id: In(changes.categoriesIds),
      });
      product.categories = categories;
    }
    this.productRepo.merge(product, changes);
    return this.productRepo.save(product);
  }
  async delete(id: number) {
    const deleteProduct = await this.productRepo.delete(id);
    if (deleteProduct.affected === 0) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return { message: `The product ${id} has been deleted` };
  }

  async removeCategoryByProduct(productId: number, categoryId: number) {
    const product = await this.productRepo.findOne({
      where: { id: productId },
      relations: ['categories'],
    });
    product.categories = product.categories.filter(
      (item) => item.id !== categoryId,
    );
    return this.productRepo.save(product);
  }

  async addCategoryToProduct(productId: number, categoryId: number) {
    const product = await this.productRepo.findOne({
      where: { id: productId },
      relations: ['categories'],
    });
    if (!product) {
      throw new NotFoundException(' Product Not Found');
    }
    const category = await this.categoryRepo.findOneBy({ id: categoryId });
    if (!category) {
      throw new NotFoundException('category does not exist');
    }
    product.categories.push(category);
    return this.productRepo.save(product);
  }
}
