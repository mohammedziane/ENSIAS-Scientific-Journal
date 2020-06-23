package com.example.demo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters;

import javax.annotation.PostConstruct;
import java.util.TimeZone;



@SpringBootApplication
@EntityScan(basePackageClasses = {DemoApplication.class,Jsr310JpaConverters.class })
public class DemoApplication {
	
	@PostConstruct
	void init() {
		TimeZone.setDefault(TimeZone.getTimeZone("UTC"));
	}
	private static final Logger logger=LoggerFactory.getLogger(DemoApplication.class);
	public static void main(String[] args) {
		
		SpringApplication.run(DemoApplication.class, args);
		logger.trace("A TRACE Message");
        logger.debug("A DEBUG Message");
        logger.info("An INFO Message");
        //logger.warn("A WARN Message");
        //logger.error("An ERROR Message");
	}

}
