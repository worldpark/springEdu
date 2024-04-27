package com.example.shop.controller.proxyTest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProxyTestController {

    @GetMapping("/test")
    public String test(){
        return "test1";
    }
}
