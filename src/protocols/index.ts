export type ApplicationError = {
    name: string, message:string
}

export type User = {
    id: number
    email: string
    username: string
    password: string
    createdAt: Date
    updatedAt: Date
  }

  export type CreateUserParams = Pick<User, 'email' | 'password' |  "username">;
