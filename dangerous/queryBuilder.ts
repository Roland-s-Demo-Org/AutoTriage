import { doVulnerableQuery} from "./query";

/**
 * (3.1)
 */
export async function buildQueryA1(userInput: string): Promise<void> {
    // Some mock transformation
    const sanitized = userInput.trim().toLowerCase();
    await doVulnerableQuery(sanitized);
}

/**
 * (3.2)
 */
export async function buildQueryA2(userInput: string): Promise<void> {
    const sanitized = userInput.replace("'", "''");
    await doVulnerableQuery(sanitized);
}

/**
 * (3.3)
 */
export async function buildQueryA3(userInput: string): Promise<void> {
    const sanitized = userInput.split(" ").join("_");
    await doVulnerableQuery(sanitized);
}

/**
 * (3.4)
 */
export async function buildQueryA4(userInput: string): Promise<void> {
    await doVulnerableQuery(`[A4]_${userInput}`);
}

/**
 * (3.5)
 */
export async function buildQueryA5(userInput: string): Promise<void> {
    await doVulnerableQuery(`[A5]_${userInput}`);
}

/**
 * (3.6)
 */
export async function buildQueryA6(userInput: string): Promise<void> {
    await doVulnerableQuery(`[A6]_${userInput}`);
}

/**
 * (3.7)
 */
export async function buildQueryA7(userInput: string): Promise<void> {
    await doVulnerableQuery(`[A7]_${userInput}`);
}

/**
 * (3.8)
 */
export async function buildQueryA8(userInput: string): Promise<void> {
    await doVulnerableQuery(`[A8]_${userInput}`);
}

/**
 * (3.9)
 */
export async function buildQueryA9(userInput: string): Promise<void> {
    await doVulnerableQuery(`[A9]_${userInput}`);
}

/**
 * (3.10)
 */
export async function buildQueryB1(userInput: string): Promise<void> {
    await doVulnerableQuery(`[B1]_${userInput}`);
}

/**
 * (3.11)
 */
export async function buildQueryB2(userInput: string): Promise<void> {
    await doVulnerableQuery(`[B2]_${userInput}`);
}

/**
 * (3.12)
 */
export async function buildQueryB3(userInput: string): Promise<void> {
    await doVulnerableQuery(`[B3]_${userInput}`);
}

/**
 * (3.13)
 */
export async function buildQueryB4(userInput: string): Promise<void> {
    await doVulnerableQuery(`[B4]_${userInput}`);
}

/**
 * (3.14)
 */
export async function buildQueryB5(userInput: string): Promise<void> {
    await doVulnerableQuery(`[B5]_${userInput}`);
}

/**
 * (3.15)
 */
export async function buildQueryB6(userInput: string): Promise<void> {
    await doVulnerableQuery(`[B6]_${userInput}`);
}

/**
 * (3.16)
 */
export async function buildQueryB7(userInput: string): Promise<void> {
    await doVulnerableQuery(`[B7]_${userInput}`);
}

/**
 * (3.17)
 */
export async function buildQueryB8(userInput: string): Promise<void> {
    await doVulnerableQuery(`[B8]_${userInput}`);
}

/**
 * (3.18)
 */
export async function buildQueryB9(userInput: string): Promise<void> {
    await doVulnerableQuery(`[B9]_${userInput}`);
}

/**
 * (3.19)
 */
export async function buildQueryC1(userInput: string): Promise<void> {
    await doVulnerableQuery(`[C1]_${userInput}`);
}

/**
 * (3.20)
 */
export async function buildQueryC2(userInput: string): Promise<void> {
    await doVulnerableQuery(`[C2]_${userInput}`);
}

/**
 * (3.21)
 */
export async function buildQueryC3(userInput: string): Promise<void> {
    await doVulnerableQuery(`[C3]_${userInput}`);
}

/**
 * (3.22)
 */
export async function buildQueryC4(userInput: string): Promise<void> {
    await doVulnerableQuery(`[C4]_${userInput}`);
}

/**
 * (3.23)
 */
export async function buildQueryC5(userInput: string): Promise<void> {
    await doVulnerableQuery(`[C5]_${userInput}`);
}

/**
 * (3.24)
 */
export async function buildQueryC6(userInput: string): Promise<void> {
    await doVulnerableQuery(`[C6]_${userInput}`);
}

/**
 * (3.25)
 */
export async function buildQueryC7(userInput: string): Promise<void> {
    await doVulnerableQuery(`[C7]_${userInput}`);
}

/**
 * (3.26)
 */
export async function buildQueryC8(userInput: string): Promise<void> {
    await doVulnerableQuery(`[C8]_${userInput}`);
}

/**
 * (3.27)
 */
export async function buildQueryC9(userInput: string): Promise<void> {
    await doVulnerableQuery(`[C9]_${userInput}`);
}
