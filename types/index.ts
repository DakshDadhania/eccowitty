export type VotesType = {
  count: number;
  value: number;
}

export type PunctuationType = {
  countOpinions: number;
  punctuation: number;
  votes: VotesType[]
}

export type ReviewType = {
  name: string;
  avatar: string;
  description: string;
  punctuation: number;
}

export type ProductType = {
  pid: number;
  title: string;
  image: string;
  price: number;
  description: string;
}

export type ProductTypeList = {
  pid: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

export type ProductStoreType = {
  id: string;
  name: string;
  thumb: string;
  price: number;
  count: number;
  color: string;
  size: string;
}

export type GtagEventType = {
  action: string;
  category: string; 
  label: string;
  value: string
}