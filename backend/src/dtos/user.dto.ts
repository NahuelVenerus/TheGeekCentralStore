import { 
    IsString, IsInt, IsEmail, IsBoolean, 
    IsNotEmpty, IsDefined, MinLength 
} from 'class-validator';

export class UserDTO {    
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    lastname: string;

    @IsString()
    @IsNotEmpty()
    address: string;

    @IsInt()
    @IsDefined()
    zip_code: number;

    @IsString()
    @IsNotEmpty()
    city: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string; 

    @IsBoolean()
    @IsDefined()
    is_admin: boolean;
}
