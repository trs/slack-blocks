import { PlainTextObject } from './text';

/** An object that represents a single selectable item in a select menu. */
export interface OptionObject {
  /** A `plain_text` only text object that defines the text shown in the option on the menu. Maximum length for the `text` in this field is 75 characters. */
  text: PlainTextObject;
  /** The string value that will be passed to your app when this option is chosen. Maximum length for this field is 75 characters. */
  value: string;
}

export function OptionObject(fields: OptionObject): OptionObject {
  return {
    ...fields
  };
}
