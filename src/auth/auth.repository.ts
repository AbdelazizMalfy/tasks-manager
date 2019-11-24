import { Repository, EntityRepository } from "typeorm";
import { ConflictException, BadRequestException, InternalServerErrorException } from "@nestjs/common";

import * as bcrypt from 'bcrypt';

import { User } from "./auth.entity";
import { AuthCredentialsDto } from "./dto/Auth-credentials.dto";

@EntityRepository(User)
export class UserRepository extends Repository<User>{

    async signUp( authCredentialsDto : AuthCredentialsDto ) : Promise<void> {
        const { username , password } = authCredentialsDto;

        const salt = await bcrypt.genSalt();
        const user = new User();
        user.username = username;
        user.password = await this.hashPassword(password,salt);
        user.salt = salt;

        try{
            await user.save()
        }catch (error) {
            if(error.code ='23505'){
                throw new ConflictException('Username already exists')
            }else {
                throw new InternalServerErrorException();
            }
        }
    }

    private async hashPassword(password,salt): Promise<string>{
        return bcrypt.hash(password,salt)
    }
}