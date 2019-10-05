module.exports = function multiply(first, second) {
  // my solution

  /*for (index = 0; index < first.length; index++) {
  
  }*/
  let index
  let base
  let multiplier
  let add = 0
  let a
  let b
  let nux
  let result = [0]
  let osn
  let str = ''
  let bndex
  let buf_res = [0]
  let add_res = 0


  if (first.length > second.length) {
    base = first
    multiplier = second
  }
  else {
    base = second
    multiplier = first
  }
  

  for (index = 0; index < multiplier.length; index++) {

    for (jndex = 0; jndex < base.length; jndex++) {
        add = 0
        mux = +base[base.length - 1 - jndex] * +multiplier[multiplier.length - 1 - index]
        if (result.length < jndex + 1) {result.push(0)}
        sum = +result[jndex] + +mux%10
        if (mux >= 10) {
          add = Math.floor(mux/10)
          if (result.length < jndex + 2) {result.push(0)}
          result[jndex + 1] = add
        }
        if (sum >= 10)
        {
          add = +add + 1
          if (result.length < jndex + 2) {result.push(0)}
          result[jndex + 1] = add
        }
        osn = sum%10
        result[jndex] = osn
      }

      for (bndex = 0; bndex < result.length; bndex++) {
         if (buf_res.length < bndex + index + 1 ) {buf_res.push(0)}
         a = +buf_res[bndex + index] + +result[bndex] + +add_res
         buf_res[bndex + index] = a%10
         add_res = Math.floor(a/10)
      }

      while (add_res != 0) {
        if (buf_res.length < bndex + index + 1) {buf_res.push(0)}
        b = +buf_res[bndex + index] + +add_res
        buf_res[bndex + index] = b%10
        add_res = Math.floor(b/10)
        bndex++
      }
      result.length = 0
  }
  for (index = 0; index < buf_res.length; index++)
  {
    str = str + String(buf_res[buf_res.length - 1 - index])
  }
 return str
}
