export type Milk =  {
  name: string;
  type: string;
  storage: number;
  id: string;
}

export type MilkResponse = {
  count: number;
  page: number;
  results: Milk[];
}