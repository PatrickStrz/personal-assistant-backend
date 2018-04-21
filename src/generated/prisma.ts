import { Prisma as BasePrisma, BasePrismaOptions } from 'prisma-binding'
import { GraphQLResolveInfo } from 'graphql'

export const typeDefs = `
type Entry implements Node {
  id: ID!
  text: String!
  author(where: UserWhereInput): User!
  status: EntryStatus!
}

type User implements Node {
  id: ID!
  email: String!
  password: String!
  firstName: String!
  lastName: String!
  entries(where: EntryWhereInput, orderBy: EntryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Entry!]
}

type AggregateEntry {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """
  The number of nodes that have been affected by the Batch operation.
  """
  count: Long!
}

"""
A connection to a list of items.
"""
type EntryConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [EntryEdge]!
  aggregate: AggregateEntry!
}

input EntryCreateInput {
  text: String!
  status: EntryStatus!
  author: UserCreateOneWithoutEntriesInput!
}

input EntryCreateManyWithoutAuthorInput {
  create: [EntryCreateWithoutAuthorInput!]
  connect: [EntryWhereUniqueInput!]
}

input EntryCreateWithoutAuthorInput {
  text: String!
  status: EntryStatus!
}

"""
An edge in a connection.
"""
type EntryEdge {
  """
  The item at the end of the edge.
  """
  node: Entry!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum EntryOrderByInput {
  id_ASC
  id_DESC
  text_ASC
  text_DESC
  status_ASC
  status_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type EntryPreviousValues {
  id: ID!
  text: String!
  status: EntryStatus!
}

enum EntryStatus {
  IN_PROGRESS
  COMPLETED
  ARCHIVED
}

type EntrySubscriptionPayload {
  mutation: MutationType!
  node: Entry
  updatedFields: [String!]
  previousValues: EntryPreviousValues
}

input EntrySubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [EntrySubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [EntrySubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: EntryWhereInput
}

input EntryUpdateInput {
  text: String
  status: EntryStatus
  author: UserUpdateOneWithoutEntriesInput
}

input EntryUpdateManyWithoutAuthorInput {
  create: [EntryCreateWithoutAuthorInput!]
  connect: [EntryWhereUniqueInput!]
  disconnect: [EntryWhereUniqueInput!]
  delete: [EntryWhereUniqueInput!]
  update: [EntryUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [EntryUpsertWithWhereUniqueWithoutAuthorInput!]
}

input EntryUpdateWithoutAuthorDataInput {
  text: String
  status: EntryStatus
}

input EntryUpdateWithWhereUniqueWithoutAuthorInput {
  where: EntryWhereUniqueInput!
  data: EntryUpdateWithoutAuthorDataInput!
}

input EntryUpsertWithWhereUniqueWithoutAuthorInput {
  where: EntryWhereUniqueInput!
  update: EntryUpdateWithoutAuthorDataInput!
  create: EntryCreateWithoutAuthorInput!
}

input EntryWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [EntryWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [EntryWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  text: String
  """
  All values that are not equal to given value.
  """
  text_not: String
  """
  All values that are contained in given list.
  """
  text_in: [String!]
  """
  All values that are not contained in given list.
  """
  text_not_in: [String!]
  """
  All values less than the given value.
  """
  text_lt: String
  """
  All values less than or equal the given value.
  """
  text_lte: String
  """
  All values greater than the given value.
  """
  text_gt: String
  """
  All values greater than or equal the given value.
  """
  text_gte: String
  """
  All values containing the given string.
  """
  text_contains: String
  """
  All values not containing the given string.
  """
  text_not_contains: String
  """
  All values starting with the given string.
  """
  text_starts_with: String
  """
  All values not starting with the given string.
  """
  text_not_starts_with: String
  """
  All values ending with the given string.
  """
  text_ends_with: String
  """
  All values not ending with the given string.
  """
  text_not_ends_with: String
  status: EntryStatus
  """
  All values that are not equal to given value.
  """
  status_not: EntryStatus
  """
  All values that are contained in given list.
  """
  status_in: [EntryStatus!]
  """
  All values that are not contained in given list.
  """
  status_not_in: [EntryStatus!]
  author: UserWhereInput
}

input EntryWhereUniqueInput {
  id: ID
}

"""
The 'Long' scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""
An object with an ID
"""
interface Node {
  """
  The id of the object.
  """
  id: ID!
}

"""
Information about pagination in a connection.
"""
type PageInfo {
  """
  When paginating forwards, are there more items?
  """
  hasNextPage: Boolean!
  """
  When paginating backwards, are there more items?
  """
  hasPreviousPage: Boolean!
  """
  When paginating backwards, the cursor to continue.
  """
  startCursor: String
  """
  When paginating forwards, the cursor to continue.
  """
  endCursor: String
}

"""
A connection to a list of items.
"""
type UserConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  firstName: String!
  lastName: String!
  entries: EntryCreateManyWithoutAuthorInput
}

input UserCreateOneWithoutEntriesInput {
  create: UserCreateWithoutEntriesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutEntriesInput {
  email: String!
  password: String!
  firstName: String!
  lastName: String!
}

"""
An edge in a connection.
"""
type UserEdge {
  """
  The item at the end of the edge.
  """
  node: User!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  firstName: String!
  lastName: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  email: String
  password: String
  firstName: String
  lastName: String
  entries: EntryUpdateManyWithoutAuthorInput
}

input UserUpdateOneWithoutEntriesInput {
  create: UserCreateWithoutEntriesInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutEntriesDataInput
  upsert: UserUpsertWithoutEntriesInput
}

input UserUpdateWithoutEntriesDataInput {
  email: String
  password: String
  firstName: String
  lastName: String
}

input UserUpsertWithoutEntriesInput {
  update: UserUpdateWithoutEntriesDataInput!
  create: UserCreateWithoutEntriesInput!
}

input UserWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  email: String
  """
  All values that are not equal to given value.
  """
  email_not: String
  """
  All values that are contained in given list.
  """
  email_in: [String!]
  """
  All values that are not contained in given list.
  """
  email_not_in: [String!]
  """
  All values less than the given value.
  """
  email_lt: String
  """
  All values less than or equal the given value.
  """
  email_lte: String
  """
  All values greater than the given value.
  """
  email_gt: String
  """
  All values greater than or equal the given value.
  """
  email_gte: String
  """
  All values containing the given string.
  """
  email_contains: String
  """
  All values not containing the given string.
  """
  email_not_contains: String
  """
  All values starting with the given string.
  """
  email_starts_with: String
  """
  All values not starting with the given string.
  """
  email_not_starts_with: String
  """
  All values ending with the given string.
  """
  email_ends_with: String
  """
  All values not ending with the given string.
  """
  email_not_ends_with: String
  password: String
  """
  All values that are not equal to given value.
  """
  password_not: String
  """
  All values that are contained in given list.
  """
  password_in: [String!]
  """
  All values that are not contained in given list.
  """
  password_not_in: [String!]
  """
  All values less than the given value.
  """
  password_lt: String
  """
  All values less than or equal the given value.
  """
  password_lte: String
  """
  All values greater than the given value.
  """
  password_gt: String
  """
  All values greater than or equal the given value.
  """
  password_gte: String
  """
  All values containing the given string.
  """
  password_contains: String
  """
  All values not containing the given string.
  """
  password_not_contains: String
  """
  All values starting with the given string.
  """
  password_starts_with: String
  """
  All values not starting with the given string.
  """
  password_not_starts_with: String
  """
  All values ending with the given string.
  """
  password_ends_with: String
  """
  All values not ending with the given string.
  """
  password_not_ends_with: String
  firstName: String
  """
  All values that are not equal to given value.
  """
  firstName_not: String
  """
  All values that are contained in given list.
  """
  firstName_in: [String!]
  """
  All values that are not contained in given list.
  """
  firstName_not_in: [String!]
  """
  All values less than the given value.
  """
  firstName_lt: String
  """
  All values less than or equal the given value.
  """
  firstName_lte: String
  """
  All values greater than the given value.
  """
  firstName_gt: String
  """
  All values greater than or equal the given value.
  """
  firstName_gte: String
  """
  All values containing the given string.
  """
  firstName_contains: String
  """
  All values not containing the given string.
  """
  firstName_not_contains: String
  """
  All values starting with the given string.
  """
  firstName_starts_with: String
  """
  All values not starting with the given string.
  """
  firstName_not_starts_with: String
  """
  All values ending with the given string.
  """
  firstName_ends_with: String
  """
  All values not ending with the given string.
  """
  firstName_not_ends_with: String
  lastName: String
  """
  All values that are not equal to given value.
  """
  lastName_not: String
  """
  All values that are contained in given list.
  """
  lastName_in: [String!]
  """
  All values that are not contained in given list.
  """
  lastName_not_in: [String!]
  """
  All values less than the given value.
  """
  lastName_lt: String
  """
  All values less than or equal the given value.
  """
  lastName_lte: String
  """
  All values greater than the given value.
  """
  lastName_gt: String
  """
  All values greater than or equal the given value.
  """
  lastName_gte: String
  """
  All values containing the given string.
  """
  lastName_contains: String
  """
  All values not containing the given string.
  """
  lastName_not_contains: String
  """
  All values starting with the given string.
  """
  lastName_starts_with: String
  """
  All values not starting with the given string.
  """
  lastName_not_starts_with: String
  """
  All values ending with the given string.
  """
  lastName_ends_with: String
  """
  All values not ending with the given string.
  """
  lastName_not_ends_with: String
  entries_every: EntryWhereInput
  entries_some: EntryWhereInput
  entries_none: EntryWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}

type Mutation {
  createUser(data: UserCreateInput!): User!
  createEntry(data: EntryCreateInput!): Entry!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateEntry(data: EntryUpdateInput!, where: EntryWhereUniqueInput!): Entry
  deleteUser(where: UserWhereUniqueInput!): User
  deleteEntry(where: EntryWhereUniqueInput!): Entry
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertEntry(where: EntryWhereUniqueInput!, create: EntryCreateInput!, update: EntryUpdateInput!): Entry!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyEntries(data: EntryUpdateInput!, where: EntryWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyEntries(where: EntryWhereInput): BatchPayload!
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  entries(where: EntryWhereInput, orderBy: EntryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Entry]!
  user(where: UserWhereUniqueInput!): User
  entry(where: EntryWhereUniqueInput!): Entry
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  entriesConnection(where: EntryWhereInput, orderBy: EntryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EntryConnection!
  """
  Fetches an object given its ID
  """
  node("""
  The ID of an object
  """
  id: ID!): Node
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  entry(where: EntrySubscriptionWhereInput): EntrySubscriptionPayload
}
`

