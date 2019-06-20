import React from 'react';
import TypoGraphy, { getAllTextStyles } from '@fdmg/fd-typography';
import { createGlobalStyle, css } from 'styled-components';

export interface Props {
    align?: 'block' | 'right';
    className?: string;
    bullets: string[];
}

export function BulletPoints(props: Props) {
    return (
        <>
            <GlobalStyle/>
            <div className={`inline-content bullet-points${props.align ? ` ${props.align}` : ' right'}${props.className ? ` ${props.className}` : ''}`}>
                {props.bullets ? props.bullets.map((bullet, idx) => <TypoGraphy key={idx} textStyle='article-p-inline-bullet-points'><p>{bullet}</p></TypoGraphy>) : null}
            </div>
        </>
    );
}

const styles = css`
.inline-content.bullet-points {
    clear: both;
    display: block;
    width: auto;
    margin: 40px auto;
    box-sizing: border-box;

    p:before {
        content: url(https://fd.nl/img/fd/icons/bullet.svg);
        float: left;
        width: 20px;
        height: 20px;
        margin: 3px 10px 10px 0;
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
    .inline-content.bullet-points {
        p:before {
            content: url(https://fd.nl/img/fd/icons/bullet_longread.svg);
        }
    }
}
`;

const GlobalStyle = createGlobalStyle`${styles}`;

export const BulletPointsStyle = css`
${getAllTextStyles([
    'article-p-inline-bullet-points'
])}
${styles}
`;
