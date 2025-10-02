import { buildQueryA3, buildQueryC9, buildQueryA1, buildQueryA2, buildQueryA4, buildQueryA5, buildQueryA6, buildQueryA7, buildQueryA8, buildQueryA9, buildQueryB1, buildQueryB2, buildQueryB3, buildQueryB4, buildQueryB5, buildQueryB6, buildQueryB7, buildQueryB8, buildQueryB9, buildQueryC1, buildQueryC2, buildQueryC3, buildQueryC4, buildQueryC5, buildQueryC6, buildQueryC7, buildQueryC8 } from "./queryBuilder";

/**
 * (2.1)
 */
export async function processInputA1(userInput: string): Promise<void> {
    await buildQueryA1(userInput);
    await buildQueryA2(userInput);
    await buildQueryA3(userInput);
}

/**
 * (2.2)
 */
export async function processInputA2(userInput: string): Promise<void> {
    await buildQueryA4(userInput);
    await buildQueryA5(userInput);
    await buildQueryA6(userInput);
}

/**
 * (2.3)
 */
export async function processInputA3(userInput: string): Promise<void> {
    await buildQueryA7(userInput);
    await buildQueryA8(userInput);
    await buildQueryA9(userInput);
}

/**
 * (2.4)
 */
export async function processInputB1(userInput: string): Promise<void> {
    await buildQueryB1(userInput);
    await buildQueryB2(userInput);
    await buildQueryB3(userInput);
}

/**
 * (2.5)
 */
export async function processInputB2(userInput: string): Promise<void> {
    await buildQueryB4(userInput);
    await buildQueryB5(userInput);
    await buildQueryB6(userInput);
}

/**
 * (2.6)
 */
export async function processInputB3(userInput: string): Promise<void> {
    await buildQueryB7(userInput);
    await buildQueryB8(userInput);
    await buildQueryB9(userInput);
}

/**
 * (2.7)
 */
export async function processInputC1(userInput: string): Promise<void> {
    await buildQueryC1(userInput);
    await buildQueryC2(userInput);
    await buildQueryC3(userInput);
}

/**
 * (2.8)
 */
export async function processInputC2(userInput: string): Promise<void> {
    await buildQueryC4(userInput);
    await buildQueryC5(userInput);
    await buildQueryC6(userInput);
}

/**
 * (2.9)
 */
export async function processInputC3(userInput: string): Promise<void> {
    await buildQueryC7(userInput);
    await buildQueryC8(userInput);
    await buildQueryC9(userInput);
}
