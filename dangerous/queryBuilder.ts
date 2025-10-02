/**
 * (3.1)
 */
function buildQueryA1(userInput: string): void {
    // Some mock transformation
    const sanitized = userInput.trim().toLowerCase();
    doVulnerableQuery(sanitized);
}

/**
 * (3.2)
 */
function buildQueryA2(userInput: string): void {
    const sanitized = userInput.replace("'", "''");
    doVulnerableQuery(sanitized);
}

/**
 * (3.3)
 */
function buildQueryA3(userInput: string): void {
    const sanitized = userInput.split(" ").join("_");
    doVulnerableQuery(sanitized);
}

/**
 * (3.4)
 */
function buildQueryA4(userInput: string): void {
    doVulnerableQuery(`[A4]_${userInput}`);
}

/**
 * (3.5)
 */
function buildQueryA5(userInput: string): void {
    doVulnerableQuery(`[A5]_${userInput}`);
}

/**
 * (3.6)
 */
function buildQueryA6(userInput: string): void {
    doVulnerableQuery(`[A6]_${userInput}`);
}

/**
 * (3.7)
 */
function buildQueryA7(userInput: string): void {
    doVulnerableQuery(`[A7]_${userInput}`);
}

/**
 * (3.8)
 */
function buildQueryA8(userInput: string): void {
    doVulnerableQuery(`[A8]_${userInput}`);
}

/**
 * (3.9)
 */
function buildQueryA9(userInput: string): void {
    doVulnerableQuery(`[A9]_${userInput}`);
}

/**
 * (3.10)
 */
function buildQueryB1(userInput: string): void {
    doVulnerableQuery(`[B1]_${userInput}`);
}

/**
 * (3.11)
 */
function buildQueryB2(userInput: string): void {
    doVulnerableQuery(`[B2]_${userInput}`);
}

/**
 * (3.12)
 */
function buildQueryB3(userInput: string): void {
    doVulnerableQuery(`[B3]_${userInput}`);
}

/**
 * (3.13)
 */
function buildQueryB4(userInput: string): void {
    doVulnerableQuery(`[B4]_${userInput}`);
}

/**
 * (3.14)
 */
function buildQueryB5(userInput: string): void {
    doVulnerableQuery(`[B5]_${userInput}`);
}

/**
 * (3.15)
 */
function buildQueryB6(userInput: string): void {
    doVulnerableQuery(`[B6]_${userInput}`);
}

/**
 * (3.16)
 */
function buildQueryB7(userInput: string): void {
    doVulnerableQuery(`[B7]_${userInput}`);
}

/**
 * (3.17)
 */
function buildQueryB8(userInput: string): void {
    doVulnerableQuery(`[B8]_${userInput}`);
}

/**
 * (3.18)
 */
function buildQueryB9(userInput: string): void {
    doVulnerableQuery(`[B9]_${userInput}`);
}

/**
 * (3.19)
 */
function buildQueryC1(userInput: string): void {
    doVulnerableQuery(`[C1]_${userInput}`);
}

/**
 * (3.20)
 */
function buildQueryC2(userInput: string): void {
    doVulnerableQuery(`[C2]_${userInput}`);
}

/**
 * (3.21)
 */
function buildQueryC3(userInput: string): void {
    doVulnerableQuery(`[C3]_${userInput}`);
}

/**
 * (3.22)
 */
function buildQueryC4(userInput: string): void {
    doVulnerableQuery(`[C4]_${userInput}`);
}

/**
 * (3.23)
 */
function buildQueryC5(userInput: string): void {
    doVulnerableQuery(`[C5]_${userInput}`);
}

/**
 * (3.24)
 */
function buildQueryC6(userInput: string): void {
    doVulnerableQuery(`[C6]_${userInput}`);
}

/**
 * (3.25)
 */
function buildQueryC7(userInput: string): void {
    doVulnerableQuery(`[C7]_${userInput}`);
}

/**
 * (3.26)
 */
function buildQueryC8(userInput: string): void {
    doVulnerableQuery(`[C8]_${userInput}`);
}

/**
 * (3.27)
 */
function buildQueryC9(userInput: string): void {
    doVulnerableQuery(`[C9]_${userInput}`);
}
