package shop.buenoMeat.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import shop.buenoMeat.domain.CategoryName;
import shop.buenoMeat.dto.ItemDto;
import shop.buenoMeat.service.ItemService;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/products")
public class ItemController {

    private final ItemService itemService;

    //-- 상품 상세 페이지 --//
    @GetMapping("/{id}/detail")
    public ResponseEntity<ItemDto.itemDetailDto> itemDetail(@PathVariable Long id) {
        return itemService.findItemDetail(id);
    }

    //-- 카테고리 별 상품 조회 --//
    @GetMapping("/{categoryName}")
    public ResponseEntity<List<ItemDto.itemHotAndCategoryDto>> findCategoryItem(@PathVariable CategoryName categoryName) {
        List<ItemDto.itemHotAndCategoryDto> findItems = itemService.findCategoryItems(categoryName);
        if (findItems.isEmpty()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(findItems);
        }
    }


    //-- hot(판매량순) 상품 조회 --//
    @GetMapping("/products/hot")
    public ResponseEntity<List<ItemDto.itemHotAndCategoryDto>> findHotItem() {
        return ResponseEntity.ok(itemService.findHotItems());
    }
}
