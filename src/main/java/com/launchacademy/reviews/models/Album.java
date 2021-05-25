package com.launchacademy.reviews.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.Range;
import org.hibernate.validator.constraints.URL;

@Entity
@Table(name = "albums")
@NoArgsConstructor
@Getter
@Setter
public class Album {
  @Id
  @SequenceGenerator(name="albums_generator", sequenceName = "albums_id_seq", allocationSize = 1)
  @GeneratedValue(strategy= GenerationType.SEQUENCE, generator = "albums_generator")
  @Column(name="id", nullable = false, unique = true)
  private Integer id;

  @NotBlank
  @Length(max=255)
  @Column(name="title", nullable = false)
  private String title;

  @NotBlank
  @Length(max=255)
  @Column(name="artist", nullable = false)
  private String artist;

  @NotBlank
  @Length(max=255)
  @Column(name="genre", nullable = false)
  private String genre;

  @NotBlank
  @Length(max=320)
  @Email
  @Column(name="email", nullable = false)
  private String email;

  @URL
  @Length(max=500)
  @Column(name="cover_url", nullable = false)
  private String coverUrl;

  @NotBlank
  @Positive
  @Range(min = 1980)
  @Column(name="release_year", nullable = false)
  private Integer releaseYear;

  @URL
  @Column(name="embed_url", nullable = false)
  private String embedUrl;

  @OneToMany( mappedBy = "album", cascade = CascadeType.ALL)
  @JsonIgnoreProperties("album")
  private List<Review> reviews = new ArrayList<>() ;
}
