import React from 'react';
import { createGlobalStyle } from 'styled-components';

export interface Props {
    className?: string;
    difference: number;
    exchange: string;
    isin: string;
    locale?: string;
    name: string;
    price: number;
    url: string;
}

export function Stock(props: Props) {
    let symbol = '';
    let climbDrop = '';
    if (props.difference > 0) {
        symbol = '+';
        climbDrop = 'climb';
    } else if (props.difference < 0) {
        climbDrop = 'drop';
    }
    const locale = props.locale ? props.locale : 'nl-NL';
    const localeStringOptions = {useGrouping: false, minimumFractionDigits: 2};
    return (
        <>
            <StockStyle/>
            <a data-isin={props.isin} data-exchange={props.exchange} className={`company-quote${props.className ? ` ${props.className}` : ''}`} target="_blank" href={props.url}>
                <span>{props.name}</span>
                <span>€{props.price.toLocaleString(locale, localeStringOptions)}</span>
                <span className={climbDrop}>{symbol}{props.difference.toLocaleString(locale, localeStringOptions)}%</span>
            </a>
        </>
    );
}

const GlobalStyle = createGlobalStyle`
.company-quote {
    clear: both;
    text-decoration: none;
    font-family: 'ArnhemProBlond', serif;
    color: #677381;
    font-size: 14px;
    line-height: 1.5;

    &:empty:before {
        vertical-align: middle
    }

    &:empty:after {
        content: ''
    }

    span {
        display: inline-block;
        margin: 0 0 0 6px;
    }

    span:first-child {
        margin: 0;
    }

    span:first-child:after {
        content: ":"
    }

    .climb, .drop {
        padding: 0 5px;
        border-radius: 3px
    }
    .climb {
        color: #42aa88;
        background-color: rgba(66,170,136,0.1);
        border: 1px solid rgba(66,170,136,0.1);
    }
    .drop {
        color: #f3736b;
        background-color: rgba(234,115,107,0.1);
        border: 1px solid rgba(234,115,107,0.1);
    }
}

.full-width {
    .company-quote {
        color: #f05031;
    }
}
`;

export const StockStyle = createGlobalStyle`
${(GlobalStyle as any).globalStyle.rules}
`;
