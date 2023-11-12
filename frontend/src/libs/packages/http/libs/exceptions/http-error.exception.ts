import { type ServerErrorType } from "@/enums/enums.js";
import { type ServerErrorDetail, type ValueOf } from "@/types/types.js";

import { type HttpCode } from "../enums/enums.js";
import { LibraryHttpError } from "./exceptions.js";

type Constructor = {
  message: string;
  status: ValueOf<typeof HttpCode>;
  errorType: ValueOf<typeof ServerErrorType>;
  details: ServerErrorDetail[];
  cause?: unknown;
};

class HttpError extends LibraryHttpError {
  public errorType: ValueOf<typeof ServerErrorType>;

  public details: ServerErrorDetail[];

  public constructor({
    message,
    status,
    cause,
    errorType,
    details,
  }: Constructor) {
    super({ status, message, cause });

    this.errorType = errorType;
    this.details = details;
  }
}

export { HttpError };
