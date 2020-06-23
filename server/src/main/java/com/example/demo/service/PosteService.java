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
		Poste posteToUpdate = posteRepository.getOne(id_poste);
		Long nbr_likes = posteToUpdate.getNbr_likes();
		nbr_likes--;
		posteToUpdate.setNbr_likes(nbr_likes);
		posteRepository.save(posteToUpdate);
		return "Success";
	}
	public String deleteLike(Long id_poste) {
		Poste posteToUpdate = posteRepository.getOne(id_poste);
		Long nbr_likes = posteToUpdate.getNbr_likes();
		nbr_likes++;
		posteToUpdate.setNbr_likes(nbr_likes);
		posteRepository.save(posteToUpdate);
		return "delete Success";
	}
}