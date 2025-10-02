import {processInputC1, processInputC2, processInputC3} from "./storeData";

/**
 * (1.3)
 */
async function handleRequestC(userInput: string): Promise<void> {
    console.log("[handleRequestC] Received input:", userInput);
    await processInputC1(userInput);
    await processInputC2(userInput);
    await processInputC3(userInput);
}
