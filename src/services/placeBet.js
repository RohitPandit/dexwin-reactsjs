export const addBetSlip = (gameId, odds, betType, gameData) => {
    try {
        const arr = [];
        arr.push({ gameId: gameId, odds: odds, betType: betType, gameData: gameData, amount: 0, winAmount: 0 });
        localStorage.setItem("betslips", JSON.stringify(arr));
        return true;
    } catch (error) {
        return false;
    }
}
