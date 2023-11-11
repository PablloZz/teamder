import { ApiPath, ContentType } from "@/enums/enums.js";
import { HttpApi } from "@/packages/api/api.js";
import { type IHttp } from "@/packages/http/http.js";
import { type IStorage } from "@/packages/storage/storage.js";
import {
  type UserSignUpRequestDto,
  type UserSignUpResponseDto,
} from "#/users/users.js";

import { AuthApiPath } from "./libs/enums/enums.js";

type Constructor = {
  baseUrl: string;
  http: IHttp;
  storage: IStorage;
};

class AuthApi extends HttpApi {
  public constructor({ baseUrl, http, storage }: Constructor) {
    super({ baseUrl, path: ApiPath.AUTH, http, storage });
  }

  public async signUp(
    payload: UserSignUpRequestDto,
  ): Promise<UserSignUpResponseDto> {
    const response = await this.load(
      this.getFullEndpoint(AuthApiPath.SIGN_UP, {}),
      {
        method: "POST",
        contentType: ContentType.JSON,
        payload: JSON.stringify(payload),
        hasAuth: false,
      },
    );

    return await response.json<UserSignUpResponseDto>();
  }
}

export { AuthApi };
