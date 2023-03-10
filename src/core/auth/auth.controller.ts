import {
  Controller,
  Get,
  Post,
  Body,
  Res,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LocalAuthGuard } from './local-auth.guard';
@ApiTags('auth')
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @UseGuards(AuthGuard('local'))
  @Post('login')
  login(
    @Body() createAuthDto: CreateAuthDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    return res.send({ data: this.authService.login(req?.user) });
  }

  @Get('current-user')
  currentUser(@Res() res: Response) {
    try {
      res.send({ message: 'success', status: true });
    } catch (e) {
      res.send({ message: 'internal server error', status: false });
    }
  }
}
