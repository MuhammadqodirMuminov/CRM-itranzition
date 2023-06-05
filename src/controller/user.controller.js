import { User } from '../model/user.schema.js';
import { InternalServerError } from '../utils/errors.js';

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    res.status(200).json({ status: 200, message: 'all users !', data: users });
  } catch (error) {
    next(new InternalServerError(500, error.message));
  }
};

export default { getUsers };
