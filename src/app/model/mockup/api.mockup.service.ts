import { Injectable } from '@angular/core';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { Response, ResponseOptions, RequestMethod } from '@angular/http'
import { DOCUMENT } from '@angular/common';

import { DATA } from './payments';

@Injectable()
/**
 * @class ApiMockupService
 * @description Mockup of REST API
 */
export class ApiMockupService {

    constructor(
        private backend: MockBackend
    ) { }

    /**
     * Setup API mockup handlers
     */
    public start(): void {
        this.backend.connections
            .subscribe((c: MockConnection) => {

                const URL = 'https://api.test.form3.tech/v1/payments';

                if (c.request.url === URL && c.request.method === RequestMethod.Get) {
                    c.mockRespond(new Response(new ResponseOptions({
                        status: 200,
                        body: JSON.stringify(DATA)
                    })));
                    return;
                }
            });
    }
}