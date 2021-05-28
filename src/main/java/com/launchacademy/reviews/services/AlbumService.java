package com.launchacademy.reviews.services;

import com.launchacademy.reviews.models.Album;
import com.launchacademy.reviews.repositories.AlbumsRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@Service
public class AlbumService {

    private AlbumsRepository albumsRepository;

    @Autowired
    public AlbumService(AlbumsRepository albumsRepository) {
        this.albumsRepository = albumsRepository;
    }

    public List<Album> findUnreviewedAlbums() {
        List<Album> unreviewedList = new ArrayList<>();
        List<Album> allAlbums = this.findAllAlbums();
        for (Album album : allAlbums) {
            if (album.getReviews().size() == 0) {
                unreviewedList.add(album);
            }
        }
        return unreviewedList;
    }

    public Album saveAlbum(Album album) {
        return this.albumsRepository.save(album);
    }

    @NoArgsConstructor
    private class UrlNotFoundException extends RuntimeException {
    }

    @ControllerAdvice
    private class UrlNotFoundAdvice {

        @ResponseBody
        @ExceptionHandler(UrlNotFoundException.class)
        @ResponseStatus(HttpStatus.NOT_FOUND)
        String urlNotFoundHandler(UrlNotFoundException ex) {
            return ex.getMessage();
        }
    }

    public List<Album> findAllAlbums() {
        return (List<Album>) albumsRepository.findAll();
    }

    public Album getRandomAlbum() {
        List<Album> randomList = this.findAllAlbums();
        Random rand = new Random();
        int random = rand.nextInt(randomList.size());
        return randomList.get(random);
    }

    public Album findById(Integer albumId) {
        return albumsRepository.findById(albumId).orElseThrow(() -> new UrlNotFoundException());
    }

}
