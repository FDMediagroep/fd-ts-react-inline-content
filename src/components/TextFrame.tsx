import React from 'react';
import TypoGraphy, { getAllTextStyles } from '@fdmg/fd-typography';
import { createGlobalStyle, css } from 'styled-components';
import { ImageType, TeaserFigure,  } from '@fdmg/fd-teaser';
import { SourceSetType } from '@fdmg/fd-teaser/dist/TeaserFigure';

export interface Props {
    align?: 'block' | 'right';
    className?: string;
    image?: ImageType;
    sourceSets?: SourceSetType[];
    title: string;
    paragraphs?: string[];
}

export function TextFrame(props: Props) {
    return (
        <>
            <GlobalStyle/>
            <div className={`inline-content text-frame${props.align ? ` ${props.align}` : ' right'}${props.className ? ` ${props.className}` : ''}`}>
                <h3 className="outline">{props.title}</h3>
                {props.sourceSets ? <TeaserFigure image={props.image} sourceSets={props.sourceSets}/> : null}
                {props.paragraphs ? props.paragraphs.map((paragraph, idx) => <TypoGraphy key={idx} textStyle='article-p-inline-text-frame'><p dangerouslySetInnerHTML={{__html: paragraph}}/></TypoGraphy>) : null}
            </div>
        </>
    );
}

const styles = css`
.inline-content.text-frame {
    clear: both;
    display: block;
    width: auto;
    color: #191919;
    margin: 40px auto;
    box-sizing: border-box;
    &.block {
        clear: both;
        width: 100%;
    }

    h3 {
        margin-top: 0;
        font-size: 1.25rem;
        font-family: 'ProximaNovaBold', sans-serif;
        color: #49a4a2;
        margin-bottom: 15px;
    }

    .outline {
        position: relative;
        background: linear-gradient(#191919, #191919) 0 0/100% 1px,linear-gradient(#191919, #191919) 0 4px/100% 1px,linear-gradient(#191919, #191919) 0 8px/100% 1px;
        background-repeat: no-repeat;
        padding: 22px 0 15px 0;
        border-bottom: 1px solid #191919;
    }

    figure {
        margin: 0 0 20px 0;
        img {
            width: 100%;
        }
    }

    p {
        display: inline-block;
        width: 100%;
        font-size: 17px;
        font-family: 'ProximaNovaRegular', sans-serif;
        line-height: 1.434375rem;
        margin: 0 0 1.15622rem 0;
        &:first-of-type::first-letter {
            text-transform: capitalize;
            font-size: 4.75em;
            line-height: 0.75em;
            color: #49a4a2;
            float: left;
            margin: 3px 5px 0 0;
        }
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
    .inline-content.text-frame {
        h3, p:first-of-type::first-letter {
            color: #f05031;
        }
    }
}
`;

const GlobalStyle = createGlobalStyle`${styles}`;

export const TextFrameStyle = css`
${getAllTextStyles([
    'article-p-inline-text-frame'
])}
${styles}
`;
