import { ApplicationError } from "../protocols";

export function badRequestError(message?: string): ApplicationError {
  const errorMsg = message || "BadRequest";
  return {
    name: "BadRequest",
    message: errorMsg
  }
}