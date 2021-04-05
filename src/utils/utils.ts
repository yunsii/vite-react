import { parse } from 'querystring';

export const getPageQuery = () => parse(window.location.href.split('?')[1]);
