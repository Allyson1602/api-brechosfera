import { registerEnumType } from '@nestjs/graphql';

export enum baazarItemType {
  MENSWEAR = 'MENSWEAR',
  WOMENSWEAR = 'WOMENSWEAR',
  CHILDRENSWEAR = 'CHILDRENSWEAR',
  SHOES = 'SHOES',
  JEWELRY = 'JEWELRY',
  COSTUME_JEWELRY = 'COSTUME_JEWELRY',
  TOYS = 'TOYS',
  BAGS = 'BAGS',
  ACCESSORIES = 'ACCESSORIES',
  FURNITURE = 'FURNITURE',
  PERSONAL_CARE = 'PERSONAL_CARE',
  MEDIA = 'MEDIA',
  BOOKS = 'BOOKS',
  ELECTRONICS = 'ELECTRONICS',
  TOOLS_AND_EQUIPMENT = 'TOOLS_AND_EQUIPMENT',
  KITCHENWARE = 'KITCHENWARE',
  HOME_DECOR = 'HOME_DECOR',
  KNICK_KNACKS = 'KNICK_KNACKS',
}

registerEnumType(baazarItemType, {
  name: 'BaazarItemType',
  description: 'Tipos de itens disponíveis em um bazar',
});
