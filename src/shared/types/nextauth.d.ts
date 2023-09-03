import 'next-auth';

export interface UserAccount {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  profile_image?: string;
  contact_number?: string;
  access_token: string;
}

declare module 'next-auth' {
  interface User extends UserAccount {}
  interface Session {
    user: User;
  }
}
