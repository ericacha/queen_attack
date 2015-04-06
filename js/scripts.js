var queenAttack = function queenAttack(queenMove, opponentMove) {
    if ((queenMove[0] === opponentMove[0] || queenMove[1] === opponentMove[1])) {
        return true;
    } else if(Math.abs((queenMove[0] - opponentMove[0])) === Math.abs((queenMove[1] - opponentMove[1]))) {
        return true;
    } else {
        return false;
    }
};
