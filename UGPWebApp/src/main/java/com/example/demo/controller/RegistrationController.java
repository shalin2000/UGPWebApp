package com.example.demo.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.User;
import com.example.demo.service.NotificationService;

@RestController
@RequestMapping("/postgressApp")
@CrossOrigin(origins="http://localhost:3000")
public class RegistrationController {
	
	private Logger logger = LoggerFactory.getLogger(RegistrationController.class);
	
	@Autowired
	private NotificationService notificationService;
	
	@PostMapping(value = "/signup-success")
	public String signupSuccess(@RequestBody User user){
		// send a notification
		System.out.println(user.getEmail());
		try {
			notificationService.sendNotificaitoin(user);
		}catch( MailException e ){
			// catch error
			logger.info("Error Sending Email: " + e.getMessage());
		}
		return "Thank you for registering with us.";
	}
	
}