import auth from "./auth"
import prismaForwarded from "./prismaForwarded"

export default {
  ...auth,
  ...prismaForwarded
}
