import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Summary } from '../src/InlineContent';

describe('Summary', ()  => {
    const title = 'In het kort';
    const bullets = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Vivamus varius sed quam vel aliquam.',
        'Ut eleifend porta arcu, a eleifend enim viverra sit amet.',
        'Quisque a commodo eros. Sed at mi consequat, lacinia eros sed, luctus velit.'
    ];

    it('should render align right correctly', () => {
        let component = TestRenderer.create(<Summary
            title={title}
            bullets={bullets}
        />);
        expect(component.toJSON()).toMatchSnapshot();

        component = TestRenderer.create(<Summary
            title={title}
            bullets={bullets}
            align='right'
        />);
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('should render align block correctly', () => {
        let component = TestRenderer.create(<Summary
            title={title}
            bullets={bullets}
            align='block'
        />);
        expect(component.toJSON()).toMatchSnapshot();
    });

});
