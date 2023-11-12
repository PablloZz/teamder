import { type IRepository } from "@/interfaces/interfaces.js";

import { UserEntity } from "./user.entity.js";
import { type UserModel } from "./user.model.js";

class UserRepository implements IRepository {
  private userModel: typeof UserModel;

  public constructor(userModel: typeof UserModel) {
    this.userModel = userModel;
  }

  public find(): ReturnType<IRepository["find"]> {
    return Promise.resolve(null);
  }

  public async findAll(): Promise<UserEntity[]> {
    const users = await this.userModel.query().execute();

    return users.map((user) => UserEntity.initialize(user));
  }

  public async create(entity: UserEntity): Promise<UserEntity> {
    const { email, passwordHash, passwordSalt } = entity.toNewObject();

    const user = await this.userModel
      .query()
      .insert({ email, passwordSalt, passwordHash })
      .returning("*")
      .execute();

    return UserEntity.initialize(user);
  }

  public update(): ReturnType<IRepository["update"]> {
    return Promise.resolve(null);
  }

  public delete(): ReturnType<IRepository["delete"]> {
    return Promise.resolve(true);
  }
}

export { UserRepository };
