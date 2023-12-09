function doTask1() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Task 1'), 300);
    });
}

function doTask2() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Task 2'), 300);
    });
}

function doTask3() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Task 3'), 300);
    });
}

function runCode() {
    const strings = [];
    return doTask1()
        .then((rta1) => {
            strings.push(rta1);
            return doTask2();
        })
        .then((rta2) => {
            strings.push(rta2);
            return doTask3();
        })
        .then((rta3) => {
            strings.push(rta3);
            return strings;
        });
}

runCode().then(response => console.log(response));
