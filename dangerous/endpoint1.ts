/**
 * (1.1)
 */
function handleRequestA(userInput: string): void {
    // In a real scenario, this might parse HTTP request data, etc.
    console.log("[handleRequestA] Received input:", userInput);
    processInputA1(userInput);
    processInputA2(userInput);
    processInputA3(userInput);
}
