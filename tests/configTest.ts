import { config } from "../lib";
config({ path: ".env.test", debug: true });
import chalk from "chalk";

console.log(chalk.cyan(`process.env.TESTING: ${process.env.TESTING}\n`));
