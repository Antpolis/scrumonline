import { Model, PartitionKeyUUID, PartitionKey, Property, SortKey, DateProperty } from "@shiftcoders/dynamo-easy";
import { MainMetaPartitionKeyMapper } from "../mappers/MainMetaPartitionKeyMapper";
import { IMetaPartitionKey } from "../interfaces/IMetaPartitionKey";

@Model()
export class Session {

  @Property({mapper: MainMetaPartitionKeyMapper})
  @PartitionKey()
  hash: IMetaPartitionKey

  @SortKey()
  password: string

  name: string
  
  isPrivate: boolean
  
  cardSet: CardSetEnum

  @DateProperty()
  startDate: Date

  @DateProperty()
  firstPollDate: Date

  @DateProperty()
  lastPollDate: Date

  @DateProperty()
  endDate: Date

  currentPoll: string
  
}