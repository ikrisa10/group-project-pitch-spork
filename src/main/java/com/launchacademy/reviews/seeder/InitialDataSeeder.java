package com.launchacademy.reviews.seeder;

import com.launchacademy.reviews.repositories.AlbumsRepository;
import com.launchacademy.reviews.repositories.ReviewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class InitialDataSeeder implements CommandLineRunner {
  private AlbumsRepository albumsRepository;
  private ReviewsRepository reviewsRepository;

  @Autowired
  public InitialDataSeeder(AlbumsRepository albumsRepository,
      ReviewsRepository reviewsRepository) {
    this.albumsRepository = albumsRepository;
    this.reviewsRepository = reviewsRepository;
  }

  @Override
  public void run(String... args) throws Exception {

  }
}
