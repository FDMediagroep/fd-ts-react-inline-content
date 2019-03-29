import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import {BulletPoints, LinkBlock, NumberFrame, Quote, StackFrame, Stock, Summary, TextFrame} from '../src/InlineContent';

const bulletPointsPlaceholders = document.querySelectorAll('.bullet-points');
if (bulletPointsPlaceholders.length) {
    [].slice.call(bulletPointsPlaceholders).forEach((bulletPointsPlaceholder: HTMLElement) => {
        ReactDOM.render(
            <BulletPoints
                bullets={[
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    'Vivamus varius sed quam vel aliquam.',
                    'Ut eleifend porta arcu, a eleifend enim viverra sit amet.',
                    'Quisque a commodo eros. Sed at mi consequat, lacinia eros sed, luctus velit.'
                ]}
                align={bulletPointsPlaceholder.getAttribute('data-align') as any}
            />
        , bulletPointsPlaceholder);
    });
}

const linkBlockPlaceholders = document.querySelectorAll('.link-block');
if (linkBlockPlaceholders.length) {
    [].slice.call(linkBlockPlaceholders).forEach((linkBlockPlaceholder: HTMLElement) => {
        ReactDOM.render(
            <LinkBlock
                title="Lees ook"
                description="Curabitur quis luctus est, vitae sodales enim"
                url="https://fd.nl/ondernemen/1254849/douane-20-tot-30-meer-aangiftes-door-groei-in-webwinkelen"
                align={linkBlockPlaceholder.getAttribute('data-align') as any}
            />
        , linkBlockPlaceholder);
    });
}

const numberFramePlaceholders = document.querySelectorAll('.number-frame');
if (numberFramePlaceholders.length) {
    [].slice.call(numberFramePlaceholders).forEach((numberFramePlaceholder: HTMLElement) => {
        ReactDOM.render(
            <NumberFrame
                title='57%'
                paragraph='Nunc eu aliquam purus. Integer leo lorem, eleifend vitae venenatis vitae, vehicula non dui'
                align={numberFramePlaceholder.getAttribute('data-align') as any}
            />
        , numberFramePlaceholder);
    });
}

const quotePlaceholders = document.querySelectorAll('.quote');
if (quotePlaceholders.length) {
    [].slice.call(quotePlaceholders).forEach((quotePlaceholder: HTMLElement) => {
        ReactDOM.render(
            <Quote
                figcaption="Willem Liu"
                quote="Proin congue ligula facilisis, porttitor ante quis, congue lectus"
                align={quotePlaceholder.getAttribute('data-align') as any}
            />
        , quotePlaceholder);
    });
}

const stockPlaceholders = document.querySelectorAll('.stock');
if (stockPlaceholders.length) {
    [].slice.call(stockPlaceholders).forEach((stockPlaceholder: HTMLElement) => {
        ReactDOM.render(
            <Stock
                name={stockPlaceholder.getAttribute('data-name') as any}
                price={stockPlaceholder.getAttribute('data-price') as any}
                difference={stockPlaceholder.getAttribute('data-difference') as any}
                exchange={stockPlaceholder.getAttribute('data-exchange') as any}
                isin={stockPlaceholder.getAttribute('data-isin') as any}
                url={stockPlaceholder.getAttribute('data-url') as any}
            />
        , stockPlaceholder);
    });
}

const stackFrameholders = document.querySelectorAll('.stack-frame');
if (stackFrameholders.length) {
    [].slice.call(stackFrameholders).forEach((stackFrameholder: HTMLElement) => {
        ReactDOM.render(
            <StackFrame
                stackFrames={[{
                    title: 'Stapelkader test',
                    paragraph: 'Aenean lacinia bibendum nulla sed consectetur. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vitae elit libero, a pharetra augue. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.'
                }, {
                    title: 'Stapelkader test2',
                    paragraph: 'Aenean lacinia bibendum nulla sed consectetur. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vitae elit libero, a pharetra augue. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.'
                }]}
                align={stackFrameholder.getAttribute('data-align') as any}
            />
        , stackFrameholder);
    });
}

