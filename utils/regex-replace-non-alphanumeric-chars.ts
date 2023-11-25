// Regex Breakdown

// / / marks the beginning and end of a regular expression
// [ ] are the beginning and end of a character set
// \W matches "non-word" characters, as opposed to \w which will match word characters. Equivalent to [^A-Za-z0-9_]
// _ is the "_" character
// The g flag means use a global search

function regexReplaceNonAlphanumericChars(str: string, newChar: string): string {
    return str.replace(/[\W_]/g, newChar)
}

// TEST CONFIG
// console.log(regexReplaceNonAlphanumericChars("A man, a_plan, a canal: Panama", ""))
