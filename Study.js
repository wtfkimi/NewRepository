let x = "abc(def)B4B(jkl)mnos"

function removeParentheses(s){
    return s.replace(/\(.*\)/, "");
}


console.log(removeParentheses(x));