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

import com.example.demo.models.Education;
import com.example.demo.models.Experience;
import com.example.demo.models.User;
import com.example.demo.repository.Education_Repository;
import com.example.demo.repository.User_Repository;
import com.example.demp.REQ_RES.EducationSummary;
import com.example.demp.REQ_RES.ExperienceSummary;

@RestController
@RequestMapping("/api")
public class EducationController {
	@Autowired
	private User_Repository userRepository;
	@Autowired 
	private Education_Repository educationRepository;
	
	
	@GetMapping("profile/educations/{id}")
	public  List<Long> EducationsById(@PathVariable(name="id") Long id){
		User user = userRepository.getOne(id);
		return educationRepository.findAllIdEducation(user);
	}
	@PostMapping("/education/{username}")
	public ResponseEntity<?> setEducation(@PathVariable(name="username") String username,@RequestBody EducationSummary educationSummary){
		User user = userRepository.findByUsername(username);
		Education education = new Education(educationSummary.getSchool(),educationSummary.getDegree(),educationSummary.getFieldofstudy(),educationSummary.getFrom(),educationSummary.getTo(),educationSummary.isCurrent(),educationSummary.getDescription(),user);
		Education result = educationRepository.save(education);
		EducationSummary envoye = new EducationSummary(result.getId_education(),result.getSchool(),result.getDegree(),result.getFieldofstudy(),result.getFrom(),result.getTo(),result.isCurrent(),result.getDescription());
		return ResponseEntity.ok(envoye);
	}
	
	@GetMapping("/showeducations/{username}")
	public List<Education> EducationByUsername(@PathVariable("username") String username){
		User user = userRepository.findByUsername(username);
		List<Education> educations = educationRepository.findEducationsById(user);
		return educations;
	}
	
	
	@GetMapping("/educations/{id_education}")
	public ResponseEntity<?> getExperiences(@PathVariable("id_education") Long id_education){
		Education education = educationRepository.getOne(id_education);
		EducationSummary envoye = new EducationSummary(education.getId_education(),education.getSchool(),education.getDegree(),education.getFieldofstudy(),education.getFrom(),education.getTo(),education.isCurrent(),education.getDescription());
		return ResponseEntity.ok(envoye);
	}
	
	@DeleteMapping("/education/delete/{id_education}")
	public ResponseEntity<?> deleteExperience(@PathVariable("id_education") Long id_education){
		Education education = educationRepository.findEducationById(id_education);
		educationRepository.delete(education);
		return ResponseEntity.ok(id_education);
	}
	
}