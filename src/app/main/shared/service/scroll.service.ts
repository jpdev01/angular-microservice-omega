
import { Injectable } from '@angular/core';

import ScrollBar from 'smooth-scrollbar';

@Injectable({
    providedIn: 'root'
})
export class ScrollService {

    constructor() { }

    create(type: DOMTypeReference, element: string, options: {}): void {
        let reference = "#";
        if (type) {
            if (type === 2) {
                reference = ".";
            }
        }

        if (!options) {
            options = {
                'damping': 0.05,
                'alwaysShowTrack': true
            };
        }

        ScrollBar.init(document.querySelector(".scroll-component"), options);
    }
}

export enum DOMTypeReference {
    ID, CLASS, NAME
}