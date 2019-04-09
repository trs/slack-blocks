import * as Blocks from "./blocks";
import * as Elements from "./elements";
import * as Objects from "./objects";

const SlackBlock = {
  Actions: Blocks.ActionsBlock,
  Context: Blocks.ContextBlock,
  Divider: Blocks.DividerBlock,
  Image: Blocks.ImageBlock,
  Section: Blocks.SectionBlock
};

const SlackElement = {
  Button: Elements.ButtonElement,
  DatePicker: Elements.DatePickerElement,
  Image: Elements.ImageElement,
  OverflowMenu: Elements.OverflowMenuElement,
  StaticSelect: Elements.StaticSelectElement,
  ExternalSelect: Elements.ExternalSelectElement,
  UsersSelect: Elements. UsersSelectElement,
  ConversationsSelect: Elements.ConversationsSelectElement,
  ChannelsSelect: Elements.ChannelsSelectElement
};

const SlackObject = {
  Confirm: Objects.ConfirmObject,
  Option: Objects.OptionObject,
  OptionGroup: Objects.OptionGroupObject,
  Text: Objects.TextObject
};

export {
  SlackBlock,
  SlackElement,
  SlackObject
};
