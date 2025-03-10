import { 
    IsNumber, IsNotEmpty, IsDefined 
} from 'class-validator';

export class ProductCategoryDTO {
    @IsNumber()
    @IsDefined()
    @IsNotEmpty()
    productId: number;

    @IsNumber()
    @IsDefined()
    @IsNotEmpty()
    categoryId: number;
}
