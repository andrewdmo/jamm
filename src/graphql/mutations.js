/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createMusician = /* GraphQL */ `
  mutation CreateMusician(
    $input: CreateMusicianInput!
    $condition: ModelMusicianConditionInput
  ) {
    createMusician(input: $input, condition: $condition) {
      id
      genre {
        id
        name
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateMusician = /* GraphQL */ `
  mutation UpdateMusician(
    $input: UpdateMusicianInput!
    $condition: ModelMusicianConditionInput
  ) {
    updateMusician(input: $input, condition: $condition) {
      id
      genre {
        id
        name
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteMusician = /* GraphQL */ `
  mutation DeleteMusician(
    $input: DeleteMusicianInput!
    $condition: ModelMusicianConditionInput
  ) {
    deleteMusician(input: $input, condition: $condition) {
      id
      genre {
        id
        name
      }
      createdAt
      updatedAt
    }
  }
`;
export const createInstrument = /* GraphQL */ `
  mutation CreateInstrument(
    $input: CreateInstrumentInput!
    $condition: ModelInstrumentConditionInput
  ) {
    createInstrument(input: $input, condition: $condition) {
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
export const updateInstrument = /* GraphQL */ `
  mutation UpdateInstrument(
    $input: UpdateInstrumentInput!
    $condition: ModelInstrumentConditionInput
  ) {
    updateInstrument(input: $input, condition: $condition) {
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
export const deleteInstrument = /* GraphQL */ `
  mutation DeleteInstrument(
    $input: DeleteInstrumentInput!
    $condition: ModelInstrumentConditionInput
  ) {
    deleteInstrument(input: $input, condition: $condition) {
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
export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      title
      blogID
      createdAt
      updatedAt
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      title
      blogID
      createdAt
      updatedAt
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      title
      blogID
      createdAt
      updatedAt
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      postID
      content
      createdAt
      updatedAt
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      postID
      content
      createdAt
      updatedAt
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      postID
      content
      createdAt
      updatedAt
    }
  }
`;
