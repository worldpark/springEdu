package com.example.shop.service;

import com.example.shop.entity.Member;
import com.example.shop.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;

    public String signupMember(Member member) throws IOException{

        if(member.getUsername().length() <= 2 || member.getPassword().length() <= 2){
//            try {
//                throw new IOException("ERROR22");
//            } catch (IOException e) {
//                System.out.println("ID 혹은 PASSWORD 에러남");
//            }

            throw new IOException("ERROR22");

        }

        member.setPassword(passwordEncoder.encode(member.getPassword()));

        memberRepository.save(member);

        return "signUp";
    }
}
