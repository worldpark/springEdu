package com.example.shop.controller.basic;

import com.example.shop.entity.Item;
import com.example.shop.service.ItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class ItemContoller {

    private final ItemService itemService;

    @GetMapping("/list")
    public List<Item> list(){

        return itemService.list();
    }
}
