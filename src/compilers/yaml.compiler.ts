import { CompilerInterface } from './compiler.interface';
import { TranslationCollection } from '../utils/translation.collection';
import { unflatten } from 'flat';
const YAML = require('json-to-pretty-yaml');

export class YamlCompiler implements CompilerInterface {
    public extension: string = 'yaml';

    public constructor(options?: any) { }

    public compile(collection: TranslationCollection): string {
        const data = unflatten(collection.values);
        const result = YAML.stringify(data);
        return result.replace(/"+/g, '');
    }

    public parse(contents: string): TranslationCollection {
        return new TranslationCollection(null);
    }
}
