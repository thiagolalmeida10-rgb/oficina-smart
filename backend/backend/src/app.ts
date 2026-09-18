import express from "express"
import orcamentoRoutes from "./routes/orcamento.routes"

const app = express()

app.use(express.json())

app.use(orcamentoRoutes)

export default app