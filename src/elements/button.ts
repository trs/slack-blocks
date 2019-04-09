import { Element } from '.';
import { ConfirmObject } from '../objects';
import { PlainTextObject } from '../objects/text';

/**
 * An interactive element that inserts a button. The button can be a trigger for anything from opening a simple link to starting a complex workflow.
 *
 * https://api.slack.com/reference/messaging/block-elements#button
 */
export interface ButtonElement extends Element {
  type: 'button';
  /** A text object that defines the button's text. Can only be of type: `plain_text`. Maximum length for the `text` in this field is 75 characters. */
  text: PlainTextObject;
  /** An identifier for this action. You can use this when you receive an interaction payload to identify the source of the action. Should be unique among all other `action_id`s used elsewhere by your app. Maximum length for this field is 255 characters. */
  action_id: string;
  /** A URL to load in the user's browser when the button is clicked. Maximum length for this field is 3000 characters. */
  url?: string;
  /** The value to send along with the interaction payload. Maximum length for this field is 75 characters. */
  value?: string;
  /** A confirm object that defines an optional confirmation dialog after the button is clicked. */
  confirm?: ConfirmObject;
}

export function ButtonElement(fields: ButtonElement): ButtonElement {
  return {
    ...fields,
    type: 'button'
  };
}
