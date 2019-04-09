/**
 * An object containing some text, formatted either as `plain_text` or using [Slack's `mrkdwn`](https://api.slack.com/messaging/composing/formatting).
 *
 * https://api.slack.com/reference/messaging/composition-objects#text
 */
export interface TextObject {
  /** The formatting to use for this text object. Can be one of `plain_text` or `mrkdwn`. */
  type: 'plain_text' | 'mrkdwn';
  /** The text for the block. This field accepts any of the standard [text formatting markup](https://api.slack.com/messaging/composing/formatting) when type is `mrkdwn`. */
  text: string;
  /** Indicates whether emojis in a text field should be escaped into the colon emoji format. This field is only usable when `type` is `plain_text`. */
  emoji?: boolean;
  /** When set to `false` (as is default) URLs will be auto-converted into links, conversation names will be link-ified, and certain mentions will be [automatically parsed](https://api.slack.com/messaging/composing/formatting#automatic-parsing).
Using a value of `false` will skip any preprocessing of this nature, although you can still include [manual parsing strings](https://api.slack.com/messaging/composing/formatting#advanced). This field is only usable when `type` is `mrkdwn`. */
  verbatim?: boolean;
}

export interface PlainTextObject extends TextObject {
  type: 'plain_text';
}

export function TextObject(fields: TextObject): TextObject {
  return {
    emoji: false,
    verbatim: false,
    ...fields
  };
}
