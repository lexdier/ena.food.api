import {Model} from "mongoose";
import {AbstractEntity} from "./abstract.entity";
import {Injectable} from "@nestjs/common";

@Injectable()
export abstract class AbstractRepository {

    protected readonly model: Model<AbstractEntity>

    public find() {
        return this.model.find()
    }

    public abstract create(validator: any)

    public read() {
    }

    public abstract update(id, validator)

    public delete(id: string) {
        return this.model.deleteOne({_id: id})
    }

}