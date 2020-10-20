/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      password
      usertype
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
      items {
        id
        name
        email
        password
        usertype
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMusician = /* GraphQL */ `
  query GetMusician($id: ID!) {
    getMusician(id: $id) {
      id
      genre {
        id
        name
      }
      instruments
      createdAt
      updatedAt
    }
  }
`;
export const listMusicians = /* GraphQL */ `
  query ListMusicians(
    $filter: ModelMusicianFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMusicians(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        instruments
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getInstrument = /* GraphQL */ `
  query GetInstrument($id: ID!) {
    getInstrument(id: $id) {
      id
      name
      genre {
        id
        name
      }
      createdAt
      updatedAt
    }
  }
`;
export const listInstruments = /* GraphQL */ `
  query ListInstruments(
    $filter: ModelInstrumentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInstruments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      blogID
      createdAt
      updatedAt
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        blogID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      postID
      content
      createdAt
      updatedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postID
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
