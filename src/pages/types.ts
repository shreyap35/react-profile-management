interface Profile {
  _id: string;
  firstName: string;
  lastName: string;
  age: number;
  address?: string;
  location?: number[];
  interests?: string[];
  photo: string;
  email: string;
  phone: string;
}
