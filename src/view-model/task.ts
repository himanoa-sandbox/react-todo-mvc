type Phantomic<T, U extends string> = T & { [key in U]: never }

export type DeliveryDate = Phantomic<string, 'Unixtime'>

export const fromUnixtime: (t: number) => DeliveryDate = (t) => {
  // TODO: 実装

  return 'foo' as any
}

export type Task = {
  id: number;
  name: string;
  deliveryDate: DeliveryDate
}
