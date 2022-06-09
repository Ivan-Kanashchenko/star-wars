export interface CheckboxBlockProps {
  title: string;
  data: {
    title: string;
    type: string;
    filters: {
      id: number;
      name: string;
      type: string;
      label: string;
      value: string;
    }[];
  };
}
export interface PriceBlockProps {
  title?: string;
  data: { type: string };
}
