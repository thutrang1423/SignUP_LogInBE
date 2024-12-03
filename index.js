import express from "express"
import authRoute from "./routes/auth.route.js"
import testRoute from "./routes/test.route.js"
import userRoute from "./routes/user.route.js"
import cors from "cors"
import cookieParser from "cookie-parser"
import YAML from "yaml"
import fs from "fs"
import swaggerUi from "swagger-ui-express"


// const file = fs.readFileSync(path.resolve('account-user-manage.yaml'), 'utf8')
const file = fs.readFileSync('./account-user-manage.yaml', 'utf8')
const swaggerDocument = YAML.parse(file)
const app = express();
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }))
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/test", testRoute);
app.get("/", (req,res)=>{
    res.send("welcome")
});


app.listen(8800, () => {
    console.log("Sever is running 1!");
})
