package com.example.ChatApplication.service;

import com.example.ChatApplication.dto.LoginRequest;
import com.example.ChatApplication.dto.RegisterRequest;
import com.example.ChatApplication.model.User;
import com.example.ChatApplication.repository.UserRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService {

  @Autowired
  private UserRepository userRepository;

  @Autowired
  private PasswordEncoder passwordEncoder;

  @Transactional
  public User registerUser(RegisterRequest registerRequest) {
    Optional<User> existingUser = userRepository.findByUsername(
      registerRequest.getUsername()
    );
    if (existingUser.isPresent()) {
      throw new RuntimeException(
        "Username already exists: " + registerRequest.getUsername()
      );
    }
    User newUser = new User();
    newUser.setUsername(registerRequest.getUsername());
    newUser.setPassword(passwordEncoder.encode(registerRequest.getPassword()));
    System.out.println(registerRequest.getCard().toString());
    newUser.setCard(registerRequest.getCard());
    return userRepository.save(newUser);
  }

  public User loginUser(LoginRequest loginRequest) throws Exception {
    User user = userRepository
      .findByUsername(loginRequest.getUsername())
      .orElseThrow(() ->
        new RuntimeException("No user found with provided credentials")
      );
    if (
      !passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())
    ) {
      throw new BadCredentialsException("Invalid password");
    }
    return user;
  }
}
