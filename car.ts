interface Car {
    brand: string,
    model: string,
    price: number,
    year: number
}

function getTotalPrice(cars: Car[]): number {
    let price = 0;
    cars.forEach(element => {
        price += element.price;
    });
    return price;
}

function printCars(cars: Car[]) {
    cars.forEach(element => {
        console.log(element.model);
    });
}

function getExpensiveCars(cars: Car[], minPrice: number): Car[] {
    let expensiveCars: Car[] = [];
    cars.forEach(element => {
        if(element.price > minPrice) {
            expensiveCars.push(element);
        }
    });
    return expensiveCars;
}

function getTotalPriceReduce(cars: Car[]): number {
    return cars.reduce((accumulator, car) => accumulator + car.price, 0);
}


function getExpensiveCarsFilter(cars: Car[], minPrice: number): Car[] {
    return cars.filter((car, index) => car.price > minPrice ? car : undefined);
}
