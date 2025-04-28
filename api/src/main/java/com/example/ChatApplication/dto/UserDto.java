package com.example.ChatApplication.dto;

import com.example.ChatApplication.model.embedded.Avatar;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {

  private Long id;
  private String username;
  // Add name if you added it to User.java
  // private String name;
  private LocalDateTime createdAt;
  private Avatar card;
}
