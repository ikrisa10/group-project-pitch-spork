package com.launchacademy.reviews.controllers;

import com.launchacademy.reviews.services.AlbumService;
import com.launchacademy.reviews.services.ReviewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/albums")
public class ApiRestControllerV1 {
  private AlbumService albumService;
  private ReviewsService reviewsService;

  @Autowired
  public ApiRestControllerV1(AlbumService albumService,
      ReviewsService reviewsService) {
    this.albumService = albumService;
    this.reviewsService = reviewsService;
  }
}
