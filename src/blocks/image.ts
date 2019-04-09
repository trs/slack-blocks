import { Block } from '.';
import { PlainTextObject } from '../objects';

/**
 *
 *
 * https://api.slack.com/reference/messaging/blocks#image
 */
export interface ImageBlock extends Block {
  type: 'image';
  image_url: string;
  alt_text: string;
  title?: PlainTextObject;
}

export function ImageBlock(fields: ImageBlock): ImageBlock {
  return {
    ...fields,
    type: 'image'
  };
}
