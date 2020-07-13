package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import com.example.demo.entity.User;

@Service
public class NotificationService {

	private JavaMailSender javaMailSender;
	
	@Autowired
	public NotificationService(JavaMailSender javaMailSender){
		this.javaMailSender = javaMailSender;
	}
	
	public void sendNotificaitoin(User user) throws MailException {
		// send email
		SimpleMailMessage mail = new SimpleMailMessage();
		mail.setTo(user.getEmail(),"ugpgradepal@gmail.com");
		mail.setFrom("ugpgradepal@gmail.com");
		mail.setSubject("Copy of GradePal contact form");
		mail.setText("Name: " + user.getName() + "\n" + "Email: " + user.getEmail() + "\n" + "\n" + "Message: " + user.getMessage());
		
		javaMailSender.send(mail);
	}
	
}