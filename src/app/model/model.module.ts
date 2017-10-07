import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { Api } from './api';
import { Payments } from './repositories/payments';

// Imports required for mocking up API requests
import { MockBackend } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { ApiMockupService } from './mockup/api.mockup.service';

// https://blog.angularindepth.com/making-your-angular-2-library-statically-analyzable-for-aot-e1c6f3ebedd5
// https://github.com/angular/angular-cli/issues/3707#issuecomment-308948425
export const httpFactory = (backend: MockBackend, options: BaseRequestOptions) => { return new Http(backend, options); };

@NgModule({
    imports: [
        HttpModule
    ],
    declarations: [],
    providers: [
        Api,
        Payments,
        MockBackend,
        ApiMockupService,
        BaseRequestOptions,
        {
            provide: Http,
            deps: [MockBackend, BaseRequestOptions],
            useFactory: httpFactory
        }
    ],

})
export class ModelModule { }

