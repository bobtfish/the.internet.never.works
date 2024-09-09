import renderer from 'react-test-renderer';

import { MarkdownString } from '../MarkdownString'

test('plain text - no markdown', () => {
    const component = renderer.create(
        <MarkdownString markdown="hello world" />,
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
})

test('with markdown', () => {
    const component = renderer.create(
        <MarkdownString markdown="[a link](http://www.somesite.com/) hello world" />,
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
})