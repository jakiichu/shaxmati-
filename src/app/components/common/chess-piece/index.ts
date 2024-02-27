import {EMoving} from "../../../../domain/common/enum/moving";
import {IPosition} from "../../../../domain/base-class/interfase";
import {ESide} from "../../../../domain/common/enum/side";

class chessPiece {
    public readonly moving: EMoving
    private readonly image: string
    private die: boolean = false
    private vertical: number | undefined
    private horizontal: string | undefined
    private readonly side: ESide

    constructor(moving: EMoving, image: string, position: IPosition, side: ESide) {
        this.moving = moving
        this.image = image
        this.vertical = position.vertical
        this.horizontal = position.horizontal
        this.side = side
    }

    public setPosition(position: IPosition): void {
        this.vertical = position.vertical
        this.horizontal = position.horizontal
    }

    public getPosition() {
        return {vertical: this.vertical, horizontal: this.horizontal}
    }

    public setDie() {
        this.die = true
    }

    public get getDie() {
        return this.die
    }

    public get getImage() {
        return this.image
    }

    public get getSide() {
        return this.side
    }


}

export {
    chessPiece
}