const { forwardTo } = require("prisma-binding")

export default {
  users: forwardTo("db"),
  user: forwardTo("db"),
  posts: forwardTo("db"),
  post: forwardTo("db"),
  entry: forwardTo("db"),
  entries: forwardTo("db"),
  usersConnection: forwardTo("db"),
  entriesConnection: forwardTo("db")
}
