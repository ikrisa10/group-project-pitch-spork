package com.launchacademy.reviews.services;

import com.launchacademy.reviews.models.Album;
import com.launchacademy.reviews.models.Review;
import com.launchacademy.reviews.repositories.ReviewsRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReviewsService {
  private ReviewsRepository reviewsRepository;
  private AlbumService albumService;

  @Autowired
  public ReviewsService(ReviewsRepository reviewsRepository, AlbumService albumService) {
    this.reviewsRepository = reviewsRepository;
    this.albumService = albumService;
  }

	public List<Review> findAllReviewsForAlbum(Integer albumId) {
		Album targetAlbum = albumService.findById(albumId);
		return targetAlbum.getReviews();
	}

  public Review saveReview(Review review, Integer albumId) {
    Album reviewedAlbum = this.albumService.findById(albumId);
    review.setAlbum(reviewedAlbum);
    return this.reviewsRepository.save(review);
  }
}
