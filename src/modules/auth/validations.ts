import { VALIDATOR_MESSAGE } from '@/shared/constants/commons';
import { z } from 'zod';

export const LoginSchema = z.object({
  email: z.string().nonempty(VALIDATOR_MESSAGE.REQUIRED).email(),
  password: z.string().nonempty(VALIDATOR_MESSAGE.REQUIRED),
});

export const RegisterSchema = LoginSchema.extend({
  first_name: z.string().nonempty(VALIDATOR_MESSAGE.REQUIRED),
  last_name: z.string().nonempty(VALIDATOR_MESSAGE.REQUIRED),
  contact_number: z.string().nonempty(VALIDATOR_MESSAGE.REQUIRED),
});
