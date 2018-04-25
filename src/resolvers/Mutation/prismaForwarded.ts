import { getUserId, Context } from "../../utils"
const { forwardTo } = require("prisma-binding")

export default {
  createEntry: forwardTo("db"),
  updateUser: forwardTo("db"),
  updateEntry: forwardTo("db"),
  deleteUser: forwardTo("db"),
  deleteEntry: forwardTo("db"),
  upsertUser: forwardTo("db"),
  upsertEntry: forwardTo("db"),
  updateManyUsers: forwardTo("db"),
  updateManyEntries: forwardTo("db"),
  deleteManyUsers: forwardTo("db"),
  deleteManyEntries: forwardTo("db")
}
