/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import User from '../models/User';

class UserController {
  async createUser(req, res) {
    const usuario = await User.findOne({
      where: {
        username: req.body.username
      }
    });

    if (usuario) {
      return res.status(401).json({ error: 'User exists.', statusCode: 401 });
    }

    // eslint-disable-next-line object-curly-newline
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password
    });

    return res.status(201).json({ id: newUser.id, username: newUser.username });
  }

  /*
  async update(req, res) {
    const { cpf, phone, bthd } = req.body;

    return res.json({
      cpf,
      phone,
      bthd
    });
  } */

  async show(req, res) {
    const users = await User.findAll({
      attributes: ['username']
    });

    if (!users) {
      return res
        .status(200)
        .json({ message: 'No users registered', statusCode: 200 });
    }

    return res.json(users);
  }
}

export default new UserController();
