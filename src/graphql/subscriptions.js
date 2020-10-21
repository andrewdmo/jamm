/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateMusician = /* GraphQL */ `
  subscription OnCreateMusician {
    onCreateMusician {
      id
      genre {
        id
        name
        createdAt
        updatedAt
      }
      instruments
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMusician = /* GraphQL */ `
  subscription OnUpdateMusician {
    onUpdateMusician {
      id
      genre {
        id
        name
        createdAt
        updatedAt
      }
      instruments
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMusician = /* GraphQL */ `
  subscription OnDeleteMusician {
    onDeleteMusician {
      id
      genre {
        id
        name
        createdAt
        updatedAt
      }
      instruments
      createdAt
      updatedAt
    }
  }
`;
export const onCreateInstrument = /* GraphQL */ `
  subscription OnCreateInstrument {
    onCreateInstrument {
      id
      name
      genre {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateInstrument = /* GraphQL */ `
  subscription OnUpdateInstrument {
    onUpdateInstrument {
      id
      name
      genre {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteInstrument = /* GraphQL */ `
  subscription OnDeleteInstrument {
    onDeleteInstrument {
      id
      name
      genre {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGenre = /* GraphQL */ `
  subscription OnCreateGenre {
    onCreateGenre {
      id
      name
      instruments {
        id
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGenre = /* GraphQL */ `
  subscription OnUpdateGenre {
    onUpdateGenre {
      id
      name
      instruments {
        id
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGenre = /* GraphQL */ `
  subscription OnDeleteGenre {
    onDeleteGenre {
      id
      name
      instruments {
        id
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateVenue = /* GraphQL */ `
  subscription OnCreateVenue {
    onCreateVenue {
      id
      genres {
        id
        name
        createdAt
        updatedAt
      }
      instruments {
        id
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateVenue = /* GraphQL */ `
  subscription OnUpdateVenue {
    onUpdateVenue {
      id
      genres {
        id
        name
        createdAt
        updatedAt
      }
      instruments {
        id
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteVenue = /* GraphQL */ `
  subscription OnDeleteVenue {
    onDeleteVenue {
      id
      genres {
        id
        name
        createdAt
        updatedAt
      }
      instruments {
        id
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog {
    onCreateBlog {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog {
    onUpdateBlog {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog {
    onDeleteBlog {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      title
      blogID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      title
      blogID
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      title
      blogID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      postID
      content
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      postID
      content
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      postID
      content
      createdAt
      updatedAt
    }
  }
`;
