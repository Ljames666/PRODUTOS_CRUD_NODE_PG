import { getRepository } from "typeorm";
import { Category } from "../../entities/Categories";

export class GetCategoriesService {
  async execute() {
    const repository = getRepository(Category);

    const categories = await repository.find();

    return categories;
  }
}
