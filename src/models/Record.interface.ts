export interface Record {
  name: string
  filter?: Filter
};

interface Filter {
  column: string,
  operator: string,
  value: string
};