/*
 * Escribe una funcion que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

export function fizzbuzz(number) {
  if (typeof number !== "number")
    throw new Error("The parameter must be a number");

  if (Number.isNaN(number)) throw new Error("The parameter must be a number");

  if (number % 3 === 0 && number % 5 === 0) return "fizzbuzz";

  if (number % 3 === 0) return "fizz";

  if (number % 5 === 0) return "buzz";
}
