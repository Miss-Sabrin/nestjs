import { MinLength } from "class-validator";

export class CreateNinjaDto {
    @MinLength(3)
    name: string;

   // @IsEnum(['stars','stars SAB'],{message:"use corect weapon"})
    weapon: 'stars' |'stars SAB'
}
