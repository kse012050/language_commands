
// default 사용법
// 1.
export default function default01(){
    console.log(`default test`);
}

// 2.
// function default02(){
//     console.log(`default test`);
// }

// export default default02;


// named 사용법
// 1. 
// export function named01(){
//     console.log(`named01 test`);
// }

// export function named02(){
//     console.log(`named02 test`);
// }

// 2.
function named01(){
    console.log(`named01 test`);
}

function named02(){
    console.log(`named02 test`);
}

export { named01, named02 }