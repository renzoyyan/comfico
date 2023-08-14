import { cn } from '@/shared/utils/commons';
import { type PropsWithChildren } from 'react';

type ErrorMessageProps = PropsWithChildren & {
  message?: string;
  className?: string;
};

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, className, children }) => {
  return (
    <div className={cn('mt-1 flex items-center gap-x-2', className)}>
      {/* <ExclamationCircleIcon className="h-5 w-5 text-red-500" /> */}
      <span className="text-destructive text-sm">{message}</span>

      {children}
    </div>
  );
};
