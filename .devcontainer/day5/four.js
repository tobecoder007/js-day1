// for in

const myObject = {
    js: 'javascript',
    rb: 'ruby',
    cpp: 'C++'
}

for (const key in myObject) {
    console.log(`${key} shortcut stands for ${myObject[key]}`);
}