package com.example.demo.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.models.*;
import com.example.demo.repository.Education_Repository;
import com.example.demo.repository.Experience_Repository;
import com.example.demo.repository.Profile_Repository;
import com.example.demo.repository.User_Repository;
import com.example.demo.security.CurrentUser;
import com.example.demo.security.UserPrincipal;
import com.example.demp.REQ_RES.ApiResponse;
import com.example.demp.REQ_RES.JwtAuthenticationResponse;
import com.example.demp.REQ_RES.LoginRequest;
import com.example.demp.REQ_RES.ProfileData;
import com.example.demp.REQ_RES.UserSummary;
import com.example.demp.REQ_RES.ProfileSummary;



@RestController
@RequestMapping("/api")
public class UserProfileController {
	@Autowired
	private Experience_Repository experienceRepository;
	@Autowired 
	private Education_Repository educationRepository;
	@Autowired
	Profile_Repository profileRepository;
	@Autowired
	User_Repository userRepository;
	@GetMapping("/user/{username}")
	public ResponseEntity<?> getProfile(@PathVariable("username") String username){
		User user = userRepository.findByUsername(username);
		if(profileRepository.existsByUser(user)) {
            Profile profile = profileRepository.findByUser(user);
            ProfileSummary profileSummary = new ProfileSummary(profile.getIdProfile(),user.getId_user(),user.getUsername(),profile.getGender(),profile.getCompany(),profile.getWebsite(),profile.getLocation(),profile.getStatus(),profile.getSkills(),profile.getGithub(),profile.getBio(),profile.getDate(),profile.getUpdatedAt());
            return ResponseEntity.ok(profileSummary);
        }
        return ResponseEntity.ok(new ApiResponse(false,"Vous n'avez pas encore créer votre profile"));
	}
	@PostMapping("/profile/{username}")
	public ResponseEntity<?> setProfile(@PathVariable("username") String username ,@RequestBody ProfileSummary profileSummaryRequest){
		User user= userRepository.findByUsername(username);   
		Profile profile = new Profile(user,profileSummaryRequest.getGender(),profileSummaryRequest.getCompany(),profileSummaryRequest.getWebsite(),profileSummaryRequest.getLocation(),profileSummaryRequest.getStatus(),profileSummaryRequest.getSkills(),profileSummaryRequest.getGithub(),profileSummaryRequest.getBio());
	    Profile profileUpdated = profileRepository.save(profile);
		ProfileSummary profileSummary = new ProfileSummary(profileUpdated.getIdProfile(),user.getId_user(),user.getUsername(),profileUpdated.getGender(),profileUpdated.getCompany(),profileUpdated.getWebsite(),profileUpdated.getLocation(),profileUpdated.getStatus(),profileUpdated.getSkills(),profileUpdated.getGithub(),profileUpdated.getBio(),profileUpdated.getDate(),profileUpdated.getUpdatedAt());
		return ResponseEntity.ok(profileSummary);   
	}
	
	@GetMapping("/profiles")
	public List<Long> getProfiles(){
		return profileRepository.findAllIdProfiles();
	}
	@GetMapping("/profiles/showprofile/{id_profile}")
	public ResponseEntity<?> getProfileById(@PathVariable("id_profile") Long id_profile){
		 Profile profile = profileRepository.findByIdProfile(id_profile);
		 User user = profile.getUser();
			ProfileSummary profileSummary = new ProfileSummary(profile.getIdProfile(),user.getId_user(),user.getUsername(),profile.getGender(),profile.getCompany(),profile.getWebsite(),profile.getLocation(),profile.getStatus(),profile.getSkills(),profile.getGithub(),profile.getBio(),profile.getDate(),profile.getUpdatedAt());
		 return ResponseEntity.ok(profileSummary);
		}
	
	@GetMapping("/profiles/selected/{id_user}")
	public ResponseEntity<?> getProfileByUser(@PathVariable("id_user") Long id_user){
		User user = userRepository.getOne(id_user);
		ArrayList<String> educations = educationRepository.SelectEducationsById(user);
		ArrayList<String> id_experiences = experienceRepository.SelectExperiencessById(user);
		 Profile profile = profileRepository.findByUser(user);
			ProfileData profileData = new ProfileData(profile.getIdProfile(),id_user,profile.getGender(),profile.getCompany(),profile.getWebsite(),profile.getLocation(),profile.getStatus(),user.getUsername(),profile.getSkills(),profile.getBio(),educations,id_experiences);
		 return ResponseEntity.ok(profileData);
		}
}
	