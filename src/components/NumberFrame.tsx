import React from 'react';
import TypoGraphy, { getAllTextStyles } from '@fdmg/fd-typography';
import { createGlobalStyle } from 'styled-components';

export interface Props {
    align?: 'block' | 'right';
    className?: string;
    title: string;
    paragraph: string;
}

export function NumberFrame(props: Props) {
    return (
        <>
            <GlobalStyle/>
            <div className={`inline-content cyferkader${props.align ? ` ${props.align}` : ' right'}${props.className ? ` ${props.className}` : ''}`}>
                <TypoGraphy textStyle='article-h-inline-number-frame'><h3>{props.title}</h3></TypoGraphy>
                <TypoGraphy textStyle='article-p-inline-number-frame'><p>{props.paragraph}</p></TypoGraphy>
            </div>
        </>
    );
}

const GlobalStyle = createGlobalStyle`
.inline-content.cyferkader {
    clear: both;
    display: block;
    width: auto;
    color: #49a4a2;
    margin: 40px auto;
    box-sizing: border-box;
    @media only screen and (min-width: 641px) {
        &.right {
            float: right;
            margin: 40px 0 40px 60px;
            width: 50%;
        }
    }
}

.full-width {
    .inline-content.cyferkader {
        h3, p {
            color: #f05031;
        }
    }
}
`;

export const NumberFrameStyle = createGlobalStyle`
${(GlobalStyle as any).globalStyle.rules}
${(getAllTextStyles([
    'article-h-inline-number-frame',
    'article-p-inline-number-frame'
]) as any).globalStyle.rules}
`;
