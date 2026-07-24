import { Router, type Request, type Response} from "express";

const route = Router();

route.get('/get', (req: Request, res:Response)=>{
  return res.status(200).json({
    success: true,
    message: "Worked!!!"
  })
})

export default route;