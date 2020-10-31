let x = "abc(def)B4B(jkl)"

function removeParentheses(s){
    return s.replace(/\(.*\)/, "");
}


console.log(removeParentheses(x));