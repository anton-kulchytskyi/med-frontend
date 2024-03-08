export interface Medicine {
  _id: string;
  name: string;
  price: number;
  likes: boolean;
  creationDate: string;
  pharmacyId: string;
}

export interface MedInCart extends Medicine {
  quantity: number | null;
}
