package com.example.shop.service;

import com.example.shop.entity.Notification;
import com.example.shop.repository.NotificationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class NotifyService {

    private final NotificationRepository notificationRepository;

    public List<Notification> getNotification(){
        return notificationRepository.findAll();
    }
}
