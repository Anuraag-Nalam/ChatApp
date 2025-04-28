package com.example.ChatApplication.repository;

import com.example.ChatApplication.model.User;
import java.util.Optional; // Import Optional
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
  Optional<User> findByUsername(String username);
}
