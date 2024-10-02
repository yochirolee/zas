'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { createUser, userSchema } from '../actions/user-actions';
import { useState } from 'react';

type UserFormData = z.infer<typeof userSchema>;

export default function CreateUserForm() {
  const [isLoading, setIsloading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = async (data: UserFormData) => {
    try {
        console.log(data,"data to create")
      const user = await createUser(data); // data now includes role
      // Add your logic to create a new user here
      if (user) {
      }
    } catch {}
  };

  return (
    <div>
      <h2 className="mb-4 text-lg font-medium">Create New User</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-sm font-medium">Name</label>
          <Input
            type="text"
            placeholder="Enter name"
            {...register('name')}
            className="mt-1"
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Email</label>
          <Input
            type="email"
            placeholder="Enter email"
            {...register('email')}
            className="mt-1"
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Password</label>
          <Input
            type="password"
            placeholder="Enter password"
            {...register('password')}
            className="mt-1"
          />
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Role</label>
          <select {...register('role')} className="w-full mt-1">
            <option value="" disabled selected>Select role</option>
            <option value="Administrator">Admin</option>
            <option value="Customer">User</option>
          </select>
          {errors.role && (
            <p className="text-sm text-red-500">{errors.role.message}</p>
          )}
        </div>
        <Button type="submit" className="mt-4">
          Create User
        </Button>
      </form>
    </div>
  );
}
