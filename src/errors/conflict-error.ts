import { ApplicationError } from "../protocols";

export function conflictError(message?: string): ApplicationError {
  const errorMsg = message || "Conflict";
  return {
    name: "ConflictError",
    message: errorMsg
  }
}