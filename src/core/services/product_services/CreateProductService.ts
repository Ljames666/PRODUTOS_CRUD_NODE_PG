import { getRepository } from "typeorm";
import { Category } from "../../entities/Categories";
import { Products } from "../../entities/Products";

type ProductRequest = {
  name: string;
  description: string;
  category_id: string;
};

export class CreateProductService {
  async execute({ name, description, category_id }: ProductRequest): Promise<Products | Error> {
    const repository = getRepository(Products);

    const repoCategory = getRepository(Category);

    if (!(await repoCategory.findOne(category_id))) {
      return new Error(`Category does not exists`);
    }

    const product = repository.create({ name, description, category_id });

    await repository.save(product);

    return product;
  }
}
