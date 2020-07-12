package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// import org.springframework.context.ApplicationContext;
// import org.springframework.context.annotation.ComponentScan;
// import com.example.demo.mail.Mail;
// import com.example.demo.mail.MailService;

@SpringBootApplication()
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
		// Mail mail = new Mail();
        // mail.setMailFrom("shalinp2000@gmail.com");
        // mail.setMailTo("shalinp2000@gmail.com");
        // mail.setMailSubject("Spring Boot - Email Example");
        // mail.setMailContent("Learn How to send Email using Spring Boot!!!\n\nThanks\nwww.technicalkeeda.com");
 
        // ApplicationContext ctx = SpringApplication.run(DemoApplication.class, args);
        // MailService mailService = (MailService) ctx.getBean("mailService");
        // mailService.sendEmail(mail);
	}

}
