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
    gw2Embed?: string;
    gw2Id?: string;
    gw2Text?: string;
    gw2Notooltip?: string;
    gw2Notext?: string;
    gw2Nolink?: string
    gw2Noicon?: string;
    gw2Inline?: string;
    gw2Class?: string;
    gw2Style?: CSSProperties;
    gw2Size?: string
    // Boon, Condition, Effect
    gw2Name?: string;
    gw2Count?: number;
    // Gold
    gw2Value?: number;
    // Item
    gw2Stats?: string;
    gw2Upgrades?: string;
    // Traitline
    gw2Inactive?: string;
    gw2Traits?: string;
    gw2Edit?: string;
  };
}
