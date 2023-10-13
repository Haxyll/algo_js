const a = " jean"
const b = " paul"
let result = null

function checkName(name1 , name2) {
  if ( name1 == name2) {
    result = true
  } else {
    result = false
  }
  console.log(result)
}

checkName(a, b)