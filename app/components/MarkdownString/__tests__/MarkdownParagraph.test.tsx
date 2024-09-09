import renderer from 'react-test-renderer';

import { MarkdownParagraph } from '../MarkdownParagraph'

test('plain text - no markdown', () => {
    const component = renderer.create(
        <MarkdownParagraph markdown="hello world" />,
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
})

test('with markdown', () => {
    const component = renderer.create(
        <MarkdownParagraph markdown="[a link](http://www.somesite.com/) hello world" />,
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
})

test('paragraphs - no markdown', () => {
    const input = "foo\n\nbar"
    const component = renderer.create(
        <MarkdownParagraph markdown={input} />,
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
})

test('paragraphs - with markdown', () => {
    const input = "foo[a link](http://www.somesite.com/)\n\nbar"
    const component = renderer.create(
        <MarkdownParagraph markdown={input} />,
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
})