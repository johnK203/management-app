/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateUserInput = {
  id?: string | null;
  username: string;
  firstName?: string | null;
  lastName?: string | null;
  address?: string | null;
  phone?: string | null;
  email?: string | null;
  image?: string | null;
  dob?: string | null;
  user_type?: string | null;
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  address?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  email?: ModelStringInput | null;
  image?: ModelStringInput | null;
  dob?: ModelStringInput | null;
  user_type?: ModelStringInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
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
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type UpdateUserInput = {
  id: string;
  username?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  address?: string | null;
  phone?: string | null;
  email?: string | null;
  image?: string | null;
  dob?: string | null;
  user_type?: string | null;
};

export type DeleteUserInput = {
  id?: string | null;
};

export type CreatePilotInput = {
  id?: string | null;
  licenses?: Array<string | null> | null;
  medical?: string | null;
  type_ratings?: Array<string | null> | null;
  currency?: string | null;
  additional_currencies?: Array<string | null> | null;
};

export type ModelPilotConditionInput = {
  licenses?: ModelStringInput | null;
  medical?: ModelStringInput | null;
  type_ratings?: ModelStringInput | null;
  currency?: ModelStringInput | null;
  additional_currencies?: ModelStringInput | null;
  and?: Array<ModelPilotConditionInput | null> | null;
  or?: Array<ModelPilotConditionInput | null> | null;
  not?: ModelPilotConditionInput | null;
};

export type UpdatePilotInput = {
  id: string;
  licenses?: Array<string | null> | null;
  medical?: string | null;
  type_ratings?: Array<string | null> | null;
  currency?: string | null;
  additional_currencies?: Array<string | null> | null;
};

export type DeletePilotInput = {
  id?: string | null;
};

export type CreatePlaneInput = {
  id?: string | null;
  owners?: Array<string | null> | null;
};

export type ModelPlaneConditionInput = {
  owners?: ModelStringInput | null;
  and?: Array<ModelPlaneConditionInput | null> | null;
  or?: Array<ModelPlaneConditionInput | null> | null;
  not?: ModelPlaneConditionInput | null;
};

export type UpdatePlaneInput = {
  id: string;
  owners?: Array<string | null> | null;
};

export type DeletePlaneInput = {
  id?: string | null;
};

export type CreateCompanyInput = {
  id?: string | null;
  company_name: string;
  address?: string | null;
  phone?: string | null;
  email?: string | null;
  website?: string | null;
  planes?: Array<string | null> | null;
};

export type ModelCompanyConditionInput = {
  company_name?: ModelStringInput | null;
  address?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  email?: ModelStringInput | null;
  website?: ModelStringInput | null;
  planes?: ModelStringInput | null;
  and?: Array<ModelCompanyConditionInput | null> | null;
  or?: Array<ModelCompanyConditionInput | null> | null;
  not?: ModelCompanyConditionInput | null;
};

export type UpdateCompanyInput = {
  id: string;
  company_name?: string | null;
  address?: string | null;
  phone?: string | null;
  email?: string | null;
  website?: string | null;
  planes?: Array<string | null> | null;
};

export type DeleteCompanyInput = {
  id?: string | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  username?: ModelStringInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  address?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  email?: ModelStringInput | null;
  image?: ModelStringInput | null;
  dob?: ModelStringInput | null;
  user_type?: ModelStringInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelPilotFilterInput = {
  id?: ModelIDInput | null;
  licenses?: ModelStringInput | null;
  medical?: ModelStringInput | null;
  type_ratings?: ModelStringInput | null;
  currency?: ModelStringInput | null;
  additional_currencies?: ModelStringInput | null;
  and?: Array<ModelPilotFilterInput | null> | null;
  or?: Array<ModelPilotFilterInput | null> | null;
  not?: ModelPilotFilterInput | null;
};

export type ModelPlaneFilterInput = {
  id?: ModelIDInput | null;
  owners?: ModelStringInput | null;
  and?: Array<ModelPlaneFilterInput | null> | null;
  or?: Array<ModelPlaneFilterInput | null> | null;
  not?: ModelPlaneFilterInput | null;
};

export type ModelCompanyFilterInput = {
  id?: ModelIDInput | null;
  company_name?: ModelStringInput | null;
  address?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  email?: ModelStringInput | null;
  website?: ModelStringInput | null;
  planes?: ModelStringInput | null;
  and?: Array<ModelCompanyFilterInput | null> | null;
  or?: Array<ModelCompanyFilterInput | null> | null;
  not?: ModelCompanyFilterInput | null;
};

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  address: string | null;
  phone: string | null;
  email: string | null;
  image: string | null;
  dob: string | null;
  user_type: string | null;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  address: string | null;
  phone: string | null;
  email: string | null;
  image: string | null;
  dob: string | null;
  user_type: string | null;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  address: string | null;
  phone: string | null;
  email: string | null;
  image: string | null;
  dob: string | null;
  user_type: string | null;
};

export type CreatePilotMutation = {
  __typename: "Pilot";
  id: string;
  licenses: Array<string | null> | null;
  medical: string | null;
  type_ratings: Array<string | null> | null;
  currency: string | null;
  additional_currencies: Array<string | null> | null;
};

export type UpdatePilotMutation = {
  __typename: "Pilot";
  id: string;
  licenses: Array<string | null> | null;
  medical: string | null;
  type_ratings: Array<string | null> | null;
  currency: string | null;
  additional_currencies: Array<string | null> | null;
};

export type DeletePilotMutation = {
  __typename: "Pilot";
  id: string;
  licenses: Array<string | null> | null;
  medical: string | null;
  type_ratings: Array<string | null> | null;
  currency: string | null;
  additional_currencies: Array<string | null> | null;
};

export type CreatePlaneMutation = {
  __typename: "Plane";
  id: string;
  owners: Array<string | null> | null;
};

export type UpdatePlaneMutation = {
  __typename: "Plane";
  id: string;
  owners: Array<string | null> | null;
};

export type DeletePlaneMutation = {
  __typename: "Plane";
  id: string;
  owners: Array<string | null> | null;
};

export type CreateCompanyMutation = {
  __typename: "Company";
  id: string;
  company_name: string;
  address: string | null;
  phone: string | null;
  email: string | null;
  website: string | null;
  planes: Array<string | null> | null;
};

export type UpdateCompanyMutation = {
  __typename: "Company";
  id: string;
  company_name: string;
  address: string | null;
  phone: string | null;
  email: string | null;
  website: string | null;
  planes: Array<string | null> | null;
};

export type DeleteCompanyMutation = {
  __typename: "Company";
  id: string;
  company_name: string;
  address: string | null;
  phone: string | null;
  email: string | null;
  website: string | null;
  planes: Array<string | null> | null;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  address: string | null;
  phone: string | null;
  email: string | null;
  image: string | null;
  dob: string | null;
  user_type: string | null;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    username: string;
    firstName: string | null;
    lastName: string | null;
    address: string | null;
    phone: string | null;
    email: string | null;
    image: string | null;
    dob: string | null;
    user_type: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetPilotQuery = {
  __typename: "Pilot";
  id: string;
  licenses: Array<string | null> | null;
  medical: string | null;
  type_ratings: Array<string | null> | null;
  currency: string | null;
  additional_currencies: Array<string | null> | null;
};

export type ListPilotsQuery = {
  __typename: "ModelPilotConnection";
  items: Array<{
    __typename: "Pilot";
    id: string;
    licenses: Array<string | null> | null;
    medical: string | null;
    type_ratings: Array<string | null> | null;
    currency: string | null;
    additional_currencies: Array<string | null> | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetPlaneQuery = {
  __typename: "Plane";
  id: string;
  owners: Array<string | null> | null;
};

export type ListPlanesQuery = {
  __typename: "ModelPlaneConnection";
  items: Array<{
    __typename: "Plane";
    id: string;
    owners: Array<string | null> | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetCompanyQuery = {
  __typename: "Company";
  id: string;
  company_name: string;
  address: string | null;
  phone: string | null;
  email: string | null;
  website: string | null;
  planes: Array<string | null> | null;
};

export type ListCompanysQuery = {
  __typename: "ModelCompanyConnection";
  items: Array<{
    __typename: "Company";
    id: string;
    company_name: string;
    address: string | null;
    phone: string | null;
    email: string | null;
    website: string | null;
    planes: Array<string | null> | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  address: string | null;
  phone: string | null;
  email: string | null;
  image: string | null;
  dob: string | null;
  user_type: string | null;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  address: string | null;
  phone: string | null;
  email: string | null;
  image: string | null;
  dob: string | null;
  user_type: string | null;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  address: string | null;
  phone: string | null;
  email: string | null;
  image: string | null;
  dob: string | null;
  user_type: string | null;
};

export type OnCreatePilotSubscription = {
  __typename: "Pilot";
  id: string;
  licenses: Array<string | null> | null;
  medical: string | null;
  type_ratings: Array<string | null> | null;
  currency: string | null;
  additional_currencies: Array<string | null> | null;
};

export type OnUpdatePilotSubscription = {
  __typename: "Pilot";
  id: string;
  licenses: Array<string | null> | null;
  medical: string | null;
  type_ratings: Array<string | null> | null;
  currency: string | null;
  additional_currencies: Array<string | null> | null;
};

export type OnDeletePilotSubscription = {
  __typename: "Pilot";
  id: string;
  licenses: Array<string | null> | null;
  medical: string | null;
  type_ratings: Array<string | null> | null;
  currency: string | null;
  additional_currencies: Array<string | null> | null;
};

export type OnCreatePlaneSubscription = {
  __typename: "Plane";
  id: string;
  owners: Array<string | null> | null;
};

export type OnUpdatePlaneSubscription = {
  __typename: "Plane";
  id: string;
  owners: Array<string | null> | null;
};

export type OnDeletePlaneSubscription = {
  __typename: "Plane";
  id: string;
  owners: Array<string | null> | null;
};

export type OnCreateCompanySubscription = {
  __typename: "Company";
  id: string;
  company_name: string;
  address: string | null;
  phone: string | null;
  email: string | null;
  website: string | null;
  planes: Array<string | null> | null;
};

export type OnUpdateCompanySubscription = {
  __typename: "Company";
  id: string;
  company_name: string;
  address: string | null;
  phone: string | null;
  email: string | null;
  website: string | null;
  planes: Array<string | null> | null;
};

export type OnDeleteCompanySubscription = {
  __typename: "Company";
  id: string;
  company_name: string;
  address: string | null;
  phone: string | null;
  email: string | null;
  website: string | null;
  planes: Array<string | null> | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateUser(
    input: CreateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!, $condition: ModelUserConditionInput) {
        createUser(input: $input, condition: $condition) {
          __typename
          id
          username
          firstName
          lastName
          address
          phone
          email
          image
          dob
          user_type
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(
    input: UpdateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!, $condition: ModelUserConditionInput) {
        updateUser(input: $input, condition: $condition) {
          __typename
          id
          username
          firstName
          lastName
          address
          phone
          email
          image
          dob
          user_type
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(
    input: DeleteUserInput,
    condition?: ModelUserConditionInput
  ): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!, $condition: ModelUserConditionInput) {
        deleteUser(input: $input, condition: $condition) {
          __typename
          id
          username
          firstName
          lastName
          address
          phone
          email
          image
          dob
          user_type
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async CreatePilot(
    input: CreatePilotInput,
    condition?: ModelPilotConditionInput
  ): Promise<CreatePilotMutation> {
    const statement = `mutation CreatePilot($input: CreatePilotInput!, $condition: ModelPilotConditionInput) {
        createPilot(input: $input, condition: $condition) {
          __typename
          id
          licenses
          medical
          type_ratings
          currency
          additional_currencies
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePilotMutation>response.data.createPilot;
  }
  async UpdatePilot(
    input: UpdatePilotInput,
    condition?: ModelPilotConditionInput
  ): Promise<UpdatePilotMutation> {
    const statement = `mutation UpdatePilot($input: UpdatePilotInput!, $condition: ModelPilotConditionInput) {
        updatePilot(input: $input, condition: $condition) {
          __typename
          id
          licenses
          medical
          type_ratings
          currency
          additional_currencies
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePilotMutation>response.data.updatePilot;
  }
  async DeletePilot(
    input: DeletePilotInput,
    condition?: ModelPilotConditionInput
  ): Promise<DeletePilotMutation> {
    const statement = `mutation DeletePilot($input: DeletePilotInput!, $condition: ModelPilotConditionInput) {
        deletePilot(input: $input, condition: $condition) {
          __typename
          id
          licenses
          medical
          type_ratings
          currency
          additional_currencies
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePilotMutation>response.data.deletePilot;
  }
  async CreatePlane(
    input: CreatePlaneInput,
    condition?: ModelPlaneConditionInput
  ): Promise<CreatePlaneMutation> {
    const statement = `mutation CreatePlane($input: CreatePlaneInput!, $condition: ModelPlaneConditionInput) {
        createPlane(input: $input, condition: $condition) {
          __typename
          id
          owners
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePlaneMutation>response.data.createPlane;
  }
  async UpdatePlane(
    input: UpdatePlaneInput,
    condition?: ModelPlaneConditionInput
  ): Promise<UpdatePlaneMutation> {
    const statement = `mutation UpdatePlane($input: UpdatePlaneInput!, $condition: ModelPlaneConditionInput) {
        updatePlane(input: $input, condition: $condition) {
          __typename
          id
          owners
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePlaneMutation>response.data.updatePlane;
  }
  async DeletePlane(
    input: DeletePlaneInput,
    condition?: ModelPlaneConditionInput
  ): Promise<DeletePlaneMutation> {
    const statement = `mutation DeletePlane($input: DeletePlaneInput!, $condition: ModelPlaneConditionInput) {
        deletePlane(input: $input, condition: $condition) {
          __typename
          id
          owners
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePlaneMutation>response.data.deletePlane;
  }
  async CreateCompany(
    input: CreateCompanyInput,
    condition?: ModelCompanyConditionInput
  ): Promise<CreateCompanyMutation> {
    const statement = `mutation CreateCompany($input: CreateCompanyInput!, $condition: ModelCompanyConditionInput) {
        createCompany(input: $input, condition: $condition) {
          __typename
          id
          company_name
          address
          phone
          email
          website
          planes
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCompanyMutation>response.data.createCompany;
  }
  async UpdateCompany(
    input: UpdateCompanyInput,
    condition?: ModelCompanyConditionInput
  ): Promise<UpdateCompanyMutation> {
    const statement = `mutation UpdateCompany($input: UpdateCompanyInput!, $condition: ModelCompanyConditionInput) {
        updateCompany(input: $input, condition: $condition) {
          __typename
          id
          company_name
          address
          phone
          email
          website
          planes
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCompanyMutation>response.data.updateCompany;
  }
  async DeleteCompany(
    input: DeleteCompanyInput,
    condition?: ModelCompanyConditionInput
  ): Promise<DeleteCompanyMutation> {
    const statement = `mutation DeleteCompany($input: DeleteCompanyInput!, $condition: ModelCompanyConditionInput) {
        deleteCompany(input: $input, condition: $condition) {
          __typename
          id
          company_name
          address
          phone
          email
          website
          planes
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCompanyMutation>response.data.deleteCompany;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          username
          firstName
          lastName
          address
          phone
          email
          image
          dob
          user_type
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            username
            firstName
            lastName
            address
            phone
            email
            image
            dob
            user_type
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsersQuery>response.data.listUsers;
  }
  async GetPilot(id: string): Promise<GetPilotQuery> {
    const statement = `query GetPilot($id: ID!) {
        getPilot(id: $id) {
          __typename
          id
          licenses
          medical
          type_ratings
          currency
          additional_currencies
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPilotQuery>response.data.getPilot;
  }
  async ListPilots(
    filter?: ModelPilotFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPilotsQuery> {
    const statement = `query ListPilots($filter: ModelPilotFilterInput, $limit: Int, $nextToken: String) {
        listPilots(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            licenses
            medical
            type_ratings
            currency
            additional_currencies
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPilotsQuery>response.data.listPilots;
  }
  async GetPlane(id: string): Promise<GetPlaneQuery> {
    const statement = `query GetPlane($id: ID!) {
        getPlane(id: $id) {
          __typename
          id
          owners
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPlaneQuery>response.data.getPlane;
  }
  async ListPlanes(
    filter?: ModelPlaneFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPlanesQuery> {
    const statement = `query ListPlanes($filter: ModelPlaneFilterInput, $limit: Int, $nextToken: String) {
        listPlanes(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            owners
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPlanesQuery>response.data.listPlanes;
  }
  async GetCompany(id: string): Promise<GetCompanyQuery> {
    const statement = `query GetCompany($id: ID!) {
        getCompany(id: $id) {
          __typename
          id
          company_name
          address
          phone
          email
          website
          planes
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCompanyQuery>response.data.getCompany;
  }
  async ListCompanys(
    filter?: ModelCompanyFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCompanysQuery> {
    const statement = `query ListCompanys($filter: ModelCompanyFilterInput, $limit: Int, $nextToken: String) {
        listCompanys(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            company_name
            address
            phone
            email
            website
            planes
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCompanysQuery>response.data.listCompanys;
  }
  OnCreateUserListener: Observable<OnCreateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateUser {
        onCreateUser {
          __typename
          id
          username
          firstName
          lastName
          address
          phone
          email
          image
          dob
          user_type
        }
      }`
    )
  ) as Observable<OnCreateUserSubscription>;

  OnUpdateUserListener: Observable<OnUpdateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUser {
        onUpdateUser {
          __typename
          id
          username
          firstName
          lastName
          address
          phone
          email
          image
          dob
          user_type
        }
      }`
    )
  ) as Observable<OnUpdateUserSubscription>;

  OnDeleteUserListener: Observable<OnDeleteUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteUser {
        onDeleteUser {
          __typename
          id
          username
          firstName
          lastName
          address
          phone
          email
          image
          dob
          user_type
        }
      }`
    )
  ) as Observable<OnDeleteUserSubscription>;

  OnCreatePilotListener: Observable<OnCreatePilotSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreatePilot {
        onCreatePilot {
          __typename
          id
          licenses
          medical
          type_ratings
          currency
          additional_currencies
        }
      }`
    )
  ) as Observable<OnCreatePilotSubscription>;

  OnUpdatePilotListener: Observable<OnUpdatePilotSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePilot {
        onUpdatePilot {
          __typename
          id
          licenses
          medical
          type_ratings
          currency
          additional_currencies
        }
      }`
    )
  ) as Observable<OnUpdatePilotSubscription>;

  OnDeletePilotListener: Observable<OnDeletePilotSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeletePilot {
        onDeletePilot {
          __typename
          id
          licenses
          medical
          type_ratings
          currency
          additional_currencies
        }
      }`
    )
  ) as Observable<OnDeletePilotSubscription>;

  OnCreatePlaneListener: Observable<OnCreatePlaneSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreatePlane {
        onCreatePlane {
          __typename
          id
          owners
        }
      }`
    )
  ) as Observable<OnCreatePlaneSubscription>;

  OnUpdatePlaneListener: Observable<OnUpdatePlaneSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePlane {
        onUpdatePlane {
          __typename
          id
          owners
        }
      }`
    )
  ) as Observable<OnUpdatePlaneSubscription>;

  OnDeletePlaneListener: Observable<OnDeletePlaneSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeletePlane {
        onDeletePlane {
          __typename
          id
          owners
        }
      }`
    )
  ) as Observable<OnDeletePlaneSubscription>;

  OnCreateCompanyListener: Observable<
    OnCreateCompanySubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCompany {
        onCreateCompany {
          __typename
          id
          company_name
          address
          phone
          email
          website
          planes
        }
      }`
    )
  ) as Observable<OnCreateCompanySubscription>;

  OnUpdateCompanyListener: Observable<
    OnUpdateCompanySubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCompany {
        onUpdateCompany {
          __typename
          id
          company_name
          address
          phone
          email
          website
          planes
        }
      }`
    )
  ) as Observable<OnUpdateCompanySubscription>;

  OnDeleteCompanyListener: Observable<
    OnDeleteCompanySubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCompany {
        onDeleteCompany {
          __typename
          id
          company_name
          address
          phone
          email
          website
          planes
        }
      }`
    )
  ) as Observable<OnDeleteCompanySubscription>;
}
