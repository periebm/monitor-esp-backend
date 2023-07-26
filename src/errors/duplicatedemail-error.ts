import { ApplicationError } from "../protocols";

export function duplicatedEmailError(message?: string): ApplicationError {
  const errorMsg = message || "There is already an user with given email";
  return {
    name: "DuplicatedEmailError",
    message: errorMsg
  }
}