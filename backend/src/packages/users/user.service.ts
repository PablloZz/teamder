import { type IService } from "@/interfaces/interfaces.js";

import {
  type UserGetAllResponseDto,
  type UserSignUpRequestDto,
  type UserSignUpResponseDto,
} from "./libs/types/types.js";
import { UserEntity } from "./user.entity.js";
import { type UserRepository } from "./user.repository.js";

class UserService implements IService {
  private userRepository: UserRepository;

  public constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public find(): ReturnType<IService["find"]> {
    return Promise.resolve(null);
  }

  public async findAll(): Promise<UserGetAllResponseDto> {
    const users = await this.userRepository.findAll();

    return { items: users.map((user) => user.toObject()) };
  }

  public async create(
    payload: UserSignUpRequestDto,
  ): Promise<UserSignUpResponseDto> {
    const user = await this.userRepository.create(
      UserEntity.initializeNew({
        email: payload.email,
        /** @todo replace with real implementation */
        passwordHash: "HASH",
        passwordSalt: "SALT",
      }),
    );

    return user.toObject();
  }

  public update(): ReturnType<IService["update"]> {
    return Promise.resolve(null);
  }

  public delete(): ReturnType<IService["delete"]> {
    return Promise.resolve(true);
  }
}

export { UserService };
