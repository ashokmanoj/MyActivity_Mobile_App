import { client } from '../client';
import { endpoints } from '../endpoints';
import type { DistanceRecord } from '../../types';

export const distanceApi = {
  list: (params?: { search?: string }) =>
    client.get<DistanceRecord[]>(params?.search ? `${endpoints.distance.list}?search=${encodeURIComponent(params.search)}` : endpoints.distance.list),

  create: (data: Partial<DistanceRecord>) =>
    client.post<DistanceRecord>(endpoints.distance.create, data),

  get: (id: string) => client.get<DistanceRecord>(endpoints.distance.get(id)),

  update: (id: string, data: Partial<DistanceRecord>) =>
    client.put<DistanceRecord>(endpoints.distance.update(id), data),

  delete: (id: string) => client.delete(endpoints.distance.delete(id)),

  submitLeave: (data: { leaveType: string }) =>
    client.post(endpoints.distance.leave, data),
};
