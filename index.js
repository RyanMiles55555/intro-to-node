import { text } from "express";
import { constants } from "fs";
import { copyFile } from "fs/promises";

try {
  for (let i = 0; i < 1; i++) {
    await copyFile("text.txt", `text${[i]}.txt`);
    console.log("source was copied successfully");
  }
} catch {
  console.log("file was note copied successfully");
}
