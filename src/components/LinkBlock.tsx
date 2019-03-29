import React from 'react';
import TypoGraphy, { getAllTextStyles } from '@fdmg/fd-typography';
import { createGlobalStyle } from 'styled-components';
import { getAllCardStyles } from '@fdmg/fd-card';

export interface Props {
    align?: 'block' | 'right';
    className?: string;
    title: string;
    description: string;
    url: string;
}

export function LinkBlock(props: Props) {
    return (
        <>
            <GlobalStyle/>
            <a target="_blank" className={`inline-content fd-card article related-link${props.align ? ` ${props.align}` : ' right'}${props.className ? ` ${props.className}` : ''}`} href={props.url}>
                <TypoGraphy textStyle='article-p-inline-link-block'><p>{props.title}</p></TypoGraphy>
                <TypoGraphy textStyle='article-h-inline-link-block'><h2>{props.description}</h2></TypoGraphy>
                <i className="icon-chevron-right"/>
            </a>
        </>
    );
}

const GlobalStyle = createGlobalStyle`
${(getAllCardStyles(['article']) as any).globalStyle.rules}

.inline-content.related-link {
    clear: both;
    text-decoration: none;
    padding: 12px 40px 12px 15px;
    display: block;
    width: auto;
    color: #49a4a2;
    margin: 40px auto;
    box-sizing: border-box;
    i {
        position: absolute;
        right: 20px;
        margin: 0;
        top: calc(50% - 8px);
        color: #677381;
    }
    p {
        margin-bottom: .5rem;
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
    .inline-content.related-link {
        p {
            color: #f05031;
        }
    }
}
`;

export const LinkBlockStyle = createGlobalStyle`
${(GlobalStyle as any).globalStyle.rules}
${(getAllTextStyles([
    'article-h-inline-link-block',
    'article-p-inline-link-block'
]) as any).globalStyle.rules}
`;
