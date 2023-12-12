package shop.buenoMeat.dto;

import lombok.*;
import shop.buenoMeat.domain.CategoryName;

@Getter
@Setter
@AllArgsConstructor
public class ItemDto {

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class itemDetailDto {
        private CategoryName category;
        private String name;
        private String info;
        private String image;
        private int price;
        private String weight;
        private String weightUnit;
    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class itemHotAndCategoryDto {
        private Long id;
        private CategoryName category;
        private String name;
        private String info;
        private String image;
        private int price;
        private String weight;
        private String weightUnit;
    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class mypageWishListDto {
        private Long id;
        private String name;
        private String info;
        private String image;
        private int price;
        private String weight;
        private String weightUnit;
    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class searchItemByNameDto {
        private Long id;
        private String image;
        private int price;
        private String name;
        private String weight;
        private String weightUnit;
    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class addToCartDto {
        private Long itemId;
        private String itemName;
        private int itemCount;
        private int totalPrice;
        private String itemOption;
    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class getCartDto {
        private Long itemId;
        private String itemName;
        private int itemCount;
        private int totalPrice;
        private String itemOption;
        private int stock;
        private String image;
    }
}
