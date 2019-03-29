export interface Props {
    align?: 'block' | 'right';
    className?: string;
    title: string;
    description: string;
    url: string;
}
export declare function LinkBlock(props: Props): JSX.Element;
export declare const LinkBlockStyle: import("styled-components").GlobalStyleComponent<{}, import("styled-components").DefaultTheme>;
