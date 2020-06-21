package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.Profile;
import com.example.demo.models.User;
import com.example.demo.repository.Profile_Repository;
import com.example.demo.repository.User_Repository;

@Service
public class ProfileService {
	@Autowired
	Profile_Repository profileRepository;
	@Autowired
	User_Repository userRepository;
	
	public String updateProfile(Profile profile , String username) {
		User user  = userRepository.findByUsername(username);
		Profile profileExtr = profileRepository.findByUser(user);
		profileExtr.setBio(profile.getBio());
		profileExtr.setCompany(profile.getCompany());
		profileExtr.setDate(profile.getDate());
		profileExtr.setGender(profile.getGender());
		profileExtr.setGithub(profile.getGithub());
		profileExtr.setLocation(profile.getLocation());
		profileExtr.setWebsite(profile.getWebsite());
		profileExtr.setSkills(profile.getSkills());
		profileExtr.setStatus(profile.getStatus());
		profileExtr.setUpdatedAt(profile.getUpdatedAt());
		profileRepository.save(profileExtr);
		return "Update Success";
	}
}
