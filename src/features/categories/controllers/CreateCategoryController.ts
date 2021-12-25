import { Request, Response } from "express";
import { CreateCategoryService } from "../../../core/services/category_services/CreateCategoryService";

export class CreateCategoryController {
  async handle(request: Request, response: Response) {
    const { name, description, tag } = request.body;

    const service = new CreateCategoryService();

    const result = await service.execute({ name, description, tag });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json({ result });
  }
}
