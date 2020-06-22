import { ModelData, ModelsKeys } from './types';

interface IModel<T extends ModelData> {
  get(): Promise<this>;
  update(data: ModelData): this;
  clone(): Promise<Model<T>>;
}

type StaticGetMethodProps<T extends ModelData> = Partial<
  {
    [k in keyof T]: T[k];
  }
>;

type PrimaryKey = ModelsKeys[];

export default class Model<T extends ModelData> implements IModel<T> {
  constructor(arg: Partial<ModelData>) {}

  static async create(data: ModelData) {
    return data;
  }
  static async update(data: ModelData, template) {
    const updatedData = data;
    console.log({ error: 'Не обновлен, нет реализации' });
    return updatedData;
  }
  static async list(input: { nextToken: string; template: any }) {
    return this.mock;
  }

  static async delete(model: Model<ModelData>) {
    console.log({ error: 'Не удален, нет реализации' });
    return model;
  }

  protected static readonly primaryKey: PrimaryKey = ['id'];

  static async get<T extends ModelData>(keys: StaticGetMethodProps<T>): Promise<T> {
    const data = this.mock.find((model) =>
      this.primaryKey.every((key) => model[key] === keys[key]),
    );
    if (data) {
      return data as T;
    } else {
      return this.mock[0] as T;
    }
  }

  static mock: ModelData[] = [];

  async get(): Promise<this> {
    return this;
  }

  update(data: T): this {
    return this;
  }

  clone(): Promise<Model<T>> {
    return this.constructor(this);
  }
}
