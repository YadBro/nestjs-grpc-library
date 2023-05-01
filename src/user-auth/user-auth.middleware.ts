import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
const jwt = require('jsonwebtoken');

@Injectable()
export class UserAuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const authorization = req.headers.authorization;

    if (!authorization) {
      res.status(401).send({ error: true, message: 'UnAuthorized' });
    }

    const token = authorization.split(' ')[1];

    if (token) {
      const verify = jwt.verify(token, process.env.JWT_SECRET);
      req.body.userId = verify.id;
      next();
    }
  }
}
