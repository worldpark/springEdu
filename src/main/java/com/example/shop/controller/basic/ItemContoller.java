package com.example.shop.controller.basic;

import com.example.shop.entity.Item;
import com.example.shop.entity.Notification;
import com.example.shop.service.ItemService;
import com.example.shop.service.NotifyService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
public class ItemContoller {

    private final ItemService itemService;
    private final NotifyService notifyService;

    @GetMapping("/getList")
    public List<Item> list(){

        return itemService.list();
    }

    @GetMapping("/getNotification")
    public List<Notification> getNotification(){
        return notifyService.getNotification();
    }

    @PostMapping("/writeAdd")
    public String writeAdd(@ModelAttribute Item item){

        return itemService.writeAdd(item);
    }

    @GetMapping("/getDetail/{id}")
    public Item getItemInfo(@PathVariable Long id){

        return itemService.getItemInfo(id);
    }
}
