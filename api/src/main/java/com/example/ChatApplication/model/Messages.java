package com.example.ChatApplication.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.*;
import lombok.*;

@Entity
@Table(name = "messages")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Messages {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ManyToOne
  @JoinColumn(name = "sender_id", referencedColumnName = "id", nullable = false)
  private User sender;

  @ManyToOne
  @JoinColumn(name = "chat_id", referencedColumnName = "id", nullable = false)
  private Chat chat;

  @ManyToOne
  @JoinColumn(
    name = "receiver_id",
    //optional I guess
    referencedColumnName = "id",
    nullable = false
  )
  private User receiver;

  @Column
  private String content;

  @ElementCollection
  @CollectionTable(
    name = "message_attachments",
    joinColumns = @JoinColumn(name = "message_id")
  )
  @Column(name = "attachment")
  private List<Attachment> attachments;

  @Enumerated(EnumType.STRING)
  @Column(nullable = false, columnDefinition = "VARCHAR(255) DEFAULT 'PENDING'")
  private RequestStatus requestStatus = RequestStatus.PENDING;

  @Column(nullable = false)
  private LocalDateTime createdAt;

  public enum RequestStatus {
    PENDING,
    ACCEPTED,
    REJECTED,
  }

  @PrePersist
  public void prePersist() {
    LocalDateTime now = LocalDateTime.now();
    this.createdAt = now;
  }

  @Embeddable
  @Getter
  @Setter
  public static class Attachment {

    private String publicId;
    private String url;

    public Attachment(String publicId, String url) {
      this.publicId = publicId;
      this.url = url;
    }
  }
}
