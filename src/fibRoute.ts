import { Request, Response } from "express";
import fibonacci from "./fib";

// Define route handler with proper type for params
export default (req: Request<{ num: string }>, res: Response): void => {
  const { num } = req.params;
  const parsedNum = Number(num);

  if (Number.isNaN(parsedNum)) {
    res.status(400).send(`Invalid input: '${num}' is not a number`);
    return;
  }

  const fibN: number = fibonacci(parsedNum) as number;

  // Ensure fibonacci returns a number, otherwise handle gracefully
  if (typeof fibN !== "number" || fibN < 0) {
    res.send(`fibonacci(${parsedNum}) is undefined`);
    return;
  }

  res.send(`fibonacci(${parsedNum}) is ${fibN}`);
};
