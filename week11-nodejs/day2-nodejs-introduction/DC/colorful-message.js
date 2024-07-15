import chalk from "chalk";

export const colorfulMessage = (message) => {
  console.log(chalk.red.bold(`${message}`));
};
