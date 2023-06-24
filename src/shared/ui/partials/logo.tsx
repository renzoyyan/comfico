import { cn } from '@/shared/utils/commons';
import React from 'react';

type Props = {
  className?: string;
};

export const Logo = (props: Props) => {
  return <div className={cn('text-2xl font-bold text-brand-1', props.className)}>comfico</div>;
};
