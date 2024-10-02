'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, Edit, Trash } from 'lucide-react';

import { User, Role } from '../types/user-type';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'name',
    header: 'Name',

    cell: ({ row }) => {
      return (
        <div className=" flex items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="ml-2 text-sm font-medium">{row.original.name}</span>
        </div>
      );
    },
  },
  {
    accessorKey: 'email',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'role',
    header: 'Role',
    cell: ({ row }) => {
      return <Badge variant="outline">{row.original.role.toLowerCase()}</Badge>;
    },
  },
  {
    accessorKey: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      return (
        <div className="flex justify-end space-x-2">
          <Button variant="ghost" size="icon">
            <Edit className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Trash className="h-4 w-4 text-red-500" />
          </Button>
        </div>
      );
    },
  },
];
