import { ImageType } from '@fdmg/fd-teaser';
import { SourceSetType } from '@fdmg/fd-teaser/dist/TeaserFigure';
export interface Props {
    align?: 'block' | 'right';
    className?: string;
    image?: ImageType;
    sourceSets?: SourceSetType[];
    title: string;
    paragraphs?: string[];
}
export declare function TextFrame(props: Props): JSX.Element;
export declare const TextFrameStyle: import("styled-components").FlattenSimpleInterpolation;
