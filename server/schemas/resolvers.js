const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    getUser: async (parent, args, { user }) => {
      if (user) {
        return User.findOne({ _id: user._id });
      }
      throw new AuthenticationError("login first!");
    },
  },

  Mutation: {
    signUp: async (parent, { username, email, password, password2 }) => {
      console.log("new user sign up");
      if (password != password2) {
        throw new AuthenticationError("passwords should match!");
        return;
      }

      try {
        const user = await User.create({
          username,
          email,
          password,
        });
        const token = signToken(user);
        return { token, user };
      } catch (err) {
        throw new AuthenticationError(
          "A user exists with the provided Username/Email!"
        );
      }
    },

    login: async (parent, { email, password }) => {
      console.log("user login");

      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
