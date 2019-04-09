import { Element } from '.';
import { PlainTextElement, ConfirmObject } from '../objects';

/**
 *
 *
 * https://api.slack.com/reference/messaging/block-elements#datepicker
 */
export interface DatePickerElement extends Element {
  type: 'datepicker';
  placeholder: PlainTextElement;
  initial_date: string;
  confirm: ConfirmObject;
}

export function DatePickerElement(
  fields: DatePickerElement
): DatePickerElement {
  return {
    ...fields,
    type: 'datepicker'
  };
}
