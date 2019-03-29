import React from 'react';
import TestRenderer from 'react-test-renderer';
import { TextFrame } from '../src/InlineContent';

describe('TextFrame', ()  => {
    const title = "140%";
    const paragraph = "Curabitur quis luctus est, vitae sodales enim";
    const image = {
        alt: 'Het zwarte schaap: Anglo Irish',
        src: 'https://fd-external-development.imgix.net/c4489dd02274747af8e77d1451eb1ca4b458e57e.jpg?auto=format&fm=jpg&fit=max&q=45&w=1280'
    };
    const sourceSets = [{
        media: '(max-width: 640px)',
        srcSet: 'https://fd-external-development.imgix.net/c4489dd02274747af8e77d1451eb1ca4b458e57e.jpg?auto=format&fm=jpg&fit=max&q=45&w=600 1x, https://fd-external-development.imgix.net/c4489dd02274747af8e77d1451eb1ca4b458e57e.jpg?auto=format&fm=jpg&fit=max&q=45&w=1200 2x, https://fd-external-development.imgix.net/c4489dd02274747af8e77d1451eb1ca4b458e57e.jpg?auto=format&fm=jpg&fit=max&q=45&w=1800 3x'
    }, {
        media: '(max-width: 860px)',
        srcSet: 'https://fd-external-development.imgix.net/c4489dd02274747af8e77d1451eb1ca4b458e57e.jpg?auto=format&fm=jpg&fit=max&q=45&w=361 1x, https://fd-external-development.imgix.net/c4489dd02274747af8e77d1451eb1ca4b458e57e.jpg?auto=format&fm=jpg&fit=max&q=45&w=722 2x, https://fd-external-development.imgix.net/c4489dd02274747af8e77d1451eb1ca4b458e57e.jpg?auto=format&fm=jpg&fit=max&q=45&w=1083 3x'
    }];

    it('should render align right correctly', () => {
        let component = TestRenderer.create(<TextFrame {...{title, paragraph}} />);
        expect(component.toJSON()).toMatchSnapshot();

        component = TestRenderer.create(<TextFrame {...{title, paragraph}} align='right'/>);
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('should render align block correctly', () => {
        let component = TestRenderer.create(<TextFrame {...{title, paragraph}} align='block'/>);
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('should render with image align right correctly', () => {
        let component = TestRenderer.create(<TextFrame {...{title, paragraph, image, sourceSets}} />);
        expect(component.toJSON()).toMatchSnapshot();

        component = TestRenderer.create(<TextFrame {...{title, paragraph, image, sourceSets}} align='right'/>);
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('should render with image align block correctly', () => {
        let component = TestRenderer.create(<TextFrame {...{title, paragraph, image, sourceSets}} align='block'/>);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
