export type ResponseErrorMessage =
  | "It should be a valid email"
  | "Min length: 6"
  | "Max length: 20"
  | "Max length: 30"
  | "Required";

export type ResponseError = Record<ResponseErrorMessage, string>;
