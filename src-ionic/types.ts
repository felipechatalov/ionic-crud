import { HttpContext } from "@angular/common/http";
import { HttpHeaders, HttpParams } from "@capacitor/core";


export interface Options{
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    context?: HttpContext;
    observe?: 'body';
    params?: HttpParams | {
        [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    };
    reportProgress?: boolean;
    responseType: 'json';
    withCredentials?: boolean;
    transferCache?: {
        includeHeaders?: string[];
    } | boolean;
}

export interface User{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface Users{
    users: User[],
    numberOfUsers: number;
}