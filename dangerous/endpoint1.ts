import {processInputA1, processInputA2, processInputA3} from "./storeData";

/**
 * (1.1)
 */
async function handleRequestA(userInput: string): Promise<void> {
    console.log("[handleRequestA] Received input:", userInput);
    await processInputA1(userInput);
    await processInputA2(userInput);
    await processInputA3(userInput);
}
