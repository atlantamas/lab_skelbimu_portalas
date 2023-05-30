import express from "express"
import cookieParser from "cookie-parser"
import controller_sign_in from "./controllers/controller_sign_in.mjs"
import controller_sign_up from "./controllers/controller_sign_up.mjs"
import controller_sign_out from "./controllers/controller_sign_out.mjs"

const express_1 = express()

// middlewares

const middleware_file_server = express.static("../frontend/public")
express_1.use(middleware_file_server)

const middleware_parse_json_body = express.json({ limit: "4mb" })
express_1.use(middleware_parse_json_body)

const middleware_parse_cookies = cookieParser()
express_1.use(middleware_parse_cookies)

// endpoints

express_1.post("/api/sign_up", controller_sign_up)
express_1.post("/api/sign_in", controller_sign_in)
express_1.post("/api/sign_out", controller_sign_out)

// listen

const port = 80

express_1.listen(port)