package com.example.shop.service;

import com.example.shop.entity.Item;
import com.example.shop.repository.ItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ItemService {

    private final ItemRepository itemRepository;

    public List<Item> list(){
        List<Item> result = itemRepository.findAll();

        return result;
    }
}
