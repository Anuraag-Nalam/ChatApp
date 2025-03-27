package com.example.ChatApplication.controller;

import com.example.ChatApplication.model.User;
import com.example.ChatApplication.model.embedded.Avatar;
import com.example.ChatApplication.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

  @Autowired
  private UserService userService;

  @PostMapping("/new")
  public String addUser() {
    Avatar avatar = new Avatar("publicId123", "publicId123URL");
    User createUser = new User("Anuraag2", "password", avatar);
    userService.createUser(createUser);
    return "User created new method!";
  }
}
