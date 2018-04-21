import { getUserId, Context } from "../../utils"
const { forwardTo } = require("prisma-binding")

export default {
  createEntry: forwardTo("db")
}
