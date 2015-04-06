var queenAttack = function queenAttack(queenMove, opponentMove) {
    if ((queenMove[0] === opponentMove[0] || queenMove[1] === opponentMove[1])) {
        return true;
    } else if(Math.abs((queenMove[0] - opponentMove[0])) === Math.abs((queenMove[1] - opponentMove[1]))) {
        return true;
    } else {
        return false;
    }
};


$(document).ready(function() {
    $("form#queen-attack").submit(function(event) {
        var x1 = parseInt($("input#queenMoveX").val());
        var y1 = parseInt($("input#queenMoveY").val());
        var x2 = parseInt($("input#opponentMoveX").val());
        var y2 = parseInt($("input#opponentMoveY").val());

        var queenMove = [x1, y1];
        var opponentMove = [x2, y2];

        var attack = queenAttack(queenMove, opponentMove);

        // $(".not").text("");
        if(!attack) {
            $(".not").text("not");
        } else {
            $(".not").text("");
        }

        $("#result").show();
        event.preventDefault();
    });
});
