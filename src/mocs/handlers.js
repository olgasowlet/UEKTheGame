import { rest } from "msw";
import { quests } from "./fixtures";

export const handlers = [
    rest.get('/quests', (req, res, ctx) => {
        res(ctx.status(200), ctx.json(quests));
    })
];