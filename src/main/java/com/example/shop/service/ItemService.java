package com.example.shop.service;

import com.example.shop.entity.Item;
import com.example.shop.repository.ItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ItemService {

    private final ItemRepository itemRepository;

    public List<Item> list(){
        List<Item> result = itemRepository.findAll();

        return result;
    }

    public String writeAdd(Item item){

        itemRepository.save(item);
        return "a";
    }

    public Item getItemInfo(Long id){

        Item result = new Item();

        Optional<Item> resultOpt = itemRepository.findById(id);


        if(resultOpt.isPresent()){
            result = resultOpt.get();
        }

        return result;
    }


}
