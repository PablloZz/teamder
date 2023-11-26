import {
  type UserService,
  type UserSignUpBasic,
  type UserSignUpResponseDto,
} from "#/users/users.js";

class AuthService {
  private userService: UserService;

  public constructor(userService: UserService) {
    this.userService = userService;
  }

  public signUp(
    userRequestDto: UserSignUpBasic,
  ): Promise<UserSignUpResponseDto> {
    return this.userService.create(userRequestDto);
  }
}

export { AuthService };
