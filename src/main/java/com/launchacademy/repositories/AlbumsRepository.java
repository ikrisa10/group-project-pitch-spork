package com.launchacademy.repositories;

import com.launchacademy.reviews.models.Album;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AlbumsRepository extends CrudRepository<Album, Integer> {

}
