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
    gw2DisableTooltip?: boolean;
    gw2DisableText?: boolean;
    gw2DisableLink?: boolean;
    gw2DisableIcon?: boolean;
    gw2Inline?: boolean;
    gw2ClassName?: string;
    gw2Style?: CSSProperties;
    // Boon, Condition, Effect
    gw2Name?: string;
    gw2Count?: number;
    // Gold
    gw2Value?: number;
    // Item
    gw2Stat?: string;
    gw2Upgrades?: string;
    // Traitline
    gw2Inactive?: boolean;
    gw2DefaultSelected?: string;
    gw2Selectable?: boolean;
    gw2Resettable?: boolean;
  };
}
