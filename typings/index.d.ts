import Assets from './assets';
export default class Imago {
    private _DEFAULT_HOST;
    private _DEFAULT_BASE_PATH;
    private _API_KEY;
    private _API_CLIENT;
    _api: any;
    assets: Assets;
    constructor(key?: string);
    setApiKey(value: string): void;
    setApiClient(value: string): void;
}
