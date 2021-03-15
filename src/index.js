exports.min = function min(array) {
    if ((typeof array !== 'undefined') || (typeof array !== 'NaN')) {
        if (array.length > 0) {
            var solution = Math.min.apply(0, array);
        } else {
            solution = 0;
        }
    } else {
        solution = 0;
    }

    return solution;
}

exports.max = function max(array) {
    if ((typeof array !== 'undefined') || (typeof array !== 'NaN')) {
        if (array.length > 0) {
            var solution = Math.max.apply(0, array);
        } else {
            solution = 0;
        }
    } else {
        solution = 0;
    }

    return solution;
}

exports.avg = function avg(array) {
    if ((typeof array !== 'undefined') || (typeof array !== 'NaN')) {
        if (array.length > 0) {
            var summ = 0;
            for (var i = 0; i < array.length; i++) {
                summ = summ + array[i];
            }
            solution = summ / array.length;
        } else {
            solution = 0;
        }
    } else {
        solution = 0;
    }
    return solution;
}
