package com.example.shop.controller.basic;

import com.example.shop.entity.Member;
import com.example.shop.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @PostMapping(value = "/signupMember")
    public String signupMember(@RequestBody Member member) throws IOException {
        return memberService.signupMember(member);
    }

    @GetMapping(value = "/loginTest")
    public String loginTest(Authentication authentication){
        return authentication.getName() + " 로그인함";
    }

}
