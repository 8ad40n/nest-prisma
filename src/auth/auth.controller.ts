import { Body, Controller, Post } from '@nestjs/common';
// import type { Request } from 'express';
import { AuthService } from './auth.service';
import type { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    // @Post('signup')
    // signUp(@Req() req: Request) {
    //     console.log(req.body);
    //     return this.authService.signup();
    // }

    @Post('signup')
    signUp(@Body() dto:AuthDto) {
        console.log(dto)
        return this.authService.signup();
    }
    @Post('signIn')
    signIn(){
        return "I am signing in";
    }
}
