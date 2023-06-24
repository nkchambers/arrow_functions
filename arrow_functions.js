// CODECADEMY JAVASCRIPT PRACTICE - arrow_functions assignment

// Task 1 - Change plantNeedsWater() to use arrow function syntax.

const plantNeedsWater = (day) => {
    if (day === 'Wednesday') {
        return true;
    } else {
        return false;
    }
};

console.log(plantNeedsWater('Tuesday'));