export type UserOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'firstName_ASC' |
  'firstName_DESC' |
  'lastName_ASC' |
  'lastName_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type EntryStatus = 
  'IN_PROGRESS' |
  'COMPLETED' |
  'ARCHIVED'

export type EntryOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'text_ASC' |
  'text_DESC' |
  'status_ASC' |
  'status_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType = 
  'CREATED' |
  'UPDATED' |
  'DELETED'

export interface EntryCreateManyWithoutAuthorInput {
  create?: EntryCreateWithoutAuthorInput[] | EntryCreateWithoutAuthorInput
  connect?: EntryWhereUniqueInput[] | EntryWhereUniqueInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  firstName?: String
  firstName_not?: String
  firstName_in?: String[] | String
  firstName_not_in?: String[] | String
  firstName_lt?: String
  firstName_lte?: String
  firstName_gt?: String
  firstName_gte?: String
  firstName_contains?: String
  firstName_not_contains?: String
  firstName_starts_with?: String
  firstName_not_starts_with?: String
  firstName_ends_with?: String
  firstName_not_ends_with?: String
  lastName?: String
  lastName_not?: String
  lastName_in?: String[] | String
  lastName_not_in?: String[] | String
  lastName_lt?: String
  lastName_lte?: String
  lastName_gt?: String
  lastName_gte?: String
  lastName_contains?: String
  lastName_not_contains?: String
  lastName_starts_with?: String
  lastName_not_starts_with?: String
  lastName_ends_with?: String
  lastName_not_ends_with?: String
  entries_every?: EntryWhereInput
  entries_some?: EntryWhereInput
  entries_none?: EntryWhereInput
}

