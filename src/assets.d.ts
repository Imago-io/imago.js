export interface Asset {
 _tenant     : string,
 name        : string,
 type        : string,
 types       : string[],
 uuid        : string,
 sha         : string
 created     : Date,
 modified    : Date,
 fields      : any,
 assets      : Asset[],
 serving_url : string,
 resolution  : string,
 order       : number
 count       : number,
 sortorder   : string,
 visible     : boolean,
 status      : string,
 size        : number,
 b64         : string,
 data        : any,
 sellable    : boolean,
 variants    : any,
 checked     : boolean
}
