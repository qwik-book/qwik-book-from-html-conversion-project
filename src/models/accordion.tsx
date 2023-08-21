import { Signal } from '@builder.io/qwik';

export interface IAccordionItem {
  answer: string;
  question: string;
  open: boolean;
}
export interface AccordionProps {
  data: Signal<IAccordionItem[]>;
}
