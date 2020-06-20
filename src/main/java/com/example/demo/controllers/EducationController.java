package com.example.demo.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Education;
import com.example.demo.models.User;
import com.example.demo.repository.Education_Repository;
import com.example.demo.repository.User_Repository;
import com.example.demp.REQ_RES.EducationSummary;

@RestController
@RequestMapping("/api")
public class EducationController {
	@Autowired
	private User_Repository userRepository;
	@Autowired 
	private Education_Repository educationRepository;
	@PostMapping("/education/{username}")
	public ResponseEntity<?> setEducation(@PathVariable(name="username") String username,@RequestBody EducationSummary educationSummary){
		User user = userRepository.findByUsername(username);
		Education education = new Education(educationSummary.getId_education(),educationSummary.getSchool(),educationSummary.getDegree(),educationSummary.getFieldofstudy(),educationSummary.getFrom(),educationSummary.getTo(),educationSummary.isCurrent(),educationSummary.getDescription(),user);
		educationRepository.save(education);
		return ResponseEntity.ok(education);
	}
}