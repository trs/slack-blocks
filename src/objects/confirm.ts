import { TextObject, PlainTextObject } from './text';

/**
 * An object that defines a dialog that provides a confirmation step to any interactive element. This dialog will ask the user to confirm their action by offering a confirm and deny buttons.
 */
export interface ConfirmObject {
  /** A `plain_text`-only text object that defines the dialog's title. Maximum length for this field is 100 characters. */
  title: PlainTextObject;
  /** A text object that defines the explanatory text that appears in the confirm dialog. Maximum length for the `text` in this field is 300 characters. */
  text: TextObject;
  /** A `plain_text`-only text object to define the text of the button that confirms the action. Maximum length for the `text` in this field is 30 characters. */
  confirm: PlainTextObject;
  /** A `plain_text`-only text object to define the text of the button that cancels the action. Maximum length for the `text` in this field is 30 characters. */
  deny: PlainTextObject;
}

export function ConfirmObject(fields: ConfirmObject): ConfirmObject {
  return {
    ...fields
  };
}
