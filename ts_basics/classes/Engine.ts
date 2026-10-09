export class Engine {
    private horsepower: number;

    constructor(horsepower: number) {
        this.horsepower = horsepower;
    }
    getHorsepower(): number {
        return this.horsepower;
    }
}