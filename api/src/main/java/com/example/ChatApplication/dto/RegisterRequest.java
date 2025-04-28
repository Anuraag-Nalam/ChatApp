package com.example.ChatApplication.dto;

import com.example.ChatApplication.model.embedded.Avatar;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {

  private String username;
  private String password;
  private String name;
  private Avatar card;

  @Override
  public String toString() {
    return (
      "RegisterRequest{" +
      "username='" +
      username +
      '\'' +
      ", password='" +
      password +
      '\'' +
      ", name='" +
      name +
      '\'' +
      ", card=" +
      card +
      '}'
    );
  }
}
