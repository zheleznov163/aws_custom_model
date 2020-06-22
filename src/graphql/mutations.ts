/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createConnect = /* GraphQL */ `
  mutation CreateConnect(
    $input: CreateConnectInput!
    $condition: ModelConnectConditionInput
  ) {
    createConnect(input: $input, condition: $condition) {
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
export const updateConnect = /* GraphQL */ `
  mutation UpdateConnect(
    $input: UpdateConnectInput!
    $condition: ModelConnectConditionInput
  ) {
    updateConnect(input: $input, condition: $condition) {
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
export const deleteConnect = /* GraphQL */ `
  mutation DeleteConnect(
    $input: DeleteConnectInput!
    $condition: ModelConnectConditionInput
  ) {
    deleteConnect(input: $input, condition: $condition) {
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
export const createAdmin = /* GraphQL */ `
  mutation CreateAdmin(
    $input: CreateAdminInput!
    $condition: ModelAdminConditionInput
  ) {
    createAdmin(input: $input, condition: $condition) {
      id
      polices
      createdAt
      updatedAt
    }
  }
`;
export const updateAdmin = /* GraphQL */ `
  mutation UpdateAdmin(
    $input: UpdateAdminInput!
    $condition: ModelAdminConditionInput
  ) {
    updateAdmin(input: $input, condition: $condition) {
      id
      polices
      createdAt
      updatedAt
    }
  }
`;
export const deleteAdmin = /* GraphQL */ `
  mutation DeleteAdmin(
    $input: DeleteAdminInput!
    $condition: ModelAdminConditionInput
  ) {
    deleteAdmin(input: $input, condition: $condition) {
      id
      polices
      createdAt
      updatedAt
    }
  }
`;
export const createFsbAgent = /* GraphQL */ `
  mutation CreateFsbAgent(
    $input: CreateFsbAgentInput!
    $condition: ModelFsbAgentConditionInput
  ) {
    createFsbAgent(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateFsbAgent = /* GraphQL */ `
  mutation UpdateFsbAgent(
    $input: UpdateFsbAgentInput!
    $condition: ModelFsbAgentConditionInput
  ) {
    updateFsbAgent(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteFsbAgent = /* GraphQL */ `
  mutation DeleteFsbAgent(
    $input: DeleteFsbAgentInput!
    $condition: ModelFsbAgentConditionInput
  ) {
    deleteFsbAgent(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      connectID
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      connectID
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      connectID
      createdAt
      updatedAt
    }
  }
`;
