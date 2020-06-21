package com.example.demo.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Comment;
import com.example.demo.models.Poste;
import com.example.demo.models.User;
import com.example.demo.repository.Comment_Repository;
import com.example.demo.repository.Poste_Repository;
import com.example.demo.repository.User_Repository;
import com.example.demo.service.PosteService;
import com.example.demp.REQ_RES.ApiResponse;
import com.example.demp.REQ_RES.PosteSummary;

@RestController
@RequestMapping("/api")
public class PosteController {
	@Autowired
	User_Repository userRepository;
	@Autowired
	Poste_Repository posteRepository;
	@Autowired
	PosteService posteService;
	@Autowired
	Comment_Repository commentRepository;
	private List<PosteSummary> result;
	Poste posteCourrant;
	@GetMapping("/postes")
	public  List<Long> getPoste(){
		//List<Long> id_postes = posteRepository.findAllIdPostes();
		return posteRepository.findAllIdPostes();
	}
	@GetMapping("/postes/{id_poste}")
	public ResponseEntity<?> getPosteById(@PathVariable("id_poste") Long id_poste){
		Poste poste = posteRepository.findPosteById(id_poste);
		PosteSummary result = new PosteSummary(poste.getId_poste(),poste.getName(),poste.getText(),poste.getNbr_likes(),poste.getDate());
		return ResponseEntity.ok(result);
	}
	@GetMapping("/postes/comments/{id_poste}")
	public ResponseEntity<?> getComments(@PathVariable("id_poste") Long id_poste){
		List<Comment> comments = commentRepository.findCommentsByPoste(id_poste);
		return ResponseEntity.ok(comments);
	} 
	@PostMapping("/postes/{username}")
	public ResponseEntity<?> setPoste(@PathVariable("username") String username ,@RequestBody PosteSummary posteSummary){
		User user= userRepository.findByUsername(username);   
		Poste poste = new Poste(user.getUsername(),posteSummary.getText(),posteSummary.getNbr_likes(),user,posteSummary.getDate(),null);
		Poste result = posteRepository.save(poste);
		PosteSummary envoye = new PosteSummary(result.getId_poste(),result.getName(),result.getText(),result.getNbr_likes(),result.getDate());
		return ResponseEntity.ok(envoye);
	}
	@DeleteMapping("/postes/{id_poste}")
	public ResponseEntity<?> deletePoste(@PathVariable("id_poste") Long id_poste){
		posteRepository.deleteById(id_poste);
		return ResponseEntity.ok(new ApiResponse(true,"Poste deleted"));
	}
	@PostMapping("/postes/unlike/{id_poste}")
	public ResponseEntity<?> deleteLike(@PathVariable("id_poste") Long id_poste){
		String message = posteService.deleteLike(id_poste);
		return ResponseEntity.ok(new ApiResponse(true,message));
	}
	@PostMapping("/postes/like/{id_poste}")
	public ResponseEntity<?> AddLike(@PathVariable("id_poste") Long id_poste){
		String message =posteService.addLike(id_poste);
		return ResponseEntity.ok(new ApiResponse(true,message));
	}
}
