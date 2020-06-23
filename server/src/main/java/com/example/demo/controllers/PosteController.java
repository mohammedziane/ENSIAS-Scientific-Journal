package com.example.demo.controllers;

import java.util.ArrayList;
import java.util.Arrays;
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
import com.example.demo.models.Likes;
import com.example.demo.models.Poste;
import com.example.demo.models.User;
import com.example.demo.repository.Comment_Repository;
import com.example.demo.repository.Like_Repository;
import com.example.demo.repository.Poste_Repository;
import com.example.demo.repository.User_Repository;
import com.example.demo.service.PosteService;
import com.example.demp.REQ_RES.ApiResponse;
import com.example.demp.REQ_RES.GetAllPostes;
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
	@Autowired
	Like_Repository likeRepository;
	private List<PosteSummary> result;
	private ArrayList<String> likes;
	Poste posteCourrant;
	@GetMapping("/postes")
	public ArrayList<String> getPoste(){
		//List<Long> id_postes = posteRepository.findAllIdPostes();
		return posteRepository.SelectPostes();
	}
	@GetMapping("/postes/{id_poste}")
	public ResponseEntity<?> getPosteById(@PathVariable("id_poste") Long id_poste){
		Poste poste = posteRepository.findPosteById(id_poste);
		PosteSummary result = new PosteSummary(poste.getId_poste(),poste.getName(),poste.getText(),poste.getComments(),poste.getNbr_likes(),poste.getDate());
		return ResponseEntity.ok(result);
	}
	@PostMapping("/postes/{username}")
	public ArrayList<String> setPoste(@PathVariable("username") String username ,@RequestBody PosteSummary posteSummary){
		User user= userRepository.findByUsername(username);   
		Poste poste = new Poste(user.getUsername(),posteSummary.getText(),posteSummary.getNbr_likes(),user,posteSummary.getDate(),null);
		Poste result = posteRepository.save(poste);
		ArrayList<String> data = posteRepository.SelectPosteById(result.getId_poste());
		return data;
	}
	@DeleteMapping("/postes/{id_poste}")
	public ArrayList<String> deletePoste(@PathVariable("id_poste") Long id_poste){
		ArrayList<String> deleted_poste = posteRepository.SelectPosteById(id_poste);
		Poste poste = posteRepository.findPosteById(id_poste);
		List<Comment> comments = poste.getComments();
		for(Comment comment:comments) {
			commentRepository.delete(comment);
		}
		posteRepository.delete(poste);
		return deleted_poste;
	}
	@DeleteMapping("/postes/unlike/{id_poste}/{name}")
	public ArrayList<String> deleteLike(@PathVariable("id_poste") Long id_poste,@PathVariable("name") String name){
		  Likes like_ = likeRepository.getLike(name, id_poste);
			if(likeRepository.existsById(like_.getId_Like())) {
		    likeRepository.delete(like_);
			ArrayList<String> nbre_likes = likeRepository.SelectLikesByIdPoste(id_poste);
			if(nbre_likes.size()>0) {
			return nbre_likes;
			}
			}
			return likes ;
	    
	}
	@PostMapping("/postes/like/{id_poste}/{name}")
	public ArrayList<String> AddLike(@PathVariable("id_poste") Long id_poste,@PathVariable("name") String name){
	    Likes like_ = likeRepository.getLike(name, id_poste);
		if(!likeRepository.existsById(like_.getId_Like())) {
		Likes like = new Likes(name,id_poste);
	    likeRepository.save(like);
		ArrayList<String> nbre_likes = likeRepository.SelectLikesByIdPoste(id_poste);
		if(nbre_likes.size()>0) {
		return nbre_likes;
		}
		}
		return likes ;
	}
	@PostMapping("/postes/getlike/{id_poste}")
	public ArrayList<String> AddLike(@PathVariable("id_poste") Long id_poste){
		ArrayList<String> nbre_likes = likeRepository.SelectLikesByIdPoste(id_poste);
		if(nbre_likes.size()>0) {
		return nbre_likes;
		}
		return likes;
	}
}
