import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { CreateUserResponse } from './protoInterface/userPackage/CreateUserResponse';
const jwt = require('jsonwebtoken');

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(user: CreateUserDto): Promise<CreateUserResponse> {
    const checkUser = await this.prisma.user.findUnique({
      where: {
        username: user.username,
      },
    });

    if (checkUser) {
      const token = jwt.sign({ id: checkUser.id }, process.env.JWT_SECRET);
      return { id: checkUser.id, token };
    }

    const newUser = await this.prisma.user.create({
      data: user,
    });

    const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET);
    // const token = jwt.sign({ id: 1 }, process.env.JWT_SECRET);
    // console.log(token);

    return { id: newUser.id, token };
    // return { id: 1, token: 'abc' };
  }
}
