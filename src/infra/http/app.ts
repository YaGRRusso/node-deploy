import fastify from "fastify";
import usersRoutes from './routes/users'

export default async (PORT: number, HOST: string) => {
  const app = fastify()

  usersRoutes(app)

  app.listen({
    host: HOST,
    port: PORT
  }).then(() => {
    console.log(`Node running in ${HOST}:${PORT}`)
  })
};
