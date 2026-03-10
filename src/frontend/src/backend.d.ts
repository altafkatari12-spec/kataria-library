import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Book {
    id: bigint;
    title: string;
    author: string;
    available: boolean;
    genre: string;
}
export interface LibraryInfo {
    about: string;
    hours: string;
    name: string;
    address: string;
}
export interface backendInterface {
    addBook(title: string, author: string, genre: string): Promise<bigint>;
    addService(service: string): Promise<void>;
    getAllBooks(): Promise<Array<Book>>;
    getAllServices(): Promise<Array<string>>;
    getBooksByGenre(genre: string): Promise<Array<Book>>;
    getLibraryInfo(): Promise<LibraryInfo>;
    updateBook(bookId: bigint, title: string, author: string, genre: string, available: boolean): Promise<void>;
    updateLibraryInfo(name: string, address: string, about: string, hours: string): Promise<void>;
    updateService(serviceId: bigint, service: string): Promise<void>;
}
