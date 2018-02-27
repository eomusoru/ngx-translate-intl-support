import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateCompiler, TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateMessageFormatCompiler} from "ngx-translate-messageformat-compiler";
import {MESSAGE_FORMAT_CONFIG} from "ngx-translate-messageformat-compiler";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      compiler: {
        provide: TranslateCompiler,
        useClass: TranslateMessageFormatCompiler
      }
    })
  ],
  providers: [
    {provide: MESSAGE_FORMAT_CONFIG, useValue: {intlSupport: true}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
