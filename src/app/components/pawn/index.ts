import {chessPiece} from "../common/chess-piece";
import {EMoving} from "../../../domain/common/enum/moving";
import whiteIcon from "../../assets/chessman/pawn/white/Group 1254 (4).svg";
import blackIcon from "../../assets/chessman/pawn/black/Group 1255 (1).svg";
import {ESide} from "../../../domain/common/enum/side";

const whitePawn = new chessPiece(EMoving.PAWN, whiteIcon, {vertical: undefined, horizontal: undefined}, ESide.WHITE)
const blackPawn = new chessPiece(EMoving.PAWN, blackIcon, {vertical: undefined, horizontal: undefined}, ESide.BLACK)

export {
    whitePawn,
    blackPawn
}