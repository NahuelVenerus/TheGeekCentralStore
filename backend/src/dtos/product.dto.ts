import { 
    IsString, IsNumber, IsInt, Min, Max, 
    IsNotEmpty, IsUrl, IsDefined 
} from 'class-validator';

export class ProductDTO {    
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsDefined()
    @Min(0)
    price: number;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNumber()
    @IsDefined()
    @Min(0)
    @Max(5)
    rating: number;

    @IsString()
    @IsNotEmpty()
    @IsUrl()
    image: string;

    @IsInt()
    @IsDefined()
    @Min(0)
    total_sales: number;

    @IsInt()
    @IsDefined()
    @Min(0)
    stock: number;
}
