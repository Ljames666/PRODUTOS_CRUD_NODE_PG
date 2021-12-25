import { getRepository } from "typeorm";
import { Category } from "../../entities/Categories";

type CategoryRequest = {
  name: string;
  description: string;
  tag: string;
};

export class CreateCategoryService {
  async execute({ name, description, tag }: CategoryRequest): Promise<Category | Error> {
    const repository = getRepository(Category);

    if (await repository.findOne({ name })) {
      return new Error(`Category already exists`);
    }

    const category = repository.create({ name, description, tag });

    await repository.save(category);

    return category;
  }
}
