import { type ValueOf } from "@/types/types.js";

import { type StorageKey } from "./libs/enums/enums.js";
import { type IStorage } from "./libs/interfaces/interfaces.js";

class Storage implements IStorage {
  private store: globalThis.Storage;

  public constructor(store: globalThis.Storage) {
    this.store = store;
  }

  public get<T = string>(key: ValueOf<typeof StorageKey>): Promise<T | null> {
    return Promise.resolve(this.store.getItem(key as string) as T);
  }

  public set(key: ValueOf<typeof StorageKey>, value: string): Promise<void> {
    this.store.setItem(key as string, value);

    return Promise.resolve();
  }

  public drop(key: ValueOf<typeof StorageKey>): Promise<void> {
    this.store.removeItem(key as string);

    return Promise.resolve();
  }

  public async has(key: ValueOf<typeof StorageKey>): Promise<boolean> {
    const value = await this.get(key);

    return Boolean(value);
  }
}

export { Storage };
