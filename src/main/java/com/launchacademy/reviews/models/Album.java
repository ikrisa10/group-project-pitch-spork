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
import javax.validation.constraints.NotNull;
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
  @SequenceGenerator(name = "albums_generator", sequenceName = "albums_id_seq", allocationSize = 1)
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "albums_generator")
  @Column(name = "id", nullable = false, unique = true)
  private Integer id;

  @NotBlank(message = "* title field can not be blank")
  @Length(max = 255, message = "* title field can not be longer than 255 characters")
  @Column(name = "title", nullable = false)
  private String title;

  @NotBlank(message = "* artist field can not be blank")
  @Length(max = 255, message = "* title field can not be longer than 255 characters")
  @Column(name = "artist", nullable = false)
  private String artist;

  @NotBlank(message = "* genre title field can not be blank")
  @Length(max = 255, message = "* title field can not be longer than 255 characters")
  @Column(name = "genre", nullable = false)
  private String genre;

  @NotBlank(message = "* email field can not be blank")
  @Length(max = 320, message = "* title field can not be longer than 320 characters")
  @Email(message = "* email should be well formed and have @ part (...@gmail.com, @aol.com)")
  @Column(name = "email", nullable = false)
  private String email;

  @URL(message = "* url should be an accurate format")
  @Length(max = 500, message = "* length field can not be longer than 500 characters")
  @Column(name = "cover_url", nullable = false)
  private String coverUrl;

  @NotNull(message = "* release year should be provided")
  @Range(min = 1881, message = "* we are only interested in new, undiscovered albums from 1881 release years")
  @Column(name = "release_year", nullable = false)
  private Integer releaseYear;

  @NotBlank(message = "* embedded link can not be blank")
  @Column(name = "embed_url", nullable = false)
  private String embedUrl;

  @OneToMany(mappedBy = "album", cascade = CascadeType.ALL)
  @JsonIgnoreProperties("album")
  private List<Review> reviews = new ArrayList<>();
}
