export interface Medicine {
  _id: string;
  name: string;
  price: number;
  likes: number;
  creationDate: string;
}

export interface MedInCart extends Medicine {
  quantity: number | null;
}
