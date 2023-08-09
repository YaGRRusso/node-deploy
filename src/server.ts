import startFastify from '@infra/http/app'

const HOST = process.env.HOST ?? '0.0.0.0'
const PORT = process.env.PORT ? Number(process.env.PORT) : 8080

startFastify(PORT, HOST)