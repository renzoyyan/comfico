import { z } from 'zod';
import { LoginSchema, RegisterSchema } from './validations';

export type TLogin = z.infer<typeof LoginSchema>;
export type TRegister = z.infer<typeof RegisterSchema>;
export type AuthToken = string;
