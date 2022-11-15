#!/usr/bin/env node
'use strict'

const yargs = require('yargs')
const { hideBin } = require('yargs/helpers')

const appName = process.argv[1].split('/').pop()
const argv = yargs(hideBin(process.argv))
  .usage(`Usage: ${appName}`)
  .example(`${appName}`)
  .demandOption([])
  .help('h')
  .alias('h', 'help')
  .alias('v', 'verbose')
  .argv;


/**
Code below!
*/

console.log("hello")

console.log(1 - 2) // simple arthimetic between integer types
console.log("1" - 2) // coerced arthimetic between a string and integer
console.log("1" + 2) // coerced string concatenation between string and integer

// in above two cases, the operator determines outcome. in last case the + operator
// is overloaded to both string concatenation and arthimetic.
// because the string comes first, it treats it as a string concatenation operation
// ...
// How will it be if we reverse the "numbers"
console.log(2 + "1")
// I am guessing because to avoid confusion they just goes a primary operation when overloaded
// regardless of order

// so bc of this, we can do cool things, like coerce a integer into a string easliy
// look at the console and see how it displays
console.log(typeof 3, typeof "3", typeof (3 + ""))

// you will notice the perference of overloading to a concatenation operator allows us
// to coerce and interge to a string simply by adding an empty string to it.

// basically there are two orders of data types - 1: primitive, and 2: object
// the difference between a primitive and object is how its stored in memory.
// a primitive is stored in 1 or a "few" sequencial addresses in memory, an object is a reference (a primitive)
// that points to another arbitraty set of addresses in memory


/**
32,000,000,000 bytes
1 byte = 8 bits
1 byte = 1/4 word

integer = 32 bits -> 4 bytes -> 1 word

mynum = 32


00000000 address maybe for example 0x000000000
00000100 address maybe for example 0x000000001
10110011 address maybe for example 0x000000002
10001111 address maybe for example 0x000000003


public class Foo {
  public void toString(){
    System.out.println("Foo")
  }
}

String foo = new String()

somewhere in memory is the steps to execute println. But to get there, foo has to reference toString, which has to
reference System, which has to reference out, which has to reference the function command (in assembly eventually) to print to stdout

foo -> 0x000000004
0x00000004 -> datastructure
0x00000004
0x00000005 -> toString

*/

console.log("FOO" + 3 + "BAR")
