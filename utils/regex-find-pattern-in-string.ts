export function regexFindPatternInString(regex: RegExp, str: string): boolean {
    return regex.test(str);
}

// TEST CONFIG
// console.log(regexFindPatternInString(/hello/, "hello world"));
