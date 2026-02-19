/**
 * Shared TypeScript types/interfaces.
 * Backend DTOs and API response types can be added here.
 */
export type VehicleType = 'bike' | 'car' | 'other';
export type LeaveType = 'normal' | 'holiday';
export type DistanceStatus = 'started' | 'finished';

export interface DistanceRecord {
  id: string;
  vehicleType: VehicleType;
  status: DistanceStatus;
  startOdo: number;
  endOdo?: number;
  startDate?: string;
  endDate?: string;
  startOdoImage?: string;
  startSelfieImage?: string;
  endOdoImage?: string;
  endSelfieImage?: string;
}
