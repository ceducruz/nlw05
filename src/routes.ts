import { Router } from "express";
import { MessageController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

const routes = Router();

const settingsController =  new SettingsController();
const usersController = new UsersController();
const messagesController = new MessageController();

routes.post("/settings", settingsController.create);

routes.post("/users", usersController.create);

routes.post("/messages", messagesController.create);

routes.get("/messages/:id", messagesController.showByUser);

export { routes };