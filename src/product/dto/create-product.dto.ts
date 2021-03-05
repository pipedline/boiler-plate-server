import { IsNotEmpty, IsNumber, IsString, IsUrl } from 'class-validator';

export class CreateProductDto {

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsNumber()
  discountRate: number;

  @IsNotEmpty()
  @IsNumber()
  discountPrice: number;

  @IsNotEmpty()
  @IsUrl()
  thumbnailUrl: number;
}
