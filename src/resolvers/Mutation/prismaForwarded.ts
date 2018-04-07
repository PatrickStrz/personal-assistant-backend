import { getUserId, Context } from "../../utils"
const { forwardTo } = require("prisma-binding")

export default {
  createPost: forwardTo("db")
}
