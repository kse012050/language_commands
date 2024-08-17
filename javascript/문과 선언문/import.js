
// default 사용법
// 1. 
// import default01 from './export.js'
// default01()

// 2. 이름 변경하는 방법
// import defaultNameChange from './export.js'
// defaultNameChange()


// named 사용법
// 1.
// import { named01, named02 } from './export.js'
// named01()
// named02()

// 2.
// import { named01 as changeName01, named02 as changeName02 } from './export.js'

// changeName01()
// changeName02()

// 3.
// import * as changeName from './export.js'
// changeName.named01()
// changeName.named02()



// default, named 같이 사용하기
// 1.
// import defaultNameChange, { named01, named02 } from './export.js'
// defaultNameChange()
// named01()
// named02()

// 2.
// import defaultNameChange, { named01 as changeName01, named02 as changeName02 } from './export.js'
// defaultNameChange()
// changeName01()
// changeName02()

// 3.
import defaultNameChange, * as changeName from './export.js'
defaultNameChange()
changeName.named01()
changeName.named02()