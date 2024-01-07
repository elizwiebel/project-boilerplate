((): void => {
    // JS METHOD ITERATION AND SORT

    const testArray = [1, 2, 3, 4, 5];
    let i = 0;

    // LOOPS
    console.log("for loop");
    for (let i = 0; i < testArray.length; i++) {
        console.log("    e:", testArray[i]);
    }

    console.log("for of loop");
    for (const elem of testArray) {
        console.log("    e:", elem);
    }

    console.log("do while loop");
    i = 0;
    do {
        console.log("    e:", testArray[i]);
        i++;
    } while (i < testArray.length);

    console.log("while loop");
    i = 0;
    while (i < testArray.length) {
        console.log("    e:", testArray[i]);
        i++;
    }

    // ARRAY METHODS
    console.log("forEach() method");
    testArray.forEach((element) => console.log("    e:", element));

    console.log("reduce() method");
    const reducedArray = testArray.reduce((total, num) => total + num, 0);
    console.log("    sum:", reducedArray);

    console.log("filter() method");
    const filteredArray = testArray.filter((elem) => elem > 3);
    console.log("    filteredArray:", filteredArray);

    console.log("map() method");
    const mappedArray = testArray.map((elem) => elem * 2);
    console.log("    mappedArray:", mappedArray);

    // SORT METHODS
    console.log("sort() method");
    const sortedArray = [...testArray];
    sortedArray.sort((a, b) => b - a);
    console.log("    sortedArray:", sortedArray);
})();
