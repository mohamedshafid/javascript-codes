// Closure

function x () {
    let v = 10;
    return function () {
        console.log(v);
    }
}

let sol = x();
sol();