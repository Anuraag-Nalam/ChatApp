package com.example.ChatApplication.model;

import com.example.ChatApplication.model.embedded.Avatar;
import jakarta.persistence.*;
import java.time.LocalDateTime;
import lombok.*;

@Entity
@Table(
  name = "Users",
  uniqueConstraints = { @UniqueConstraint(columnNames = "username") }
)
@Getter
@Setter
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false)
  private String username;

  @Column(nullable = false)
  private String password;

  @Embedded
  private Avatar card;

  @Column(nullable = false)
  private LocalDateTime createdAt;

  public User(String name, String password, Avatar card) {
    username = name;
    this.password = password;
    this.card = card;
    this.createdAt = LocalDateTime.now();
  }
}
