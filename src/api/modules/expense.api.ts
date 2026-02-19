import { client } from '../client';
import { endpoints } from '../endpoints';

export const expenseApi = {
  list: () => client.get<unknown[]>(endpoints.expense.list),
  create: (data: unknown) => client.post(endpoints.expense.create, data),
  get: (id: string) => client.get(endpoints.expense.get(id)),
  update: (id: string, data: unknown) => client.put(endpoints.expense.update(id), data),
  delete: (id: string) => client.delete(endpoints.expense.delete(id)),
};
