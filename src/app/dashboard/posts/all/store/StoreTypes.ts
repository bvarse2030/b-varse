import { IPosts } from '../api/v1/Model';

export interface PostsStore {
  queryPramsLimit: number;
  queryPramsPage: number;
  queryPramsQ: string;
  posts: IPosts[];
  selectedPosts: IPosts | null;
  newPosts: Partial<IPosts>;
  isAddModalOpen: boolean;
  isViewModalOpen: boolean;
  isEditModalOpen: boolean;
  isDeleteModalOpen: boolean;
  setnewPosts: React.Dispatch<React.SetStateAction<Partial<IPosts>>>;
  isBulkEditModalOpen: boolean;
  isBulkUpdateModalOpen: boolean;
  isBulkDynamicUpdateModal: boolean;
  isBulkDeleteModalOpen: boolean;
  bulkData: IPosts[];
  setQueryPramsLimit: (payload: number) => void;
  setQueryPramsPage: (payload: number) => void;
  setQueryPramsQ: (payload: string) => void;
  setPosts: (posts: IPosts[]) => void;
  setSelectedPosts: (Posts: IPosts | null) => void;
  toggleAddModal: (isOpen: boolean) => void;
  toggleViewModal: (isOpen: boolean) => void;
  toggleEditModal: (isOpen: boolean) => void;
  toggleDeleteModal: (isOpen: boolean) => void;
  toggleBulkEditModal: (Posts: boolean) => void;
  toggleBulkUpdateModal: (Posts: boolean) => void;
  toggleBulkDynamicUpdateModal: (Posts: boolean) => void;
  toggleBulkDeleteModal: (Posts: boolean) => void;
  setBulkData: (bulkData: IPosts[]) => void;
}
