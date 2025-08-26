import { Request, Response } from "express";
import fibonacci from "./fib";

// Route handler with proper typing
export default (req: Request<{ num: string }>, res: Response): void => {
  const { num } = req.params;
  const parsedNum = Number(num);

  if (Number.isNaN(parsedNum)) {
    res.status(400).send(`Invalid input: '${num}' is not a number`);
    return;
  }

  const fibN: number = fibonacci(parsedNum);

  if (fibN < 0) {
    res.send(`fibonacci(${parsedNum}) is undefined`);
    return;
  }

  res.send(`fibonacci(${parsedNum}) is ${fibN}`);
};
