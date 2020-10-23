type locationType = {
    latitude: number;
    longtitude: number;
}

type avatarType = {
    "@type": string;
    url: string;
    createAt: string;
}

export class CreateUserDto {
    readonly full_name: string;
    readonly email: number;
    phone_number: string;
    last_name: string;
    first_name: string;
    location: locationType;
    avatar: avatarType;
    createAt: string;
}