package com.example.shop.controller.basic;

import com.example.shop.entity.Item;
import com.example.shop.entity.Notification;
import com.example.shop.service.ItemService;
import com.example.shop.service.NotifyService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    public String writeAdd(@RequestBody Item item){

        return itemService.writeAdd(item);
    }

    @GetMapping("/getDetail/{id}")
    public Item getItemInfo(@PathVariable Long id){

        return itemService.getItemInfo(id);
    }

    @PostMapping("updateItem")
    public String updateItem(@RequestBody Item item){

        return itemService.updateItem(item);
    }

    @PostMapping("deleteItem")
    public String deleteItem(@RequestBody Item item){

        return itemService.deleteItem(item);
    }

}
