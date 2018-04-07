import auth from "./auth"
import prisma from "./prismaForwarded"

export default {
  ...auth,
  ...prisma
}
