package shop.buenoMeat.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import shop.buenoMeat.domain.CategoryName;
import shop.buenoMeat.domain.Item;
import shop.buenoMeat.dto.ConvertToDto;
import shop.buenoMeat.dto.ItemDto;
import shop.buenoMeat.repository.ItemRepository;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ItemService {

    private final ItemRepository itemRepository;

    public List<Item> findCategoryItems() {
        return itemRepository.findAll();
    }

    //--상품 상세페이지 정보--//
    @Transactional
    public ResponseEntity<ItemDto.itemDetailDto> findItemDetail(Long id) {
        Item findItem = itemRepository.findOne(id);
        CategoryName categoryName = findItem.getCategory().getCategoryName();
        ItemDto.itemDetailDto itemDto = new ItemDto.itemDetailDto(categoryName,
                findItem.getName(),
                findItem.getInfo(),
                findItem.getImage(),
                findItem.getPrice(),
                findItem.getWeight(),
                findItem.getWeightUnit()
        );
        return ResponseEntity.ok(itemDto);
    }

    //-- 카테고리별 상품 조회 --//
    public List<ItemDto.itemHotAndCategoryDto> findCategoryItems(CategoryName categoryName) {
        List<Item> findItemByCategory = itemRepository.findAllByCategory(categoryName);
        return findItemByCategory.stream()
                .map(ConvertToDto::convertToItemCategoryDto)
                .collect(Collectors.toList());
    }

    //-- hot(판매량순) 상품 조회 --//
    public List<ItemDto.itemHotAndCategoryDto> findHotItems() {
        List<Item> findItems = itemRepository.findAll();
        Collections.sort(findItems, (o1, o2) -> o2.getSoldQuantity() - o1.getSoldQuantity());
        return findItems.stream()
                .limit(6)
                .map(ConvertToDto::convertToItemCategoryDto)
                .collect(Collectors.toList());
    }

}
