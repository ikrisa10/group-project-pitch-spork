package com.launchacademy.reviews.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.Range;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

@Entity
@Getter
@Setter
@Table(name = "reviews")
@NoArgsConstructor
public class Review {
  @Id
  @SequenceGenerator(name="reviews_generator", sequenceName = "reviews_id_seq", allocationSize = 1)
  @GeneratedValue(strategy= GenerationType.SEQUENCE, generator = "reviews_generator")
  @Column(name="id", nullable = false, unique = true)
  private long id;

  @NotBlank
  @Positive
  @Range(min=1, max = 5, message= "Rating number should be between 1 and 5")
  @Column(name="rating", nullable = false)
  private Integer rating;

  @NotBlank
  @Length(max=255)
  @Column(name="name", nullable = false)
  private String name;

  @NotBlank
  @Length(max=320)
  @Email
  @Column(name="email", nullable = false)
  private String email;

  @Column(name="review_body", nullable = false)
  private String reviewBody;

  @Column(name="created_at", nullable = false)
  private String createdAt;

  @ManyToOne
  @JoinColumn(name="album_id", nullable = false)
  @JsonIgnoreProperties("albums")
  private Album album;
}
