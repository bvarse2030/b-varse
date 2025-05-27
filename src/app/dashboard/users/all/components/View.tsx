/*
|-----------------------------------------
| setting up Controller for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: varse-project, May, 2025
|-----------------------------------------
*/

import Image from 'next/image';
import { format } from 'date-fns';
import React, { useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';

import { IGAuthUsers } from '../api/v1/Model';
import { useGAuthUsersStore } from '../store/Store';
import { baseIGAuthUsers } from '../store/StoreConstants';
import { useGetGAuthUsersByIdQuery } from '../redux/rtk-Api';

import { ViewRichText } from './view-rich-text/ViewRichText';

const ViewNextComponents: React.FC = () => {
  const { isViewModalOpen, selectedGAuthUsers, toggleViewModal, setSelectedGAuthUsers } = useGAuthUsersStore();
  const { data: GAuthUsersData, refetch } = useGetGAuthUsersByIdQuery(selectedGAuthUsers?._id, { skip: !selectedGAuthUsers?._id });

  useEffect(() => {
    if (selectedGAuthUsers?._id) {
      refetch(); // Fetch the latest GAuthUsers data
    }
  }, [selectedGAuthUsers?._id, refetch]);

  useEffect(() => {
    if (GAuthUsersData?.data) {
      setSelectedGAuthUsers(GAuthUsersData.data); // Update selectedGAuthUsers with the latest data
    }
  }, [GAuthUsersData, setSelectedGAuthUsers]);

  const formatDate = (date?: Date) => (date ? format(date, 'MMM dd, yyyy') : 'N/A');

  const DetailRow = ({ label, value }: { label: string; value: React.ReactNode }) => (
    <div className="grid grid-cols-3 gap-2">
      <div className="font-semibold">{label}:</div>
      <div className="col-span-2">{value || 'N/A'}</div>
    </div>
  );
  const DetailRowArray = ({ label, values }: { label: string; values: string[] }) => (
    <div className="grid grid-cols-3 gap-2">
      <div className="font-semibold">{label}:</div>
      <div className="col-span-2">{values?.join(', ')}</div>
    </div>
  );

  return (
    <Dialog open={isViewModalOpen} onOpenChange={toggleViewModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>GAuthUsers Details</DialogTitle>
        </DialogHeader>
        {selectedGAuthUsers && (
          <ScrollArea className="h-[400px] w-full rounded-md border p-4">
            <div className="w-full flex flex-col">
              <div className="grid gap-2">
                <DetailRow label="Name" value={selectedGAuthUsers.name as string} />
                <DetailRow label="Email" value={selectedGAuthUsers.email as string} />
                <DetailRow label="Pass Code" value={selectedGAuthUsers.passCode as string} />
                <DetailRow label="Alias" value={selectedGAuthUsers.alias as string} />
                <DetailRow
                  label="Role"
                  value={
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        selectedGAuthUsers.role === 'admin'
                          ? 'bg-amber-100 text-amber-700'
                          : selectedGAuthUsers.role === 'moderator'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-green-100 text-green-700'
                      }`}
                    >
                      {selectedGAuthUsers.role as string}
                    </span>
                  }
                />
                <DetailRowArray label="Data Array" values={selectedGAuthUsers.dataArr as string[]} />
                <DetailRow label="Created At" value={formatDate(selectedGAuthUsers.createdAt)} />
                <DetailRow label="Updated At" value={formatDate(selectedGAuthUsers.updatedAt)} />
              </div>
              <div className="w-full flex items-center justify-center mt-2 min-h-[10vh]">
                {Array.isArray(selectedGAuthUsers.images) && selectedGAuthUsers.images?.length > 0 ? (
                  <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-1">
                    {selectedGAuthUsers.images.map((i, index) => (
                      <div
                        key={index + i}
                        className={`relative w-full h-[150px] border-1 border-slate-300 shadow-xl hover:shadow-2xl cursor-pointer hover:border-slate-600 flex items-center justify-center rounded-lg overflow-hidden`}
                      >
                        <Image src={i} fill alt="Media" objectFit="cover" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col w-full items-center justify-center">
                    <p>Ops! there is no Image</p>
                  </div>
                )}
              </div>
              <div className="w-full m-2" />
              <ViewRichText data={selectedGAuthUsers.descriptions || ''} />
            </div>
          </ScrollArea>
        )}
        <DialogFooter>
          <Button
            className="cursor-pointer border-1 border-slate-400 hover:border-slate-500"
            onClick={() => {
              toggleViewModal(false);
              setSelectedGAuthUsers({ ...baseIGAuthUsers } as IGAuthUsers);
            }}
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ViewNextComponents;
