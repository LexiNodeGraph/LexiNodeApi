import { Request, Response } from 'express'; 
import { find_data } from "../../db/search";

export const data = async (req: Request, res: Response) => {
    const id = find_data("629a36276b50cb2f8c950891");
    res.json(id)
}


// find_data(629a36276b50cb2f8c950891)

