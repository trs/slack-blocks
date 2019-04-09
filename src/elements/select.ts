import { Element } from '.';
import {
  PlainTextObject,
  OptionObject,
  OptionGroupObject,
  ConfirmObject
} from '../objects';

/**
 * A select menu, just as with a standard HTML <select> tag, creates a drop down menu with a list of options for a user to choose. The select menu also includes type-ahead functionality, where a user can type a part or all of an option string to filter the list.
 *
 * There are different types of select menu that depend on different data sources for their lists of options:

 * - Menu with static options
 * - Menu with external data source
 * - Menu with user list
 * - Menu with conversations list
 * - Menu with channels list
 *
 * https://api.slack.com/reference/messaging/block-elements#select
 */
export type SelectElement =
  | StaticSelectElement
  | ExternalSelectElement
  | UsersSelectElement
  | ConversationsSelectElement
  | ChannelsSelectElement;

interface BaseSelect extends Element {
  placeholder: PlainTextObject;
  action_id: string;
  confirm?: ConfirmObject;
}

/**
 * This is the simplest form of select menu, with a static list of options passed in when defining the element.
 *
 * https://api.slack.com/reference/messaging/block-elements#static-select
 */
export interface StaticSelectElement extends BaseSelect {
  type: 'static_select';
  /** An array of option objects. Maximum number of options is 100. If `option_groups` is specified, this field should not be. */
  options: OptionObject[];
  /** An array of option group objects. Maximum number of option groups is 100. If `options` is specified, this field should not be. */
  option_groups?: OptionGroupObject[];
  /** A single option that exactly matches one of the options within `options` or `option_groups`. This option will be selected when the menu initially loads. */
  initial_option?: OptionObject;
  /** A confirm object that defines an optional confirmation dialog that appears after a menu item is selected. */
}

export function StaticSelectElement(
  fields: StaticSelectElement
): StaticSelectElement {
  return {
    ...fields,
    type: 'static_select'
  };
}

/**
 *
 *
 * https://api.slack.com/reference/messaging/block-elements#external-select
 */
export interface ExternalSelectElement extends BaseSelect {
  type: 'external_select';
  initial_option?: OptionObject;
  min_query_length?: number;
}

/**
 *
 *
 * https://api.slack.com/reference/messaging/block-elements#users-select
 */
export interface UsersSelectElement extends BaseSelect {
  type: 'users_select';
  initial_user?: string;
}

/**
 *
 *
 * https://api.slack.com/reference/messaging/block-elements#conversations-select
 */
export interface ConversationsSelectElement extends BaseSelect {
  type: 'conversations_select';
  initial_conversation?: string;
}

/**
 *
 *
 * https://api.slack.com/reference/messaging/block-elements#channels-select
 */
export interface ChannelsSelectElement extends BaseSelect {
  type: 'channels_select';
  initial_channel?: string;
}
