import {Model} from "mongoose";
import {AbstractEntity} from "./abstract.entity";
import {Injectable} from "@nestjs/common";

@Injectable()
export abstract class AbstractRepository {

    protected readonly model: Model<AbstractEntity>

    public find() {
        return this.model.find()
    }

    public abstract create(data: any)

    public read() {

    }

    public update() {

    }

    public delete(id: string) {
        return this.model.deleteOne({_id: id})
    }

}