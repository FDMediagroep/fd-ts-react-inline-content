import React from 'react';
import TypoGraphy, { getAllTextStyles } from '@fdmg/fd-typography';
import { createGlobalStyle, css } from 'styled-components';

export interface Props {
    align?: 'block' | 'right';
    className?: string;
    figcaption: string;
    quote: string;
}

export function Quote(props: Props) {
    return (
        <>
            <GlobalStyle/>
            <TypoGraphy textStyle={"article-inline-quote"} className={`inline-content quote${props.align ? ` ${props.align}` : ' right'}${props.className ? ` ${props.className}` : ''}`}>
                <figure>
                    <blockquote>‘{props.quote}’</blockquote>
                    <figcaption>• {props.figcaption}</figcaption>
                </figure>
            </TypoGraphy>
        </>
    );
}

const styles = css`
.inline-content.quote {
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
    .inline-content.quote {
        blockquote, figcaption {
            color: #f05031;
        }
    }
}
`;

const GlobalStyle = createGlobalStyle`${styles}`;

export const QuoteStyle = css`
${getAllTextStyles([
    'article-inline-quote'
])}
${styles}
`;
