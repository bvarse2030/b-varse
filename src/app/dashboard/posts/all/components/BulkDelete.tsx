import React from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';

import { usePostsStore } from '../store/Store';
import { useBulkDeletePostsMutation } from '../redux/rtk-Api';
import { IPosts } from '../api/v1/Model';

const BulkDeleteNextComponents: React.FC = () => {
  const { isBulkDeleteModalOpen, toggleBulkDeleteModal, bulkData, setBulkData } = usePostsStore();
  const [bulkDeletePosts, { isLoading }] = useBulkDeletePostsMutation();

  const handleBulkDeleteNextComponents = async () => {
    if (!bulkData?.length) return;
    try {
      const ids = bulkData.map((Posts: IPosts) => Posts._id);
      await bulkDeletePosts({ ids }).unwrap();
      toggleBulkDeleteModal(false);
      setBulkData([]);
    } catch (error) {
      console.error('Failed to delete Posts:', error);
    }
  };

  return (
    <Dialog open={isBulkDeleteModalOpen} onOpenChange={toggleBulkDeleteModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Deletion</DialogTitle>
        </DialogHeader>
        {bulkData?.length > 0 && (
          <div className="pt-4">
            <p>
              You are about to delete <span className="font-semibold">({bulkData.length})</span> posts
            </p>
          </div>
        )}
        <ScrollArea className="h-[400px] w-full rounded-md border p-4">
          <div className="flex flex-col">
            {bulkData.map((Posts: IPosts, idx: number) => (
              <span key={(Posts._id as string) + idx} className="text-xs">
                {idx + 1}. {(Posts.name as string) || ''}
              </span>
            ))}
          </div>
        </ScrollArea>
        <DialogFooter>
          <Button className="cursor-pointer" variant="outline" onClick={() => toggleBulkDeleteModal(false)}>
            Cancel
          </Button>
          <Button
            disabled={isLoading}
            variant="outline"
            className="cursor-pointer text-rose-500 border-rose-400 hover:border-rose-500"
            onClick={handleBulkDeleteNextComponents}
          >
            Delete Selected
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BulkDeleteNextComponents;
