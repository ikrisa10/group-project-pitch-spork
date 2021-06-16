package com.launchacademy.reviews.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

  @GetMapping(value = {"/", "/albums", "/albums/{id}", "/albums/new", "/albums/undiscovered",
      "/our-team"})
  public String forward() {
    return "forward:/index.html";
  }
}