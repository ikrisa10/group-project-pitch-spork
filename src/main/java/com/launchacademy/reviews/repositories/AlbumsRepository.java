package com.launchacademy.reviews.repositories;

import com.launchacademy.reviews.models.Album;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AlbumsRepository extends CrudRepository<Album, Integer> {

}
