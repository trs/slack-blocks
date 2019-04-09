import { Element } from '.';

/**
 * An element to insert an image - this element can be used in section and context blocks only.
 *
 * https://api.slack.com/reference/messaging/block-elements#image
 */
export interface ImageElement extends Element {
  type: 'image';
  /** The URL of the image to be displayed. */
  image_url: string;
  /** A plain-text summary of the image. This should not contain any markup. */
  alt_text: string;
}

export function ImageElement(fields: ImageElement): ImageElement {
  return {
    ...fields,
    type: 'image'
  };
}
