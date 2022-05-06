import { BackgroundColor } from 'chalk';

import chalk from 'chalk';

import { capitalize, multiplyChar } from '@helpers/String';

type Colors = 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white' | 'gray' | 'grey';

class Logger {
  titleMaxLength: number;

  /**
   * @param titleMaxLength The title max length
   */
  constructor(titleMaxLength: number = 8) {
    this.titleMaxLength = titleMaxLength;
  }

  /**
   * Log functino
   * @param args The list of elements to log
   */
  log(...args: any) {
    console.log(args.join(' '));
  }

  /**
   * Log function builder
   * @param titleBackground The title background color
   * @param light Whether if the background is lightened or not
   * @returns The function to call so as to log the message colored
   */
  default(titleBackground: Colors, light: boolean = false) {
    return (title: string, message: string) => {
      title = ' ' + title + multiplyChar(' ', this.titleMaxLength - title.length);

      const colorName = `bg${capitalize(titleBackground)}${light ? 'Bright' : ''}` as typeof BackgroundColor;
      this.log(chalk[colorName](title), chalk.bold(message));
    };
  }

  /**
   * Print a message with a red background title
   * @param title The title
   * @param message The message
   * @param light Is the background lightened
   */
  warning(title: string, message: string, light: boolean = false): void {
    this.default('red', light)(title, message);
  }

  /**
   * Print a message with a blue background title
   * @param title The title
   * @param message The message
   * @param light Is the background lightened
   */
  info(title: string, message: string, light: boolean = false): void {
    this.default('blue', light)(title, message);
  }

  /**
   * Print a body text
   * @param message The message
   */
  body(message: string): void {
    this.log(chalk.gray(message));
  }

  /**
   * Log line breaks
   * @param amount The amount of line breaks
   */
  break(amount: number = 1): void {
    this.log(multiplyChar('\n', amount - 1));
  }
}

export default Logger;
