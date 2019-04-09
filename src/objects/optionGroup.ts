import { OptionObject } from './option';
import { PlainTextObject } from './text';

/** Provides a way to group options in a select menu. */
export interface OptionGroupObject {
  /** A `plain_text` only text object that defines the label shown above this group of options. Maximum length for the `text` in this field is 75 characters. */
  label: PlainTextObject;
  /** An array of option objects that belong to this specific group. Maximum of 100 items. */
  options: OptionObject[];
}
