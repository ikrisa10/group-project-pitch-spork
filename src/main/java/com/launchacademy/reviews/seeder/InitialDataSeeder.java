package com.launchacademy.reviews.seeder;

import com.launchacademy.reviews.models.Album;
import com.launchacademy.reviews.models.Review;
import com.launchacademy.reviews.repositories.AlbumsRepository;
import com.launchacademy.reviews.repositories.ReviewsRepository;

import java.util.List;

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

        Album albumOne = new Album();
        albumOne.setTitle("Kotlovan II, Pt.2");
        albumOne.setArtist("Kotlovan");
        albumOne.setGenre("Alternative, Post-Rock");
        albumOne.setEmail("ilyakrisa@gmail.com");
        albumOne.setCoverUrl("https://pitch-spork.s3.us-east-2.amazonaws.com/kotlovan.png");
        albumOne.setReleaseYear(2020);
        albumOne.setEmbedUrl("<iframe src=\"https://open.spotify.com/embed/album/31U7UUNSvrTZnj5LQaQPD8\" width=\"300\" height=\"380\" frameborder=\"0\" allowtransparency=\"true\" allow=\"encrypted-media\"></iframe>");

        Album albumTwo = new Album();
        albumTwo.setTitle("Invisible");
        albumTwo.setArtist("Glorybots");
        albumTwo.setGenre("Alternative");
        albumTwo.setEmail("ethandrone@gmail.com");
        albumTwo.setCoverUrl("https://pitch-spork.s3.us-east-2.amazonaws.com/invisible.png");
        albumTwo.setReleaseYear(2020);
        albumTwo.setEmbedUrl("<iframe src=\"https://open.spotify.com/embed/album/4VvpujEyT5vfDYmpLCyF3U\" width=\"300\" height=\"380\" frameborder=\"0\" allowtransparency=\"true\" allow=\"encrypted-media\"></iframe>");

        Album albumThree = new Album();
        albumThree.setTitle("3TEETH");
        albumThree.setArtist("3teeth");
        albumThree.setGenre("Industrial Metal");
        albumThree.setEmail("3theethobviouslydoesntexist@gmail.com");
        albumThree.setCoverUrl("https://pitch-spork.s3.us-east-2.amazonaws.com/3teeth.jpg");
        albumThree.setReleaseYear(2014);
        albumThree.setEmbedUrl("<iframe src=\"https://open.spotify.com/embed/album/5MJ7hN4QbRhhFcjuF7wpmL\" width=\"300\" height=\"380\" frameborder=\"0\" allowtransparency=\"true\" allow=\"encrypted-media\"></iframe>");

        Album albumFour = new Album();
        albumFour.setTitle("On The Run");
        albumFour.setArtist("Bigod 20");
        albumFour.setGenre("Industrial Ebm");
        albumFour.setEmail("bigod20ohobviouslydoesntexist@gmail.com");
        albumFour.setCoverUrl("https://pitch-spork.s3.us-east-2.amazonaws.com/on+the+run.PNG");
        albumFour.setReleaseYear(1992);
        albumFour.setEmbedUrl("<iframe src=\"https://open.spotify.com/embed/album/61IWDOL2Uv5uttuB9r6t3J\" width=\"300\" height=\"380\" frameborder=\"0\" allowtransparency=\"true\" allow=\"encrypted-media\"></iframe>");

        Album albumFive = new Album();
        albumFive.setTitle("Superdynamitefunkysoul");
        albumFive.setArtist("F2D");
        albumFive.setGenre("Funk");
        albumFive.setEmail("f2dohobviouslydoesntexist@gmail.com");
        albumFive.setCoverUrl("https://is3-ssl.mzstatic.com/image/thumb/Music69/v4/f6/aa/67/f6aa673b-2872-6431-4e58-264686622f21/766433216387.jpg/600x600bf.png");
        albumFive.setReleaseYear(2015);
        albumFive.setEmbedUrl("<iframe src=\"https://open.spotify.com/embed/album/5mKAfuLtz4uhQ3iYHYqvIA\" width=\"300\" height=\"380\" frameborder=\"0\" allowtransparency=\"true\" allow=\"encrypted-media\"></iframe>");

        Album albumSix = new Album();
        albumSix.setTitle("The Only Way Out");
        albumSix.setArtist("Mereba");
        albumSix.setGenre("R&B");
        albumSix.setEmail("merebaohobviouslydoesntexist@gmail.com");
        albumSix.setCoverUrl("https://images.genius.com/e1d96da1cc682b39363ee68c05fc4452.1000x1000x1.jpg");
        albumSix.setReleaseYear(2019);
        albumSix.setEmbedUrl("<iframe src=\"https://open.spotify.com/embed/album/40L9yPrh6yD1ECI3ofNfPc\" width=\"300\" height=\"380\" frameborder=\"0\" allowtransparency=\"true\" allow=\"encrypted-media\"></iframe>");

        Album albumSeven = new Album();
        albumSeven.setTitle("Failure");
        albumSeven.setArtist("The Posies");
        albumSeven.setGenre("Alternative");
        albumSeven.setEmail("poisesobviouslydoesntexist@gmail.com");
        albumSeven.setCoverUrl("https://upload.wikimedia.org/wikipedia/en/1/15/FailurePosiesAlbum.jpg");
        albumSeven.setReleaseYear(1988);
        albumSeven.setEmbedUrl("<iframe src=\"https://open.spotify.com/embed/album/3zNxQ174useHitgEbhTalk\" width=\"300\" height=\"380\" frameborder=\"0\" allowtransparency=\"true\" allow=\"encrypted-media\"></iframe>");


        Album albumThreeSaved = new Album();
        Album albumFiveSaved = new Album();
        Album albumSevenSaved = new Album();

        if (((List<Album>) albumsRepository.findAll()).size() == 0) {
            albumsRepository.save(albumOne);
            albumsRepository.save(albumTwo);
            albumThreeSaved = albumsRepository.save(albumThree);
            albumsRepository.save(albumFour);
            albumFiveSaved = albumsRepository.save(albumFive);
            albumsRepository.save(albumSix);
            albumSevenSaved = albumsRepository.save(albumSeven);
        }

        Review reviewForAlbumThree = new Review();
        reviewForAlbumThree.setRating(4);
        reviewForAlbumThree.setName("pretzelbandit28");
        reviewForAlbumThree.setEmail("pretzelbandit28@yahoo.com");
        reviewForAlbumThree.setReviewBody("This self titled debut album features powerful instrumentals best described as a cross over of NIN and Rammstein, an approachable futuristic industrial album even for traditional metal fans. This album features great samples, distorted sound, and a heart thumping back beat. The discordant riffs and powerful drums harmonize with abrasive vocals to create an ominous but atmospheric anthems. Stunning composition and flow from song to song, no moment was wasted and the orchestration of sequence was effective in transitioning between stories.");
        reviewForAlbumThree.setAlbum(albumThreeSaved);

        Review reviewForAlbumFive = new Review();
        reviewForAlbumFive.setRating(5);
        reviewForAlbumFive.setName("GotSticks");
        reviewForAlbumFive.setEmail("gotsticks@gmail.com");
        reviewForAlbumFive.setReviewBody("Veterans of the Seattle music scene, F2D (also known as Funky to Death) have created a masterful funk album that blends elements of Funk, Rock, Soul, R&B, and Blues.");
        reviewForAlbumFive.setAlbum(albumFiveSaved);

        Review reviewForAlbumSeven = new Review();
        reviewForAlbumSeven.setRating(5);
        reviewForAlbumSeven.setName("musicLvr_42");
        reviewForAlbumSeven.setEmail("musicLvr42@hotmail.com");
        reviewForAlbumSeven.setReviewBody("Reasonably good debut album. I'm looking forward to the next release.");
        reviewForAlbumSeven.setAlbum(albumSevenSaved);

        if (((List<Review>) reviewsRepository.findAll()).size() == 0) {
            reviewsRepository.save(reviewForAlbumThree);
            reviewsRepository.save(reviewForAlbumFive);
            reviewsRepository.save(reviewForAlbumSeven);
        }
    }
}
