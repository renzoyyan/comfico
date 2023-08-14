import { Button } from '@/shared/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shared/components/ui/sheet';
import { Filter as FilterIcon } from 'lucide-react';
import React from 'react';
import { Filter } from './filter';
import { Category } from '../types';

export const FilterPanel = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="h-12 w-12 rounded-lg border-gray-300">
          <FilterIcon className="icon-sm text-brand-2" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-sm">
        <SheetHeader>
          <SheetTitle>Filter Products</SheetTitle>
        </SheetHeader>

        <div className="mt-10 space-y-6">
          <Filter />
        </div>
      </SheetContent>
    </Sheet>
  );
};
