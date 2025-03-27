package com.example.ChatApplication.controller;

import com.example.ChatApplication.model.User;
import com.example.ChatApplication.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

  @Autowired
  private UserService userService;

  @GetMapping("/add")
  public String addUser() {
    User user = new User("Anuraag Nalam", "nalamanuraag@gmail.com");
    userService.addUser(user);
    return "User created!";
  }
}
