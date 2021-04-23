import { Request, Response } from "express";
import { SettingsService } from "../services/SettingsService";

class SettingsController {

    async create(request: Request, response: Response) {
        const { chat, username } = request.body;

        const settingsService = new SettingsService();

        try {
            const settings = await settingsService.create({ chat, username });
            
            response.json(settings);
        } catch(err) {
            return response.status(400).json({
                message: err.message
            });
        }
    }

    async findByUsername(request: Request, response: Response) {
        const { username } = request.params;

        const settingService =  new SettingsService();

        const settings = await settingService.findByUsername(username);

        return response.json(settings);
    }

    async update(request: Request, response: Response) {
        const { username } = request.params;
        const { chat } = request.body;

        const settingService =  new SettingsService();

        const settings = await settingService.update(username, chat);

        return response.json(settings);
    }

}

export { SettingsController };