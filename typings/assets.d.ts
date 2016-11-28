export default class Assets {
    api: any;
    constructor(api: any);
    search(query: any): any;
    get(id: string): any;
    update(asset: any): void;
    del(asset: any): void;
}
