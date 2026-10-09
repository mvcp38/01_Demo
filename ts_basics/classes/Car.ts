import { Engine } from "./Engine.ts";

export class Car {
    private color: string;
    private model: string;
    private engine: Engine;

    constructor(color: string, model: string, engine: Engine) {
        this.color = color;
        this.model = model;
        this.engine = engine;
    }
    getColor(): string {
        return this.color;
    }
    getModel(): string {
        return this.model;
    } 
}