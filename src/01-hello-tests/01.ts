
export const sum = (a: number, b: number) => {
    return a + b ;
};

export const mult = (a: number, b: number) => {
    return a * b ;
}

export const sentense = "hello my friend";


export const SplitIntoWords = (sentense:string) => {
    return sentense.toLowerCase().split(" ")
    .filter(w => w !== "" && w !== "-")
    .map(w => w
        .replace('!', "")
        .replace(".", "")
        .replace(",", ""));
        
}