const randomNum = (min = 1, max = 100) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}; 
export default randomNum;