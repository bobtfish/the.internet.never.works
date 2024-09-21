import { PrintIcon } from '~/components/Icons';
import { HeaderControl } from './HeaderControl';


export function PrintControl() {
  return (
    <HeaderControl tooltip="Print" component="a" onClick={() => {window.print();return false;}}>
      <PrintIcon size={44} />
    </HeaderControl>
  );
}
