package com.example.ChatApplication.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Request {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Enumerated(EnumType.STRING)
  @Column(nullable = false, columnDefinition = "VARCHAR(255) DEFAULT 'PENDING'")
  private RequestStatus status = RequestStatus.PENDING;

  @Column(nullable = false)
  private LocalDateTime createdAt;

  public enum RequestStatus {
    PENDING,
    ACCEPTED,
    REJECTED,
  }

  @ManyToOne
  @JoinColumn(name = "sender_id", referencedColumnName = "id", nullable = false)
  private User sender;

  @ManyToOne
  @JoinColumn(
    name = "receiver_id",
    //optional I guess
    referencedColumnName = "id",
    nullable = false
  )
  private User receiver;
}
