import { Request, Response } from "express";
import fibonacci from "./fib";

export default (req: Request, res: Response): void => {
  const { num } = req.params;
  const parsedNum = parseInt(num, 10);

  if (isNaN(parsedNum)) {
    res.status(400).send(`Invalid input: '${num}' is not a number`);
    return;
  }

  const fibN: number = fibonacci(parsedNum) as number;
  let result = `fibonacci(${parsedNum}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${parsedNum}) is undefined`;
  }

  res.send(result);
};