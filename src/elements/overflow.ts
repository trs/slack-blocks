import { Element } from '.';
import { OptionObject, ConfirmObject } from '../objects';

/**
 *
 *
 * https://api.slack.com/reference/messaging/block-elements#overflow
 */
export interface OverflowMenuElement extends Element {
  type: 'overflow';
  action_id: string;
  options: OptionObject[];
  confirm: ConfirmObject;
}

export function OverflowMenuElement(
  fields: OverflowMenuElement
): OverflowMenuElement {
  return {
    ...fields,
    type: 'overflow'
  };
}
