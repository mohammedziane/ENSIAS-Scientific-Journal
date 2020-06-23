package com.example.demp.REQ_RES;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class GetAllPostes {
	private List<PosteSummary> postes;
	
	public GetAllPostes(List<PosteSummary> postes ) {
		super();
		this.postes=postes;
	}
	public List<PosteSummary> getPostes(){
		return postes;
	}
	public void setPostes(List<PosteSummary> postes) {
		this.postes=postes;
	}
	
	
	
}
