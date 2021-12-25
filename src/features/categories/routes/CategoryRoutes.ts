import { Router } from "express";
import { CreateCategoryController } from "../controllers/CreateCategoryController";
import { DeleteCategoryController } from "../controllers/DeleteCategoryController";
import { GetCategoriesController } from "../controllers/GetCategoryController";
import { UpdateCategoryController } from "../controllers/UpdateCategoryController";

const routesCategory = Router();

routesCategory.post("/categories", new CreateCategoryController().handle);

routesCategory.get("/categories", new GetCategoriesController().handle);

routesCategory.put("/categories/:id", new UpdateCategoryController().handle);

routesCategory.delete("/categories/:id", new DeleteCategoryController().handle);

export { routesCategory };
