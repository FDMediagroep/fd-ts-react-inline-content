import React from 'react';
import TypoGraphy, { getAllTextStyles } from '@fdmg/fd-typography';
import { createGlobalStyle, css } from 'styled-components';

export interface Props {
    align?: 'block' | 'right';
    className?: string;
    bullets: string[];
    title: string;
}

export function Summary(props: Props) {
    return (
        <>
            <GlobalStyle/>
            <div className={`inline-content article-summary${props.align ? ` ${props.align}` : ' right'}${props.className ? ` ${props.className}` : ''}`}>
                <TypoGraphy textStyle='article-h-inline' className="outline"><h3>{props.title}</h3></TypoGraphy>
                {props.bullets ? props.bullets.map((bullet, idx) => <TypoGraphy key={idx} textStyle='article-p-inline-summary'><p>{bullet}</p></TypoGraphy>) : null}
            </div>
        </>
    );
}

const styles = css`
.inline-content.article-summary {
    clear: both;
    display: block;
    width: auto;
    margin: 40px auto;
    box-sizing: border-box;
    border-bottom: 1px solid #191919;

    .outline {
        position: relative;
        background: linear-gradient(#191919, #191919) 0 0/100% 1px,linear-gradient(#191919, #191919) 0 4px/100% 1px,linear-gradient(#191919, #191919) 0 8px/100% 1px;
        background-repeat: no-repeat;
        padding: 22px 0 15px 0;
        border-bottom: 1px solid #191919;
    }

    p:before {
        content: "";
        width: 8px;
        height: 8px;
        border-radius: 50%;
        float: left;
        margin: 8px 8px 0 0;
        background-color: #49a4a2;
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
    .inline-content.article-summary {
        h3 {
            color: #f05031;
        }
        p:before {
            background-color: #f05031;
        }
    }
}
`;

const GlobalStyle = createGlobalStyle`${styles}`;

export const SummaryStyle = css`
${getAllTextStyles([
    'article-h-inline',
    'article-p-inline-summary'
])}
${styles}
`;
