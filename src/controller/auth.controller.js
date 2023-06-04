import bcrypt from 'bcryptjs';
import { User } from '../model/user.schema.js';
import { BadRequest, InternalServerError } from '../utils/errors.js';
import jwt from '../utils/jwt.js';

const signUp = async (req, res, next) => {
  try {
    const { username, password, email } = req.body;

    const user = await User.findOne({ email: email });
    if (user != null) {
      return next(new BadRequest(400, 'Username or email already been teken !'));
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newuser = new User({ username, password: hashedPassword, email });

    newuser.save();

    const token = jwt.sign({ username, email });

    res.status(201).json({ status: 201, message: 'New user created!', token, data: newuser });
  } catch (error) {
    next(new InternalServerError(500, error.message));
  }
};

export default { signUp };
