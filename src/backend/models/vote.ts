import { IMetaPartitionKey } from "../interfaces/IMetaPartitionKey"
import { PartitionKeyUUID, PartitionKey, Property, Model, SortKey, DateProperty } from "@shiftcoders/dynamo-easy"
import { MainMetaPartitionKeyMapper } from "../mappers/MainMetaPartitionKeyMapper"
import { ModelMapper } from "../mappers/ModelMapper"
import { IModelMapper } from "../interfaces/IModelMapper"

export class Vote {

  @Property({mapper: ModelMapper})
  @PartitionKey()
  poll: IModelMapper

  @Property({mapper: ModelMapper})
  @SortKey()
  member: IModelMapper

  value: string

  highlighted: boolean

  @DateProperty()
  addedDate: Date
}