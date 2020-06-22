package com.example.demo.controllers;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.example.demo.models.User;
import com.example.demo.repository.User_Repository;
import com.example.demo.security.JwtTokenProvider;
import com.example.demp.REQ_RES.ApiResponse;
import com.example.demp.REQ_RES.JwtAuthenticationResponse;
import com.example.demp.REQ_RES.LoginRequest;
import com.example.demp.REQ_RES.SignUpRequest;

import java.net.URI;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
@CrossOrigin(origins = { "http://localhost:3000"})
@RestController
@RequestMapping("/api/login")
public class LoginController {
	@Autowired
	AuthenticationManager authenticationManager;
	
	@Autowired
	User_Repository userRepository;
	
	@Autowired
	PasswordEncoder passwordEncoder;
	
	@Autowired
	JwtTokenProvider tokenProvider;
	
	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest){
		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(
						loginRequest.getUsername(),loginRequest.getPassword()
						)
				);
		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = tokenProvider.generateToken(authentication);
		return ResponseEntity.ok(new JwtAuthenticationResponse(jwt));
	}
	
	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpRequest signUpRequest){
		if(userRepository.existsByUsername(signUpRequest.getUsername())) {
			return new ResponseEntity(new ApiResponse(false, "Username is already taken!"),
                    HttpStatus.BAD_REQUEST);
		}
		if(userRepository.existsByEmail(signUpRequest.getEmail())) {
		    return new ResponseEntity(new ApiResponse(false, "Email Address already in use!"),
                    HttpStatus.BAD_REQUEST);
		}
		//Creating User Account

		User user = new User(signUpRequest.getUsername(),signUpRequest.getPassword(),signUpRequest.getEmail());
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		User result = userRepository.save(user);
	
		URI location = ServletUriComponentsBuilder
                .fromCurrentContextPath().path("/api/users/{username}")
                .buildAndExpand(result.getUsername()).toUri();
		return ResponseEntity.created(location).body(new ApiResponse(true, "User registered successfully"));
	}
}
