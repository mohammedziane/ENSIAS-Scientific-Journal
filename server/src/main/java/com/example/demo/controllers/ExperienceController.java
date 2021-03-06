package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
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
	@GetMapping("profile/experiences/{id_user}")
	public  List<Long> getExperience(@PathVariable(name="id_user") Long id_user){
		User user = userRepository.getOne(id_user);
		return experienceRepository.findAllIdExperience(user);
	}
	
	@PostMapping("/addexperience/{username}")
	public ResponseEntity<?> setExperience(@PathVariable(name="username") String username, @RequestBody ExperienceSummary experienceSummary){
		User user = userRepository.findByUsername(username);
		Experience experience = new Experience(experienceSummary.getTitle(),experienceSummary.getCompany(),experienceSummary.getLocation(),experienceSummary.getFrom(),experienceSummary.getTo(),experienceSummary.isCurrent(),experienceSummary.getDescription(),user);
		Experience result = experienceRepository.save(experience);
		ExperienceSummary envoye = new ExperienceSummary(result.getId_experience(),result.getTitle(),result.getCompany(),result.getLocation(),result.getFrom(),result.getTo(),result.isCurrent(),result.getDescription());
		return ResponseEntity.ok(envoye);
	}
	@GetMapping("/experiences/{id_experience}")
	public ResponseEntity<?> getExperiences(@PathVariable("id_experience") Long id_experience){
		Experience experience = experienceRepository.findExperienceById(id_experience);
		ExperienceSummary envoye = new ExperienceSummary(experience.getId_experience(),experience.getTitle(),experience.getCompany(),experience.getLocation(),experience.getFrom(),experience.getTo(),experience.isCurrent(),experience.getDescription());
		return ResponseEntity.ok(envoye);
	}
	@DeleteMapping("/experience/delete/{id_experience}")
	public ResponseEntity<?> deleteExperience(@PathVariable("id_experience") Long id_experience){
		Experience experience = experienceRepository.findExperienceById(id_experience);
		experienceRepository.delete(experience);
		return ResponseEntity.ok(id_experience);
	}
	
	
}
