import type { Code } from './languages/antd';
import { ApiOptions } from '../base/types';

export { Code, ApiOptions };
export interface I18nPartOptions {
  separator?: string;
}
export interface I18nOptions extends ApiOptions, I18nPartOptions {
  language: { from: Code; to: Code };
}
