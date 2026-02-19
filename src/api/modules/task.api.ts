import { client } from '../client';
import { endpoints } from '../endpoints';

export const taskApi = {
  list: () => client.get<unknown[]>(endpoints.task.list),
  create: (data: unknown) => client.post(endpoints.task.create, data),
  get: (id: string) => client.get(endpoints.task.get(id)),
  update: (id: string, data: unknown) => client.put(endpoints.task.update(id), data),
  delete: (id: string) => client.delete(endpoints.task.delete(id)),
};
