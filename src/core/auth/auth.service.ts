import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);

    if (user) {
      const isMatch = await bcrypt.compare(pass, user.password);
      if (!isMatch) {
        throw new UnauthorizedException('Invalid email or password');
      }
      const { password, ...result } = user.toJSON();
      return result;
    }
    return null;
  }
  async login(user: any) {
    const payload = { _id: user?._id, email: user?.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
