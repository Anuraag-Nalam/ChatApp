package com.example.ChatApplication.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "Chats")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Chat {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false)
  private String name;

  @Column(nullable = false)
  private Boolean groupChat;

  @ManyToOne
  @JoinColumn(name = "creator_id", referencedColumnName = "id")
  private User creator;

  @ManyToMany
  @JoinTable(
    name = "chat_members",
    joinColumns = @JoinColumn(name = "chat_id"),
    inverseJoinColumns = @JoinColumn(name = "user_id")
  )
  private List<User> members;

  //   @OneToMany(mappedBy = "chat")
  //   private List<Message> messages;

  @Column(nullable = false)
  private LocalDateTime createdAt;

  public Chat(
    String name,
    Boolean groupChat,
    User creator,
    List<User> members
  ) {
    this.name = name;
    this.groupChat = groupChat;
    this.creator = creator;
    this.members = members;
    this.createdAt = LocalDateTime.now();
  }
}
