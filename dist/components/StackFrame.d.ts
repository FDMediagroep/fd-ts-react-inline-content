export interface StackFrameDataType {
    title: string;
    paragraph: string;
}
export interface Props {
    align?: 'block' | 'right';
    className?: string;
    stackFrames?: StackFrameDataType[];
}
export declare function StackFrame(props: Props): JSX.Element;
export declare const StackFrameStyle: import("styled-components").GlobalStyleComponent<{}, import("styled-components").DefaultTheme>;
