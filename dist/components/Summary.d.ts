export interface Props {
    align?: 'block' | 'right';
    className?: string;
    bullets: string[];
    title: string;
}
export declare function Summary(props: Props): JSX.Element;
export declare const SummaryStyle: import("styled-components").GlobalStyleComponent<{}, import("styled-components").DefaultTheme>;
