const tiles = [
  { id: 1, value: '\u{1F330}', isVisible: false, info: 'chestnut' },
  { id: 2, value: '\u{1F33D}', isVisible: false, info: 'ear of maze' },
  // { id: 3, value: '\u{1F33E}', isVisible: false, info: 'ear of rice' },
  // { id: 4, value: '\u{1F34D}', isVisible: false, info: 'pineapple' },
  // { id: 5, value: '\u{1F341}', isVisible: false, info: 'maple leaf' },
  // { id: 6, value: '\u{1F34D}', isVisible: false, info: 'pineapple' },
  // { id: 7, value: '\u{1F33F}', isVisible: false, info: 'herb' },
  // { id: 8, value: '\u{1F33D}', isVisible: false, info: 'ear of maze' },
  // { id: 9, value: '\u{1F33F}', isVisible: false, info: 'herb' },
  // { id: 10, value: '\u{1F340}', isVisible: false, info: 'four leaf clover' },
  // { id: 11, value: '\u{1F330}', isVisible: false, info: 'chestnut' },
  // { id: 12, value: '\u{1F347}', isVisible: false, info: 'grapes' },
  // { id: 13, value: '\u{1F33E}', isVisible: false, info: 'ear of rice' },
  // { id: 14, value: '\u{1F347}', isVisible: false, info: 'grapes' },
  // { id: 15, value: '\u{1F341}', isVisible: false, info: 'maple leaf' },
  // { id: 16, value: '\u{1F340}', isVisible: false, info: 'four leaf clover' },
]

console.log(`tiles before direct push:`, tiles)

tiles.push({ title: 'Bob' })

console.log(`tiles after direct push:`, tiles)
console.log(`tiles before function push:`, tiles)

add(tiles, { title: 'Henry' })

console.log(`tiles after function push:`, tiles)

let c = [1, 2]
const d = [1, 2]

console.log(`c before direct push:`, c)
console.log(`d before direct push:`, d)

c.push(4)
d.push(4)

console.log(`c after direct push:`, c)
console.log(`d after direct push:`, d)
console.log(`c before function push:`, c)
console.log(`d before function push:`, d)

add(c, 5)
add(d, 5)

console.log(`c after function push:`, c)
console.log(`d after function push:`, d)

// ~FUNCTIONS

function add(array, element) {
  array.push(element)
}
