import { ParsedUrlQuery } from 'querystring';

export interface ProductPathParams extends ParsedUrlQuery {
  slug: string;
}
