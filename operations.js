const findString = (arr) => {
    var maxlength = 0;
    var result = [];
    if (findString.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].length > maxlength) {
                result = [];
                maxlength = arr[i].length;
                result.push(arr[i]);
            } else if (arr[i].length == maxlength) {
                result.push(arr[i]);
            }
        }
    }
    return result;
}

const sumMax = (arr) => {
    arr.sort(function (a, b) {
        return b - a;
    });
    var result = 0;
    if (arr.length > 2) {
        result = arr[0] + arr[1];
    }
    return result;
}

export {
    findString,
    sumMax
};