import renderer from '~/testing-utils/renderer'

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

test('with multiple links', () => {
  const input = "begin text[a link](http://www.somesite.com/) middle filler [another link](http://www.othersite.com/)end text"
  const component = renderer.create(
    <MarkdownString markdown={input} />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})