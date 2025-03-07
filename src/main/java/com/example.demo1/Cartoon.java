package com.example.demo1;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table (name="Cartoon")
public class Cartoon {
	
	@Id
	int id;
	String name;
	int episodes;
	String source;
	
	public Cartoon(int id, String name, int episodes, String source) {
		super();
		this.id = id;
		this.name = name;
		this.episodes = episodes;
		this.source = source;
	}

	public Cartoon() {
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getEpisodes() {
		return episodes;
	}

	public void setEpisodes(int episodes) {
		this.episodes = episodes;
	}

	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}
	
	

}
