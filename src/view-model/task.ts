type Phantomic<T, U extends string> = T & { [key in U]: never }

export type Unixtime = Phantomic<number, 'Unixtime'>

export type Task = {
  id: number;
  name: string;
  deliveryDate: Unixtime
}
