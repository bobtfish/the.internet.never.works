import YamlContent from './data.yaml'
import { CV, CVSchema } from './schema'

export function loadData(): CV {
    return YamlContent as CV;
}

export function parseCV(data: CV) {
    return CVSchema.parse(data)
}