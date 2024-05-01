package com.example.shop.controller.basic;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

@ControllerAdvice
public class MyExceptionHandler {

    @ExceptionHandler(MethodArgumentTypeMismatchException.class)
    public ResponseEntity<String> handeler2(){
        return ResponseEntity.status(400).body("에러남2");
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handeler(){
        return ResponseEntity.status(400).body("에러남");
    }
}
