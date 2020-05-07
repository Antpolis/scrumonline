import { MapperForType, StringAttribute } from "@shiftcoders/dynamo-easy"
import { IMetaPartitionKey } from "../interfaces/IMetaPartitionKey"

export const MainMetaPartitionKeyMapper: MapperForType<IMetaPartitionKey, StringAttribute> = {  
  fromDb: (attributeValue: StringAttribute) => {
    const returnValue = attributeValue.S.split('#')
    return {
      type: returnValue[0],
      id: returnValue[1]
    }
  },
  toDb: (propertyValue: IMetaPartitionKey) => {
    return { S: propertyValue.type+'#'+propertyValue.id }
  }
}
  