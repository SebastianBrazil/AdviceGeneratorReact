import adviceFormat from "../interfaces/interfaces";

const getAdvice = async () => {
    const promise = await fetch('https://api.adviceslip.com/advice');
    const data: adviceFormat = await promise.json();
    return data;
}

export default getAdvice