import React from 'react';
import TestRenderer from 'react-test-renderer';
import { LinkBlock } from '../src/InlineContent';

describe('LinkBlock', ()  => {
    const title = "Lees ook";
    const description = "Curabitur quis luctus est, vitae sodales enim";
    const url = "https://fd.nl/ondernemen/1254849/douane-20-tot-30-meer-aangiftes-door-groei-in-webwinkelen";

    it('should render align right correctly', () => {
        let component = TestRenderer.create(<LinkBlock {...{title, description, url}} />);
        expect(component.toJSON()).toMatchSnapshot();

        component = TestRenderer.create(<LinkBlock {...{title, description, url}} align='right'/>);
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('should render align block correctly', () => {
        let component = TestRenderer.create(<LinkBlock {...{title, description, url}} align='block'/>);
        expect(component.toJSON()).toMatchSnapshot();
    });

});
