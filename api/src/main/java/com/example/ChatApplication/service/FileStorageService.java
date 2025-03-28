package com.example.ChatApplication.service;

import java.io.IOException;
import java.nio.file.*;
import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class FileStorageService {

  private static final String UPLOAD_DIR = "uploads/";

  public List<String> saveFiles(MultipartFile[] files) throws IOException {
    List<String> fileUrls = new ArrayList<>();

    Path uploadPath = Paths.get(UPLOAD_DIR);
    if (!Files.exists(uploadPath)) {
      Files.createDirectories(uploadPath);
    }

    for (MultipartFile file : files) {
      if (!file.isEmpty()) {
        String fileName =
          System.currentTimeMillis() + "_" + file.getOriginalFilename();
        Path filePath = uploadPath.resolve(fileName);
        Files.copy(
          file.getInputStream(),
          filePath,
          StandardCopyOption.REPLACE_EXISTING
        );
        fileUrls.add("/uploads/" + fileName); // Return the stored URL
      }
    }

    return fileUrls;
  }
}
