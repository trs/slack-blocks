import { Block } from '.';
import {
  ButtonElement,
  DatePickerElement,
  ImageElement,
  OverflowMenuElement,
  SelectElement
} from '../elements';

/**
 *
 *
 * https://api.slack.com/reference/messaging/blocks#actions
 */
export interface ActionsBlock extends Block {
  type: 'actions';
  elements: (
    | ButtonElement
    | DatePickerElement
    | ImageElement
    | OverflowMenuElement
    | SelectElement)[];
}

export function ActionsBlock(fields: ActionsBlock): ActionsBlock {
  return {
    ...fields,
    type: 'actions'
  };
}
