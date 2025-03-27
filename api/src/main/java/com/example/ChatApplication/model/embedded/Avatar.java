package com.example.ChatApplication.model.embedded;

import jakarta.persistence.*;
import lombok.*;

@Embeddable
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Avatar {

  @Column(nullable = false)
  private String publicId;

  @Column(nullable = false)
  private String url;
}
