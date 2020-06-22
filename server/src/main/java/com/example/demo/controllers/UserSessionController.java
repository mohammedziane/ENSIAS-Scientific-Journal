package com.example.demo.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.models.*;
import com.example.demo.repository.Profile_Repository;
import com.example.demo.repository.User_Repository;
import com.example.demo.security.CurrentUser;
import com.example.demo.security.UserPrincipal;
import com.example.demp.REQ_RES.JwtAuthenticationResponse;
import com.example.demp.REQ_RES.LoginRequest;
import com.example.demp.REQ_RES.UserSummary;
import com.example.demp.REQ_RES.ProfileSummary;

@RestController
@RequestMapping("/api")
public class UserSessionController {
/*
	@Autowired
	User_Repository userRepository;
	*/
	@Autowired
	Profile_Repository profileRepository;
	
	@GetMapping("/user/me")
	public ResponseEntity<?> authenticateUser(@CurrentUser UserPrincipal currentUser){
		UserSummary userSummary = new UserSummary(currentUser.getId_user(),currentUser.getEmail(),currentUser.getUsername());
		   //User user= userRepository.findByUsername(currentUser.getUsername());
		   //Profile profile = profileRepository.findByUser(currentUser);
			//ProfileSummary profileSummary = new ProfileSummary(profile.getIdProfile(),profile.getGender(),profile.getCompany(),profile.getWebsite(),profile.getLocation(),profile.getStatus(),profile.getSkills(),profile.getBio(),profile.getDate(),profile.getUpdatedAt());
			return ResponseEntity.ok(userSummary);
	}


}