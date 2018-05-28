import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
    private language: String;

    public languageGet() {
        return this.language;
    }

    public languageSet( lang: String ){
        this.language = lang;
    }
}