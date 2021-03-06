// Type definitions for Mozilla's localForage
// Project: https://github.com/mozilla/localforage
// Definitions by: yuichi david pichsenmeister <https://github.com/3x14159265>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../es6-promise/es6-promise.d.ts" />

interface LocalForageOptions {
    driver?: LocalForageDriver | LocalForageDriver[];
    
    name?: string;
    
    size?: number;
    
    storeName?: string;
    
    version?: string;
    
    description?: string;
}

interface LocalForageDriver {
    _driver: string;
    
    _initStorage(options: LocalForageOptions): void;
    
    _support: boolean | Promise<boolean>;
    
    clear(callback: (err: any) => void): void;
    
    getItem(key: string, callback: (err: any, value: any) => void): void;
    
    key(keyIndex: number, callback: (err: any, key: string) => void): void;
    
    keys(callback: (err: any, keys: string[]) => void): void;
    
    length(callback: (err: any, numberOfKeys: number) => void): void;
    
    removeItem(key: string, callback: (err: any) => void): void;
    
    setItem(key: string, value: any, callback: (err: any, value: any) => void): void;
}

interface LocalForage {
    LOCALSTORAGE: string;
    WEBSQL: string;
    INDEXEDDB: string;
    
    config(options: LocalForageOptions): void;
    
    driver(): LocalForageDriver;
    setDriver(driver: string | string[]): Promise<void>;
    setDriver(driver: string | string[], callback: () => void, errorCallback: (error: any) => void): void;
    defineDriver(driver: LocalForageDriver): Promise<void>;
    defineDriver(driver: LocalForageDriver, callback: () => void, errorCallback: (error: any) => void): void;
    
    getItem<T>(key: string): Promise<T>;
    getItem<T>(key: string, callback: (err: any, value: T) => void): void;
    
    setItem<T>(key: string, value: T): Promise<T>;
    setItem<T>(key: string, value: T, callback: (err: any, value: T) => void): void;
    
    removeItem(key: string): Promise<void>;
    removeItem(key: string, callback: (err: any) => void): void;
    
    clear(): Promise<void>;
    clear(callback: (err: any) => void): void;
    
    length(): Promise<number>;
    length(callback: (err: any, numberOfKeys: number) => void): void;
    
    key(keyIndex: number): Promise<string>;
    key(keyIndex: number, callback: (err: any, key: string) => void): void;
    
    keys(): Promise<string[]>;
    keys(callback: (err: any, keys: string[]) => void): void;
    
    iterate(iteratee: (value: any, key: string, iterationNumber: number) => any): Promise<any>;
    iterate(iteratee: (value: any, key: string, iterationNumber: number) => any,
            callback: (err: any, result: any) => void): void;
}
