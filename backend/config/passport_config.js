const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const authService = require('../services/auth_service');

passport.use(new LocalStrategy(
  { usernameField: 'email' }, 
  async (email, password, done) => {
    try {
      const user = await authService.login({ email, password });
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await authService.findUserById(id); 
    done(null, user);
  } catch (error) {
    done(error);
  }
});