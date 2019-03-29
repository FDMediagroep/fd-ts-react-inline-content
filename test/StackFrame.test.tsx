import React from 'react';
import TestRenderer from 'react-test-renderer';
import { StackFrame } from '../src/InlineContent';

describe('StackFrame', ()  => {
    const stackFrames = [
        {title: 'Vivamus varius sed quam vel aliquam.', paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        {title: 'Ut eleifend porta arcu, a eleifend enim viverra sit amet.', paragraph: 'Quisque a commodo eros. Sed at mi consequat, lacinia eros sed, luctus velit.'}
    ];

    it('should render align right correctly', () => {
        let component = TestRenderer.create(<StackFrame
            stackFrames={stackFrames}
        />);
        expect(component.toJSON()).toMatchSnapshot();

        component = TestRenderer.create(<StackFrame
            stackFrames={stackFrames}
            align='right'
        />);
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('should render align block correctly', () => {
        let component = TestRenderer.create(<StackFrame
            stackFrames={stackFrames}
            align='block'
        />);
        expect(component.toJSON()).toMatchSnapshot();
    });

});
