import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Quote } from '../src/InlineContent';

describe('Quote', ()  => {
    const quote = "Curabitur quis luctus est, vitae sodales enim";
    const figcaption = "Willem Liu";

    it('should render align right correctly', () => {
        let component = TestRenderer.create(<Quote {...{quote, figcaption}} />);
        expect(component.toJSON()).toMatchSnapshot();

        component = TestRenderer.create(<Quote {...{quote, figcaption}} align='right'/>);
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('should render align block correctly', () => {
        let component = TestRenderer.create(<Quote {...{quote, figcaption}} align='block'/>);
        expect(component.toJSON()).toMatchSnapshot();
    });

});
