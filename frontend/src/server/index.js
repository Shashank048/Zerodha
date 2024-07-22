const express = require('express');
const app = express();

app.use(express.json()); // parse JSON requests

// Set up routes
app.post('/signup', (req, res) => {
    const { email, password } = req.body;

    try {
      // Check if user already exists
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }
  
      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      // Save the user
      user = new User({ email, password: hashedPassword });
      await user.save();
  
      // Create JWT token
      const payload = { user: { id: user.id } };
      const token = jwt.sign(payload, 'secret', { expiresIn: '1h' });
  
      // Set cookie
      res.cookie('token', token, { httpOnly: true });
  
      res.status(201).json({ msg: 'User registered successfully' });
      res.redirect('https://zerodha-dvu4.vercel.app/'); 
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  res.send('Signup successful!');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});