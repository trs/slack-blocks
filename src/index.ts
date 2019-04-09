import {
  Block,
  ActionsBlock,
  ContextBlock,
  DividerBlock,
  ImageBlock,
  SectionBlock
} from './blocks';
// import { ButtonElement, DatePickerElement, ImageElement, OverflowMenuElement } from "./elements";
import { deepClone } from './clone';

export class SlackBlock {
  private blocks: Block[] = [];

  private addBlock(block: Block) {
    this.blocks.push(deepClone(block));
    return this;
  }

  public actions(action: ActionsBlock) {
    return this.addBlock(ActionsBlock(action));
  }

  public context(context: ContextBlock) {
    return this.addBlock(ContextBlock(context));
  }

  public divider(divider: DividerBlock) {
    return this.addBlock(DividerBlock(divider));
  }

  public image(image: ImageBlock) {
    return this.addBlock(ImageBlock(image));
  }

  public section(section: SectionBlock) {
    return this.addBlock(SectionBlock(section));
  }

  public static get element() {
    return {};
  }
}
