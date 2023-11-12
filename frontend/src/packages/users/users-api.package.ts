import { ApiPath, ContentType } from "@/enums/enums.js";
import { HttpApi } from "@/packages/api/api.js";
import { type IHttp } from "@/packages/http/http.js";
import { type IStorage } from "@/packages/storage/storage.js";

import { UsersApiPath } from "./libs/enums/enums.js";
import { type UserGetAllResponseDto } from "./libs/types/types.js";

type Constructor = {
  baseUrl: string;
  http: IHttp;
  storage: IStorage;
};

class UsersApi extends HttpApi {
  public constructor({ baseUrl, http, storage }: Constructor) {
    super({ baseUrl, path: ApiPath.USERS, http, storage });
  }

  public async getAll(): Promise<UserGetAllResponseDto> {
    const response = await this.load(
      this.getFullEndpoint(UsersApiPath.ROOT, {}),
      { method: "GET", contentType: ContentType.JSON, hasAuth: false },
    );

    return await response.json<UserGetAllResponseDto>();
  }
}

export { UsersApi };
