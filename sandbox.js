/*
[Symbol.iterator]: function () {
    return {
        next() : return {
            done: чи дійшли ми до кінця послідовності,
            value: значення кожного поточного вузла
        }
    }
}

Якщо у об'жкта є метод за адресою [Symbol.iterator] - об'єкт ітерабельний (iterable)


for..of, spread/rest (...)

*/

/*
Генератор - це функція.
її можна запустити, щоб виконати якусь роботу
Генератор - це функція, яка здатна призупиняти свою роботу і повертати проміжний результат обчислень (зупинившись на конкретному місці) і потім повертатись до роботи саме з цього місця

*/


function* generate(params) {
    console.log(1);
    console.log(params)
    const value = yield 5;
    console.log(value);
    console.log(2);
    const value2 = yield 10;
    console.log('last stop')
    return 3;
}

// yield

const generator = generate('params value');
console.log(generator);
const res = generator.next();
console.log(res);
const res2 = generator.next('nextValue');
console.log(res2);
const res3 = generator.next('second yield value');
console.log(res3);
const res4 = generator.next();
console.log(res4);



function* generateNumberSequence() {
    let store = 0;
    while(true) {
        yield ++store;
    }
}

const a = generateNumberSequence();
const r1 = a.next();
console.log(r1);
const r2 = a.next();
console.log(r2);
const r3 = a.next();
console.log(r3);