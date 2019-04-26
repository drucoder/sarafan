package letscode.sarafan;

import io.sentry.Sentry;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SarafanApplication {
	public static void main(String[] args) {
		Sentry.capture("Application started");
		SpringApplication.run(SarafanApplication.class, args);
	}
}