export interface EntryUpdateInput {
  text?: String
  status?: EntryStatus
  author?: UserUpdateOneWithoutEntriesInput
}

export interface UserCreateWithoutEntriesInput {
  email: String
  password: String
  firstName: String
  lastName: String
}

export interface EntryUpsertWithWhereUniqueWithoutAuthorInput {
  where: EntryWhereUniqueInput
  update: EntryUpdateWithoutAuthorDataInput
  create: EntryCreateWithoutAuthorInput
}

export interface UserCreateOneWithoutEntriesInput {
  create?: UserCreateWithoutEntriesInput
  connect?: UserWhereUniqueInput
}

export interface EntryUpdateWithoutAuthorDataInput {
  text?: String
  status?: EntryStatus
}

export interface EntryWhereInput {
  AND?: EntryWhereInput[] | EntryWhereInput
  OR?: EntryWhereInput[] | EntryWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  text?: String
  text_not?: String
  text_in?: String[] | String
  text_not_in?: String[] | String
  text_lt?: String
  text_lte?: String
  text_gt?: String
  text_gte?: String
  text_contains?: String
  text_not_contains?: String
  text_starts_with?: String
  text_not_starts_with?: String
  text_ends_with?: String
  text_not_ends_with?: String
  status?: EntryStatus
  status_not?: EntryStatus
  status_in?: EntryStatus[] | EntryStatus
  status_not_in?: EntryStatus[] | EntryStatus
  author?: UserWhereInput
}

