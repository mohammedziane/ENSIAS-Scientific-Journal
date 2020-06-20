package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.Poste;
import com.example.demo.repository.Poste_Repository;

@Service
public class PosteService {
	@Autowired
	Poste_Repository posteRepository;
	public String addLike(Long id_poste) {
		Poste poste = posteRepository.findPosteById(id_poste);
		Long nbr_likes = poste.getNbr_likes();
		nbr_likes ++;
		posteRepository.SetLike(nbr_likes, id_poste);
		return "Success";
	}
	public String deleteLike(Long id_poste) {
		Poste poste = posteRepository.findPosteById(id_poste);
		Long nbr_likes = poste.getNbr_likes();
		nbr_likes --;
		posteRepository.SetLike(nbr_likes, id_poste);
		return "delete Success";
	}
}
