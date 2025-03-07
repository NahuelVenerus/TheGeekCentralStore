export interface User {
    username: string;
    name: string;
    lastname: string;
    address: string;
    zip_code: number;
    city: string;
    email: string;
    password: string; 
    is_admin: boolean;
    validate?(): void;
    get?(): void;
    set?(): void;
    $add?(): void;
  }
  