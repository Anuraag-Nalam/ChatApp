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
@AllArgsConstructor
@NoArgsConstructor
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

  @Column(nullable = false, updatable = false)
  private LocalDateTime createdAt;

  @Override
  public String toString() {
    return (
      "User{username='" +
      username +
      "', password='" +
      password +
      "', avatar=" +
      card +
      "}"
    );
  }

  @PrePersist
  protected void onCreate() {
    this.createdAt = LocalDateTime.now();
  }
}
