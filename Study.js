let x = "abc(def)B4B(jkl)mno"

function removeParentheses(s){
    return s.replace(/\(.*\)/, "");
}


console.log(removeParentheses(x));