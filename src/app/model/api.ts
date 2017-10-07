import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs } from '@angular/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Graph } from './interfaces/graph'; // don't load via index, as webpack may have problems with loading order

// mockup
import { ApiMockupService } from './mockup';

@Injectable()
/**
 * @class Api
 * @description Main REST API service
 * @todo configuration injection
 */
export class Api {

    // TODO: define credentials format
    private credentials: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    private endpoint: string = 'https://api.test.form3.tech/v1/';

    constructor(
        private http: Http,
        private mockup: ApiMockupService
    ) {
        // mockup
        this.credentials.next(true); // any dummy value
        this.mockup.start();
    }

    /**
     * HTTP get
     * @param {string} path
     * @return Observable<any> - response
     */
    public get(path: string): Observable<Graph> {
        return this
            .http
            .get(this.endpoint + path, this.options())
            .map(this.process);
    }

    /**
     * @todo
     * @param path
     * @param data 
     */
    public post(path: string, data: any) {
        // TODO: implement
    }

    /**
     * @todo
     * @param path
     */
    public delete(path: string) {
        // TODO: implement
    }

    /**
     * @todo
     * @param pat 
     * @param data 
     */
    public put(pat: string, data: any) {
        // TODO: implement
    }

    /**
     * Compose RequestOptions
     * @param {RequestOptionsArgs} added - request specific options
     * @param {any} headers - HTTP headers to be set (will be merged with session headers)
     * @todo session headers
     */
    private options(
        added: RequestOptionsArgs = {},
        headers: any = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'cache-control': 'no-cache'
        }): RequestOptionsArgs {

        const headersObject = new Headers();

        Object
            .keys(headers)
            .forEach(key => {
                if (headers[key] !== undefined) {
                    headersObject.append(key, headers[key]);
                }
            });

        const merged: RequestOptionsArgs = {
            headers: headers
        };

        Object.keys(added)
            .forEach((key: string) => merged[key] = added[key]);

        return merged as RequestOptionsArgs;
    }

    /**
     * Parse raw response and handle exceptions
     * @param {Response} response 
     * @return {any} parsed response
     */
    private process(response: Response): Graph {
        if ([200, 204].indexOf(response.status) === -1) {
            throw new Error(response.statusText || response.status.toString());
        }

        const json = response.json();

        // TODO: aling error format with backend team
        if (json && json.errorMessage) {
            throw new Error(json.errorMessage);
        }
        return json as Graph;
    }

}
