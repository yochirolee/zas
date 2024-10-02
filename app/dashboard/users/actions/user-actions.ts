const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoieWxlZWNydXpAZ21haWwuY29tIiwicm9sZSI6IkFETUlOSVNUUkFUT1IiLCJpYXQiOjE3Mjc3MDk1NTgsImV4cCI6MTcyNzcxMzE1OH0.FJo8EroscFwMZ7ZwF6yr13SkDRg60xNIJZRtYSOkX1s';
import { revalidatePath } from 'next/cache';
import { User, Role } from '../types/user-type';
import { redirect } from 'next/navigation';
import { z } from 'zod';

export const userSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  role: z.enum(['Administrator', 'Customer']), // Set default value to 'Customer'
});

export async function getUsers(): Promise<User[]> {
  try {
    const data = await fetch('http://localhost:3001/api/ecommerce/v1/users', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function createUser(user: Omit<User, 'id'>): Promise<User | null> {
  try {
    console.log(user, 'user for create');
    const response = await fetch(
      'http://localhost:3001/api/ecommerce/v1/users/register',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(user),
      },
    );
    const createdUser: User = await response.json(); // Parse the response to JSON
    revalidatePath('/dashboard/users)');
    redirect('dashboard/users');
  } catch (error) {
    console.error(error);
    return null;
  }
}
