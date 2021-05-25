package com.launchacademy.reviews.services;

import com.launchacademy.reviews.repositories.AlbumsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AlbumService {
  private AlbumsRepository albumsRepository;

  @Autowired
  public AlbumService(AlbumsRepository albumsRepository) {
    this.albumsRepository = albumsRepository;
  }
}
