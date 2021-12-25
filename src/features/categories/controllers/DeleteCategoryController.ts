import { Request, Response } from "express";
import { DeleteCategoryService } from "../../../core/services/category_services/DeleteCategoryService";

export class DeleteCategoryController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const service = new DeleteCategoryService();

    const result = await service.execute(id);

    if (result instanceof Error) {
      return response.status(404).json(result.message);
    }

    return response.status(204).end();
  }
}
