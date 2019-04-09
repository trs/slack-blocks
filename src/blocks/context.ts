import { Block } from '.';
import { ImageElement } from '../elements';
import { TextObject } from '../objects';

/**
 *
 *
 * https://api.slack.com/reference/messaging/blocks#context
 */
export interface ContextBlock extends Block {
  type: 'context';
  elements: (ImageElement | TextObject)[];
}

export function ContextBlock(fields: ContextBlock): ContextBlock {
  return {
    ...fields,
    type: 'context'
  };
}
