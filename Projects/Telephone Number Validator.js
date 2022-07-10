function telephoneCheck(str) {

    let ans = false
    const regexes = [
        /^\d{10}$/,
        /^(\d{3}-){2}\d{4}/,
        /^\(\d{3}\)\d{3}-\d{4}/,
        /^1 (\d{3}-){2}\d{4}/,
        /^1 (\d{3} ){2}\d{4}/,
        /^1 \(\d{3}\) \d{3}-\d{4}/,
        /^1\(\d{3}\)\d{3}-\d{4}/
    ]

    regexes.forEach(regex => {
        if(regex.test(str)){
            ans = true
        }
    });


    return ans;
}
a = [];  
a.push(telephoneCheck("555-555-5555"));
a.push(telephoneCheck("5555555555"));

console.table(a)

// console.log(typeof(telephoneCheck("5555555555")))