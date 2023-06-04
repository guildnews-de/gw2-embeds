import { CSSProperties, ComponentProps } from 'react';
import { Icon } from '@discretize/gw2-ui-new';
/**
 * Interface EmbedElement
 *
 * Modified version of default "HTMLElement" because extending the original
 * "dataset: DOMStringMap" didn't really work.
 */
export interface EmbedElement extends Omit<HTMLElement, 'dataset'> {
    dataset: EmbedElementDataset;
}
export interface EmbedElementDataset {
    gw2Embed?: string;
    gw2Id?: string;
    gw2Text?: string;
    gw2Notooltip?: string;
    gw2Notext?: string;
    gw2Nolink?: string;
    gw2Noicon?: string;
    gw2Inline?: string;
    gw2Class?: string;
    gw2Style?: CSSProperties;
    gw2Size?: string;
    gw2Name?: string;
    gw2Count?: number;
    gw2Value?: number;
    gw2Stats?: string;
    gw2Upgrades?: string;
    gw2Inactive?: string;
    gw2Traits?: string;
    gw2Edit?: string;
}
export interface EmbedProps {
    dataset: EmbedElementDataset;
    hash: string;
    className: string;
    iconProps: ComponentProps<typeof Icon>;
}
