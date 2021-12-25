import { Request, Response } from "express";
import { GetCategoriesService } from "../../../core/services/category_services/GetCategoryService";

export class GetCategoriesController {
  async handle(request: Request, response: Response) {
    const service = new GetCategoriesService();

    const categories = await service.execute();

    return response.json(categories);
  }
}
