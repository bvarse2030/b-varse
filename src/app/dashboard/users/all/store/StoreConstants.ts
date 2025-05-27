import { IGAuthUsers } from '../api/v1/Model';

type PartialIGAuthUsers = Pick<IGAuthUsers, '_id' | 'name' | 'email' | 'passCode' | 'alias' | 'role'>;

export const baseIGAuthUsersPerPage = 2;
export const queryParams = { q: '', page: 1, limit: baseIGAuthUsersPerPage };
export const pageLimitArr: number[] = [baseIGAuthUsersPerPage, 10, 50, 100, 200];
export const gAuthUsersSelectorArr = ['select', 'admin', 'moderator'];
export type ISelect = 'select' | 'admin' | 'moderator';
export const select = 'select';
export const defaultGAuthUsersData = { name: '', email: '', passCode: '', alias: '', role: select };
export const baseIGAuthUsers: PartialIGAuthUsers = {
  _id: '',
  ...defaultGAuthUsersData,
};
