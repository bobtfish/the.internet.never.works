import YamlContent from './data.yaml'
import { CV } from './Schema'

export function loadData(): CV {
    return YamlContent as CV;
}
