import {processInputB1, processInputB2, processInputB3} from "./storeData";

/**
 * (1.2)
 */
async function handleRequestB(userInput: string): Promise<void> {
    console.log("[handleRequestB] Received input:", userInput);
    await processInputB1(userInput);
    await processInputB2(userInput);
    await processInputB3(userInput);
}
