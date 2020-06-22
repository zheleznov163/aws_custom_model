/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateConnectInput = {
  id?: string | null,
  name: string,
  family_name: string,
  email: string,
  sex: Sex,
  birthday: string,
};

export enum Sex {
  male = "male",
  famale = "famale",
}


export type ModelConnectConditionInput = {
  name?: ModelStringInput | null,
  family_name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  sex?: ModelSexInput | null,
  birthday?: ModelStringInput | null,
  and?: Array< ModelConnectConditionInput | null > | null,
  or?: Array< ModelConnectConditionInput | null > | null,
  not?: ModelConnectConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelSexInput = {
  eq?: Sex | null,
  ne?: Sex | null,
};

export type UpdateConnectInput = {
  id: string,
  name?: string | null,
  family_name?: string | null,
  email?: string | null,
  sex?: Sex | null,
  birthday?: string | null,
};

export type DeleteConnectInput = {
  id?: string | null,
};

export type CreateAdminInput = {
  id?: string | null,
  polices?: Array< string | null > | null,
};

export type ModelAdminConditionInput = {
  polices?: ModelStringInput | null,
  and?: Array< ModelAdminConditionInput | null > | null,
  or?: Array< ModelAdminConditionInput | null > | null,
  not?: ModelAdminConditionInput | null,
};

export type UpdateAdminInput = {
  id: string,
  polices?: Array< string | null > | null,
};

export type DeleteAdminInput = {
  id?: string | null,
};

export type CreateFsbAgentInput = {
  id?: string | null,
};

export type ModelFsbAgentConditionInput = {
  and?: Array< ModelFsbAgentConditionInput | null > | null,
  or?: Array< ModelFsbAgentConditionInput | null > | null,
  not?: ModelFsbAgentConditionInput | null,
};

export type UpdateFsbAgentInput = {
  id: string,
};

export type DeleteFsbAgentInput = {
  id?: string | null,
};

export type CreateUserInput = {
  id?: string | null,
  connectID: string,
};

export type ModelUserConditionInput = {
  connectID?: ModelIDInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateUserInput = {
  id: string,
  connectID?: string | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type ModelConnectFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  family_name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  sex?: ModelSexInput | null,
  birthday?: ModelStringInput | null,
  and?: Array< ModelConnectFilterInput | null > | null,
  or?: Array< ModelConnectFilterInput | null > | null,
  not?: ModelConnectFilterInput | null,
};

export type ModelAdminFilterInput = {
  id?: ModelIDInput | null,
  polices?: ModelStringInput | null,
  and?: Array< ModelAdminFilterInput | null > | null,
  or?: Array< ModelAdminFilterInput | null > | null,
  not?: ModelAdminFilterInput | null,
};

export type ModelFsbAgentFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelFsbAgentFilterInput | null > | null,
  or?: Array< ModelFsbAgentFilterInput | null > | null,
  not?: ModelFsbAgentFilterInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  connectID?: ModelIDInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type CreateConnectMutationVariables = {
  input: CreateConnectInput,
  condition?: ModelConnectConditionInput | null,
};

export type CreateConnectMutation = {
  createConnect:  {
    __typename: "Connect",
    id: string,
    name: string,
    family_name: string,
    email: string,
    sex: Sex,
    birthday: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateConnectMutationVariables = {
  input: UpdateConnectInput,
  condition?: ModelConnectConditionInput | null,
};

export type UpdateConnectMutation = {
  updateConnect:  {
    __typename: "Connect",
    id: string,
    name: string,
    family_name: string,
    email: string,
    sex: Sex,
    birthday: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteConnectMutationVariables = {
  input: DeleteConnectInput,
  condition?: ModelConnectConditionInput | null,
};

export type DeleteConnectMutation = {
  deleteConnect:  {
    __typename: "Connect",
    id: string,
    name: string,
    family_name: string,
    email: string,
    sex: Sex,
    birthday: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAdminMutationVariables = {
  input: CreateAdminInput,
  condition?: ModelAdminConditionInput | null,
};

export type CreateAdminMutation = {
  createAdmin:  {
    __typename: "Admin",
    id: string,
    polices: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAdminMutationVariables = {
  input: UpdateAdminInput,
  condition?: ModelAdminConditionInput | null,
};

export type UpdateAdminMutation = {
  updateAdmin:  {
    __typename: "Admin",
    id: string,
    polices: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAdminMutationVariables = {
  input: DeleteAdminInput,
  condition?: ModelAdminConditionInput | null,
};

export type DeleteAdminMutation = {
  deleteAdmin:  {
    __typename: "Admin",
    id: string,
    polices: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFsbAgentMutationVariables = {
  input: CreateFsbAgentInput,
  condition?: ModelFsbAgentConditionInput | null,
};

export type CreateFsbAgentMutation = {
  createFsbAgent:  {
    __typename: "FsbAgent",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFsbAgentMutationVariables = {
  input: UpdateFsbAgentInput,
  condition?: ModelFsbAgentConditionInput | null,
};

export type UpdateFsbAgentMutation = {
  updateFsbAgent:  {
    __typename: "FsbAgent",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFsbAgentMutationVariables = {
  input: DeleteFsbAgentInput,
  condition?: ModelFsbAgentConditionInput | null,
};

export type DeleteFsbAgentMutation = {
  deleteFsbAgent:  {
    __typename: "FsbAgent",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    connectID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    id: string,
    connectID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "User",
    id: string,
    connectID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetConnectQueryVariables = {
  id: string,
};

export type GetConnectQuery = {
  getConnect:  {
    __typename: "Connect",
    id: string,
    name: string,
    family_name: string,
    email: string,
    sex: Sex,
    birthday: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListConnectsQueryVariables = {
  filter?: ModelConnectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListConnectsQuery = {
  listConnects:  {
    __typename: "ModelConnectConnection",
    nextToken: string | null,
  } | null,
};

export type GetAdminQueryVariables = {
  id: string,
};

export type GetAdminQuery = {
  getAdmin:  {
    __typename: "Admin",
    id: string,
    polices: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAdminsQueryVariables = {
  filter?: ModelAdminFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAdminsQuery = {
  listAdmins:  {
    __typename: "ModelAdminConnection",
    nextToken: string | null,
  } | null,
};

export type GetFsbAgentQueryVariables = {
  id: string,
};

export type GetFsbAgentQuery = {
  getFsbAgent:  {
    __typename: "FsbAgent",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFsbAgentsQueryVariables = {
  filter?: ModelFsbAgentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFsbAgentsQuery = {
  listFsbAgents:  {
    __typename: "ModelFsbAgentConnection",
    nextToken: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
    connectID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "ModelUserConnection",
    nextToken: string | null,
  } | null,
};

export type OnCreateConnectSubscription = {
  onCreateConnect:  {
    __typename: "Connect",
    id: string,
    name: string,
    family_name: string,
    email: string,
    sex: Sex,
    birthday: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateConnectSubscription = {
  onUpdateConnect:  {
    __typename: "Connect",
    id: string,
    name: string,
    family_name: string,
    email: string,
    sex: Sex,
    birthday: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteConnectSubscription = {
  onDeleteConnect:  {
    __typename: "Connect",
    id: string,
    name: string,
    family_name: string,
    email: string,
    sex: Sex,
    birthday: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAdminSubscription = {
  onCreateAdmin:  {
    __typename: "Admin",
    id: string,
    polices: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAdminSubscription = {
  onUpdateAdmin:  {
    __typename: "Admin",
    id: string,
    polices: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAdminSubscription = {
  onDeleteAdmin:  {
    __typename: "Admin",
    id: string,
    polices: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFsbAgentSubscription = {
  onCreateFsbAgent:  {
    __typename: "FsbAgent",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFsbAgentSubscription = {
  onUpdateFsbAgent:  {
    __typename: "FsbAgent",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFsbAgentSubscription = {
  onDeleteFsbAgent:  {
    __typename: "FsbAgent",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    id: string,
    connectID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    id: string,
    connectID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    id: string,
    connectID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
