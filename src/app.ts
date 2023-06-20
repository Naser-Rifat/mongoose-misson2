import express ,{Application,Request,Response,NextFunction} from "express";
import cors from "cors"

import useRoutes from "./app/modules/user/user.route"

const app:Application = express()
app.use(cors())
// parse data
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// step1: Interface
// Step2: Schema
// Step3: Modal
// Step4: Database Query
app.use('/api/v1/user',useRoutes )

  export default app