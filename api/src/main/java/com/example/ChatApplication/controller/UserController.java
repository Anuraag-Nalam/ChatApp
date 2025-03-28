package com.example.ChatApplication.controller;

import com.example.ChatApplication.model.User;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/users")
public class UserController {

  @Autowired
  private ObjectMapper objectMapper; // For JSON deserialization

  @PostMapping(value = "/new", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
  public String addUser(
    @RequestPart("username") String usernameJson,
    @RequestPart(value = "avatar", required = false) MultipartFile avatarFile
  ) {
    try {
      // Convert JSON string to User object
      User username = objectMapper.readValue(usernameJson, User.class);

      // Print received data
      System.out.println("Username: " + username.getUsername());
      System.out.println("Password: " + username.getPassword()); // If password is part of User
      System.out.println(avatarFile + " avatar file empty printed");
      System.out.println(
        "Avatar file: " +
        (avatarFile != null
            ? avatarFile.getOriginalFilename()
            : "No file uploaded")
      );

      return "User created successfully!";
    } catch (Exception e) {
      return "Error parsing user data: " + e.getMessage();
    }
  }
}
