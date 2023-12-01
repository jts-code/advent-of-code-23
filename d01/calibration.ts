#!/usr/bin/env ts-node

import { readFile } from "node:fs/promises";

async function calibrate() {
  try {
    const file = await readFile("./day1-input.txt", "utf8");
    const lines = file.split("\n");
    lines.pop();

    let total = 0;

    for (const line of lines) {
      let first: any = null;
      let last = "";
      for (const char of line) {
        if (typeof char === "string" && !isNaN(parseInt(char))) {
          first ??= char;
          last = char;
        }
      }
      total += parseInt(first + last);
    }

    return total;
  } catch (e) {
    console.log("error");
    return -1;
  }
}

calibrate().then(console.log);
