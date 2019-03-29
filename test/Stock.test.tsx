import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Stock } from '../src/InlineContent';

describe('Stock', ()  => {
    it('should render positive correctly', () => {
        let component = TestRenderer.create(<Stock name="INGA" price={10.92} difference={1.90} exchange="XAMS" isin="NL0011821202" url="https://beurs.fd.nl/noteringen/11773/ing/koersen"/>);
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('should render negative correctly', () => {
        let component = TestRenderer.create(<Stock name="INGA" price={10.92} difference={-1.90} exchange="XAMS" isin="NL0011821202" url="https://beurs.fd.nl/noteringen/11773/ing/koersen"/>);
        expect(component.toJSON()).toMatchSnapshot();
    });

});
