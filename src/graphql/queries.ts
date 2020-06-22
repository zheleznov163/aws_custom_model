/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getConnect = /* GraphQL */ `
  query GetConnect($id: ID!) {
    getConnect(id: $id) {
      id
      name
      family_name
      email
      sex
      birthday
      createdAt
      updatedAt
    }
  }
`;
export const listConnects = /* GraphQL */ `
  query ListConnects(
    $filter: ModelConnectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConnects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      nextToken
    }
  }
`;
export const getAdmin = /* GraphQL */ `
  query GetAdmin($id: ID!) {
    getAdmin(id: $id) {
      id
      polices
      createdAt
      updatedAt
    }
  }
`;
export const listAdmins = /* GraphQL */ `
  query ListAdmins(
    $filter: ModelAdminFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAdmins(filter: $filter, limit: $limit, nextToken: $nextToken) {
      nextToken
    }
  }
`;
export const getFsbAgent = /* GraphQL */ `
  query GetFsbAgent($id: ID!) {
    getFsbAgent(id: $id) {
      id
      createdAt
      updatedAt
    }
  }
`;
export const listFsbAgents = /* GraphQL */ `
  query ListFsbAgents(
    $filter: ModelFsbAgentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFsbAgents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      connectID
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      nextToken
    }
  }
`;
