const { forwardTo } = require("prisma-binding")

export default {
  posts: forwardTo("db")
}
