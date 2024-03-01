import adviceFormat from "../interfaces/interfaces";

const getAdvice = async () => {
    let randNum = Math.floor(Math.random() * 224) + 1
    const promise = await fetch(`https://api.adviceslip.com/advice/${randNum}`);
    const data: adviceFormat = await promise.json();
    return data;
}

export default getAdvice