import { CSSProperties } from 'react';

/**
 * Interface EmbedElement
 *
 * Modified version of default "HTMLElement" because extending the original
 * "dataset: DOMStringMap" didn't really work.
 */
export default interface EmbedElement extends Omit<HTMLElement, 'dataset'> {
  dataset: {
    // Common
    gw2Embed: string | undefined;
    gw2Ids: string | undefined;
    gw2Text: string | undefined;
    gw2DisableTooltip: boolean | undefined;
    gw2DisableText: boolean | undefined;
    gw2DisableLink: boolean | undefined;
    gw2Inline: boolean | undefined;
    gw2ClassName: string | undefined;
    gw2Style: CSSProperties | undefined;
    // Boon, Condition, Effect
    gw2Name: string | undefined;
    gw2Count: number | undefined;
    // Gold
    gw2Value: number | undefined;
    // Item
    gw2Stat: string | undefined;
    gw2Upgrades: Array<number> | undefined;
    // Traitline
    gw2Inactive: boolean | undefined;
    gw2DefaultSelected: Array<number> | undefined;
    gw2Selectable: boolean | undefined;
    gw2Resettable: boolean | undefined;
  };
}
