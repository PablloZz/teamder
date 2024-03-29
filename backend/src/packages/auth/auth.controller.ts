import { ApiPath } from "@/enums/enums.js";
import {
  type ApiHandlerOptions,
  type ApiHandlerResponse,
  Controller,
} from "@/packages/controller/controller.js";
import { HttpCode } from "@/packages/http/http.js";
import { type ILogger } from "@/packages/logger/logger.js";
import { type UserSignUpBasic } from "#/users/users.js";
import { userSignUpValidationSchema } from "#/users/users.js";

import { type AuthService } from "./auth.service.js";
import { AuthApiPath } from "./libs/enums/enums.js";

class AuthController extends Controller {
  private authService: AuthService;

  public constructor(logger: ILogger, authService: AuthService) {
    super(logger, ApiPath.AUTH);

    this.authService = authService;

    this.addRoute({
      path: AuthApiPath.SIGN_UP,
      method: "POST",
      validation: {
        body: userSignUpValidationSchema,
      },
      handler: (options) =>
        this.signUp(options as ApiHandlerOptions<{ body: UserSignUpBasic }>),
    });
  }

  /**
   * @swagger
   * /auth/sign-up
   *   post:
   *     description: Sign up user into the system
   *     requestBody:
   *       description: User auth data
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               email:
   *                 type: string
   *                 format: email
   *               password:
   *                 type: string
   *     responses:
   *       201:
   *         description: Successful operation
   *         content:
   *           application/json
   *             schema:
   *               type: object
   *               properties:
   *                 message:
   *                   type: object
   *                   $ref: "#/components/schemas/User"
   */
  private async signUp(
    options: ApiHandlerOptions<{ body: UserSignUpBasic }>,
  ): Promise<ApiHandlerResponse> {
    return {
      status: HttpCode.CREATED,
      payload: await this.authService.signUp(options.body),
    };
  }
}

export { AuthController };
