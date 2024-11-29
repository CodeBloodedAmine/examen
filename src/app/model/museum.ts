import { Theme } from "./theme";

export class Museum {
    constructor(
        public id:string,
        public name: string,
        public country: string,
        public photo:string,
        public date: Date,
        public theme: Theme,
        public surface: number,
        public nbObjects: number,
        public objects: string[]
    ){        
    }
}
