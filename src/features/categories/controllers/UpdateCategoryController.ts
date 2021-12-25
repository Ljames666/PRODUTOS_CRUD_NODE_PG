import { Request, Response } from "express";
import { UpdateCategoryService } from "../../../core/services/category_services/UpdateCategoryService";

export class UpdateCategoryController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const { name, description, tag } = request.body;

    const service = new UpdateCategoryService();

    const result = await service.execute({ id, name, description, tag });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.json(result);
  }
}
