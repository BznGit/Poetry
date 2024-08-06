
export function addDivPoems(poem){
  
  let a = poem.slice(1)
  let n = a.replace(/\n/g, '</div>')
  let divs = n.replace(/[А-Я]/g, '<div>$&')
   return divs
}
