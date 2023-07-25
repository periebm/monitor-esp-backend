import { ApplicationError } from "../protocols";

export function UnauthorizedError(message?: string): ApplicationError {
  const errorMsg = message || "Unauthorized";
  return {
    name: "UnauthorizedError",
    message: errorMsg
  }       
}