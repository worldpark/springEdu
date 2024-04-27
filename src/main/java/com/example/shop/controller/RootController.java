package com.example.shop.controller;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RootController implements ErrorController {

    private final String errorPath = "/error";

    @GetMapping(errorPath)
    public String redirectRoot(){
        return "forward:/index.html";
    }

    public String getErrorPath(){
        return null;
    }
}
