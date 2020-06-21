package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Experience;
import com.example.demo.models.User;
import com.example.demo.repository.Experience_Repository;
import com.example.demo.repository.User_Repository;
import com.example.demp.REQ_RES.ExperienceSummary;

@RestController
@RequestMapping("/api")
public class ExperienceController {
	@Autowired
	private Experience_Repository experienceRepository;
	@Autowired
	private User_Repository userRepository;
	@GetMapping("/experiences/{username}")
	public List<Experience> getExperiences(@PathVariable("username") String username){
		User user = userRepository.findByUsername(username);
		List<Experience> experiences = experienceRepository.findExperiencesById(user.getId_user());
		return experiences;
	}
	@PostMapping("/addexperience/{username}")
	public ResponseEntity<?> setExperience(@PathVariable(name="username") String username, @RequestBody ExperienceSummary experienceSummary){
		User user = userRepository.findByUsername(username);
		Experience experience = new Experience(experienceSummary.getTitle(),experienceSummary.getCompany(),experienceSummary.getLocation(),experienceSummary.getFrom(),experienceSummary.getTo(),experienceSummary.isCurrent(),experienceSummary.getDescription(),user);
		Experience result = experienceRepository.save(experience);
		ExperienceSummary envoye = new ExperienceSummary(result.getId_experience(),result.getTitle(),result.getCompany(),result.getLocation(),result.getFrom(),result.getTo(),result.isCurrent(),result.getDescription());
		return ResponseEntity.ok(envoye);
	}
}