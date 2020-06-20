package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.repository.Poste_Repository;

@Service
public class PosteService {
	@Autowired
	Poste_Repository posteRepository;
	public String addLike(Long id_poste) {
		Long nbr_likes = posteRepository.getNbr_likes(id_poste);
		nbr_likes++;
		posteRepository.updateLike(nbr_likes, id_poste);
		return "Success";
	}
	public String deleteLike(Long id_poste) {
		Long nbr_likes = posteRepository.getNbr_likes(id_poste);
		nbr_likes--;
		posteRepository.updateLike(nbr_likes, id_poste);
		return "delete Success";
	}
}
