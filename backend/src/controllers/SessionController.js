/* eslint-disable class-methods-use-this */
import jwt from 'jsonwebtoken';
import User from '../models/User';
import AuthConfig from '../config/auth';

class SessionController {
  async authenticate(req, res) {
    const { username, password } = req.body;

    const userExists = await User.findOne({ where: { username } });

    if (!userExists) {
      return res
        .status(401)
        .json({ message: 'User not found!', statusCode: 401 });
    }

    if (!(await userExists.checkPassword(password))) {
      return res.status(401).json({
        message: 'Combination username/password is incorrect!',
        statusCode: 401
      });
    }

    return res.status(200).json({
      id: userExists.id,
      username: userExists.username,
      token: jwt.sign({ id: userExists.id }, AuthConfig.secret, {
        expiresIn: AuthConfig.expiresIn
      })
    });
  }
}

export default new SessionController();
