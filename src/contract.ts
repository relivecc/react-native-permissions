import {
  NotificationOption,
  NotificationsResponse,
  Permission,
  PermissionStatus,
  RequestOptions,
} from './types';

export interface Contract {
  openSettings(): Promise<void>;

  presentLimitedLibraryPicker(): Promise<void>;

  check(permission: Permission): Promise<PermissionStatus>;

  request<T extends Permission>(
    permission: T,
    options?: RequestOptions<T>,
  ): Promise<PermissionStatus>;

  checkNotifications(): Promise<NotificationsResponse>;

  requestNotifications(
    options: NotificationOption[],
  ): Promise<NotificationsResponse>;

  checkMultiple<P extends Permission[]>(
    permissions: P,
  ): Promise<Record<P[number], PermissionStatus>>;

  requestMultiple<P extends Permission[]>(
    permissions: P,
  ): Promise<Record<P[number], PermissionStatus>>;
}
