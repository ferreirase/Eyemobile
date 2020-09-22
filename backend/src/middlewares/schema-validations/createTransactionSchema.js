/* eslint-disable consistent-return */
import * as Yup from 'yup';

export default async (req, res, next) => {
  const schema = Yup.object().shape({
    usn: Yup.string().required(),
    value: Yup.number().required(),
    flag: Yup.string().required(),
    mode: Yup.string().required(),
    date: Yup.date().required()
  });

  if (!(await schema.isValid(req.body))) {
    return res
      .status(400)
      .json({ message: 'Verify the fields submitted', statusCode: 400 });
  }

  next();
};
