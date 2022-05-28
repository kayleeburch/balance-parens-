let bp = require("./balanceParens");

// Add more test cases!...
console.log(balanceParens("abc(d)e(fgh))(i)j)k") === "abc(d)e(fgh)(i)jk")
console.log(balanceParens("abc(d)e(fg)h))(i)j)k)") === "abc(d)e(fg)h(i)jk")
console.log(balanceParens("abc((d)e(fgh)(i)j(k") === "abc(d)e(fgh)(i)jk")
console.log(balanceParens("ab(c((d)e(fg(h)(i)j(k(") === "abc(d)efg(h)(i)jk")

// Challenge: nested parentheses...
// console.log(balanceParens("abc(d)(ef(g(h))ij)k)lm()o)p") === "abc(d)(ef(g(h))ij)klm()op")