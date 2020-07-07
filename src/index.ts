import _request from 'request';
import type {CoreOptions, RequiredUriUrl, Request, Response} from 'request';

/**
 * Promisified version of request().
 */
async function request(uri: string, options?: CoreOptions): Promise<Request>;
async function request(uri: string): Promise<Request>;
async function request(options: RequiredUriUrl & CoreOptions): Promise<Request>;
async function request(arg1: any, arg2?: any) {
  return new Promise((resolve, reject) => {
    function callback(error: any, response: Response) {
      if (error) {
        reject(error);
      } else {
        resolve(response);
      }
    }
    if (typeof arg2 === undefined) {
      _request(arg1, callback);
    } else {
      _request(arg1, arg2, callback);
    }
  });
}

export default request;
