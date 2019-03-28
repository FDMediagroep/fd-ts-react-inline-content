import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import {BulletPoints} from '../src/InlineContent';

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
            padding: 0 15px 0 0;
            display: table-cell;
            vertical-align: top;
            overflow: hidden;

            font-family: 'ArnhemProBlond', serif;
            line-height: 1.5em;
            font-size: 18px;
        }

        aside {
            width: 300px;
            padding: 0;
            display: table-cell;
            vertical-align: top;
            overflow: hidden;
            > * {
                margin-bottom: 1rem;
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

class BulletPointsApp extends PureComponent<any, any> {
    private bullets: string[] = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Vivamus varius sed quam vel aliquam.',
        'Ut eleifend porta arcu, a eleifend enim viverra sit amet.',
        'Quisque a commodo eros. Sed at mi consequat, lacinia eros sed, luctus velit.'
    ];

    render() {
        return(
            <>
                <GlobalStyle/>
                <BulletPoints bullets={this.bullets} align={this.props.align}/>
            </>
        );
    }
}

const bulletPointsPlaceholders = document.querySelectorAll('.bullet-points');
if (bulletPointsPlaceholders.length) {
    [].slice.call(bulletPointsPlaceholders).forEach((bulletPointsPlaceholder: HTMLElement) => {
        ReactDOM.render(<BulletPointsApp align={bulletPointsPlaceholder.getAttribute('data-align')}/>, bulletPointsPlaceholder);
    });
}
