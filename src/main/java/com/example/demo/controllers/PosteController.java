package com.example.demo.controllers;

import java.util.List;

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

import com.example.demo.models.Poste;
import com.example.demo.models.User;
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
	@GetMapping("/postes")
	public ResponseEntity<?> getPoste(){
		List<Poste> postes = posteRepository.findAll();
		return ResponseEntity.ok(postes);
	}
	@GetMapping("/postes/{id_poste}")
	public ResponseEntity<?> getPosteById(@PathVariable("id_poste") Long id_poste){
		Poste poste = posteRepository.findPosteById(id_poste);
		return ResponseEntity.ok(poste);
	}
	@PostMapping("/postes/{username}")
	public ResponseEntity<?> setPoste(@PathVariable("username") String username ,@RequestBody PosteSummary posteSummary){
		User user= userRepository.findByUsername(username);   
		Poste poste = new Poste(posteSummary.getId_poste(),posteSummary.getName(),posteSummary.getText(),posteSummary.getNbr_likes(),user,posteSummary.getDate(),null);
		posteRepository.save(poste);
		return ResponseEntity.ok(new ApiResponse(true,"Poste created success"));
	}
	@DeleteMapping("/postes/{id_poste}")
	public ResponseEntity<?> deletePoste(@PathVariable("id_poste") Long id_poste){
		posteRepository.deleteById(id_poste);
		return ResponseEntity.ok(new ApiResponse(true,"Poste deleted"));
	}
	@PutMapping("/postes/unlike/{id_poste}")
	public ResponseEntity<?> deleteLike(@PathVariable("id_poste") Long id_poste){
		String message = posteService.deleteLike(id_poste);
		return ResponseEntity.ok(new ApiResponse(true,message));
	}
	@PutMapping("/postes/like/{id_poste}")
	public ResponseEntity<?> AddLike(@PathVariable("id_poste") Long id_poste){
		String message = posteService.addLike(id_poste);
		return ResponseEntity.ok(new ApiResponse(true,message));
	}
}
