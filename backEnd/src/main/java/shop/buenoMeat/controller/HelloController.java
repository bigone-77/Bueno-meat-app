package shop.buenoMeat.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    @GetMapping("/auth/hello")
    public String hello() {
        return "안녕하세요";
    }
}