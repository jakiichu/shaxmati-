import {qwe} from "./start-game";
import {whitePawn} from "./app/components/pawn";
import {chessPiece} from "./app/components/common/chess-piece";
import {cloneClass} from "./domain/common/utils/clone-class";


export function setupCounter(element: HTMLButtonElement) {
    let counter = 0
    const length = 10
    const filledArray: chessPiece[] = Array(length).fill(cloneClass(whitePawn))
    filledArray[0].setPosition({vertical: 12, horizontal: '13'})
    console.log(filledArray[0].getPosition())
    const setCounter = (count: number) => {
        counter = count
        element.innerHTML = `count is ${counter}`
        qwe()
    }
    element.addEventListener('click', () => setCounter(counter + 1))
    setCounter(0)
}