export interface EntryUpdateWithWhereUniqueWithoutAuthorInput {
  where: EntryWhereUniqueInput
  data: EntryUpdateWithoutAuthorDataInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface UserCreateInput {
  email: String
  password: String
  firstName: String
  lastName: String
  entries?: EntryCreateManyWithoutAuthorInput
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface UserUpdateWithoutEntriesDataInput {
  email?: String
  password?: String
  firstName?: String
  lastName?: String
}

export interface UserUpdateInput {
  email?: String
  password?: String
  firstName?: String
  lastName?: String
  entries?: EntryUpdateManyWithoutAuthorInput
}

export interface EntryCreateInput {
  text: String
  status: EntryStatus
  author: UserCreateOneWithoutEntriesInput
}

export interface EntryCreateWithoutAuthorInput {
  text: String
  status: EntryStatus
}

export interface EntryUpdateManyWithoutAuthorInput {
  create?: EntryCreateWithoutAuthorInput[] | EntryCreateWithoutAuthorInput
  connect?: EntryWhereUniqueInput[] | EntryWhereUniqueInput
  disconnect?: EntryWhereUniqueInput[] | EntryWhereUniqueInput
  delete?: EntryWhereUniqueInput[] | EntryWhereUniqueInput
  update?: EntryUpdateWithWhereUniqueWithoutAuthorInput[] | EntryUpdateWithWhereUniqueWithoutAuthorInput
  upsert?: EntryUpsertWithWhereUniqueWithoutAuthorInput[] | EntryUpsertWithWhereUniqueWithoutAuthorInput
}

export interface UserUpdateOneWithoutEntriesInput {
  create?: UserCreateWithoutEntriesInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutEntriesDataInput
  upsert?: UserUpsertWithoutEntriesInput
}

export interface UserUpsertWithoutEntriesInput {
  update: UserUpdateWithoutEntriesDataInput
  create: UserCreateWithoutEntriesInput
}

export interface EntryWhereUniqueInput {
  id?: ID_Input
}

export interface EntrySubscriptionWhereInput {
  AND?: EntrySubscriptionWhereInput[] | EntrySubscriptionWhereInput
  OR?: EntrySubscriptionWhereInput[] | EntrySubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: EntryWhereInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface EntryPreviousValues {
  id: ID_Output
  text: String
  status: EntryStatus
}

export interface BatchPayload {
  count: Long
}

export interface User extends Node {
  id: ID_Output
  email: String
  password: String
  firstName: String
  lastName: String
  entries?: Entry[]
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

export interface AggregateEntry {
  count: Int
}

export interface UserPreviousValues {
  id: ID_Output
  email: String
  password: String
  firstName: String
  lastName: String
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

/*
 * An edge in a connection.

 */
export interface EntryEdge {
  node: Entry
  cursor: String
}

export interface Entry extends Node {
  id: ID_Output
  text: String
  author: User
  status: EntryStatus
}

/*
 * A connection to a list of items.

 */
export interface EntryConnection {
  pageInfo: PageInfo
  edges: EntryEdge[]
  aggregate: AggregateEntry
}

export interface EntrySubscriptionPayload {
  mutation: MutationType
  node?: Entry
  updatedFields?: String[]
  previousValues?: EntryPreviousValues
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface AggregateUser {
  count: Int
}

/*
The 'Long' scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

export interface Schema {
  query: Query
  mutation: Mutation
  subscription: Subscription
}

export type Query = {
  users: (args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<User[]>
  entries: (args: { where?: EntryWhereInput, orderBy?: EntryOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Entry[]>
  user: (args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  entry: (args: { where: EntryWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Entry | null>
  usersConnection: (args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<UserConnection>
  entriesConnection: (args: { where?: EntryWhereInput, orderBy?: EntryOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<EntryConnection>
  node: (args: { id: ID_Output }, info?: GraphQLResolveInfo | string) => Promise<Node | null>
}

export type Mutation = {
  createUser: (args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string) => Promise<User>
  createEntry: (args: { data: EntryCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Entry>
  updateUser: (args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  updateEntry: (args: { data: EntryUpdateInput, where: EntryWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Entry | null>
  deleteUser: (args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  deleteEntry: (args: { where: EntryWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Entry | null>
  upsertUser: (args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<User>
  upsertEntry: (args: { where: EntryWhereUniqueInput, create: EntryCreateInput, update: EntryUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Entry>
  updateManyUsers: (args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyEntries: (args: { data: EntryUpdateInput, where?: EntryWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyUsers: (args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyEntries: (args: { where?: EntryWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
}

export type Subscription = {
  user: (args: { where?: UserSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<UserSubscriptionPayload>>
  entry: (args: { where?: EntrySubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<EntrySubscriptionPayload>>
}

export class Prisma extends BasePrisma {
  
  constructor({ endpoint, secret, fragmentReplacements, debug }: BasePrismaOptions) {
    super({ typeDefs, endpoint, secret, fragmentReplacements, debug });
  }

  exists = {
    User: (where: UserWhereInput): Promise<boolean> => super.existsDelegate('query', 'users', { where }, {}, '{ id }'),
    Entry: (where: EntryWhereInput): Promise<boolean> => super.existsDelegate('query', 'entries', { where }, {}, '{ id }')
  }

  query: Query = {
    users: (args, info): Promise<User[]> => super.delegate('query', 'users', args, {}, info),
    entries: (args, info): Promise<Entry[]> => super.delegate('query', 'entries', args, {}, info),
    user: (args, info): Promise<User | null> => super.delegate('query', 'user', args, {}, info),
    entry: (args, info): Promise<Entry | null> => super.delegate('query', 'entry', args, {}, info),
    usersConnection: (args, info): Promise<UserConnection> => super.delegate('query', 'usersConnection', args, {}, info),
    entriesConnection: (args, info): Promise<EntryConnection> => super.delegate('query', 'entriesConnection', args, {}, info),
    node: (args, info): Promise<Node | null> => super.delegate('query', 'node', args, {}, info)
  }

  mutation: Mutation = {
    createUser: (args, info): Promise<User> => super.delegate('mutation', 'createUser', args, {}, info),
    createEntry: (args, info): Promise<Entry> => super.delegate('mutation', 'createEntry', args, {}, info),
    updateUser: (args, info): Promise<User | null> => super.delegate('mutation', 'updateUser', args, {}, info),
    updateEntry: (args, info): Promise<Entry | null> => super.delegate('mutation', 'updateEntry', args, {}, info),
    deleteUser: (args, info): Promise<User | null> => super.delegate('mutation', 'deleteUser', args, {}, info),
    deleteEntry: (args, info): Promise<Entry | null> => super.delegate('mutation', 'deleteEntry', args, {}, info),
    upsertUser: (args, info): Promise<User> => super.delegate('mutation', 'upsertUser', args, {}, info),
    upsertEntry: (args, info): Promise<Entry> => super.delegate('mutation', 'upsertEntry', args, {}, info),
    updateManyUsers: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyUsers', args, {}, info),
    updateManyEntries: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyEntries', args, {}, info),
    deleteManyUsers: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyUsers', args, {}, info),
    deleteManyEntries: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyEntries', args, {}, info)
  }

  subscription: Subscription = {
    user: (args, infoOrQuery): Promise<AsyncIterator<UserSubscriptionPayload>> => super.delegateSubscription('user', args, {}, infoOrQuery),
    entry: (args, infoOrQuery): Promise<AsyncIterator<EntrySubscriptionPayload>> => super.delegateSubscription('entry', args, {}, infoOrQuery)
  }
}