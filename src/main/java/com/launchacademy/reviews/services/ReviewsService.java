package com.launchacademy.reviews.services;

import com.launchacademy.reviews.repositories.ReviewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReviewsService {
  private ReviewsRepository reviewsRepository;

  @Autowired
  public ReviewsService(ReviewsRepository reviewsRepository) {
    this.reviewsRepository = reviewsRepository;
  }
}
