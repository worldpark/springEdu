package com.example.shop.controller.basic;

import com.example.shop.entity.Item;
import com.example.shop.entity.Notification;
import com.example.shop.service.ItemService;
import com.example.shop.service.NotifyService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class ItemContoller {

    private final ItemService itemService;
    private final NotifyService notifyService;

    @GetMapping("/list")
    public List<Item> list(){

        return itemService.list();
    }

    @GetMapping("/getNotification")
    public List<Notification> getNotification(){
        return notifyService.getNotification();
    }
}
