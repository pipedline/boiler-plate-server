import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateBannerDto {

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsUrl()
  imageUrl: string;

  @IsNotEmpty()
  @IsString()
  orderNo: number;
}
