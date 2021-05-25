package com.launchacademy.reviews.controllers;

import com.launchacademy.reviews.models.Album;
import com.launchacademy.reviews.models.Review;
import com.launchacademy.reviews.services.AlbumService;
import com.launchacademy.reviews.services.ReviewsService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class ApiRestControllerV1 {
  private AlbumService albumService;
  private ReviewsService reviewsService;

  @Autowired
  public ApiRestControllerV1(AlbumService albumService,
      ReviewsService reviewsService) {
    this.albumService = albumService;
    this.reviewsService = reviewsService;
  }

  @GetMapping("/albums")
  public List<Album> getAllAlbums() {
    return albumService.findAllAlbums();
  }

  @GetMapping("/albums/random")
  public Album getRandomAlbum() {
    return albumService.getRandomAlbum();
  }

  @GetMapping("/reviews/{albumId}")
  public List<Review> getAllReviewsForAlbum(@PathVariable Integer albumId) {
    return reviewsService.findAllReviewsForAlbum(albumId);
  }

  @GetMapping("/albums/undiscovered")
  public List<Album> getUnreviewedAlbums() {
    return albumService.findUnreviewedAlbums();
  }

}
