package com.launchacademy.reviews.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.Range;

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
  private Integer id;

  @NotNull(message = "Rating should be provided")
  @Positive(message = "Rating can not be negative or zero")
  @Range(min=1, max = 5, message= "Rating number should be between 1 and 5")
  @Column(name="rating", nullable = false)
  private Integer rating;

  @NotBlank(message = "Name field should be filled out")
  @Length(max=255, message = "Name field should be 255 characters max")
  @Column(name="name", nullable = false)
  private String name;

  @NotBlank(message = "Email field should be filled out")
  @Length(max=320, message = "Email field should be 320 characters max")
  @Email(message = "Email should be well formed and have @ part (...@gmail.com, @aol.com)")
  @Column(name="email", nullable = false)
  private String email;

  @Column(name="review_body")
  private String reviewBody;

  @Column(name="created_at", nullable = false)
  private Date createdAt = new Date();

  @ManyToOne
  @JoinColumn(name="album_id", nullable = false)
  @JsonIgnoreProperties("reviews")
  private Album album;
}
