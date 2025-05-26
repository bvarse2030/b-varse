import { toast } from 'react-toastify';
import { ApiErrorResponse } from './TypeUtils';

export const handleSuccess = (message: string) => {
  toast.success(message, {
    toastId: (Math.random() * 1000).toFixed(0),
    position: 'top-center',
  });
};

export const handleError = (str: string) => {
  toast.error(str, {
    toastId: (Math.random() * 1000).toFixed(0),
    position: 'top-center',
  });
};

export function isApiErrorResponse(error: unknown): error is ApiErrorResponse {
  return (
    typeof error === 'object' &&
    error !== null &&
    'status' in error &&
    typeof (error as ApiErrorResponse).status === 'number' &&
    'data' in error &&
    typeof (error as ApiErrorResponse).data === 'object' &&
    (error as ApiErrorResponse).data !== null &&
    'message' in (error as ApiErrorResponse).data &&
    typeof (error as ApiErrorResponse).data.message === 'string' &&
    'status' in (error as ApiErrorResponse).data &&
    typeof (error as ApiErrorResponse).data.status === 'number'
  );
}
