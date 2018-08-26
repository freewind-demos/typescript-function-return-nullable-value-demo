function hello(name: string): string | null {
    if (name.length === 0) {
        return null
    } else {
        return `Hello, ${name}!`
    }
}

console.log(hello('typescript'))
console.log(hello(''))
