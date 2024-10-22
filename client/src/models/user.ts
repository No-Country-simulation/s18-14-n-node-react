export interface User {
  description: string | null;
  image: string;
  user: {
    email: string;
    username: string;
  }
}
