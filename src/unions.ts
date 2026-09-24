const arr1: number[] = [];
// only number can be added to arr1

const arr2: string[] = [];
// only string can be added to arr2

const arr3: string[] | number[] = [];
// only all string or number can be added to arr3 but not both at same time

const arr4: (string | number)[] = [];
// both string and number can be added to arr4