import { ApiPath } from "@/enums/enums.js";
import {
  type ApiHandlerResponse,
  Controller,
} from "@/packages/controller/controller.js";
import { HttpCode } from "@/packages/http/http.js";
import { type ILogger } from "@/packages/logger/logger.js";

import { UsersApiPath } from "./libs/enums/enums.js";
import { type UserService } from "./user.service.js";

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           format: number
 *           minimum: 1
 *         email:
 *           type: string
 *           format: email
 */
class UserController extends Controller {
  private userService: UserService;

  public constructor(logger: ILogger, userService: UserService) {
    super(logger, ApiPath.USERS);

    this.userService = userService;

    this.addRoute({
      path: UsersApiPath.ROOT,
      method: "GET",
      handler: () => this.findAll(),
    });
  }

  /**
   * @swagger
   * /users:
   *   get:
   *     description: Returns an array of users
   *     responses:
   *       200:
   *         description: Successful operation
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: "#/components/schemas/User"
   */
  private async findAll(): Promise<ApiHandlerResponse> {
    return {
      status: HttpCode.OK,
      payload: await this.userService.findAll(),
    };
  }
}

export { UserController };
