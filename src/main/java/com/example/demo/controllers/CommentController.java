package com.example.demo.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.*;
import com.example.demo.repository.Comment_Repository;
import com.example.demo.repository.Poste_Repository;
import com.example.demo.repository.User_Repository;
import com.example.demp.REQ_RES.ApiResponse;
import com.example.demp.REQ_RES.CommentSummary;

@RestController
@RequestMapping("/api")
public class CommentController {
	@Autowired
	Poste_Repository posteRepository;
	@Autowired
	Comment_Repository commentRepository;
	@Autowired
	User_Repository userRepository;
	@PostMapping("/postes/comment/{id_poste}/{username}")
	public ResponseEntity<?> addComment(@PathVariable("id_poste") Long id_poste,@PathVariable("username") String username,@RequestBody CommentSummary commentSummary){
		User user = userRepository.findByUsername(username);
		Poste poste = posteRepository.findPosteById(id_poste);
		Comment comment = new Comment(commentSummary.getName(),commentSummary.getText(),user,poste,commentSummary.getDate());
		commentRepository.save(comment);
		return ResponseEntity.ok(new ApiResponse(true,"Comment added success"));
	}
}
