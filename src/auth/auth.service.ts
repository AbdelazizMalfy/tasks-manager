import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './auth.repository';
import { AuthCredentialsDto } from './dto/Auth-credentials.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
        private jwtService: JwtService,
    ){}

    async signUp( authCredentialsDto : AuthCredentialsDto ) : Promise<void> {
        return this.userRepository.signUp(authCredentialsDto);
    }

    async signIn(authCredentialsDto : AuthCredentialsDto) : Promise<{accessToken: string }> {
        const username = await this.userRepository.signIn(authCredentialsDto);
        
        if(!username){
            throw new UnauthorizedException(`Invalid username or password`);
        }

        const payload = { username };
        const accessToken = await this.jwtService.sign(payload);

        return { accessToken };
    }
}
