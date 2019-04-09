import { Block } from '.';

/**
 *
 *
 * https://api.slack.com/reference/messaging/blocks#divider
 */
export interface DividerBlock extends Block {
  type: 'divider';
}

export function DividerBlock(fields: DividerBlock): DividerBlock {
  return {
    ...fields,
    type: 'divider'
  };
}
