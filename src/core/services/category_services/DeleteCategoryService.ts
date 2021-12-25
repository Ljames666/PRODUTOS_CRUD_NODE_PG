import { getRepository } from "typeorm";
import { Category } from "../../entities/Categories";

export class DeleteCategoryService {
  async execute(id: string) {
    const repository = getRepository(Category);

    if (!(await repository.findOne(id))) {
      return new Error("Category does not exist");
    }

    await repository.delete(id);
  }
}
