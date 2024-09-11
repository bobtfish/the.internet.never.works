import testRenderer, { ReactTestRenderer, ReactTestRendererJSON } from 'react-test-renderer';
import { MantineProvider } from '@mantine/core';

function TestInnerContents({ children }: { children: React.ReactNode }) {
  return <div id="testInnerContents">{children}</div>
}

function create(ui: React.ReactNode) {
  const tr = testRenderer.create(<MantineProvider><TestInnerContents>{ui}</TestInnerContents></MantineProvider>)
  const tree = tr.toJSON() || [];
  const innerTree = ((tree as ReactTestRendererJSON[]).find((node) => node.type === 'div' && node.props.id === 'testInnerContents')||{children:[]}).children || []
  Object.defineProperty(tr, 'toJSON', {
    writable: true,
    value: () => { return innerTree }
  })  
  return tr
}

const act = testRenderer.act

const renderer = { create, act }

export default renderer

export function getInnerElement(r: ReactTestRenderer) {
  return r.root.findByType(TestInnerContents).props.children;
}