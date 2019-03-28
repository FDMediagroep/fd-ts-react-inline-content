import React from 'react';
import TypoGraphy, { getAllTextStyles } from '@fdmg/fd-typography';
import { createGlobalStyle } from 'styled-components';

export interface StackFrameDataType {
    title: string;
    paragraph: string;
}

export interface Props {
    align?: 'block' | 'right';
    className?: string;
    stackFrames?: StackFrameDataType[];
}

export function StackFrame(props: Props) {
    return (
        <>
            <GlobalStyle/>
            <div className={`inline-content stapelkader${props.align ? ` ${props.align}` : ' right'}${props.className ? ` ${props.className}` : ''}`}>
                {props.stackFrames ? props.stackFrames.map((stackFrame, idx) =>
                    <React.Fragment key={idx}>
                        <TypoGraphy textStyle='article-h-inline-stack-frame'><h3>{stackFrame.title}</h3></TypoGraphy>
                        <TypoGraphy textStyle='article-p-inline-stack-frame'><p>{stackFrame.paragraph}</p></TypoGraphy>
                    </React.Fragment>
                ) : null}
            </div>
        </>
    );
}

const GlobalStyle = createGlobalStyle`
.inline-content.stapelkader {
    display: block;
    width: auto;
    border-left: 8px solid #4d494c;
    box-sizing: border-box;
    margin: 40px auto;
    padding-left: 15px;
    P:empty {
        display: none;
    }
    @media only screen and (min-width: 641px) {
        &.right {
            float: right;
            margin: 40px 0 40px 60px;
            width: 50%;
        }
    }
}

.full-width {
    .inline-content.stapelkader {
        p {
            color: #f05031;
        }
    }
}
`;

export const StackFrameStyle = createGlobalStyle`
${(GlobalStyle as any).globalStyle.rules}
${(getAllTextStyles([
    'article-h-inline-stack-frame',
    'article-p-inline-stack-frame'
]) as any).globalStyle.rules}
`;
