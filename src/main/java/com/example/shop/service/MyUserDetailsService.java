package com.example.shop.service;

import com.example.shop.entity.Member;
import com.example.shop.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MyUserDetailsService implements UserDetailsService {

    private final MemberRepository memberRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Optional<Member> result = memberRepository.findByUsername(username);

        if(result.isEmpty()){
            throw new UsernameNotFoundException("not ID");
        }

        Member user = result.get();
        List<GrantedAuthority> auth = new ArrayList<>();

        if(user.getUsername().equals("admin")){
            auth.add(new SimpleGrantedAuthority("admin"));
        }else{
            auth.add(new SimpleGrantedAuthority("nomal"));
        }

        return new User(user.getUsername(), user.getPassword(), auth);

    }
}
