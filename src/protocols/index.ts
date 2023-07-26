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
  export type LoginUserParams = Pick<User, "email" | "password">;
