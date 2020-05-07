import { PartitionKey, Property, SortKey, DateProperty } from "@shiftcoders/dynamo-easy";
import { ModelMapper } from "../mappers/ModelMapper";
import { IModelMapper } from "../interfaces/IModelMapper";

export class SessionPoll {
  @PartitionKey()
  @Property({mapper: ModelMapper})
  hash: IModelMapper

  @SortKey()
  @Property({mapper: ModelMapper})
  sortkey: IModelMapper

  topic?: string

  description?: string

  url?: string

  @DateProperty()
  startDate?: Date
  
  @DateProperty()
  endTime?: Date
  
  result?: string

  comment?: string
}