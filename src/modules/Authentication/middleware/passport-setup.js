const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { AppDataSource } = require('../../../index'); // Adjust the path as needed
const User = require('../entities/user.entity'); // Adjust the path as needed


// Google OAuth Strategy
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/api/google/callback",
}, async (accessToken, refreshToken, profile, done) => {
  try {
    const userRepository = AppDataSource.getRepository(User);

    // Check if user already exists
    let user = await userRepository.findOne({ where: { googleId: profile.id } });
    if (!user) {
      // Create a new user if it doesn't exist
      user = userRepository.create({
        googleId: profile.id,
        email: profile.emails[0].value,
        username: profile.displayName,
        isActivated: true,
      });
      await userRepository.save(user);
    }
    done(null, user);
  } catch (err) {
    done(err, false);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOne({ where: { id } });
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

module.exports = passport;
