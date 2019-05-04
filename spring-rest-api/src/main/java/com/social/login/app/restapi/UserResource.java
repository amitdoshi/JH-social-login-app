package com.social.login.app.restapi;


import java.net.URI;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class UserResource {

	@Autowired
	private UserRepository UserRepository;

	@GetMapping("/users")
	public List<User> retrieveAllUsers() {
		return UserRepository.findAll();
	}

	@GetMapping("/users/{id}")
	public User retrieveUser(@PathVariable long id) {
		Optional<User> User = UserRepository.findById(id);

		if (!User.isPresent())
			throw new UserNotFoundException("id-" + id);

		return User.get();
	}

	@DeleteMapping("/users/{id}")
	public ResponseEntity<Object> deleteUser(@PathVariable long id) {
		UserRepository.deleteById(id);
		
		return new ResponseEntity<Object>("User Deleted successfully ID : "+id, HttpStatus.OK);
	}

	@PostMapping(value="/users",headers = "Accept=application/json",produces= { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<Object> createUser(@RequestBody User user, UriComponentsBuilder builder) {
		User savedUser =null;
		try {
			if(user.getUuid()==null || user.getUuid().isEmpty()) {
				user.setUuid(UUID.randomUUID().toString());
			}
			 savedUser = UserRepository.save(user);
			 
		}catch(Exception e) {
		  return ResponseEntity
		            .status(HttpStatus.FORBIDDEN)
		            .body("Invalid Request"); 
		}
		
         return new ResponseEntity<Object>(savedUser, HttpStatus.CREATED);
	}
	
	@PutMapping("/users/{id}")
	public ResponseEntity<Object> updateUser(@RequestBody User User, @PathVariable long id) {

		Optional<User> UserOptional = UserRepository.findById(id);

		if (!UserOptional.isPresent())
			return ResponseEntity.notFound().build();

		User.setId(id);
		
		UserRepository.save(User);

		return ResponseEntity.noContent().build();
	}
}