import { MapperForType, StringAttribute } from "@shiftcoders/dynamo-easy"
import { IMetaPartitionKey } from "../interfaces/IMetaPartitionKey"
import { IModelMapper } from "../interfaces/IModelMapper"

export const ModelMapper: MapperForType<IModelMapper, StringAttribute> = {  
  fromDb: (attributeValue: StringAttribute) => {
    const returnValue = attributeValue.S.split('#')
    return {
      type: returnValue[0],
      value: returnValue[1]
    }
  },
  toDb: (propertyValue: IModelMapper) => {
    return { S: propertyValue.type+'#'+propertyValue.value }
  }
}
  