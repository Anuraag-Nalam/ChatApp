package com.example.ChatApplication.controller;

import com.example.ChatApplication.dto.LoginRequest;
import com.example.ChatApplication.dto.LoginResponse;
import com.example.ChatApplication.dto.RegisterRequest;
import com.example.ChatApplication.dto.RegistrationResponse;
import com.example.ChatApplication.dto.UserDto;
import com.example.ChatApplication.model.User;
import com.example.ChatApplication.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class UserController {

  @Autowired
  private UserService userService;

  @PostMapping("/register")
  public ResponseEntity<?> registerUser(
    @RequestBody RegisterRequest registerRequest
  ) {
    try {
      System.out.println(registerRequest);
      User newUser = userService.registerUser(registerRequest);
      UserDto userDto = new UserDto();
      userDto.setId(newUser.getId());
      userDto.setUsername(newUser.getUsername());
      userDto.setCreatedAt(newUser.getCreatedAt());

      userDto.setCard(newUser.getCard());
      RegistrationResponse responseBody = new RegistrationResponse(
        "User registered successfully!",
        userDto
      );
      return ResponseEntity.status(HttpStatus.CREATED).body(responseBody);
    } catch (RuntimeException e) {
      return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(
        "Registration failed due to an internal error."
      );
    }
  }

  @PostMapping("/login")
  public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) {
    try {
      User authenticatedUser = userService.loginUser(loginRequest);
      LoginResponse loginResponse = new LoginResponse();
      loginResponse.setUserId(authenticatedUser.getId());
      loginResponse.setUsername(authenticatedUser.getUsername());
      return ResponseEntity.ok(loginResponse);
    } catch (BadCredentialsException e) {
      return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(
        "Invalid username or password"
      );
    } catch (RuntimeException e) {
      System.err.println("Login failed (RuntimeException): " + e.getMessage());
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
    } catch (Exception e) {
      System.err.println("Login Exception: " + e.getMessage());
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(
        "An unexpected error occurred during login."
      );
    }
  }
}
