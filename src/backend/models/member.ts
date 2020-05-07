import { Model, PartitionKey, DynamoStore } from '@shiftcoders/dynamo-easy'

@Model()
export class Member {
  @PartitionKey()
  id: string
  name: string
  email: string
  session: string
}