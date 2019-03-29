import React from 'react';
import TestRenderer from 'react-test-renderer';
import { NumberFrame } from '../src/InlineContent';

describe('NumberFrame', ()  => {
    const title = "140%";
    const paragraph = "Curabitur quis luctus est, vitae sodales enim";

    it('should render align right correctly', () => {
        let component = TestRenderer.create(<NumberFrame {...{title, paragraph}} />);
        expect(component.toJSON()).toMatchSnapshot();

        component = TestRenderer.create(<NumberFrame {...{title, paragraph}} align='right'/>);
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('should render align block correctly', () => {
        let component = TestRenderer.create(<NumberFrame {...{title, paragraph}} align='block'/>);
        expect(component.toJSON()).toMatchSnapshot();
    });

});
