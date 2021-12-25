import { getRepository } from "typeorm";
import { Category } from "../entities/Categories";

type UpdateCategoryRequest = {
  id: string;
  name: string;
  description: string;
  tag: string;
};

export class UpdateCategoryService {
  async execute({ id, name, description, tag }: UpdateCategoryRequest): Promise<Category | Error> {
    const repository = getRepository(Category);

    const category = await repository.findOne(id);

    if (!category) {
      return new Error(`Category does not exist`);
    }

    category.name = name ? name : category.name;
    category.description = description ? description : category.description;
    category.tag = tag ? tag : category.tag;

    await repository.save(category);

    return category;
  }
}
