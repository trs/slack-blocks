import { Block } from '.';
import { TextObject } from '../objects';
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
 * https://api.slack.com/reference/messaging/blocks#section
 */
export interface SectionBlock extends Block {
  type: 'section';
  text: TextObject;
  fields?: TextObject[];
  accessory:
    | ButtonElement
    | DatePickerElement
    | ImageElement
    | OverflowMenuElement
    | SelectElement;
}

export function SectionBlock(fields: SectionBlock): SectionBlock {
  return {
    ...fields,
    type: 'section'
  };
}