const summaryPlaceholders = document.querySelectorAll('.summary');
if (summaryPlaceholders.length) {
    [].slice.call(summaryPlaceholders).forEach((summaryPlaceholder: HTMLElement) => {
        ReactDOM.render(
            <Summary
                title="In het kort"
                bullets={[
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    'Vivamus varius sed quam vel aliquam.',
                    'Ut eleifend porta arcu, a eleifend enim viverra sit amet.',
                    'Quisque a commodo eros. Sed at mi consequat, lacinia eros sed, luctus velit.'
                ]}
                align={summaryPlaceholder.getAttribute('data-align') as any}
            />
        , summaryPlaceholder);
    });
}

const textFramePlaceholders = document.querySelectorAll('.text-frame');
if (textFramePlaceholders.length) {
    [].slice.call(textFramePlaceholders).forEach((textFramePlaceholder: HTMLElement) => {
        ReactDOM.render(
            <TextFrame
                title="In het kort"
                image={{
                    alt: 'Het zwarte schaap: Anglo Irish',
                    src: 'https://fd-external-development.imgix.net/c4489dd02274747af8e77d1451eb1ca4b458e57e.jpg?auto=format&fm=jpg&fit=max&q=45&w=1280'
                }}
                sourceSets={[{
                    media: '(max-width: 640px)',
                    srcSet: 'https://fd-external-development.imgix.net/c4489dd02274747af8e77d1451eb1ca4b458e57e.jpg?auto=format&fm=jpg&fit=max&q=45&w=600 1x, https://fd-external-development.imgix.net/c4489dd02274747af8e77d1451eb1ca4b458e57e.jpg?auto=format&fm=jpg&fit=max&q=45&w=1200 2x, https://fd-external-development.imgix.net/c4489dd02274747af8e77d1451eb1ca4b458e57e.jpg?auto=format&fm=jpg&fit=max&q=45&w=1800 3x'
                }, {
                    media: '(max-width: 860px)',
                    srcSet: 'https://fd-external-development.imgix.net/c4489dd02274747af8e77d1451eb1ca4b458e57e.jpg?auto=format&fm=jpg&fit=max&q=45&w=361 1x, https://fd-external-development.imgix.net/c4489dd02274747af8e77d1451eb1ca4b458e57e.jpg?auto=format&fm=jpg&fit=max&q=45&w=722 2x, https://fd-external-development.imgix.net/c4489dd02274747af8e77d1451eb1ca4b458e57e.jpg?auto=format&fm=jpg&fit=max&q=45&w=1083 3x'
                }]}
                paragraphs={[
                    'Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipiscing elit. Donec ullamcorper orci ac massa mattis ornare. Aliquam varius interdum est, tempor ultricies sem.',
                    'Vivamus elementum velit leo, ultrices dapibus eros posuere at. Phasellus et sem sed ante sollicitudin ultricies. Pellentesque vitae nunc vel urna aliquet sodales id a tellus.',
                    'Sed maximus magna et est dictum, eu viverra turpis tempus. Vestibulum condimentum quam vitae tincidunt bibendum.',
                    'Donec risus diam, semper at semper feugiat, condimentum et velit. Aenean orci diam, tempus id quam vitae, ornare sagittis ante.'
                ]}
                align={textFramePlaceholder.getAttribute('data-align') as any}
            />
        , textFramePlaceholder);
    });
}

const GlobalStyle = createGlobalStyle`
    html {
        background-color: #ffeadb;
        margin-top: 1rem;

        .centered {
            max-width: 1064px;
            padding: 0 15px;
            margin: 0 auto;
            box-sizing: border-box;
        }

        .main {
            display: table;
            table-layout: fixed;
            width: 100%;
            margin: 0 0 15px 0;
        }

        main {
            display: block;
            width: auto;
            padding: 0;
            font-family: 'ArnhemProBlond', serif;
            line-height: 1.5em;
            font-size: 18px;
            @media only screen and (min-width: 861px) {
                padding: 0 15px 0 0;
                display: table-cell;
                vertical-align: top;
                overflow: hidden;
            }
        }

        aside {
            display: block;
            width: auto;
            padding: 0;
            > * {
                margin-bottom: 1rem;
            }
            @media only screen and (min-width: 861px) {
                width: 300px;
                padding: 0;
                display: table-cell;
                vertical-align: top;
                overflow: hidden;
            }
        }
    }

    @media only screen and (min-width: 641px) {
        html main {
            font-size: 19px;
        }
    }

    @media only screen and (min-width: 1025px) {
        html main {
            font-size: 21px;
        }
    }
`;

ReactDOM.render(
    <GlobalStyle/>
, document.querySelector('.styles'));
