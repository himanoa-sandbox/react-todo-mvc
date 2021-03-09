type Phantomic<T, U extends string> = T & { [key in U]: never }

export type DeliveryDate = Phantomic<string, 'Unixtime'>

export type Todo = {
  id: number;
  name: string;
  deliveryDate: DeliveryDate
}
