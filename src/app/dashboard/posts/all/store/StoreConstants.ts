import { IPosts } from '../api/v1/Model';

type PartialIPosts = Pick<IPosts, '_id' | 'name' | 'email' | 'passCode' | 'alias' | 'role'>;

export const baseIPostsPerPage = 2;
export const queryParams = { q: '', page: 1, limit: baseIPostsPerPage };
export const pageLimitArr: number[] = [baseIPostsPerPage, 10, 50, 100, 200];
export const postsSelectorArr = ['select', 'admin', 'moderator'];
export type ISelect = 'select' | 'admin' | 'moderator';
export const select = 'select';
export const defaultPostsData = { name: '', email: '', passCode: '', alias: '', role: select };
export const baseIPosts: PartialIPosts = {
  _id: '',
  ...defaultPostsData,
};

