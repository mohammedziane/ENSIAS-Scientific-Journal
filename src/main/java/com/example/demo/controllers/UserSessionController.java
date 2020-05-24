package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.repository.User_Repository;
import com.example.demo.security.CurrentUser;
import com.example.demo.security.UserPrincipal;
import com.example.demp.REQ_RES.UserSummary;

@RestController
@RequestMapping("/api")
public class UserSessionController {
	//@Autowired
	//private User_Repository userRepository ;

	@GetMapping("/user/me")
	public UserSummary getCurrentUser(@CurrentUser UserPrincipal currentUser) {
		UserSummary userSummary = new UserSummary(currentUser.getId_user(),currentUser.getEmail(),currentUser.getUsername());
		return userSummary;
	}


}
