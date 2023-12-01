#!/usr/bin/env ts-node

import { readFile } from "node:fs/promises";

async function calibrate() {
  try {
    const file = await readFile("./day1-input.txt", "utf8");
    const lines = file.split("\n");
    lines.pop();

    let total = 0;
    let results: number[] = [];

    for (const line of lines) {
      let first: any = null;
      let last = "";
      let word = "";

      function setNum(x: string) {
        first ??= x;
        last = x;
      }

      for (const char of line) {
        if (typeof char === "string") {
          if (!isNaN(parseInt(char))) {
            setNum(char);
          } else {
            word += char;
            if (word.includes("one")) {
              setNum("1");
              word = "";
            } else if (word.includes("two")) {
              setNum("2");
              word = "";
            } else if (word.includes("three")) {
              setNum("3");
              word = "";
            } else if (word.includes("four")) {
              setNum("4");
              word = "";
            } else if (word.includes("five")) {
              setNum("5");
              word = "";
            } else if (word.includes("six")) {
              setNum("6");
              word = "";
            } else if (word.includes("seven")) {
              setNum("7");
              word = "";
            } else if (word.includes("eight")) {
              setNum("8");
              word = "";
            } else if (word.includes("nine")) {
              setNum("9");
              word = "";
            }
          }
        }
      }
      results.push(parseInt(first + last));

      total += parseInt(first + last);
    }

    console.log(results);
    console.log(results.length);
    console.log(results.reduce((partialSum, a) => partialSum + a, 0));

    return total;
  } catch (e) {
    console.log("error");
    return -1;
  }
}

calibrate().then(console.log);
