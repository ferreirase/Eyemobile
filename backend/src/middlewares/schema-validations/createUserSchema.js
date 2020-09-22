/* eslint-disable consistent-return */
import * as Yup from 'yup';

export default async (req, res, next) => {
  const schema = Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required()
  });

  if (!(await schema.isValid(req.body))) {
    return res
      .status(400)
      .json({ message: 'Verify the fields submited', statusCode: 400 });
  }

  next();
};
